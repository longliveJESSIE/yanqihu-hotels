Page({
  data: {
    // 部署后的公网地址 — 使用 GitHub Pages
    mapUrl: 'https://YOUR_USERNAME.github.io/yanqihu-hotels/移动版/index.html'
  },
  onLoad() {
    // 如果有自己的服务器，改上面的 mapUrl
    console.log('加载地图:', this.data.mapUrl);
  },
  onMessage(e) {
    console.log('web-view消息:', e.detail);
  },
  onLoad(e) {
    console.log('web-view加载完成');
  },
  onError(e) {
    console.error('web-view加载失败:', e.detail);
  }
});
