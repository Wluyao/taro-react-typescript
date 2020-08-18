import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import deviceStore from '@/store/device'

const Test: React.FC = () => {
  const handle = () => {
      console.log('click');
    deviceStore.setMenuBarHeight(12)
  }
  return (
    <View className="page-home">
      <AtButton type="primary" onClick={handle}>
        按钮文案
      </AtButton>
    </View>
  )
}

export default Test
