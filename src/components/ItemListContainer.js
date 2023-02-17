import React from 'react';
import {Text, View} from 'react-native';

const Greeting = props => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text>Hello {props.name}!</Text>
        </View>
    );
};

const LotsOfGreetings = () => {
    return (
        <View style={{alignItems: 'center', top: 50}}>
            <Greeting name="Rexxar" />
            <Greeting name="Jaina" />
            <Greeting name="Valeera" />
        </View>
    );
};

export default LotsOfGreetings;