import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

export const Header = () => {
    return (
        <View style= {[styles.container, styles.header]}>
            <TouchableOpacity>
            <Image style = {styles.imagestyle} source={require('/Users/gene/Desktop/rnstudy/react-native-styling/src/img/top.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style = {styles.title}>Relationship</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}
             contentContainerStyle={{
                 alignItems: 'flex-start',
                 paddingStart: 10,
             }}
             style={styles.tap}>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButtonStar}>
                <Image style = {styles.imagestyle} source={require('/Users/gene/Desktop/rnstudy/react-native-styling/src/img/highlight.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>가족</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>학교</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>친구</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>직원</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButtonLast}>
                <Text style= {styles.tapTextLast}>+</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <TouchableOpacity style= {{height: 30}}>
                <Image style = {styles.imagestyle} source={require('/Users/gene/Desktop/rnstudy/react-native-styling/src/img/home.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style= {{height: 30}}>
                <Image style = {styles.plusButton} source={require('/Users/gene/Desktop/rnstudy/react-native-styling/src/img/plus.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style= {{height: 30}}>
                <Image style = {styles.imagestyle} source={require('/Users/gene/Desktop/rnstudy/react-native-styling/src/img/relationship.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tapTextLast:{
        color: '#686868',
        fontSize: 30,
        fontWeight: '300',

    },
    tapText: {
        color: '#686868',
        fontWeight: '900',

    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'flex-end',
        flex: 0.6,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingRight: 35,

    },
    contents: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 4.5,
        backgroundColor: 'white',
        height: 660,
    },
    footer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        shadowColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOpacity: 0.3,
        shadowRadius: 7,
        flex: 0.5,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        margin: 25,
    },
    tap: {
        margin: 10,
        height: 40,
        flexDirection: 'row',
        overflow: 'hidden',


    },
    tapButton:{
        backgroundColor: '#EAEAEA',
        borderRadius: 60,
        height: 40,
        width: 55,
        paddingTop: 13,
        paddingStart: 15,
        marginLeft: 7,
        marginRight: 7,
    },
    tapButtonLast:{
        backgroundColor: '#EAEAEA',
        borderRadius: 60,
        height: 40,
        width: 45,
        paddingLeft:14,
        marginLeft: 7,
        marginRight: 7,
    },
    tapButtonStar:{
        marginLeft: 7,
        marginRight: 7,

    },
    plusButton:{
        marginTop: -60,
    }


})