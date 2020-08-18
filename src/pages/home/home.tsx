import React from 'react'
import { observer } from '@tarojs/mobx'
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Icon from '@/components/base/icon'
import './style.scss'

import Abc from './components/abc'
import Test from './components/test'
const Home: React.FC = observer(() => {
  return (
    <View className="page-home">
      <AtButton type="primary">按钮文案</AtButton>
      <Icon name="share" color="red" size={40} />
      <Abc />
      <Test />
    </View>
  )
})

export default Home
