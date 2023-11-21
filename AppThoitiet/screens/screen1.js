import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import { weatherImages } from '../constants';
import Boxday from '../component/boxday';
export default function Screen1() {
  const navigation=useNavigation();
  const [showSearch, toggleSearch] = useState(false);
 
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({})


  

 

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
  return (
    <View style={styles.container}>
          <View style={{flex:1,backgroundColor:'#2B7C7C'}}>
          <View style={{flex:0.05,paddingLeft:'4%',paddingTop:'2%',flexDirection:'row',paddingRight:'4%'}}>
            <TouchableOpacity style={{width:48,height:48,borderRadius:35}} onPress={()=>navigation.goBack()}>
              <Image style={{width:40,height:40}} source={require('../assets/arrow.png')} ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{width:48,height:48,borderRadius:35,marginLeft:270}} onPress={()=>navigation.navigate("Screen2")}>
              <Image style={{width:40,height:40}} source={require('../assets/add.png')} ></Image>
            </TouchableOpacity>
          </View>
            <View style={{flex:0.1,alignItems:'center'}}>
              <Text style={{fontSize:40,fontWeight:'bold',color:"white"}}>Hồ Chí Minh</Text>
            </View>
            <View style={{flex:0.3,alignItems:'center'}}> 
              <Image style={{width:"66%",height:"97%",alignItems:'center'}} source={require('../assets/Cloud.png')} ></Image>
              {/* require('../assets/Cloud.png') */}
            </View>
            
            <View style={{flex:0.2,alignItems:'center'}}>
              <Text style={{fontSize:50,fontWeight:'bold',color:"white"}}>22&#176;</Text>
              <Text style={{fontSize:40,fontStyle:'italic',color:"white"}}>Trời nhiều mây</Text>
            </View>
            <View style={{flex:0.1,alignItems:'center',flexDirection:'row'}}>
              <View style={{flex:0.5,flexDirection:'row',paddingLeft:'4%'}}>
                <Image style={{width:45,height:50}} source={require('../assets/wind.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>  22km</Text>
              </View>
              <View style={{flex:0.5,flexDirection:'row'}}>
                <Image style={{width:37,height:49}} source={require('../assets/water.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>  23%</Text>
              </View>
              <View style={{flex:0.5,flexDirection:'row'}}>
                <Image style={{width:38,height:40}} source={require('../assets/sunn.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>  7:10</Text>
              </View>

            </View>
            <View style={{flex:0.05,flexDirection:'row',paddingLeft:'4%'}}>
                 <Image style={{width:31,height:32,alignItems:'center'}} source={require('../assets/daily.png')}></Image>
                 <Text  style={{alignSelf:'center',fontSize:18,color:'white'}}>  Các ngày trong tuần</Text>
              </View>
            <View style={{flex:0.02}}></View>
            
            <ScrollView style={{flex:0.2,paddingLeft:'2%'}} horizontal>
                <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
              </View>
              <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
              </View>
              <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
              </View>
              <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
              </View>
              <View style={styles.box}>
                <Image style={{width:60,height:55,alignItems:'center'}} source={require('../assets/Rain.png')} ></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> Thứ hai</Text>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>23&#176;</Text>
              </View>
            </ScrollView>
            
            
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)' ,
    //'rgba(255, 255, 255, 0.5)'
    margin: 10, // Khoảng cách giữa các view
    borderWidth:1,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});



