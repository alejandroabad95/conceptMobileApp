import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'


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


    return (
    <ScrollView>
     <Button
        onPress={() => navigation.navigate('Detalles')}
        title='Pantalla Siguiente'
      />  

    <View style={styles.container}>
   
      <Text style={styles.title}>Lista de Fotos</Text>
      {photos.map(photo => (
        <Image
          key={photo.id}
          style={styles.image}
          source={{ uri: photo.download_url }}
        />
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },


})
 
export default ListScreen