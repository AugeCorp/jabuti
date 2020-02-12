import React from 'react';
import styled from 'styled-components';

//Import components
    import Container from './components/container/containerView'

const Initial = ({ navigation }) => (

    <Container>
        <Logo
            reziseMode='contain'
            source={require('./assets/LogoJabuti.png')}
        />
        <FontJabuti
            reziseMode='contain'
            source={require('./assets/JabutiFont.png')}
        />
        <Infos>
            <Texto >melhore usas finanças</Texto>
            <Login onPress={() => navigation.navigate('Cadastrar')}>faça login</Login>
            <Texto>ou</Texto>
            <Cadastrar>Cadastre-se</Cadastrar>
        </Infos>
    </Container>
);

const Infos = styled.View`
    margin-top: 160px;
`;

const Cadastrar = styled.Text`
    font-size: 20;
    text-align: center;
    color: #6636BE;
    position: relative;
    top: 5px;
    margin-bottom: 5px;
`;


const Login = styled.Text`
    font-size: 20;
    text-align: center;
    color: #6636BE;
    position: relative;
    top: 5px;
    margin-bottom: 5px;
`;

const Texto = styled.Text`
    font-size: 15px;
    text-align: center;
    color: rgba(120,120,120,1);
`;

const Logo = styled.Image`
    width: 165px;
    height: 100px;
    position: relative;
    margin-bottom: 10px;
`;

const FontJabuti = styled.Image`
    width: 161px;
    height: 68px;
    margin-bottom: 20px;
    position: relative;
    right: 3px;
`;

export default Initial;