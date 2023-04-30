import {React, useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';


const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Lista de elementos');
    }, 5000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splashConcepMobileApp.gif')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#3B5998',
  },
  image: {
    marginTop: 250,
    width: 250,
    height: 250,
  },
});

export default SplashScreen;
