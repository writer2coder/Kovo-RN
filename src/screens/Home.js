import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Kovo</Text>
            </View>
            <Image
                style={styles.image}
                source={require('../../assets/property/atv2.jpg')}
            />
            <Text style={styles.hash}>#Kovo</Text>
            <Button
                title="Search"
                onPress={() => navigation.navigate('Search')}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection: 'column',
        flex:1,
        paddingTop:40,
        alignItems:'center',
        backgroundColor:'gray',
    },
    title:{
        fontSize: 50,
        fontWeight:'bold',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius:10,
        padding: 10,
        marginBottom: 10,
    },
    hash:{
        fontSize: 18,
        alignItems: 'center',
        color: 'green',
        fontWeight: 'bold',
        backgroundColor: 'white',
    },
    image:{
        borderRadius: 8,
        width: 350,
        height: 350,

    }
});

export default HomeScreen;


