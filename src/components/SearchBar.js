import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    const {backgroundStyle, inputStyle, iconStyle} = styles
    return (
        <View style={backgroundStyle}>
            <Feather
                name="search"
                style={iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginVertical: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar
