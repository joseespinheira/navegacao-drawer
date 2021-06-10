
import React, { Fragment, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../style/style';
import Menu from './Menu';



const Home = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit() {

        if (email === '') {
            Alert.alert("Erro", "Preencha o E-mail")
        }
        else if (senha === '') {
            Alert.alert("Erro", "Preencha a Senha")
        } else {
            navigation.navigate('Logado', { 'emailUser': email })
        }
    }

    return (
        <Fragment>
            <Menu navigation={navigation}/>
            <View style={styles.container} >
                <Image source={require('../img/img.png')} style={styles.img} ></Image>

                <TextInput style={styles.textInput} placeholder="E-mail" autoCompleteType={'off'} autoFocus value={email} onChangeText={email => setEmail(email)}></TextInput>

                <TextInput style={styles.textInput} placeholder="Senha" secureTextEntry value={senha} onChangeText={senha => setSenha(senha)}></TextInput>

                <TouchableOpacity style={styles.btnConfirm} onPress={handleSubmit}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}

export default Home