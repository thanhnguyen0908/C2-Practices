import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import CustomButton from '../utils/CustomButton';

export default function Home({ navigation, route }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                let user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={
                styles.text
            }>
                Welcome {name} !
            </Text>
            <Text style={
                styles.text
            }>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton
                title='Update'
                color='#668FF4'
                onPressFunction={updateData}
            />
            <CustomButton
                title='Remove'
                color='#668FF4'
                onPressFunction={removeData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        marginTop: 30,
        fontWeight:'bold',
        textAlign:'center'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})