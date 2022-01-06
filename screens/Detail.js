import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Title,Card } from 'react-native-paper';

const Detail = () => {
    return (
        <View style={styles.root}>
            {/* <Text style={styles.serviceText}>วันที่รับยา</Text>
            <Text style={styles.serviceText}>ชื่อยา </Text> */}
            <View style={{ alignItems: "center" }}>
                <Title>วันที่รับยา</Title>
                <Text style={styles.serviceText}>ชื่อยา</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 250, height: 250, marginTop: 10 }}
                    source={{ uri: "https://images.unsplash.com/photo-1584912262782-d828d56a1d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80" }}
                />
            </View>

            {/* <View style={{alignItems:"center"}}>
                <Title>วันที่รับยา</Title>
                <Text style={styles.serviceText}>ชื่อยา</Text>
            </View> */}

            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    serviceText: {
        color: '#617987',
        fontWeight: '300',
        fontSize: 20,
        fontFamily: "Cochin",
        textAlign: 'center',
    },
    myCard:{
        marginTop: 3
    },
    cardContent:{
        flexDirection: "row"
    },
    paddingServiceText: {
        padding: 15,
        backgroundColor: '#7199d9',
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginHorizontal: 90,
    },
    serviceText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 20,
        fontFamily: "Cochin",
        textAlign: 'center',
    },
})
export default Detail