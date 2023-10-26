import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MaxMin = (props) => {
  const { x, y } = props;

  let message;

  if (x > y) {
    message = `Valor ${x} é maior que valor ${y}`;
  } else if (x < y) {
    message = `Valor ${y} é maior que valor ${x}`;
  } else {
    message = `Valor ${x} e ${y} são iguais`;
  }

  return (
    <Text style={styles.container}>{message}</Text>
  );
}

export default MaxMin;

const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      color: 'white'
    
    },
  });
