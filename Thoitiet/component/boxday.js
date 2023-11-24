import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Boxday() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    box: {
      width: 100, // Độ rộng của mỗi view
      height: 100, // Độ cao của mỗi view
      backgroundColor:  'rgba(255, 255, 255, 0.5)',
      margin: 10, // Khoảng cách giữa các view
      borderWidth:1,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  });
  