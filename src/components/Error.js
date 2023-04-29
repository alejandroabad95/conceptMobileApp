import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Error = ({ onRetry }) => (
    <View style={styles.errorContainer}>
        
        <Icon name="times-circle" size={100} color="red" />
        
        <View style={styles.errorTextContainer}>
        
            <Text style={styles.errorText}>Ha ocurrido un error cargando los datos</Text>

            <View style={styles.retryButton}>
                <TouchableOpacity  onPress={onRetry}>
                <Text style={styles.retryButtonText}>Volver a intentar</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    </View>
);




const styles = StyleSheet.create({
  
  errorContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
        width: '100%',
    marginTop: 200
   
    },
  errorTextContainer: {
    marginTop: 20
      
    },


  errorText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    width: 170
    
      
    },
  retryButton: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 30,
      paddingVertical: 15,
      paddingHorizontal: 30,
  },
  retryButtonText: {
      color: '#3B5998',
      fontSize: 12,
      textAlign: 'center'
      
  }

});

export default Error;