import styled from 'styled-components'
import React from 'react'


const Campo = styled.TextInput`
    padding: 3px;
    padding-left: 25px;
    background: transparent;
    color: ${props => props.inputColor || 'black'};
    border-bottom-width: 1px;
    border-color: lightgray;
    border-radius: 3px;
    width: 80%;
`;

export default function  CampoUtilizavel() {
    const [value, onChangeText] = React.useState('');

    return Campo;
};