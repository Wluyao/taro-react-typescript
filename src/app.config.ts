export default {
  pages: ['pages/home/home', 'pages/mine/mine'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#30A7B0',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#707070',
    selectedColor: '#30A7B0',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home_select.png'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: 'assets/images/contact.png',
        selectedIconPath: 'assets/images/contact_select.png'
      }
    ]
  },
  networkTimeout: {
    request: 10000
  },
  debug: false
}
