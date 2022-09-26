import React from "react";
import { View,Text,TextInput } from "react-native";
import styles from "./textInputStyle"

const Input = ({label,placeholder,onChangeText,textValue}) => {
    return(
        <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            <View style={styles.InputContainer}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} value={textValue}></TextInput>
            </View>
        </View>
    )
}

export default Input