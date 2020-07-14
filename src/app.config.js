export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    navigationBarTitleText: 'M i X i T A',
    backgroundTextStyle: 'dark',
    backgroundColor: '#191919',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index1',
      text: 'Message',
      iconPath: './assets/images/tab_message.png',
      selectedIconPath: './assets/images/tab_message.png'
    }, {
      pagePath: 'pages/index/index2',
      text: 'Map',
      iconPath: './assets/images/tab_map.png',
      selectedIconPath: './assets/images/tab_map.png'
    }, 
    {
      pagePath: 'pages/index/index3',
      text: 'Community',
      iconPath: './assets/images/tab_community.png',
      selectedIconPath: './assets/images/tab_community.png'
    }, 
    {
      pagePath: 'pages/index/index',
      text: 'Me',
      iconPath: './assets/images/tab_me.png',
      selectedIconPath: './assets/images/tab_me.png'
    }],
    color: '#f6f6f6',
    selectedColor: '#CC33FF',
    backgroundColor: '#191919',
    borderStyle: 'white'
  }
}
