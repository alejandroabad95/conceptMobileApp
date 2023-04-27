import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'

const ListScreen = ({ navigation }) => {

  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&results=2`)
        const data = await response.json()
        setPhotos([...photos, ...data]);
        setIsLoading (false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPhotos()
  }, [currentPage])

  const renderItem = ({ item: photo }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleImagePress(photo)}>
            
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: photo.download_url }}
            />
    
            <View style={styles.authorContainer}>
              <Text style={styles.authorText}>{photo.author}</Text>
            </View>
        
          </View>
        


        </TouchableWithoutFeedback>

    )

  }

   const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

    
  const handleImagePress = (photo) => {
    navigation.navigate('Detalles', { photo });
  
  }

  return (
    
    <FlatList data={photos} renderItem={renderItem}
      keyExtractor={(photo) => photo.id}
      ListFooterComponent={isLoading ? <Loader /> : null}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
      numColumns={2}

    />
        
    )
}

const styles = StyleSheet.create({

container: {
    flex: 1,
  marginTop: 25,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignContent: 'center',
  padding: 10,
  },
  imageContainer: {
  flex: 1,
  position: 'relative',
  marginBottom: 30,
  alignItems: 'center',
  margin: 5,
  },
  image: {
    width: '100%',
    height: 200,
  borderRadius: 5,

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