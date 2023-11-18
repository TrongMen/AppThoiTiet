import React from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Home = () => {
  return (
    <View style={{ backgroundColor: 'black', width: '100%' }}>

<View style={{width:'100%',flexDirection:'row-reverse'}}>
<Ionicons name="ellipsis-horizontal-circle" size={32} color="white" />
</View>

      <Text style={{ fontSize: 35, fontWeight: 500, color: 'white' }}>Thời tiết</Text>
      <View style={{ backgroundColor: 'white', width: '100%', height: 50, borderRadius: 10, marginTop: 25, flexDirection: 'row', alignItems: 'center' }}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput style={{ color: 'gray', width: '100%' }} placeholder='Tìm tên thành phố/sân bay'></TextInput>
      </View>
      <View style={{ backgroundColor:'#363062',width:'100%',height:125,marginTop:50,borderRadius:10}}>
      <View style={{flexDirection: 'row'}}> 
      <View style={{marginLeft:10}}>
      <Text style={{ fontSize: 23, fontWeight: 500, color: 'white' }}>Vị trí của tôi</Text>
      <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>Hồ Chí Minh</Text>
     
      </View>
      <Text style={{ fontSize: 50, fontWeight: 500, color: 'white' ,marginLeft:150 }}>26°</Text>
      </View>

      <View style={{flexDirection:'row',marginLeft:10}}>
      <Text style={{ fontSize: 16, fontWeight: 500, color: 'white',marginTop:25 }}>Có mây Vài nơi</Text>
      <Text style={{ fontSize: 16, fontWeight: 500, color: 'white',marginTop:25 ,marginLeft:150 }}>C:33° T:25°</Text>
      </View>
      <Text style={{ fontSize: 16, fontWeight: 500, color: 'white',alignItems:'center',marginTop:25 }}>Tìm hiểu thêm về dữ liệu thời tiết và dữ liệu bản đồ</Text>

      </View>




    </View>
  );
}

const styles = StyleSheet.create({})

export default Home;
