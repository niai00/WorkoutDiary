import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Run() {
    const [dis, setDis] = useState('');
    const [dur, setDur] = useState('');

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Run</Text>

            <TextInput
                style={{ width: 100, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
                placeholder='Distance'
                keyboardType='numeric'
                onChangeText={newDistance => setDis(newDistance)}
                value={dis}
            />

            <TextInput
                style={{ width: 100, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
                placeholder='Duration'
                keyboardType='numeric'
                onChangeText={newDuration => setDur(newDuration)}
                value={dur}
            />
        </View>
    );
}
