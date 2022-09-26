import React from "react";
import { View,Text,StyleSheet } from "react-native";

const MemberResult = ({route,navigation}) => {

    const user = route.params.UserInfo;
    console.log(user)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt tanımlandı!</Text>
            <Text style={styles.label}>Ad: {user.Name}</Text>
            <Text style={styles.label}>Soyad: {user.Surname}</Text>
            <Text style={styles.label}>Yaş: {user.Age}</Text>
            <Text style={styles.label}>Mail: {user.Mail}</Text>
            <Text style={styles.label}>Beceri: {user.Ability}</Text>
        </View>
    )
}

export default MemberResult

const styles = StyleSheet.create({
    title:{fontSize:25,fontWeight:"bold",textAlign:"center",color:"black"},
    container:{flex:1,padding:10,justifyContent:"center"},
    label:{fontSize:15,fontWeight:"bold",color:"black"}
})