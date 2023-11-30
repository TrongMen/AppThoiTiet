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
import { isDaytime } from "../constants/dayTime";

export default function Screen2({ route, navigation }) {
  const data = route.params.data;
  const city = route.params.name;
  console.log("forecastday: ", data);
  function parseHourAsInt(hourItem) {
    const hoursAsInt = parseInt(hourItem.slice(10, 13));
    if (hoursAsInt >= 6 && hoursAsInt <= 18) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "	https://i.pinimg.com/originals/96/df/d4/96dfd411ab0e68f8bc1eb47e4eee8771.gif",
        }}
      >
        <View style={{ height: 50, paddingLeft: "4%", paddingTop: "2%" }}>
          <TouchableOpacity
            style={{ width: 48, height: 48, borderRadius: 35 }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/icons/arrow.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ height: 60, alignItems: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
            {city}
          </Text>
        </View>
        <View style={{ height: 220, alignItems: "center" }}>
          <Image
            style={{ width: "66%", height: 256, alignItems: "center" }}
            source={
              isDaytime()
                ? weatherImagesDay[data?.day?.condition?.text || "other"]
                : weatherImages[data?.day?.condition?.text || "other"]
            }
          ></Image>
        </View>

        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
            {data?.day.avgtemp_c}&#176;
          </Text>
          <Text style={{ fontSize: 22, fontStyle: "italic", color: "white" }}>
            {data?.date}
          </Text>
        </View>
        <View style={{ flex: 0.02 }}></View>
        <View style={{ height: 260, borderWidth: 1, borderRadius: 10 }}>
          <FlatList
            style={{ flex: 1, borderWidth: 3, borderRadius: 10 }}
            data={data.hour}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "white",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  {item.time}
                </Text>
                {parseHourAsInt(item.time) ? (
                  <Image
                    style={{ width: 60, height: 55, alignItems: "center" }}
                    source={weatherImagesDay[item?.condition?.text || "other"]}
                  ></Image>
                ) : (
                  <Image
                    style={{ width: 60, height: 55, alignItems: "center" }}
                    source={weatherImages[item?.condition?.text || "other"]}
                  ></Image>
                )}
                

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
            keyExtractor={(item, index) => index}
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
  box: {
    flex: 1,
    width: "88%",
    height: "auto",
    margin: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
