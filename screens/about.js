import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, Button, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';

const width = '100%';
const height = '100%';


export default function About() {
  return (
      
      
    <ScrollView style={globalStyles.container}>
      
      <SafeAreaView>
      
        <View style={styles.rating}> 
            <Image style={styles.img} source={require('../assets/rede.png')} />
        </View>
        <View style={styles.item}>
            <Text style={styles.txt}>Somos um App para as mulheres. Estamos aqui para impusionar o apoio mútuo que já existe entre as mulheres e amplificar a sororidade das Amazonas.
     
            Em Rede e conectadas, podemos juntas inovar, empreender, educar, cuidar, criar e nos fortalecer.
      
            A Rede das Amazonas faz parte do presente, resgata a solidariedade na ancestralidade das matriarcas e confia que o "Future is female"
            </Text>
        </View>
        
        <View style={styles.btx}>
            <Button title='Next' style={styles.bt} /> 
        </View> 
      </SafeAreaView>
        
    </ScrollView>

  );
}

const styles = StyleSheet.create({
    rating: {
        marginTop: -40,
        width:320,
        height: 320
    },
    
    btx:{
        height: 100,
    }, 
    
    item: {
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
    borderColor: '#B1B0D8',
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
  },
    
    txt:{
        fontFamily: 'nunito-regular',
         fontSize:24,
        alignItems: 'center',
        alignSelf: 'center'
    
    },
    
    img: {
        width,
        height,
    },

    
    
})