
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
import { debounce } from "lodash";
import { weatherImages } from "../constants";

import axios from "axios";
export default function Screen2({ route, navigation }) {

  // const country = route.params.name;
  const data = route.params.data;
  const city = route.params.name;
  console.log("forecastday: ", data);
  

  return (
    <View style={styles.container}>
      {/* <View style={{flex:1}}> */}
      <ImageBackground style={{flex:1}}
        source={{uri: "https://i.pinimg.com/originals/b6/3b/80/b63b80df688f06feb320646ab7f2f822.gif"}}>
      {/* <View style={{ flex: 1 }}> */}
        {/* <View style={{flex:0.5}}> */}
          <View style={{height: 50,paddingLeft: "4%", paddingTop: "2%" }}>
            <TouchableOpacity style={{width:48,height:48,borderRadius:35}}
             onPress={() => navigation.goBack()}>
              {/* onPress={()=>navigation.goBack()} */}
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/arrow.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{height:60, alignItems: "center" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
              {city}
            </Text>
          </View>
          <View style={{ height:220, alignItems: "center" }}>
            <Image
              style={{ width: "66%", height: 200, alignItems: "center" }}
              source={weatherImages[data?.day?.condition?.text || "other"]}
            ></Image>
            {/* require('../assets/Cloud.png') */}
          </View>

          <View style={{height:100, alignItems: "center" }}>
            <Text style={{ fontSize: 46, fontWeight: "bold", color: "white" }}>
              {data?.day.avgtemp_c}&#176;
            </Text>
            <Text style={{ fontSize: 30, fontStyle: "italic", color: "white" }}>
              {data?.date}
            </Text>
          </View>
          <View style={{flex:0.02}}></View>
        {/* </View> */}
        <View style={{height:260,borderWidth: 1,borderRadius: 10}}>
        {/* ,marginBottom: 10 */}
          <FlatList
            style={{flex:1, borderWidth: 3, borderRadius: 10 }}
            
            data={data.hour}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "white",
                    // marginBottom: 20,
                    justifyContent:'center'
                  }}
                >
                  {" "}
                  {item.time}
                </Text>
                <Image
                  style={{ width: 60, height: 55, alignItems: "center" }}
                  source={weatherImages[item?.condition?.text || "other"]}
                ></Image>

                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "white",
                    marginTop: 20,
                  }}
                >
                  {item.temp_c}&#176;
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      {/* </View> */}
      </ImageBackground>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    width: "88%",
    height: "auto",
    // backgroundColor: 'rgba(255, 255, 255, 0.5)' ,
    //'rgba(255, 255, 255, 0.5)'
    margin: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
