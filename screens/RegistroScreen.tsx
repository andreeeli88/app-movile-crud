import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function RegistroScreen() {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const [edad, setEdad] = useState(0);
  const [nick, setNick] = useState('');

  function guardar(nick: string, edad: number, correo: string, pass: string) {
    //const db = getDatabase();
    set(ref(db, 'usuarios/' + nick), {
      nick:nick,
      edad: edad,
      correo:correo,
      pass: pass
    });

    Alert.alert("Mensaje","registro exitoso")
    limpiar()
  }
  function limpiar(){
    setCorreo('')
    setPass('')
    setEdad(0)
    setNick('')
    
  }

  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={{uri:"https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"}}>

      </Image>
      <Text>RegistroScreen</Text>
      <TextInput
      placeholder='Ingrese correo'
      style={styles.input}
      placeholderTextColor={'white'}
      keyboardType='email-address'
      onChangeText={(text)=>setCorreo(text)}
      value={correo}
      >
        <Text>RegistroScreen</Text>
      <TextInput
      placeholder='Ingrese contraseña'
      style={styles.input}
      placeholderTextColor={'white'}
      secureTextEntry
      onChangeText={(text)=>setPass(text)}
      value={pass}
      ></TextInput>

      </TextInput>
      <TextInput
      placeholder='Ingrese Nick'
      style={styles.input}
      placeholderTextColor={'white'}
      onChangeText={(text)=> setNick(text)}
      value={nick}
      >

      </TextInput>
      <TextInput
      placeholder='Ingrese edad'
      style={styles.input}
      placeholderTextColor={'white'}
      onChangeText={(text)=>setEdad(+text)}
      >

      </TextInput>
      <Button title='Guardar'
      onPress={()=> guardar(nick, edad, correo, pass)}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        justifyContent: 'center',
        flex: 1,
    },
    input:{
      backgroundColor:"pink",
      height:60,
      fontSize:25,
      width:'80%',
      marginTop: 10,
      borderRadius:60,
      paddingHorizontal:30,
      color:'white',
    },
    img:{
      width:50,
      height:50,
    }
})