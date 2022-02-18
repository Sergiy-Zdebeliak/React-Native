import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddMesage } from './src/AddMesage'
import { Mesage } from './src/Mesage'


export default function App() {
  const [mesages, setMesages] = useState([
  ])

  const addMesage = (title) => {
    const newMesage = {
      id: Date.now().toString(),
      title: title,
    }
    setMesages((prevMesages) => {
      return [...prevMesages, newMesage]
    })
  }

  const removeMesage = id => {
    setMesages(prev => prev.filter(mesage => mesage.id !== id))
  }

  return (
    <View>
      <Navbar title="Koala" />
      <View style={styles.container}>
        <AddMesage onSubmit={addMesage} />

          <FlatList
            keyExtractor={item => item.id.toString}
            data={mesages}
            renderItem={({item}) => (
              <Mesage mesage={item} onRemove={removeMesage}/>
            )}
          />
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    
  },
})
