import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './style.scss'

const Home: React.FC = () => {

  const handleClick = () => {
    Taro.startPullDownRefresh()
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 2000)
  }

  return (
    <View>
      <Text className="text">fdsg </Text>
      <Button onClick={handleClick}>点击刷新</Button>
    </View>
  )
}

export default Home
