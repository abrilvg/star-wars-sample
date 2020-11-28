import React, {useState, useEffect} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import SearchForm from './components/SearchForm';
import {getCharacters} from './actions/actions';
import CardList from './components/CardList';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
    // reading from store
    const {characters, loading} = useSelector(state => ({
        characters: state.characters,
        loading: state.loading
    }), shallowEqual);

    // get dispatch object
    const dispatch = useDispatch();

    // local state in App
    const [searchText, setSearchText] = useState('');

    const charactersToShow = characters.filter(character => {
        if (searchText === '') {
            return character;
        } else {
            if (character.name.toLowerCase().includes(searchText)) {
                return character;
            }
        }
    });

    useEffect(() => {
        getCharacters(dispatch);
    }, []);

    return (
        <section>
            <Dimmer active={loading} inverted>
                <Loader size='large'>Loading...</Loader>
            </Dimmer>
            <SearchForm onTextChange={setSearchText}/>
            <CardList characters={charactersToShow} searchText={searchText}/>
        </section>
    );
};

export default App;
