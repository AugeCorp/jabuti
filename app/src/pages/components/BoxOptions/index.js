import React from 'react'
import ModalDropdown from 'react-native-modal-dropdown';
import Button from '../Buttons/Button'
import TitleText from '../Buttons/TitleText';
import Text from '../Text';
import View from '../View';
import Options from '../Options/Options'

export default BoxOptions => {
    return(
        <Button>
            <Options>
                <ModalDropdown>
                    <TitleText>carteira de</TitleText>
                    <Text inputColor={'#5719BE'}>Lucas Zakaréias</Text>
                </ModalDropdown>
            </Options>
        </Button>
    );
};