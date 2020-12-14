import React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem';
import * as Actions from '../actions/actions';
import * as redux from "react-redux";
import {Card, Button} from 'semantic-ui-react';

it('should render CardItem', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    jest.spyOn(Actions, 'deleteCharacter').mockImplementation(() => {});
    const cardItem = shallow(<CardItem character={{name: 'Luke', url: 'http://swapi.dev/api/people/1/'}}/>);
    cardItem.find(Button).simulate('click');

    expect(Actions.deleteCharacter).toHaveBeenCalledTimes(1);
    expect(Actions.deleteCharacter).toHaveBeenNthCalledWith(1, mockDispatchFn, 'http://swapi.dev/api/people/1/');
    expect(cardItem.find(Card).length).toEqual(1);
    expect(cardItem.find(Button).length).toEqual(1);
});
