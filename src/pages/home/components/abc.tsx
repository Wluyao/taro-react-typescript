import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import deviceStore from '@/store/device'

const Abc: React.FC = () => {
  return <View className="page-home">{deviceStore.menuBarHeight}</View>
}

export default Abc
