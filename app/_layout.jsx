import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";

const RootLayout = () => {
  
  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded && !error])
  
  if(!fontsLoaded && !error) return null;

  return (
   <Stack>
     <Stack.Screen name="index" options={{headerShown: false}} />
     <Stack.Screen name="(auth)" options={{headerShown: false}} />     
     <Stack.Screen name="(tabs)" options={{headerShown: false}} />
     {/*<Stack.Screen name="/search/[query]" options={{headerShown: false}} />*/}     
     
   </Stack>
  )
  }
export default RootLayout;