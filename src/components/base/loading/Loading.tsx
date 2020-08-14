import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './style.scss'

/**
 * 加载中状态，可作为活动指示器使用
 */

interface IProps {
  visible?: boolean
  color?: string
  size?: number
  message?: string
}

const Loading: React.FC<IProps> = (props) => {
  const { visible, color, size = 18, message = '加载中...' } = props

  const sizeStyle = useMemo(
    () => ({
      width: Taro.pxTransform(size * 2),
      height: Taro.pxTransform(size * 2)
    }),
    [size]
  )

  const colorStyle = useMemo(
    () => ({
      border: color ? `1px solid ${color}` : '',
      borderColor: color ? `${color} transparent transparent transparent` : ''
    }),
    [color]
  )

  if (!visible) {
    return null
  }

  return (
    <View className="com-loading">
      <View className="com-loading__ring" style={sizeStyle}>
        {Array.from({ length: 3 }).map((item, index) => (
          <View key={index} className="segment" style={{...sizeStyle,...colorStyle}} />
        ))}
      </View>
      <View className="com-loading__message">{message}</View>
    </View>
  )
}

export default Loading
