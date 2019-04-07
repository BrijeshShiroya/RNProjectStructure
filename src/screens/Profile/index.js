import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import * as palettes from '../../constants/palettes';
import styles from './style';
import { NavigationBarButton } from '../../component/atoms';
export default class Profile extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerStyle: palettes.navigationBar,
        headerTitleStyle: palettes.navigationBarTitle,
        headerRight: <NavigationBarButton title={'right'} onPress={navigation.getParam('rightPress')} />,
        headerLeft: <NavigationBarButton title={'Back'} onPress={navigation.getParam('leftPress')} />,
    });

    rightPress = () => {
        alert('right')
    }

    leftPress = () => {
        this.props.navigation.goBack()
    }

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this.rightPress, leftPress: this.leftPress });
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <Text style={styles.text}> Back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
