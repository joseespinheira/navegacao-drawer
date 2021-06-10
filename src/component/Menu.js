
import React, { Component, Fragment, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
// import { Button } from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/style';
import LinearGradient from 'react-native-linear-gradient';

const Menu = ({navigation}) => {


    return (
        <Fragment>
            <Button
            onPress={()=>{navigation.openDrawer();}}
            buttonStyle={styles.menu}
                icon={
                    <Icon
                        raised
                        name='bars'
                        type='font-awesome'
                        color='#f50'
                        size={30}
                        justifyContent= 'left'
                        onPress={() => console.log('hello')} />
                }
                
                type="solid"
            />
        </Fragment>
    );
}

export default Menu