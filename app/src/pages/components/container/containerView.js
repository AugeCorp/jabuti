import styled from 'styled-components';
import React from 'react'
import { StyleSheet } from 'react-native';
import Gradient from 'react-native-css-gradient';

// const Container = styled.ImageBackground`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
//     background: #ebf8e1;
// `;

const gradient = `linear-gradient(186.57deg, rgba(87, 25, 190, 0.5) 0%, rgba(23, 95, 255, 0.5) 100%)`;

export default Container =>{ 
    return(
    <Gradient gradient={gradient} style={style.gradient2} />
    )
}

const style = StyleSheet.create({
    gradient2: {
        "width": '100%',
        "height": '100%',
        "position": 'relative',
    }
})