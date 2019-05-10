/**
 * 青州天气界面
 */

import  React, { PureComponent } from 'react'

import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Text
} from 'react-native'

import {
    Header,
    Center,
    List
} from '../comonents'

class WeatherScreen extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            data: null,
            loading: true
        }
    }

    /**
     * 在界面初始化完成之后加载数据
     */
    componentDidMount () {
        this._fetchData()
    }

    /**
     * 数据请求
     */
    async _fetchData () {
        // fetch('http://t.weather.sojson.com/api/weather/city/101120602', {
        // method: 'GET',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        // }
        // }).then((response) => response.json())
        // .then((responseJson) => {
        //   console.log('responseJson', responseJson)
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
        try {
            const response = await fetch('http://t.weather.sojson.com/api/weather/city/101120602', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            const data = await response.json()
            this.setState({
                data,
                loading: false
            })
        } catch (e) {
            console.log('error', e)
        }
    }

    /**
     * 添加头部界面
     */
    _renderHeader () {
        return (
            <Header />
        )
    }
    
    /**
     * 内容界面
     */
    _renderCenter () {
        return (
            <Center data={this.state.data} />
        )
    }
    
    /**
     * 底部界面
     */
    _renderFooter () {
        return (
            <List data={this.state.data} />
        )
    }

    /**
     * 加载界面
     */
    _renderLoading () {
        return (
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
                <Text style={{ fontSize: 16, color: 'white' }}>正在加载...</Text>
            </View>
        )
    }

    /**
     * 内容界面
     */
    _renderContent () {
        if (this.state.loading) {
            return this._renderLoading()
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                { this._renderHeader() }
                { this._renderCenter() }
                { this._renderFooter() }
            </SafeAreaView>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this._renderContent() }
                <StatusBar backgroundColor='#41a3d4' barStyle={'light-content'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#41a3d4'
    }
})

export default WeatherScreen
