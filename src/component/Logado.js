
import React, { Component, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../style/style';


const Logado = ({route, navigation} ) => {

    const {emailUser} = route.params?route.params:"Nada";

    return (
        <View style={styles.container} >
            <Image source={require('../img/img.png')} style={styles.img} ></Image>

            <Text style={styles.textLogin}>Bem vindo {emailUser}</Text>
            <Text style={styles.textLogin}>você está logado no sistema!</Text>
        </View>
    );
}

export default Logado