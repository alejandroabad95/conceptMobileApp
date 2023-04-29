import {React, useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';


const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Lista de elementos');
    }, 1000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/favicon.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
