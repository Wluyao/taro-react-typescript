import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { objectToString } from '@/utils/core'
import './style.scss'

interface IProps {
  style?: React.CSSProperties
  className?: string[] | string
  // 文本
  text?: string
  // 文字个数限制
  limit?: number
  // 内容宽度限制
  width?: number
  // 内容行数限制
  lineClamp?: number
}

const TextEllipsis: React.FC<IProps> = (props) => {
  const {
    style,
    className,
    text = '',
    limit = 0,
    width = 0,
    lineClamp = 0
  } = props

  const content = useMemo(() => {
    if (text.length <= limit) {
      return text
    } else {
      return text.slice(0, limit) + '...'
    }
  }, [text, limit])

  const rootStyle = useMemo(() => {
    return {
      width: width > 0 ? Taro.pxTransform(width) : '100%',
      '-webkit-line-clamp': lineClamp
    }
  }, [width, lineClamp])

  if (limit > 0) {
    return (
      <View className={classNames(className)} style={style}>
        {content}
      </View>
    )
  }

  return (
    <View
      className={classNames(
        className,
        lineClamp > 0 ? 'text-ellipsis__multiple' : 'text-ellipsis__single'
      )}
      style={objectToString(style) + objectToString(rootStyle)}
    >
      {text}
    </View>
  )
}

export default TextEllipsis
