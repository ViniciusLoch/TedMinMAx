import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginClick = () => {
    console.warn('Login e Senha:', { email, senha });
  };

  return (
    <View>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput 
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Button title="Login" onPress={handleLoginClick} />
    </View>
  );
};


export default Formulario;