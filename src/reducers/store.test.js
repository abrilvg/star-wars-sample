import {charactersStore} from './store';
import Immutable from 'seamless-immutable';

describe('charactersStore', () => {
    it('should return the initial state', () => {
        expect(charactersStore(undefined, {})).toEqual({
            loading: false,
            characters: []
        })
    });

    it('should handle SUCCESS_GET_CHARACTERS', () => {
        const characters = [
            {name: 'Luke'},
            {name: 'Han Solo'}
        ];

        const updatedStore = charactersStore(undefined, {
            type: 'SUCCESS_GET_CHARACTERS',
            characters
        });

        expect(updatedStore.characters).toEqual(characters);
        expect(updatedStore.loading).toEqual(false);
    });

    it('should handle DELETE_CHARACTER', () => {
        const characters = [
            {name: 'Luke', url: 'http://swapi.dev/api/people/1/'},
            {name: 'Han Solo', url: 'http://swapi.dev/api/people/2/'}
        ];
        const storeWithCharacters = charactersStore(undefined, {
            type: 'SUCCESS_GET_CHARACTERS',
            characters
        });

        //hasta aqui el store tiene 2 characters

        //deleting Luke
        const url = 'http://swapi.dev/api/people/1/'; // eliminar Luke
        const updatedStore = charactersStore(storeWithCharacters, {
            type: 'DELETE_CHARACTER',
            url
        });
        expect(updatedStore.characters).toEqual(Immutable([
            {name: 'Han Solo', url: 'http://swapi.dev/api/people/2/'}
        ]));
    });

    it('should handle START_GET_CHARACTERS', () => {
        const updatedStore = charactersStore(undefined, {
            type: 'START_GET_CHARACTERS'
        });

        expect(updatedStore.loading).toEqual(true);
    });

    it('should handle ERROR_GET_CHARACTERS', () => {
        const updatedStore = charactersStore(undefined, {
            type: 'ERROR_GET_CHARACTERS'
        });

        expect(updatedStore.loading).toEqual(false);
    });
});
