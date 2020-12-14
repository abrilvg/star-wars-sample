import {createStore} from 'redux';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loading: false,
    characters: []
});

const charactersStore = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS_GET_CHARACTERS':
            return state.merge({
                characters: action.characters,
                loading: false
            });
        case 'DELETE_CHARACTER':
            let url = action.url;
            const filterCharacters = state.characters.filter(character => character.url !== url);
            return state.merge({
                characters: filterCharacters
            });
        case 'START_GET_CHARACTERS':
            return state.merge({
                loading: true
            });
        case 'ERROR_GET_CHARACTERS':
            return state.merge({
                loading: false
            });
        default:
            return state;
    }
}

const store = createStore(charactersStore);

export {charactersStore};

export default store;
