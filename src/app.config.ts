export default {
  pages: ['pages/home/home', 'pages/mine/mine'],
  subPackages: [
    {
      root: 'pages/chart',
      pages: ['chart']
    },
    {
      root: 'pages/blank',
      pages: ['blank']
    },
    {
      root: 'pages/news',
      pages: ['list', 'detail']
    }
  ],
  window: {
    navigationBarBackgroundColor: '#30A7B0',
    navigationBarTextStyle: 'black',
    backgroundTextStyle: 'light',
    backgroundColor: '#f7f7f7'
  },
  tabBar: {
    color: '#707070',
    selectedColor: '#30A7B0',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: 'assets/images/tab/home.png',
        selectedIconPath: 'assets/images/tab/home_select.png'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: 'assets/images/tab/contact.png',
        selectedIconPath: 'assets/images/tab/contact_select.png'
      }
    ]
  },
  networkTimeout: {
    request: 10000
  },
  debug: false
}
