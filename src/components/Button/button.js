import React from "react";
import { TouchableOpacity , Text } from "react-native";
import styles from "./buttonStyle";

const Button = ({text,Press}) => {
    

    return(
        <TouchableOpacity style={styles.container} onPress={Press}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    )}

export default Button