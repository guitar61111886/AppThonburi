import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Text, View, Image, FlatList } from 'react-native';
//import { Card } from 'react-native-paper';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import useFetch from '../useFetch';

// const Home = () => {
//     const data = [
//         { id: 1, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
//         { id: 2, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
//         { id: 3, date: "22 ธันวาคม 2564", List: "Sulfa" },
//         { id: 4, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
//         { id: 5, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
//         { id: 6, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
//         { id: 7, date: "22 ธันวาคม 2564", List: "Sulfa" },
//         { id: 8, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
//         { id: 9, date: "20 ธันวาคม 2564", List: "Rivotni 2 mg." },
//         { id: 10, date: "21 ธันวาคม 2564", List: "SIMVASTATION 10 mg.TAB" },
//         { id: 11, date: "22 ธันวาคม 2564", List: "Sulfa" },
//         { id: 12, date: "23 ธันวาคม 2564", List: "Rivotni 2 mg." },
//     ]

//     const renderList = ((item) => {
//         return (
//             <Card style={styles.mycard} >
//                 <View style={styles.cardView}>
//                     <Image
//                         style={{ width: 60, height: 60, borderRadius: 30 }}
//                         source={{ uri: "https://media.istockphoto.com/photos/experimental-antiviral-drug-molnupiravir-picture-id1290262013?b=1&k=20&m=1290262013&s=170667a&w=0&h=lzkzB_sm4iL8I_6kUuTMKwc3FswZdKwT6mEFRH4byxk=" }}
//                     />

//                     <View style={{ marginLeft: 10 }}>
//                         <Text style={styles.text}>{item.date}</Text>
//                         <Text style={styles.text}>{item.List}</Text>
//                     </View>
//                 </View>
//             </Card>
//         )
//     })


//     //    {renderList}
//     return (
//         <View>
//             <View style={styles.paddingServiceText}>
//                 <Text style={styles.serviceText}>ประวัติการเข้ารับบริการ</Text>
//             </View>

//             <FlatList
//                 data={data}
//                 renderItem={({ item }) => {
//                     return renderList(item)
//                 }}
//                 keyExtractor={item => `${item.id}`}
//             />
//         </View>
//     )
// }

// function App() {
//     const { data, loading, error } = useFetch("http://localhost:3000/getdata_withQuery");

//     if (loading) return <h1>Loading...</h1>
//     if (error) console.log(error);

//     return (
//         <View>
//             <View style={styles.paddingServiceText}>
//                 <Text style={styles.serviceText}>ประวัติการเข้ารับบริการ</Text>
//             </View>
//             <Text>{data?.PbsChtNum} : {data?.PbsPatNam}</Text>
//         </View>

//     );

// }



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    componentDidMount() {
        fetch('http://10.99.1.145:3000/getdata_withQuery').then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                })
            })
    }

    // _renderItem = ({ item }) => (
    //     <TouchableOpacity onPress={() => alert(item.PbsPatNam)}>
    //         <Text>{item.PbsChtNum}</Text>
    //     </TouchableOpacity>
    // );

    _renderItem = ({ item }) => (
        <Text style={{fontSize: 20,fontWeight: '500'}}>{item.PbsChtNum} </Text>
    );

    _Name = ({ item }) => (
        <Text style={{fontSize: 20,fontWeight: '500'}}>{item.PbsPatNam} </Text>
    );

    _surName = ({ item }) => (
        <Text style={{fontSize: 20,fontWeight: '500'}}>{item.PbsSurNam} </Text>
    );

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator size="large" animating />
                </View>
            )

        } else {
            return (
                <View style={styles.container}>
                    <Text style={{ color: '#455875', fontSize: 20, marginLeft: 80 }}>
                        HN-
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index}
                        />
                    </Text>

                    <Text style={{fontSize: 18,fontWeight: '500'}}>ชื่อ
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this._Name}
                            keyExtractor={(item, index) => index}
                        />

                        นามสุกล <FlatList
                            data={this.state.dataSource}
                            renderItem={this._surName}
                            keyExtractor={(item, index) => index}
                        />
                    </Text>
                    <View style={styles.paddingServiceText}>
                        <Text style={styles.serviceText}>ประวัติการเข้ารับบริการ</Text>
                    </View>
                    {/* <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                    /> */}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        backgroundColor: '#ece6cd',
        // marginTop: 10
    },
    container: {
        //flex: 1,
        // justifyContent:'center',
        // alignItems: 'center',
        marginTop: 30
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

// export default Home;