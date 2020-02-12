import React from 'react';

//Import dos components
    import ContainerView from './components/container/containerView';
    import Button from './components/Buttons/Button';
    import TitleText from './components/Buttons/TitleText';
    import Text from './components/Text';
    import View from './components/View';
    import Options from './components/Options/Options'
// Import 
    import BoxOptions from './components/BoxOptions/index'
    import BoxEconomy from './components/Economia/Index'
    import MonthEconomy from './components/MonthEconomy/Index'

const Main = () => (
    <View>
        <ContainerView/>
        <BoxOptions/>
        <BoxEconomy/>
        <MonthEconomy/>
    </View>
);

export default Main;