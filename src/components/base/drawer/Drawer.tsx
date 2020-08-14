import React, { useState, useEffect, useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './style.scss'

interface IProps {
  className: string
  style: React.CSSProperties
  visible: boolean
  // 是否显示遮罩
  mask: boolean
  // 是否可以点击遮罩进行关闭
  maskClosable: boolean
  // 是否显示关闭按钮
  closable: boolean
  // 内容宽度
  width: number | string
  // 内容高度
  height: number | string
  // 弹出位置
  position: 'top' | 'bottom' | 'left' | 'right'
  // 动画时长
  duration: number | string
  // 是否在关闭后销毁子元素
  destroyOnClose: boolean
  onClose: () => void
}

const Drawer: React.FC<Partial<IProps>> = (props) => {
  const {
    className = '',
    style,
    visible = false,
    maskClosable = true,
    closable = true,
    mask = true,
    width = '80%',
    height = 'auto',
    position = 'right',
    duration = 300,
    destroyOnClose = false,
    onClose,
    children
  } = props

  const [child, setChild] = useState<React.ReactNode>()

  const maskStyle = useMemo(
    () => ({
      display: mask ? 'block' : 'none',
      transitionDuration:
        typeof duration === 'string' ? duration : duration + 'ms'
    }),
    [mask]
  )

  const containerStyle = useMemo(() => {
    let offsetStyle = {
      width,
      height
    }
    if (position === 'left' || position === 'right') {
      offsetStyle = {
        width: typeof width === 'string' ? width : Taro.pxTransform(width * 2),
        height: '100%'
      }
    } else {
      offsetStyle = {
        width: '100%',
        height:
          typeof height === 'string' ? height : Taro.pxTransform(height * 2)
      }
    }
    return {
      ...offsetStyle,
      transitionDuration:
        typeof duration === 'string' ? duration : duration + 'ms'
    }
  }, [width, height, duration])

  useEffect(() => {
    setChild(children)
  }, [children])

  const handleTranistionEnd = () => {
    if (!visible && destroyOnClose) {
      setChild(null)
    }
  }

  return (
    <View
      className={classnames(
        'com-drawer',
        `com-drawer--${position}`,
        visible && 'com-drawer--show',
        className
      )}
      style={style}
    >
      <View
        className="com-drawer__mask"
        style={maskStyle}
        onClick={maskClosable ? onClose : undefined}
      />

      <View
        className="com-drawer__container"
        style={containerStyle}
        onTransitionEnd={handleTranistionEnd}
      >
        {closable && (
          <Text className="close" onClick={onClose}>
            ×
          </Text>
        )}
        {child}
      </View>
    </View>
  )
}

export default Drawer
