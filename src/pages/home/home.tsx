import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Icon from '@/components/base/icon'
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
      <AtButton type="primary">按钮文案</AtButton>
      <Icon name="setting" />
      <Button onClick={handleClick}>点击刷新</Button>
    </View>
  )
}

export default Home
