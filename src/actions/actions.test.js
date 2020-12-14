import {deleteCharacter, getCharacters} from './actions';

describe('actions', () => {
    const API = 'https://swapi.dev/api/people/';
    const mockDispatch = jest.fn();

    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('deleteCharacter', () => {
        it('should dipatch DELETE_CHARACTER with an url', () => {
            const expectedAction = {
                type: 'DELETE_CHARACTER',
                url: 'http://swapi.dev/api/people/1/'
            };

            deleteCharacter(mockDispatch, 'http://swapi.dev/api/people/1/');

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
        });
    });

    describe('getCharacters', () => {
        it('should call dispatch with SUCCESS_GET_CHARACTERS type', async () => {
            fetch.mockResponseOnce(JSON.stringify({results:[{name: 'Luke'}]})); //[{ results: [{name: 'Luke'}]}]
    
            const expectedStartAction = {
                type: 'START_GET_CHARACTERS'
            }
            const expectedSuccessAction = {
                type: 'SUCCESS_GET_CHARACTERS',
                characters: [{name: 'Luke'}]
            }
            await getCharacters(mockDispatch);

            expect(fetch).toHaveBeenCalledWith(API);
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);
            
        })
        // it ('should call dispatch with ERROR_GET_CHARACTERS', () => {
        //     //gfdgfdgfdgfdgdf
        // });
    });
});
