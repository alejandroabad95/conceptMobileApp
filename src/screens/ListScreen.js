import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native'


const ListScreen = ({ navigation }) => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list')
        const data = await response.json()
        setPhotos(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPhotos()
    }, [])
    
    const handleImagePress = (photo) => {
    navigation.navigate('Detalles', {photo});
  
  }

  return (
    
    <ScrollView>
    <View style={styles.container}>
          {photos.map(photo => (
            <TouchableWithoutFeedback key={photo.id} onPress={() => handleImagePress(photo)}>
            
        <View key={photo.id} style={styles.imageContainer}>
        <Image
          key={photo.id}
          style={styles.image}
                  source={{ uri: photo.download_url }}
          />
    
      <View style={styles.authorContainer}>
        <Text style={styles.authorText}>{photo.author}</Text>
      </View>
        
        </View>
         </TouchableWithoutFeedback>
      ))}
          </View>
   
    </ScrollView>  
    )
}



const styles = StyleSheet.create({

container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
   imageContainer: {
     position: 'relative',
     marginBottom: 10,
    
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5

  },
  authorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  authorText: {
    color: '#fff',
    fontSize: 12,
  },

})
 
export default ListScreen