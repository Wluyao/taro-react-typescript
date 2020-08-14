import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classNames from 'classnames'

interface IIcon {
  name: string
  size?: number
  color?: string
  className?: string[] | string
  style?: React.CSSProperties
  onclick?: () => void
}

/**
 * name：图标
 */
const Icon: React.FC<IIcon> = (props) => {
  const { name, size = 16, color, className, style, onclick } = props

  const handleClick = () => {
    onclick && onclick()
  }

  const iconStyle = useMemo(
    () => ({
      fontSize: Taro.pxTransform(size * 2),
      color
    }),
    [size, color]
  )

  return (
    <Text
      className={classNames('iconfont', className, `icon${name}`)}
      style={{
        ...style,
        ...iconStyle
      }}
      onClick={handleClick}
    />
  )
}

export default Icon
