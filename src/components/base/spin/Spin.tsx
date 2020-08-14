import React from 'react'
import { View, Text } from '@tarojs/components'
import './style.scss'

/**
 * 页面初始加载状态
 */

interface IProps {
  className?: string
  style?: React.CSSProperties
  visible?: boolean
  children?: React.ReactElement
  message?: string
}

const Spin: React.FC<IProps> = (props) => {
  const {
    className = '',
    style,
    visible = false,
    children,
    message = '加载中...'
  } = props

  if (!visible) {
    return null
  }

  return (
    <View className={`com-spin ${className}`} style={{ ...style }}>
      <View className="com-spin__icon" />
      <Text className="com-spin__message">{message}</Text>
      {children}
    </View>
  )
}

export default Spin
