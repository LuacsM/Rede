import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import {  Button } from 'react-native-elements'
import { globalStyles, colors } from '../styles/global';

export default function About() {
  return (
      
    <View style={globalStyles.container}>
      
      {/* <SafeAreaView> */}
      
        <View style={styles.rating}> 
            <Image style={styles.img} source={require('../assets/rede.png')} />
        </View>
        <ScrollView style={styles.item}>
            <Text style={styles.txt}>
            Somos um App para as mulheres. Estamos aqui para impusionar o apoio mútuo que já existe entre as mulheres 
            e amplificar a sororidade das Amazonas.
            {"\n"} {"\n"}
            Em Rede e conectadas, podemos juntas inovar, empreender, educar, cuidar, criar e nos fortalecer.
            {"\n"} {"\n"}
            A Rede das Amazonas faz parte do presente, resgata a solidariedade na ancestralidade das matriarcas e confia que o "Future is female"
            </Text>
        </ScrollView>
        
        <View style={styles.btx}>
            <Button title='Next' buttonStyle={styles.bt} /> 
        </View> 
      {/* </SafeAreaView> */}
        
    </View>

  );
}

const styles = StyleSheet.create({
    rating: {
      flex: 1,
      // backgroundColor: "#000",
      // justifyContent: "center",
      alignItems: "center"
        // marginTop: 0,
        // width:"100%",
        // height: 220,
    },
    
    item: {
      flex: 2,
      // backgroundColor: "coral",
      padding: 10,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: '#B1B0D8',
      borderStyle: "dashed",
      borderRadius: 10,
  },
    
    txt:{
      fontFamily: 'nunito-regular',
      fontSize:20,
      textAlign: "justify",
      // alignItems: 'center',
      // alignSelf: 'center'
    
    },
    
    img: {
        width: "80%",
        height: "100%",
        marginTop: -5
    },

    // btx:{
    //   padding: 5,
    // }, 

    bt: {
      backgroundColor: colors.purple
    }

    
    
})