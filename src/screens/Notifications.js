import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const Notifications = () => {
    return (
        <View style={styles.body}>
            <Text style={{...FONTS.h1,color: COLORS.white, padding: SIZES.padding}}>notifications page</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    body:{
        backgroundColor:COLORS.black,
        height:'100%'
    }
})
