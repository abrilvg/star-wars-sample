const API = 'https://swapi.dev/api/people/';

// const getCharacters = (dispatch) => {
//     dispatch({
//         type: 'START_GET_CHARACTERS'
//     });
//     fetch(API)
//     .then(response => response.json())
//     .then(data => {
//         dispatch({
//             type: 'SUCCESS_GET_CHARACTERS',
//             characters: data.results
//         });
//     })
//     .catch(() => {
//         dispatch({
//             type: 'ERROR_GET_CHARACTERS'
//         });
//     });
// };

const getCharacters = async (dispatch) => {
    try {
        dispatch({
            type: 'START_GET_CHARACTERS'
        });
        const result = await fetch(API);
        const data = await result.json();
        
        dispatch({
            type: 'SUCCESS_GET_CHARACTERS',
            characters: data.results
        });
    } catch (err) {
        dispatch({
            type: 'ERROR_GET_CHARACTERS'
        });
    }
};

const deleteCharacter = (dispatch, url) => {
    dispatch({
        type: 'DELETE_CHARACTER',
        url
    });
}

export  {
    getCharacters,
    deleteCharacter
}
