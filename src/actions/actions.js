const API = 'https://swapi.dev/api/people/';

const getCharacters = (dispatch) => {
    dispatch({
        type: 'START_GET_CHARACTERS'
    });
    fetch(API)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'SUCCESS_GET_CHARACTERS',
            characters: data.results
        });
    })
    .catch(() => {
        dispatch({
            type: 'ERROR_GET_CHARACTERS'
        });
    });
};

const deleteCharacter = (dispatch, url) =>{
    dispatch({
        type: 'DELETE_CHARACTER',
        url
    })
}

export  {
    getCharacters,
    deleteCharacter
}
