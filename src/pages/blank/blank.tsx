import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

const Blank: React.FC = () => {
  useEffect(() => {}, [])
  return <View></View>
}

export default Blank
