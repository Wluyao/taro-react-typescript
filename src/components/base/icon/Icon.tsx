import React from 'react'
import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classNames from 'classnames'
import './style.scss'

interface IProps {
  name: string
  size?: string | number
  color?: string
  className?: string[] | string
  style?: React.CSSProperties
  onclick?: () => void
}

const Icon: React.FC<IProps> = (props) => {
  const { name, size = 32, color, className, style, onclick } = props

  const handleClick = () => {
    onclick && onclick()
  }

  return (
    <Text
      className={classNames('iconfont', `icon${name}`, className)}
      style={{
        ...style,
        fontSize: `${Taro.pxTransform(parseInt(String(size)))}`,
        color
      }}
      onClick={handleClick}
    ></Text>
  )
}
export default Icon
