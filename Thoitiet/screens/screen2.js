// import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { debounce } from "lodash";
// import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import { weatherImages } from '../constants';

import axios from 'axios';
export default function Screen2({route,navigation}) {
  // const navigation=useNavigation();
  const country = route.params.name;
  const data=route.params.data;
  console.log(data);

  
  return (
    <View style={styles.container}>
          <View style={{flex:1,backgroundColor:'#2B7C7C'}}>
          <View style={{flex:0.05,paddingLeft:'4%',paddingTop:'2%'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}  >
            {/* onPress={()=>navigation.goBack()} */}
              <Image style={{width:40,height:40}} source={require('../assets/arrow.png')} ></Image>
            </TouchableOpacity>
           
          </View>
            <View style={{flex:0.1,alignItems:'center'}}>
              <Text style={{fontSize:40,fontWeight:'bold',color:"white"}}>{data?.location?.name}</Text>
            </View>
            <View style={{flex:0.3,alignItems:'center'}}> 
              <Image style={{width:"66%",height:"97%",alignItems:'center'}} source={require('../assets/Cloud.png')} ></Image>
              {/* require('../assets/Cloud.png') */}
            </View>
            
            <View style={{flex:0.2,alignItems:'center'}}>
              <Text style={{fontSize:46,fontWeight:'bold',color:"white"}}>{data?.current?.temp_c}&#176;</Text>
              <Text style={{fontSize:30,fontStyle:'italic',color:"white"}}>{data?.current?.condition?.text}</Text>
            </View>
            <ScrollView style={{flex:0.3,borderWidth:3,borderRadius:10}} horizontal>
            <View style={styles.box}>
                <Text style={{alignSelf:'center',fontSize:18,color:'white',marginBottom:20}}> 17</Text>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                
                <Text style={{alignSelf:'center',fontSize:18,color:'white',marginTop:20}}>23&#176;</Text>
              </View>
              

            </ScrollView>
            
            <View style={{flex:0.02}}></View>
            
            
            
            
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box: {
    flex:1,
    width: 100, 
    height: 160, 
    // backgroundColor: 'rgba(255, 255, 255, 0.5)' ,
    //'rgba(255, 255, 255, 0.5)'
    margin: 10,
    // borderWidth:1,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
 // const [showSearch, toggleSearch] = useState(false);
 
  // const [loading, setLoading] = useState(true);
  // const [weather, setWeather] = useState({})


  

 

  // useEffect(()=>{
  //   fetchMyWeatherData();
  // },[]);

  // const fetchMyWeatherData = async ()=>{
  //   let myCity = await getData('city');
  //   let cityName = 'Islamabad';
  //   if(myCity){
  //     cityName = myCity;
  //   }
  //   fetchWeatherForecast({
  //     cityName,
  //     days: '7'
  //   }).then(data=>{
  //     // console.log('got data: ',data.forecast.forecastday);
  //     setWeather(data);
  //     setLoading(false);
  //   })
    
  // }

  // const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  // const {location, current} = weather;


