import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import {ListContainer} from './styles/Containers';
import CardItem from './CardItem';

it('should render CardList', () => {
    const cardList = shallow(<CardList characters={[{name: 'Luke', url: 1}, {name: 'Chewbaka', url: 2}]} />);

    expect(cardList.find(ListContainer).length).toEqual(1);
    expect(cardList.find(CardItem).length).toEqual(2);

});
