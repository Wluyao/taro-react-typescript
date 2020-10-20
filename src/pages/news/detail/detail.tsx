import React, { useEffect, useState } from 'react'
import Taro, { useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'

const Page: React.FC = () => {
  useEffect(() => {}, [])

  // 分享页面给微信好友
  useShareAppMessage(() => {
    const title = 'xxx新闻'
    const path = '/pages/news/detail/detail?id=' + 10
    return { title, path }
  })

  return <View></View>
}

export default Page
