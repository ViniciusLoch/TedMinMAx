import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaxMin from './components/MaxMin';
import Contador from './components/Contador';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <View style={styles.container}>
      {/*<MaxMin x={10} y={0} /> 
      <MaxMin x={10} y={10} /> 
      <Contador inicial={100} passo={10}/>
      <Contador/>*/}
      <Formulario/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
