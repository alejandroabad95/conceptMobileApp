import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Listas</Text>

            <Button onPress={() =>
                navigation.navigate('Detalles')
            }
                title='Next Screen'>

            </Button>

        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})