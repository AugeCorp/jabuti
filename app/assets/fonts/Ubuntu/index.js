import * as Font from "expo-font";
import React, { useState, useEffect} from 'react';


const [ubuntuFont, setubuntuFont] = useState('');

Font.loadAsync({
    Ubuntu: require('./Ubuntu-Regular.ttf')
});