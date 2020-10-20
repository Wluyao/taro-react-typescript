import React, { useEffect, useState } from 'react'
import Taro, { useRouter, usePullDownRefresh } from '@tarojs/taro'
import { View } from '@tarojs/components'

const Page: React.FC = () => {
  useEffect(() => {}, [])

  //页面下拉刷新
  usePullDownRefresh(() => {})

  return <View></View>
}

export default Page
