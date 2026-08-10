require("../app.js"),
  (exports.defaultTabConfig = {
    color: "#12161f",
    list: {
      choose: {
        iconPath: "13567d47dfe85ebca8691c5144e47116.png",
        selectedIconPath: "38f7385ce6ff4638f601fdd5b14bc406.png",
      },
      information: {
        iconPath: "1de4ff04e4b7f4b266fc9983b367175d.png",
        selectedIconPath: "2931d44a26049fb2876be9f174f6d1a4.png",
      },
      market: {
        iconPath: "9d4a5543fef42c1beb92021c050e578a.png",
        selectedIconPath: "0c8a452aa4a2e888d0f1a9ecfe67a401.png",
      },
      strategy: {
        iconPath: "2f4c4a7315c0cea290db7fbe5e3b6cd3.png",
        selectedIconPath: "a4262b011cb5330e1794957ac4d21765.png",
      },
      apply: {
        iconPath: "a62d066a8fea81095fd9ca28b180a28b.png",
        selectedIconPath: "7177687d00bfde3432e884bccc7912b9.png",
      },
      asset: {
        iconPath: "013e4ae6726d4c73bdb2b5b6c4817193.png",
        selectedIconPath: "3373b0fac15fd59f4ecfc0e6fc758dab.png",
      },
      account: {
        iconPath: "e8186fecd15f26092bca9e5055bbee38.png",
        selectedIconPath: "8eddda84ee9816fe90faa5675bc61f68.png",
      },
      gotoAsset: {
        iconPath: "63d3b6531bf8a3d9c23c4ed492c82574.png",
        selectedIconPath: "b181fe2f60606a29314555e1e6ac3b5f.png",
      },
    },
  }),
  (exports.linkTypeMap = {
    plugin2MainMp: "1",
    plugin2Embedded: "2",
    plugin2Plugin: "3",
    mp2MainMp: "4",
    mp2Plugin: "5",
  }),
  (exports.newNavbarConfig = {
    color: "var(--text-color-1)",
    selectedColor: "var(--text-color-1)",
    list: {
      choose: {
        iconPath: "37157b6edeeb88e7ac4a04d2661d33ec.png",
        selectedIconPath: "b312bd57dbc3afaa2f62149f8eae2022.png",
      },
      market: {
        iconPath: "55dc880e79a5f28deb9e5187e5c05133.png",
        selectedIconPath: "52f83b602db36fcb93ef15fae078016a.png",
      },
      apply: {
        iconPath: "ad14bc6728b976ea59fe1b6907a5cd3e.png",
        selectedIconPath: "18f877a874ac2b634c71ef9192a5163f.png",
      },
      asset: {
        iconPath: "d3dbb0b4383d4d6968b0a0b3c470d00b.png",
        selectedIconPath: "e4e08dbed5abede828e15c39f5ab51b9.png",
      },
      account: {
        iconPath: "ce5b80937ec238b888b22ec869d6f5fa.png",
        selectedIconPath: "1bc298af4ffdcef418168ec893290ce8.png",
      },
      gotoAsset: {
        iconPath: "f317c2ce4b6830a54c953744c4fcba5a.png",
        selectedIconPath: "8bb8bc6df6eafdd5776d13f4e03abc72.png",
      },
      discover: {
        iconPath: "f51fc16b6eb21095b33d2e29d11cf8b3.svg",
        selectedIconPath: "1c64594f41c74e98f7de9dd564999f84.svg",
      },
    },
  }),
  (exports.skinTabConfig = {
    light: {
      color: "#12161f",
      list: {
        choose: { iconPath: "13567d47dfe85ebca8691c5144e47116.png" },
        information: { iconPath: "1de4ff04e4b7f4b266fc9983b367175d.png" },
        market: { iconPath: "9d4a5543fef42c1beb92021c050e578a.png" },
        strategy: { iconPath: "2f4c4a7315c0cea290db7fbe5e3b6cd3.png" },
        apply: { iconPath: "a62d066a8fea81095fd9ca28b180a28b.png" },
        asset: { iconPath: "013e4ae6726d4c73bdb2b5b6c4817193.png" },
        account: { iconPath: "e8186fecd15f26092bca9e5055bbee38.png" },
        gotoAsset: { iconPath: "032d9ce35859b93cbf1b48fc1a390870.png" },
      },
    },
    dark: {
      color: "#989eaf",
      list: {
        choose: { iconPath: "88ec6204c2d81df2962a4f6f9f4ba718.png" },
        information: { iconPath: "48b4bdf2d20b6677adc4b30dc0e7d809.png" },
        market: { iconPath: "841e9881794eee2e5957c62b7e3e5f29.png" },
        strategy: { iconPath: "48ccf9cd6d9227a7497c4247fafbc728.png" },
        asset: { iconPath: "d41f4a780aa9483798140b571d2ffcc9.png" },
        apply: { iconPath: "416a4c7057eca3729fdaba1b72336a3f.png" },
        account: { iconPath: "c52dc31078961084a98ccce4b15dec4b.png" },
        gotoAsset: { iconPath: "032d9ce35859b93cbf1b48fc1a390870.png" },
      },
    },
  }),
  (exports.tabBarWzqMp = {
    color: "var(--text-color-1)",
    selectedColor: "var(--color-blue)",
    list: [
      { id: "discover", pagePath: "/pages/index/discover/main", text: "发现" },
      { id: "choose", pagePath: "/pages/index/index", text: "自选" },
      { id: "market", pagePath: "/pages/index/market", text: "行情" },
      { id: "asset", pagePath: "/asset/index", text: "交易" },
    ],
  }),
  (exports.tabBarZxgMp = {
    color: "var(--text-color-1)",
    selectedColor: "var(--color-blue)",
    list: [
      {
        id: "information",
        pagePath: "/pages/index/information/main",
        text: "资讯",
      },
      { id: "choose", pagePath: "/pages/index/index", text: "自选" },
      { id: "market", pagePath: "/pages/index/market", text: "行情" },
      { id: "asset", pagePath: "/asset/index", text: "交易" },
      { id: "account", pagePath: "/pages/index/account/main", text: "我的" },
    ],
  });
