import React from 'react';
import { View,Text, StyleSheet, TextInput } from "react-native";
                                                                                        


const SearchScreen = () => {
        return (

        <View>
            <View style={styles.containerSearch}>
                <TextInput
                    style={styles.search}
                    placeholder = "Search Activities"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
                <TextInput
                    style={styles.searchLoc}
                    placeholder = "Search Locations"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
            </View>
            <View style={styles.subSearch}>
                <TextInput
                    style={styles.searchPrice}
                    placeholder = "Price"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
                <TextInput
                    style={styles.loc}
                    placeholder = "Open"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    containerSearch:{
      flexDirection: 'column',
        backgroundColor:'purple',
        justifyContent: 'center',
        // alignItems: 'stretch',
        // paddingHorizontal:12
    },
    search: {
        height: 500,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize:16,

    },
    searchLoc: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize:16
    },
    subSearch:{
        flexDirection: 'row',
        backgroundColor:'purple',
    },
    searchPrice: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize:12,
    },
    loc: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize: 12
    }

});

export default SearchScreen;


















