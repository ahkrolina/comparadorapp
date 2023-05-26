import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [result, setResult] = useState('');

  const comparePrices = () => {
    const gasValue = parseFloat(gasPrice);
    const ethanolValue = parseFloat(ethanolPrice);
    const ethanolGasRatio = ethanolValue / gasValue;

    if (ethanolGasRatio < 0.7) {
      setResult('A melhor escolha é comprar álcool.');
    } else {
      setResult('A melhor escolha é comprar gasolina.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneFrame}>
        <Image source={require('./assets/down.jpg')} style={styles.image} />
        <Text style={styles.label}>Preço da GASOLINA:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gasPrice}
          onChangeText={setGasPrice}
        />

        <Text style={styles.label}>Preço do ÁLCOOL:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={ethanolPrice}
          onChangeText={setEthanolPrice}
        />

        <Button title="Comparar Preços" onPress={comparePrices} />

        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  phoneFrame: {
    borderWidth: 4,
    borderColor: 'darkblue',
    borderRadius: 20,
    padding: 32,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 22,
    marginBottom: 8,
    color: 'darkblue',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  result: {
    fontSize: 20,
    marginTop: 16,
    color: 'red',
  },
});

export default App;



