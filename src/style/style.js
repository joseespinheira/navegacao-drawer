
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const styles = ({
  container: {
    flex: 1,
    backgroundColor: '#c0fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: "#fff",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  textLogin: {
    fontSize: 20,
    marginTop: 10
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 12,
    width: 200,
    marginTop: 10,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  btnConfirm: {
    width: 250,
    height: 50,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: '#5dceed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu:{
    fontSize:200,
    width: 50,
    height: 50,
  }
});

export default styles;