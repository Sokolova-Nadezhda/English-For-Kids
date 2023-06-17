
import { wordsForStats } from './init_word_cards.js';
import { statsStorage as statsStorage } from './vars.js';
import { createCards } from './create_cards_function.js';
import { initStatsStorage } from './writing_to_local_storage.js';

var generateStatsRow = function() {
    for (let category in wordsForStats) {
        for (let word of wordsForStats[category]) {

            let tableRowTemplate = document.createElement('TR');
            tableRowTemplate.innerHTML = `
                            <td scope='row' class='stats_categories'></td>
                            <td class='stats_words'></td>
                            <td class='stats_translation'></td>
                            <td class='stats_trained'>Column content</td>
                            <td class='stats_correct'>Column content</td>
                            <td class='stats_incorrect '>Column content</td>
                            <td class='stats_percent'>Column content</td>`
            let tableRow = tableRowTemplate.cloneNode(true);
        
            tableRow.getElementsByClassName('stats_categories')[0].innerHTML = category;
            tableRow.getElementsByClassName('stats_words')[0].innerHTML = word.name;
            tableRow.getElementsByClassName('stats_translation')[0].innerHTML = word.translate;
            tableRow.getElementsByClassName('stats_trained')[0].innerHTML = statsStorage.getItem(`${word.name}.trained`);
            tableRow.getElementsByClassName('stats_incorrect')[0].innerHTML = statsStorage.getItem(`${word.name}.incorrect`);
            tableRow.getElementsByClassName('stats_correct')[0].innerHTML = statsStorage.getItem(`${word.name}.correct`);
        
            let stats_percent = (100 * Number(statsStorage.getItem(`${word.name}.correct`))) / (Number(statsStorage.getItem(`${word.name}.correct`)) + Number(statsStorage.getItem(`${word.name}.incorrect`)));
            stats_percent = isNaN(stats_percent) ? 0 : stats_percent;
            tableRow.getElementsByClassName('stats_percent')[0].innerHTML = parseInt(stats_percent);
        
            document.getElementsByTagName('tbody')[0].appendChild(tableRow);
        }
    }  
}

var sortTable = function(arr_rows, th_number) {

    let th_number_index = th_number.cellIndex;
    
    if (th_number.classList.contains('sort_arrow_down')) {
        if (th_number_index <= 2) {
            arr_rows.sort((rowA, rowB) => rowA.cells[th_number_index].innerHTML > rowB.cells[th_number_index].innerHTML ? 1 : -1);
        } 
        arr_rows.sort((rowA, rowB) => rowB.cells[th_number_index].innerHTML - rowA.cells[th_number_index].innerHTML);
    }

    if (th_number.classList.contains('sort_arrow_up')) {
        if (th_number_index <= 2) {
            arr_rows.sort((rowA, rowB) => rowB.cells[th_number_index].innerHTML > rowA.cells[th_number_index].innerHTML ? 1 : -1);
        }
        arr_rows.sort((rowA, rowB) => rowA.cells[th_number_index].innerHTML - rowB.cells[th_number_index].innerHTML);
    }
    
    document.querySelector('table').tBodies[0].append(...arr_rows);
}

let stats_button = document.getElementsByClassName('btn_stats')[0];

stats_button.addEventListener('click', () => {
    var switcher = document.getElementsByClassName('switch_slider')[0];

    switcher.previousElementSibling.checked = false;
    document.getElementsByClassName('buttons_and_markers_wrapper')[0].classList.remove('block');

    stats_button.setAttribute('disabled', true);

    let stat_buttons = document.createElement('DIV');
    stat_buttons.setAttribute('class', 'stats_buttons');
    stat_buttons.innerHTML = `
                    <button id='difficult_words' data-tooltip="Words with < 25% accuracy">Repeat difficult words</button>
                    <button id='reset'>Reset</button>`
    document.getElementsByTagName('main')[0].prepend(stat_buttons);

    var cardsContainer = document.getElementsByClassName('cards_container')[0];

    cardsContainer.innerHTML = `
                    <div class='table_wrapper'>
                        <table class='table table-hover'>
                            <thead>
                            <tr>
                                <th scope='col'>Categories</th>
                                <th scope='col'>Words</th>
                                <th scope='col'>Translation</th>
                                <th scope='col'>Trained</th>
                                <th scope='col'>Correct</th>
                                <th scope='col'>Incorrect</th>
                                <th scope='col'>%</th>
                            </tr>
                            </thead>
                            <tbody>
        
                            </tbody>
                        </table>
                    </div>`;

    generateStatsRow();

    reset.addEventListener('click', () => {
        statsStorage.clear();
        initStatsStorage();
        document.getElementsByTagName('tbody')[0].innerHTML = '';
        generateStatsRow()
    });

    let sortedRows = Array.from(document.querySelector('table').rows).slice(1);
    let selectedTh;

    document.querySelector('table').onclick = function (e) {
        let th = e.target.closest('th');
        if (!th) return;
        if (!document.querySelector('table').contains(th)) return;

        if (selectedTh) {
            if (selectedTh.cellIndex != th.cellIndex) {
                selectedTh.removeAttribute('class');
            }
        }

        selectedTh = th;

        th.classList.toggle('sort_arrow_down');
        sortTable(sortedRows, th);
        if (th.classList.contains('sort_arrow_down')) {
            th.onclick = () => {
                if (th.classList.length > 0) {
                    th.classList.toggle('sort_arrow_up');
                    sortTable(sortedRows, th);
                }

            }
        }
    }

    let rowsWithLowPercent = sortedRows.filter((row) => {
        return (Number(row.cells[6].innerHTML) > 0) && (Number(row.cells[6].innerHTML) <= 25);
    })
        .sort((rowA, rowB) => rowA.cells[6].innerHTML - rowB.cells[6].innerHTML)
        .slice(0, 8)

    difficult_words.onclick = () => {

        cardsContainer.innerHTML = '';

        let difficultWordsArray = [];

        rowsWithLowPercent.forEach((row) => {
            for (let category in wordsForStats) {
                for (let word of wordsForStats[category]) {
                    if (word.name == row.cells[1].innerHTML) {
                        difficultWordsArray.push(word);
                    }
                }
            }
        })

        createCards(difficultWordsArray);
    }
})


