import {View,Image, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";

const Signin = () => {
    return (
        <SafeAreaView className={"bg-white h-full"}>
           <ScrollView contentContainerClassName={"h-full"}>
                <Image source={images.onboarding} className={"w-full h-4/6 "} resizeMode={"contain"} />
                <View className={"p-10"}>
                    <Text className={"text-base text-center      font-bold"}>Welcome to the app</Text>
                </View>

              </ScrollView>

        </SafeAreaView>
    )
}
export default Signin
