import { weatherImagesDay } from "./weatherDay";

export const isDaytime = () =>{
    const currentHour=new Date().getHours();
    if(currentHour>=6 && currentHour<=18){
        return weatherImagesDay;
    }else{
        return weatherImages;
    }
}