import React from 'react'

import { StyleSheet, Text, View, Image, Modal } from 'react-native'

import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { TouchableWithoutFeedback ,TouchableHighlight } from 'react-native';

const DetailScreen = ({ route }) => {
  const { photo } = route.params
  const [modalVisible, setModalVisible] = useState(false)
  
  const handleImagePress = () => {
      setModalVisible(true)
    
  }
    
  const handleCloseModal = () => {
      setModalVisible(false)

  }


    return (
    
        <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <Image source={{ uri: photo.download_url }} style={styles.image} />
            </TouchableWithoutFeedback>
            

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
            >
       
                <View style={styles.modalContainer}>
                    
        <StatusBar hidden="true"/>
    
        <Image source={{ uri: photo.download_url }} style={styles.modalImage} />
                    
        <TouchableHighlight style={styles.closeButton} onPress={handleCloseModal}>
          <Text style={styles.closeText}>X</Text>
        </TouchableHighlight>
       
    </View>
                
    </Modal>
            
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: '#3B5998'
    },
    image: {
        width: 350,
      height: 350,
        marginTop: 20,
        borderRadius: 15,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
        
    },
    closeButton: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
    closeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    modalImage: {
        width: '100%',
        height: '100%'
    }
}
)

export default DetailScreen;

