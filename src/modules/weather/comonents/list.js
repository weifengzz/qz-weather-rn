/**
 * 头部界面
 */

import  React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class List extends Component {
    /**
     * 列表条目界面
     */
    _renderItem (item, index) {
        return (
            <View key={index}>
                <View style={styles.itemView}>
                    <View style={styles.leftView}>
                        <Text style={styles.itemText}>{`${item.ymd.split('-')[1]}-${item.ymd.split('-')[2]}`}</Text>
                        <Text style={[styles.itemText, { marginLeft: 10 }]}>{`${item.week}`}</Text>
                    </View>
                    <Icon name="weather-hail" size={25} color="white" />
                    <View style={styles.rightView}>
                        <Text style={styles.itemText}>{`${item.low.split(' ')[1]}`}</Text>
                        <Text style={styles.itemText}>{` / ${item.high.split(' ')[1]}`}</Text>
                    </View>
                </View>
                { index < 3 ? <View style={{ borderWidth: 0.5, borderColor: 'white', margin: 1, opacity: 0.4 }} /> : null }
            </View>
        )
    }
    render () {
        const { data } = this.props
        const listData = data.data.forecast.splice(1, 4)
        return (
            <View style={styles.container}>
                {
                    listData.map((item, index) => this._renderItem(item, index))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    itemView: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    leftView: {
        flex: 1,
        flexDirection: 'row'
    },
    rightView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemText: {
        fontSize: 16,
        color: 'white'
    }
})

export default List
