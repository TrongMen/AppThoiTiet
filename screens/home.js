import { Image, TouchableOpacity,FlatList,ImageBackground } from "react-native";
import { TextInput } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {useSelector ,useDispatch} from 'react-redux';
import Redux from "../redux/redux";
import {addItem,delItem} from '../redux/action';
import reducer from "../redux/rootRedux";

export default function Home({ navigation }) {
  const [country, setCountry] = useState("");
  const data_WT = useSelector((state) => state.item);
  const [dtFlatlist,setDtFlatlist]=useState(data_WT);
  useEffect(() =>{
    setDtFlatlist(data_WT)
},[data_WT]);
  // console.log("fakedata dataHome",data_WT);

  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1}} source={{uri:'https://i.makeagif.com/media/10-19-2019/E2Kpsq.gif'}}>
      <View
        style={{
          flex: 1,
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 35, fontWeight: 500, color: "white" }}>
            Thời tiết
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 50,
            borderRadius: 10,
            marginTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen1", { name: country });
              // dispatch(addItem(dtr))
            }}
          >
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={{ color: "gray", width: "100%", height: 50 }}
            placeholder="Tìm tên thành phố/sân bay"
            onChangeText={setCountry}
          ></TextInput>
        </View>
        <FlatList
            //style={{ backgroundColor:'#363062',width:'100%',height:125,marginTop:50,borderRadius:10}}
            data={dtFlatlist}
            renderItem={({ item }) => (
        <TouchableOpacity style={{ backgroundColor:'#363062',width:'100%',height:125,marginTop:50,borderRadius:10}}
         onPress={()=>{
          navigation.navigate("Screen1",{ name: item.name });
        }}>
        <View style={{flexDirection: 'row'}}> 
          <View style={{marginLeft:10}}>
            <Text style={{ fontSize:30, fontWeight: 500, color: 'white',marginTop:20 }}>{item.name}</Text>
     
          </View>
          <Text style={{ fontSize: 50, fontWeight: 500, color: 'white' ,marginLeft:150 }}>{item?.temp_c}&#176;</Text>
        </View>

        <View style={{flexDirection:'row',marginLeft:10}}>
          <Text style={{ fontSize: 20, fontWeight: 500, color: 'white',marginTop:25 }}>{item?.condition}</Text>
          <Text style={{ fontSize: 23, fontWeight: 500, color: 'white',marginTop:25 ,marginLeft:150 }}>F:{item.temp_f}&#176; W:{item.wind_mph}&#176;</Text>
        </View>
        </TouchableOpacity>
      )}

      keyExtractor={(item,index) => index}
      />
      </View>
      </ImageBackground>
      
    </View>
  );
  
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
