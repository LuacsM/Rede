import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Slide from '../shared/slide'
import { colors } from '../styles/global';

export default function About({ navigation }) {

  return (
    <Swiper 
    autoplay={true}
    autoplayTimeout={5}
    style={styles.wrapper} 
    showsButtons={false}
    activeDotColor={colors.green}
    >
      {
        /* 
          SLIDE 1
        */
      }
      <Slide
        item={
          {
            title: "Sobre Nós",
            text: "Somos um App para as mulheres. Estamos aqui para impusionar o apoio mútuo que já existe entre as mulheres e amplificar a sororidade das Amazonas.",
            img: require('../assets/rede.png'),
            height: 250,
            width: 250
          }
        }
        navigation={navigation}
      />
      {
        /* 
          SLIDE 2
        */
      }
      <Slide
        item={
          {
            title: "Objetivos",
            text: "Em Rede e conectadas, podemos juntas inovar, empreender, educar, cuidar, criar e nos fortalecer.",
            img: require('../assets/sitting.png'),
            height: 200,
            width: 200
          }
        }
        navigation={navigation}
      />
      {
        /* 
          SLIDE 3
        */
      }
      <Slide
        item={
          {
            title: "O presente e o futuro",
            text: 'A Rede das Amazonas faz parte do presente, resgata a solidariedade na ancestralidade das matriarcas e confia que o "Future is female"',
            img: require('../assets/female.png'),
            height: 170,
            width: 170
          }
        }
        navigation={navigation}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.purple
  },
  slide: {
    margin: 16,
    flex: 1,
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 250,
    width: 250
  },
  about: {
    flex: 1.5,
    alignItems: "center",
    padding: 10
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16
  },
  text: {
    fontSize: 18,
    marginTop: 4,
    color: '#fff',
    textAlign: "justify"
  }
})

