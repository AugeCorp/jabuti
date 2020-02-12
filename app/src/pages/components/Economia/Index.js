import React from 'react'
import styled from 'styled-components';

const Box = styled.View`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '50px'};
    background: ${props => props.backgroundColor || '#000'};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    position: absolute;
    elevation: 10;
    bottom: 44%;
    padding-bottom: 5%;
`;

const Text = styled.Text`
    color: ${props => props.color || '#6B6B6B'};
    font-size: ${props => props.fontSize || '30px'};
    top: ${props => props.top || '0px'};
`;

export default BoxEconomy => {
    return (
        <Box
            width={'90%'}
            height={`40%`}
            backgroundColor={'#FFF'}
        >
            <Text>uau</Text>
            <Text>você economizou</Text>
            <Text 
                color={'#5719BE'}
                fontSize={'54px'}
                top={'10px'}
            >R$ 900,00</Text>
            <Text 
                top={'5px'}
            >este mês</Text>
        </Box>
    )
}