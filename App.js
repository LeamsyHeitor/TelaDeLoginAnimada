import React ,{useState,useEffect}from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text, StyleSheet,
  StatusBar,
  Animated
} from 'react-native';


export default function TelaDeLoginComAnimacao() {
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 200,
      })
    ]).start();
    

  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar backgroundColor='#FFE4B5' barStyle='dark-content' />
      <View style={styles.containerLogo}>
        <Image source={require('./src/assets/logo.png')} />
      </View>

      <Animated.View
       style={[
         styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
        }
       
       ]}
       >

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar Conta Gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#FFE4B5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: 'orange',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: '#191919'
  }

});