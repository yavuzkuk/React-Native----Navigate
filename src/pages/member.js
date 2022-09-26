import React,{useState} from "react";
import { View,Text, Alert } from "react-native";
import Input from "../components/TextInput/textInput";
import Button from "../components/Button";

const Member = ({navigation}) => {

    const [userName,setUserName] = useState()
    const [userSurname,setUserSurname] = useState()
    const [userAge,setUserAge] = useState()
    const [userMail,setUserMail] = useState()
    const [userAbility,setUserAbility] = useState()

    const handleSubmit = () => {
        if(!userName || !userSurname || !userAge || !userMail || !userAbility)
            {return (Alert.alert("Boş geçilemez"))}

        const UserInfo = 
        {
            Name:userName,
            Surname:userSurname,
            Age:userAge,
            Mail:userMail,
            Ability:userAbility
        }
        Alert.alert("Kayıt Başarılı")

        navigation.navigate("Member Result Screen",{UserInfo})

        setUserName("")
        setUserSurname("")
        setUserAge("")
        setUserMail("")
        setUserAbility("")
    }

    return(
        <View>
            <Input label={"Ad"} placeholder="Üye ismini giriniz" onChangeText={setUserName} textValue={userName}></Input>
            <Input label={"Soyad"} placeholder="Üye soyad giriniz" onChangeText={setUserSurname} textValue={userSurname}></Input>
            <Input label={"Yaş"} placeholder="Üye yaşını giriniz" onChangeText={setUserAge} textValue={userAge}></Input>
            <Input label={"E-posta"} placeholder="E-posta adresini giriniz" onChangeText={setUserMail} textValue={userMail}></Input>
            <Input label={"Yetkinlik Alanları"} placeholder="Yetkinliklerinizi girin" onChangeText={setUserAbility} textValue={userAbility}></Input>
            <Button text={"Kaydet"} Press={handleSubmit}></Button>
        </View>
    )}

export default Member