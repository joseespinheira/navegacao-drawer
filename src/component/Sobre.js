
import React, { Component, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../style/style';


const Sobre = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../img/img.png')} style={styles.img} ></Image>

            <Text style={styles.textLogin}>Sobre</Text>
            <Text style={styles.textLogin}>Aplicativo desenvolvido por José Espinheira</Text>
        </View>
    );
}

export default Sobre