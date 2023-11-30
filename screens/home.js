import {TouchableOpacity,FlatList,ImageBackground ,Text,Image} from "react-native";
import { TextInput } from "react-native";
import { View, StyleSheet} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React, {  useEffect, useState } from "react";
import {useSelector ,useDispatch} from 'react-redux';
import {delItem} from '../redux/action';


export default function Home({ navigation }) {
  const [country, setCountry] = useState("");
  const data_WT = useSelector((state) => state.item);
  const dispatch_Del = useDispatch();
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
          <TouchableOpacity style={{width:60,alignItems:'center'}}
            onPress={() => {
              navigation.navigate("Screen1", { name: country });
            }}
          >
            <EvilIcons name="search" size={35} color="black" />
          </TouchableOpacity>
          <TextInput
            style={{ color: "gray", width: "100%", height: 50,fontSize:20}}
            placeholder="Nhập tên thành phố"
            onChangeText={setCountry}
          ></TextInput>
        </View>
        <FlatList
            data={dtFlatlist}
            renderItem={({ item }) => (
        <View style={{flex:1,height:125,marginTop:20,borderRadius:15,flexDirection:'row'}}>
          <TouchableOpacity style={{ width:320,height:125,borderRadius:20}}
           onPress={()=>{
            navigation.navigate("Screen1",{ name: item.name });
           }}>
            <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/originals/b6/3b/80/b63b80df688f06feb320646ab7f2f822.gif'}}>
          <View style={{flexDirection: 'row'}}> 
            <View style={{marginLeft:10,width:150}}>
              <Text style={{ fontSize:30, fontWeight: 500, color: 'white',marginTop:10}}>{item.name}</Text>
            </View>
            <View style={{marginLeft:10,width:150,alignItems:'center'}}>
             <Text style={{ fontSize: 50, fontWeight: 500, color: 'white'  }}>{item?.temp_c}&#176;</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',marginLeft:10}}>
            <View style={{flex:1}}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: 'white',marginTop:25}}>{item?.condition}</Text>
            </View>
            <View style={{flex:1}}>
            <Text style={{ fontSize: 23, fontWeight: 500, color: 'white',marginTop:25 }}>F:{item.temp_f}&#176; W:{item.wind_mph}&#176;</Text>
            </View>
          </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={{width:80,height:125,backgroundColor:'#D41A1A',paddingRight:"0.5%",justifyContent:'center',marginLeft:3}}
        onPress={()=>{
          dispatch_Del(delItem(item.name));
        }}>
            <Image style={{width:30,height:43,marginLeft:6}} source={require('../assets/icons/delete.png')}></Image>
        </TouchableOpacity>
        </View>
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
