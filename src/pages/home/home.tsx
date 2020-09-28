import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './style.scss'

const Home: React.FC = () => {
  return (
    <View className="page-home">
      <View style={{ fontSize: Taro.pxTransform(16 * 2) }}>这是一个标题</View>
    </View>
  )
}

export default Home

