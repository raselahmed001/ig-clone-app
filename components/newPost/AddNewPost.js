import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import FormikPostUploader from './FormikPostUploader';


const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.Container}>
        <Header navigation={navigation}   />
        <FormikPostUploader navigation={navigation}/>
        {/* PostForm */}
        {/* FormikPostUploader */}

    </View>
  )
}

const Header = ({navigation}) => (
      <View style={styles.headerContainer}>
     <TouchableOpacity  onPress= {() => navigation.goBack()} >
        <Image source={{
             uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'
         }} 
        style={{ width:30,  height:30,  }}
        />
      </TouchableOpacity> 
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
)



const styles = StyleSheet.create({
    Container:{
        marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },

    headerText:{
        color:'#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,    
    },

})


export default AddNewPost