import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width: 100,
                        backgroundColor: 'yellow'
                    }} onPress={() => {
                        this.props.navigation.goBack()
                    }}>

                </TouchableOpacity>
            </View>
        );
    }
}
