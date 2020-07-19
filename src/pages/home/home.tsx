import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './style.scss'

 
class Home extends Component {
  public onPullDownRefresh() {
    console.log('刷新')
  }

  public render() {
    return (
      <View>
        <Text className="text">fdsg </Text>
        <Button onClick={this.handleClick}>点击刷新</Button>
      </View>
    )
  }

  private handleClick = () => {
    Taro.startPullDownRefresh()
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 2000)
  }
}

export default Home
