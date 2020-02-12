import React from 'react';

// Imports Component's
    import ContainerView from './components/container/containerView'
    import Campo from './components/CamposInput'

const Cadastrar = () => (
    <ContainerView>
        <Campo  inputColor={'gray'}
                maxLength={10} 
                autoCompleteType='password' 
                keyboardType='default' 
                secureTextEntry='true'
                onChangetext={text => onChangetext(text)}
                value={value} />
    </ContainerView>
)

export default Cadastrar;
