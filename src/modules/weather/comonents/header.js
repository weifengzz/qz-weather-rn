/**
 * 头部界面
 */

import  React, { Component } from 'react'

import {
    View,
    Text
} from 'react-native'

import styles from './header_styles'

class Header extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>青州天气</Text>
                <Text style={styles.dateText}>05月07日 周二</Text>
            </View>
        )
    }
}

export default Header
