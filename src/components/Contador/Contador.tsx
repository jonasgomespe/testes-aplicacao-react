import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface PropsContador {
  setContar: () => void;
  setZerar: () => void;
  show?: number;
}

const Contador = ({
  setContar = () => {
    return 1;
  },
  setZerar,
  show = 0,
}: PropsContador) => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Text style={{textAlign: 'center', fontSize: 40}}>{show}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.containerMargin}>
          <TouchableOpacity
            testID="contar"
            style={styles.buttonContar}
            onPressIn={() => setContar()}>
            <Text style={styles.corTexto}>Contar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMargin}>
          <TouchableOpacity
            testID="zerar"
            style={styles.buttonZerar}
            onPressIn={setZerar}>
            <Text style={styles.corTexto}>Zera contador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonContar: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  containerMargin: {
    margin: 5,
  },
  buttonZerar: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  corTexto: {
    color: '#fff',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Contador;
