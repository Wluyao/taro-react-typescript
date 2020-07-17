import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './style.scss'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button>点击</Button>
      </View>
    )
  }
}
