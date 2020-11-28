import React from 'react';
import {Card, Button, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {deleteCharacter} from '../actions/actions';

const CardItem = (props) => {
    // get dispatch object
    const dispatch = useDispatch();

    const {name, height, gender, url} = props.character;

    const removeCharacter = () => deleteCharacter(dispatch, url);

    return (
        <Card>
            <Card.Content>
                <Image
                    alt='Card image profile'
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{height}</Card.Meta>
                <Card.Meta>{gender}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='red' floated='right' onClick={removeCharacter}>
                    Remove
                </Button>
            </Card.Content>
        </Card>
    );
};

CardItem.propTypes = {
    character: PropTypes.object,
};

export default CardItem;
