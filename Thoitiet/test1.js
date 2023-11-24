 {/* <ScrollView style={{flex:0.2,paddingLeft:'2%'}} horizontal>
             {/* {
                    weather?.forecast?.forecastday?.map((item,index)=>{
                      const date = new Date(item.date);
                      const options = { weekday: 'long' };
                      let dayName = date.toLocaleDateString('en-US', options);
                      dayName = dayName.split(',')[0];
                        key={index}
                      return (  */}
                      <View style={styles.box}  >
                      <Image style={{width:60,height:55,alignItems:'center'}} source={data?.current?.condition?.icon} ></Image>
                      <Text style={{alignSelf:'center',fontSize:18,color:'white'}}></Text>
                      {/* {dayName}  require('../assets/Rain.png')*/}
                      <Text style={{alignSelf:'center',fontSize:18,color:'white'}}>&#176;</Text>
                      {/* {item?.day?.avgtemp_c} */}
                  </View>
                   {/* )
                   })
        } */}
       
      {/* </ScrollView>  */}