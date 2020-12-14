import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'semantic-ui-react';
import SearchForm from './SearchForm';
import {SearchContainer} from './styles/Containers';

it('should render SearchForm', () => {
    const onTextChange = jest.fn();
    const searchForm = shallow(<SearchForm onTextChange={onTextChange} />);
    searchForm.find(Input).simulate('keyUp', {target: {value: 'Luke'}});
    
    expect(onTextChange).toHaveBeenCalledTimes(1);
    expect(onTextChange).toHaveBeenNthCalledWith(1, 'Luke');
    expect(searchForm.find(SearchContainer).length).toEqual(1);
    expect(searchForm.find(Input).length).toEqual(1);

});
