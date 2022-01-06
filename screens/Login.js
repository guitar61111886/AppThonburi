import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

const Login = () => {
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [modal,setModal] = useState(false)

    return (
        <View style={styles.root}>
            
            <TextInput
                label='User'
                style = {styles.inputStyle}
                value={User}
                theme={theme}
                mode="outlined"
                onChangeText={text => setText(text)}
            />
            <TextInput
                label='Password'
                style = {styles.inputStyle}
                value={Password}
                theme={theme}
                mode="outlined"
                onChangeText={text => setText(text)}
            />
            <Button
                onPress={() => console.log("Login")}
                style ={styles.inputStyle}>
                    Login
                </Button>
        </View>
    )
}

const theme = {
    colors:{
        primary: "#006aff"
    }
}

const styles =StyleSheet.create({
    root:{
        flex: 1
    },
    inputStyle:{
        margin: 5
    },
    modalView:{
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    },
    modalButtonView:{
        flexDirection: "row",
        justifyContent: 'space-around',
        padding:10
    },
})
export default Login