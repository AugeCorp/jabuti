import styled from 'styled-components';
import React from 'react'


const Text = styled.Text`
    color: ${props => props.inputColor || '#5719BE'};
    font-size: 20px;
`;

export default Text;