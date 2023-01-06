import React from 'react';
import { View, Text , SafeAreaView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AddNewPost from '../components/newPost/AddNewPost';


const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <AddNewPost  navigation={navigation}  />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
         paddingTop: Platform.OS === 'ios' ? 0:Constants.statusBarHeight,
         backgroundColor:'black',
         flex:1,
     },

})

export default NewPostScreen