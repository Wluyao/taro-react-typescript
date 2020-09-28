import { Component } from 'react'
import './assets/styles/app.scss'



class App extends Component {
  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App