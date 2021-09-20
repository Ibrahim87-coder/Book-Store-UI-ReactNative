import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const Search = () => {
    return (
        <View style={styles.body}>
            <Text style={{...FONTS.h1,color: COLORS.white, padding: SIZES.padding}}>Search page</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    body:{
        backgroundColor:COLORS.black,
        height:'100%'
    }
})
