import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { weatherImages } from "../constants/weatherNight";
import { weatherImagesDay } from "../constants/weatherDay";
import {isDaytime} from '../constants/dayTime'
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/action";

export default function Screen1({ route, navigation }) {
  const [data, setData] = useState([]);
  const country = route.params.name;
  const [forecast, setForecast] = useState([]);
  const dispatch = useDispatch();
  const data_WT = useSelector((state) => state.item);
  const [dtr,setDtr]=useState({});
  function parseHourAsInt(hourItem) {
    const hoursAsInt = parseInt(hourItem.slice(10, 13));
    if (hoursAsInt >= 6 && hoursAsInt <= 18) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          
          `https://api.weatherapi.com/v1/forecast.json?key=5ce75f05e28643d1965152042232011&q=${country}&days=7&aqi=no&alerts=no`
        );
        console.log("fake 1",response.data);
        setData(response.data);
        setForecast(response.data.forecast);
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy thông tin thời tiết:", error);
      }
    };
    getWeather();
  }, [country]);
  

  useEffect(() =>{
    const timeoutId = setTimeout(() => {
      if(data){
        setDtr({
          name:data.location.name,
          temp_c:data.current.temp_c,
          temp_f:data.current.temp_f,
          condition:data.current.condition.text,
          wind_mph:data.current.wind_mph
        })
        
      }
        }, 10);
       return () => clearTimeout(timeoutId);
},[data,dtr]);

  
  
  const name_city = data?.location?.name;

 
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://i.pinimg.com/originals/96/df/d4/96dfd411ab0e68f8bc1eb47e4eee8771.gif",
          }}
        >
          <View
            style={{
              flex: 0.05,
              paddingLeft: "4%",
              paddingTop: "2%",
              flexDirection: "row",
              paddingRight: "4%",
            }}
          >
            <TouchableOpacity
              style={{ width: 48, height: 48, borderRadius: 35 }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/icons/arrow.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 48, height: 48, borderRadius: 35,marginLeft: 270 }}
              onPress={() => {
                
                dispatch(addItem(dtr)); 
                navigation.goBack();
              }}

            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/icons/add.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.1, alignItems: "center" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
              {data?.location?.name}
            </Text>
          </View>
          <View style={{ flex: 0.3, alignItems: "center" }}>
         
            <Image
              style={{ width: "66%", height: 256 , alignItems: "center" }}
              source={isDaytime() ? weatherImagesDay[data?.current?.condition?.text || "other"]:weatherImages[data?.current?.condition?.text || "other"]}
            ></Image>
          </View>

          <View style={{ flex: 0.2, alignItems: "center",justifyContent:'flex-end' }}>
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
              {data?.current?.temp_c}&#176;
            </Text>
            <Text style={{ fontSize: 22, fontStyle: "italic", color: "white" }}>
              {data?.current?.condition?.text}
            </Text>
          </View>
          <View
            style={{ flex: 0.1, alignItems: "center", flexDirection: "row" }}
          >
            <View
              style={{ flex: 0.5, flexDirection: "row", paddingLeft: "12%" }}
            >
              <Image
                style={{ width: 45, height: 50 }}
                source={require("../assets/icons/wind.png")}
              ></Image>
              <Text
                style={{ alignSelf: "center", fontSize: 18, color: "white" }}
              >
                {" "}
                {data?.current?.wind_kph} km
              </Text>
            </View>
            <View style={{ flex: 0.5, flexDirection: "row" }}>
              <Image
                style={{ width: 37, height: 49 }}
                source={require("../assets/icons/water.png")}
              ></Image>
              <Text
                style={{ alignSelf: "center", fontSize: 18, color: "white" }}
              >
                {" "}
                {data?.current?.humidity} %
              </Text>
            </View>
            <View style={{ flex: 0.5, flexDirection: "row" }}>
              <Image
                style={{ width: 38, height: 40 }}
                source={require("../assets/icons/sunn.png")}
              ></Image>
              <Text
                style={{ alignSelf: "center", fontSize: 18, color: "white" }}
              >
                {" "}
                {data?.current?.uv}{" "}
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.05, flexDirection: "row", paddingLeft: "4%" }}>
            <Image
              style={{ width: 31, height: 32, alignItems: "center" }}
              source={require("../assets/icons/daily.png")}
            ></Image>
            <Text style={{ alignSelf: "center", fontSize: 18, color: "white" }}>
              {" "}
              Các ngày trong tuần
            </Text>
          </View>
          <View style={{ flex: 0.02 }}></View>
          <FlatList
            style={{ flex: 0.19, paddingLeft: "2%", borderWidth: 2 }}
            horizontal
            data={forecast.forecastday}
          
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Screen2", {
                    data: item,
                    name: name_city,
                  })
                }
              >
                <View style={styles.box}>
                  <Image
                    style={{ width: 60, height: 55, alignItems: "center" }}
                    source={isDaytime() ?weatherImagesDay[item?.day?.condition?.text || "other"]:weatherImages[item?.day?.condition?.text || "other"] }
                  ></Image>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 18,
                      color: "white",
                    }}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 18,
                      color: "white",
                    }}
                  >
                    {item?.day?.avgtemp_c} &#176;
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item,index) => index}
          />
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
