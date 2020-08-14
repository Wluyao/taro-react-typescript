import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { objectToString } from '@/utils/core'
import './style.scss'

interface ITextOverflow {
  style?: React.CSSProperties
  className?: string[] | string
  mode?: 'ellipsis' | 'shadow'
  // 文本
  text?: string
  // 文字个数限制
  limit?: number
  // 内容宽度限制
  width?: number
  // 内容行数限制
  lineClamp?: number
  // 渐变阴影的宽度
  shadowWidth?: number
  onClick?: () => void
}

/**
 * name：文本溢出处理
 */
const TextOverflow: React.FC<ITextOverflow> = (props) => {
  const {
    style,
    className,
    mode = 'ellipsis',
    text = '',
    limit = 0,
    width = 0,
    lineClamp = 0,
    shadowWidth = 20,
    onClick
  } = props

  const content = useMemo(() => {
    if (text.length <= limit) {
      return text
    } else {
      return text.slice(0, limit) + '...'
    }
  }, [text, limit])

  const rootStyle = useMemo(
    () => ({
      width: width > 0 ? Taro.pxTransform(width * 2) : 'auto',
      '-webkit-line-clamp': lineClamp
    }),
    [width, lineClamp]
  )

  const handleClick = () => {
    onClick && onClick()
  }

  if (limit > 0) {
    return (
      <View
        className={classNames(className)}
        style={style}
        onClick={handleClick}
      >
        {content}
      </View>
    )
  }
  if (mode === 'ellipsis') {
    return (
      <View
        className={classNames(
          className,
          lineClamp > 0 ? 'text-overflow__multiple' : 'text-overflow__single'
        )}
        style={objectToString(style) + objectToString(rootStyle)}
        onClick={handleClick}
      >
        {text}
      </View>
    )
  } else {
    return (
      <View
        className={classNames('text-overflow', className)}
        style={style}
        onClick={handleClick}
      >
        {text}
        <View
          className="text-overflow__shadow"
          style={{
            width: Taro.pxTransform(shadowWidth * 2)
          }}
        />
      </View>
    )
  }
}

export default TextOverflow