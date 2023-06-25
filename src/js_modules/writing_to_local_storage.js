import {statsStorage} from './vars.js';
import { wordsForStats } from './init_word_cards.js';

export const writingToLocalStorage = function(word_name, column_name) {
    let key_storage = `${word_name}.${column_name}`;
    let value = statsStorage.getItem(key_storage);
    statsStorage.setItem(key_storage, Number(value) + 1);
}

export const initStatsStorage = function () {
    for (let category in wordsForStats) {
        for (let word of wordsForStats[category]) {
            let key_storage_correct = `${word.name}.correct`;
            let key_storage_incorrect = `${word.name}.incorrect`;
            let key_storage_trained = `${word.name}.trained`;

            if (statsStorage.getItem(key_storage_correct) == null) {
                statsStorage.setItem(key_storage_correct, 0);
            }

            if (statsStorage.getItem(key_storage_incorrect) == null) {
                statsStorage.setItem(key_storage_incorrect, 0);
            }

            if (statsStorage.getItem(key_storage_trained) == null) {
                statsStorage.setItem(key_storage_trained, 0);
            }
        }
    }
}
