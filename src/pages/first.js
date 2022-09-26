import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Button from "../components/Button";

const First = ({navigation}) => {

    const goToMember = () => {navigation.navigate("Member Screen")}

    return(
    <View style={styles.container}>
        <Text style={styles.textStyle}>KKariyer.net</Text>
        <Button text={"Üye olunuz"} Press={goToMember}></Button>
    </View>
    )}

export default First

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:"center"},
    textStyle:{fontWeight:"bold",fontSize:25,color:"black",textAlign:"center"}  
})