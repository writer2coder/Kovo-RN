import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from "../context/BlogContext";
import {Button} from "react-native-web";

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return(
        <View>
            <View style={styles.containerAdd}>
                <TextInput
                    style={styles.add}
                    placeholder = "Search Activities"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
                <TextInput
                    style={styles.addLoc}
                    placeholder = "Search Locations"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    // onChangeText={/*TODO*/}
                />
            </View>
            <View style={styles.addPrice}>
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
        // <View>
        //     <Text style={styles.label}>Enter Title:</Text>
        //     <TextInput
        //         style={styles.input}
        //         value={title}
        //         onChangeText={text => setTitle(text)}
        //     />
        //     <Text style={styles.label}>Enter Content:</Text>
        //     <TextInput
        //         style={styles.input}
        //         value={content}
        //         onChangeText={text => setContent(text)}
        //     />
        //     <Button
        //         onPress={() => addBlogPost(title, content)}
        //         title="Add blog Post"
        //     />
        // </View>
    );
};

const styles = StyleSheet.create({
    containerAdd:{
        flexDirection: 'column',
        backgroundColor:'purple',
        justifyContent: 'center',
        // alignItems: 'stretch',
        // paddingHorizontal:12
    },
    add: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize:16,

    },
    addLoc: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'silver',
        // padding:10,
        marginVertical: 6,
        marginHorizontal: 4,
        fontSize:16
    },
    subLoc:{
        flexDirection: 'row',
        backgroundColor:'purple',
    },
    addPrice: {
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

export default CreateScreen;
