import React, { useEffect, useState, useMemo } from 'react'
import Taro from '@tarojs/taro'
import classnamses from 'classnames'
import { Image } from '@tarojs/components'
import defaultAvatar from '@/assets/images/common/avatar.png'
import './style.scss'

interface IAvatar {
  className?: string
  style?: React.CSSProperties
  size?: number
  gender?: number
  image?: string
  circle?: boolean
  type?: 'shop' | 'person'
}

/**
 * 头像
 */
const Avatar: React.FC<IAvatar> = (props) => {
  const { className, style, size = 40, gender, circle = true } = props

  const getBorder = (gender?: number) => {
    if (!gender && gender !== 0) {
      return ''
    } else {
      return BORDER_MAP[gender]
    }
  }

  const [image, setImage] = useState<string>(defaultAvatar)

  useEffect(() => {
    setImage(props.image || defaultAvatar)
  }, [props.image])

  const avatarClass = useMemo(
    () => [
      `gender--${getBorder(gender)}`,
      `shape--${circle ? 'circle' : 'rect'}`
    ],
    [gender, circle]
  )

  const avatarStyle = useMemo(
    () => ({
      width: Taro.pxTransform(size * 2),
      height: Taro.pxTransform(size * 2)
    }),
    [size]
  )

  const handleError = () => {
    setImage(defaultAvatar)
  }

  return (
    <Image
      className={classnamses('com-avatar', className, avatarClass)}
      style={{
        ...style,
        ...avatarStyle
      }}
      src={image}
      onError={handleError}
    />
  )
}

export default Avatar

const BORDER_MAP = {
  0: 'default',
  1: 'male',
  2: 'female',
  3: 'ignore'
}
