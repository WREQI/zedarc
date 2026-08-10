Component({
  data: { list: [], welcome: "欢迎使用腾讯智能对话平台" },
  attached: function () {
    this.setData({
      list: [
        { name: "电视", price: 1e3 },
        { name: "电脑", price: 4e3 },
        { name: "手机", price: 3e3 },
      ],
    });
  },
});
