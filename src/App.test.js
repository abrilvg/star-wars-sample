import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as redux from "react-redux";
import * as react from "react";
import {Dimmer} from 'semantic-ui-react';
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn()
}));

it('should render App', () => {
    // const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    // const mockDispatchFn = jest.fn();
    // useDispatchSpy.mockReturnValue(mockDispatchFn);

    // const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
    // const useSelectorFn = jest.fn().mockReturnValue(() => [{name: 'Luke'}]);
    // useSelectorSpy.mockReturnValue(useSelectorFn);

    // const useStateSpy = jest.spyOn(react, 'useState'); 
    // const mockUseStateFn = jest.fn();
    // useStateSpy.mockReturnValue(mockUseStateFn);

    // const useEffectSpy = jest.spyOn(react, 'useEffect'); 
    // const mockUseEffectFn = jest.fn();
    // useEffectSpy.mockReturnValue(mockUseEffectFn);

    const app = shallow(<App />);

    expect(app.find(Dimmer).length).toEqual(1);
    expect(app.find(SearchForm).length).toEqual(1);
    // expect(app.find(CardList).length).toEqual(1);
});
