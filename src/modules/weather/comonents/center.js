/**
 * 内容界面
 */

import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Center extends Component {
    /**
     * 加载图标
     */
    _renderIcon () {
        return (
            <View style={styles.iconView}>
                <Icon name="weather-hail" size={120} color="white" />
            </View>
        )
    }

    /**
     * 右边界面
     */
    _renderRight () {
        const { data } = this.props
        return (
            <View style={styles.rightView}>
                <View style={styles.rightLeftView}>
                    <Text style={styles.wenduText}>{data.data.wendu}</Text>
                    <Text style={styles.typeText}>{data.data.forecast[0].type}</Text>
                    <Text style={styles.timeText}>{`${data.time.split(' ')[1]} 发布`}</Text>
                </View>
                <View style={styles.rightRightView}>
                    <Icon name="temperature-celsius" size={30} color="white" />
                </View>
            </View>
        )
    }

    render () {
        const { data } = this.props
        console.log('data', data)
        return (
            <View style={styles.container}>
                { this._renderIcon() }
                { this._renderRight() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    iconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wenduText: {
        fontSize: 80,
        color: 'white',
        fontWeight: 'bold'
    },
    rightLeftView: {
        alignItems: 'center'
    },
    typeText: {
        color: 'white',
        fontSize: 16
    },
    timeText: {
        color: 'white',
        fontSize: 14,
        marginTop: 10
    },
    rightRightView: {
        marginBottom: 100
    }
})

export default Center
