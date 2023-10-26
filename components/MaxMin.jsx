import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MaxMin = (props) => {
  const { x, y } = props;

  let mensagem;

  if (x > y) {
    mensagem = `Valor ${x} é maior que valor ${y}`;
  } else if (x < y) {
    mensagem = `Valor ${y} é maior que valor ${x}`;
  } else {
    mensagem = `Valor ${x} e ${y} são iguais`;
  }

  return (
    <Text style={styles.container}>{mensagem}</Text>
  );
}

export default MaxMin;

const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      color: 'white'
    
    },
  });
