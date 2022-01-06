import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const Home = () => {
    const data = [
        { id: 1, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
        { id: 2, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
        { id: 3, date: "22 ธันวาคม 2564", List: "Sulfa" },
        { id: 4, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
        { id: 5, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
        { id: 6, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
        { id: 7, date: "22 ธันวาคม 2564", List: "Sulfa" },
        { id: 8, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
        { id: 9, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
        { id: 10, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
        { id: 11, date: "22 ธันวาคม 2564", List: "Sulfa" },
        { id: 12, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://media.istockphoto.com/photos/experimental-antiviral-drug-molnupiravir-picture-id1290262013?b=1&k=20&m=1290262013&s=170667a&w=0&h=lzkzB_sm4iL8I_6kUuTMKwc3FswZdKwT6mEFRH4byxk=" }}
                    />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text style={styles.text}>{item.List}</Text>
                    </View>
                </View>
            </Card>
        )
    })


    //    {renderList}
    return (
        <View>
            <View style={styles.paddingServiceText}>
                <Text style={styles.serviceText}>ประวัติการเข้ารับบริการ</Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        backgroundColor: '#ece6cd',
        // marginTop: 10
    },
    cardView: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 18,
        // marginLeft: 10
    },
    textTitle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
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

export default Home;