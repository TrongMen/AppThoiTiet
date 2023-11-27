import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { weatherImages } from "../constants";
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

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          
          `https://api.weatherapi.com/v1/forecast.json?key=5ce75f05e28643d1965152042232011&q=${country}&days=7&aqi=no&alerts=no`
        );
        // console.log("fake 1",response.data);
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
        console.log("fake data location 12",dtr);
      }
        }, 250);
       return () => clearTimeout(timeoutId);
},[data,dtr]);

  console.log("fake data dtr",dtr);
  
  const name_city = data?.location?.name;

  // console.log(name_city);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://i.pinimg.com/originals/b6/3b/80/b63b80df688f06feb320646ab7f2f822.gif",
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
                source={require("../assets/arrow.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 48, height: 48, borderRadius: 35,marginLeft: 270 }}
              onPress={() => {
                // console.log("fake data 2 ",dtr);
                dispatch(addItem(dtr)); 
                navigation.goBack();
                console.log("fake data data_Home",data_WT);
              }}

            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/add.png")}
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
              style={{ width: "66%", height: "115%", alignItems: "center" }}
              source={weatherImages[data?.current?.condition?.text || "other"]}
            ></Image>
          </View>

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
              {data?.current?.temp_c}&#176;
            </Text>
            <Text style={{ fontSize: 40, fontStyle: "italic", color: "white" }}>
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
                source={require("../assets/wind.png")}
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
                source={require("../assets/water.png")}
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
                source={require("../assets/sunn.png")}
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
              source={require("../assets/daily.png")}
            ></Image>
            <Text style={{ alignSelf: "center", fontSize: 18, color: "white" }}>
              {" "}
              Các ngày trong tuần
            </Text>
          </View>
          <View style={{ flex: 0.02 }}></View>
          <FlatList
            style={{ flex: 0.2, paddingLeft: "2%", borderWidth: 2 }}
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
                    source={
                      weatherImages[item?.day?.condition?.text || "other"]
                    }
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
