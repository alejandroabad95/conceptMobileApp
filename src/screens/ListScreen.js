import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, FlatList, RefreshControl} from 'react-native'
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Error from '../components/Error'

const ListScreen = ({ navigation }) => {

  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  // states loading and pull to refresh
  const [isRefreshing, setRefreshing] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  //errors

  const [error, setError] = useState (false)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&results=`)

        const data = await response.json()
        setPhotos([...photos, ...data]);
        setIsLoading(false)
      } catch (error) {
        setError(true);
        
      }
    }

      fetchPhotos()

  }, [currentPage])

  const renderItem = ({ item: photo }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleImagePress(photo)}>
        <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          
            <Image
              style={styles.image}
              source={{ uri: photo.download_url }}
            />
    
            <View style={styles.authorContainer}>
              <Text style={styles.authorText}>{photo.author}</Text>
            </View>
        </View>
          </View>
        </TouchableWithoutFeedback>

    )

  }

  const loadMoreItem = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
  };
    
  const handleImagePress = (photo) => {
    navigation.navigate('Detalles', { photo });
  }

  const handleRefresh = async () => {
    setRefreshing(true) 
    setCurrentPage(1) 
    setPhotos([]) 
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=1&results=10`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
       setError(true);
    } finally {
      setRefreshing(false);
    }
  }

  const handleRetry = () => {
    setError(false);
    setCurrentPage(1);
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Error onRetry={handleRetry} />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          ListFooterComponent={isLoading && !isRefreshing ? <Loader /> : null}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          numColumns={2}
        
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              colors={['white']}
              progressBackgroundColor={'black'}
              tintColor={'white'}
            />
          }

        />
          
      )}
        
      
  </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5998'
  },
  listContainer: {
    marginTop: 70,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 30
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    width: 'auto'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  authorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 'auto',
    width: 150,
    height: 40,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10
  },
  authorText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})

 
export default ListScreen