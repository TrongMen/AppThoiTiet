import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { debounce } from "lodash";
// import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import { weatherImages } from '../constants';
import axios from 'axios';

export default function Screen1({route,navigation}) {
//   const navigation=useNavigation();
//  console.log(route.params.name);
 const [data, setData] = useState([]);

  const name_country = (data? data.name : "Ho Chi Minh"  );
  const country = route.params.name;
  

    const [loading, setLoading] = useState(true);
   const [weather, setWeather] = useState({})

   
  // useEffect(()=>{
  //   fetchMyWeatherData();
  // },[]);

  // const fetchMyWeatherData = async ()=>{
  //   let myCity = await getData1('city');
  //   let cityName = 'HaNoi';
  //   if(myCity){
  //     cityName = myCity;
  //   }
  //   fetchWeatherForecast({
  //     cityName,
  //     days: '7'
  //   }).then(data1=>{
  //     setWeather(data1);
  //     setLoading(false);
  //   })
    
  // }



  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=5ce75f05e28643d1965152042232011&q=${country}&days=7&aqi=no&alerts=no`
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy thông tin thời tiết:", error);
      }
    };
    getWeather();
  }, []);

  const[forecast,setForecast]=useState([]);
   setForecast(data.forecast);
  console.log(forecast);
  return (
    <View style={styles.container}>
          <View style={{flex:1,backgroundColor:'#2B7C7C'}}>
          <View style={{flex:0.05,paddingLeft:'4%',paddingTop:'2%',flexDirection:'row',paddingRight:'4%'}}>
            <TouchableOpacity style={{width:48,height:48,borderRadius:35}} onPress={()=>navigation.goBack()}>
              <Image style={{width:40,height:40}} source={require('../assets/arrow.png')} ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{width:48,height:48,borderRadius:35,marginLeft:270}}   onPress={()=>navigation.navigate("Screen2",{data})}>
            {/* onPress={()=>navigation.navigate("Screen2")} */}
              <Image style={{width:40,height:40}} source={require('../assets/add.png')} ></Image>
            </TouchableOpacity>
          </View>
            <View style={{flex:0.1,alignItems:'center'}}>
              <Text style={{fontSize:40,fontWeight:'bold',color:"white"}}>{data?.location?.name}</Text>
            </View>
            <View style={{flex:0.3,alignItems:'center'}}> 
              <Image style={{width:"66%",height:"100%",alignItems:'center'}} source={weatherImages[data?.current?.condition?.text || 'other']}  ></Image>
              {/* require('../assets/Cloud.png') */}
            </View>
            
            <View style={{flex:0.2,alignItems:'center'}}>
              <Text style={{fontSize:50,fontWeight:'bold',color:"white"}}>{data?.current?.temp_c}&#176;</Text>
              <Text style={{fontSize:40,fontStyle:'italic',color:"white"}}>{data?.current?.condition?.text}</Text>
            </View>
            <View style={{flex:0.1,alignItems:'center',flexDirection:'row'}}>
              <View style={{flex:0.5,flexDirection:'row',paddingLeft:'4%'}}>
                <Image style={{width:45,height:50}} source={require('../assets/wind.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> {data?.current?.wind_kph} km</Text>
              </View>
              <View style={{flex:0.5,flexDirection:'row'}}>
                <Image style={{width:37,height:49}} source={require('../assets/water.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}> {data?.current?.humidity} %</Text>
              </View>
              <View style={{flex:0.5,flexDirection:'row'}}>
                <Image style={{width:38,height:40}} source={require('../assets/sunn.png')}></Image>
                <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>  {data?.current?.uv} </Text>
              </View>

            </View>
            <View style={{flex:0.05,flexDirection:'row',paddingLeft:'4%'}}>
                 <Image style={{width:31,height:32,alignItems:'center'}} source={require('../assets/daily.png')}></Image>
                 <Text  style={{alignSelf:'center',fontSize:18,color:'white'}}>  Các ngày trong tuần</Text>
              </View>
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


//   const [showSearch, toggleSearch] = useState(false);
 


  // const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  // const {location, current} = weather;