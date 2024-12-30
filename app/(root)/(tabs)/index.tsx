import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className={" font-rubik text-3xl my-10"}>Home</Text>
        <Link href="/signin" style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            borderRadius: 5 ,
            margin: 10
        }} >Sign In</Link>
        <Link href="/explore" style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            borderRadius: 5 ,
            margin: 10
        }}  >Explore</Link>
        <Link href="/profile" style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            borderRadius: 5 ,
            margin: 10
        }} >Profile</Link>
        <Link href="/properties/1" style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            borderRadius: 5 ,
            margin: 10
        }} >Property</Link>


    </View>
  );
}
