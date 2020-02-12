import React from 'react'
import styled from 'styled-components';
import { ProgressBar, Colors } from 'react-native-paper'


const Box = styled.View`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '50px'};
    background: ${props => props.backgroundColor || '#000'};
    border-radius: 6px;
    position: absolute;
    elevation: 10;
    bottom: 15%;
    padding-bottom: 5%;
    padding-top: 1%;
`;

const Graph = styled.View`
    width: ${props => props.width || '90%'};
    top: ${props => props.top || '6%'};
    left: 18%;
    flex-direction: row;
    align-items: center;
`;

const LinhaGraph = styled.Image`
    max-height: 4px;
    width: 80%;
`;

const PointGraph = styled.Image`
    max-height: 8px;
    max-width: 8px;
    width: 10%;
`;

const Text = styled.Text`
    color: ${props => props.color || '#6B6B6B'};
    font-size: ${props => props.fontSize || '20px'};
    padding-left: ${props => props.paddingLeft || '30%'};
    top: ${props => props.top || '10px'};
    margin-bottom: ${props => props.marginBottom || '0px'};
`;

export default BoxEconomy => {
    return (
        <Box
            width={'90%'}
            height={`25%`}
            backgroundColor={'#FFF'}
        >
            <Text>economia do mês</Text>
            <Text
                color={'#5719BE'}
                fontSize={'18px'}
                paddingLeft={'10%'}
                top={'20px'}
                marginBottom={'10px'}
            >seus ganhos:</Text>
            <Graph>
                <LinhaGraph source={require('../../assets/Linha.png')}/>
                <PointGraph source={require('../../assets/Ponto.png')}/>
            </Graph>
            <Text
                color={'#175FC2'}
                fontSize={'18px'}
                paddingLeft={'10%'}
                top={'40px'}
                marginBottom={'10px'}
            >seus gastos:</Text>
            <Graph
                width={'40%'}
                top={'12%'}>
                <LinhaGraph source={require('../../assets/Linha2.png')}/>
                <PointGraph source={require('../../assets/Ponto2.png')}/>
            </Graph>
        </Box>
    )
}