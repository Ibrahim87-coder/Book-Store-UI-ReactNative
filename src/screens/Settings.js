import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const Settings = () => {
    return (
        <View style={styles.body}>
            <Text style={{...FONTS.h1,color: COLORS.white, padding: SIZES.padding}}>Settings page</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    body:{
        backgroundColor:COLORS.black,
        height:'100%'
    }
})
