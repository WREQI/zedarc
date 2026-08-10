require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Objectvalues");
var t,
  r = require("../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  s = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  h = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  d = function (e, t) {
    for (var r in t || (t = {})) l.call(t, r) && h(e, r, t[r]);
    if (u) {
      var n,
        i = a(u(t));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          r = n.value;
          p.call(t, r) && h(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return s(e, c(t));
  },
  f = function (e, t, r) {
    return new Promise(function (n, i) {
      var a = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  g = require("../../../../common/vendor.js"),
  b = require("../st-act-subscribe/utils/subscribe_wx_message.js"),
  k = {
    1: {
      name: "ams_add_ai_one",
      business: "ai_pre_post_market",
      footerButton: { text: "开通账户并订阅", clickEvent: "applyClick" },
      overlay: {
        text: "我们将通过微信服务通知发送最新提醒。除了AI分析，微信里还能开通炒股账户，欢迎试试！",
        img: "https://st.gtimg.com/design/5bb615978cb55ac2cc3d3f38569c8fbf.png",
        footer: "",
        btnText: "开通股票账户 行情随时接住",
        showBrandText: !0,
        showGif: !0,
        clickEvent: "GoApply",
      },
      headerImage:
        "https://st.gtimg.com/design/89bf9c5c374c0e56063f10c317bbdf80.png",
      sections: [
        {
          type: "image",
          class: "ams-gif-section",
          img: "https://st.gtimg.com/design/749837b1a0c8be9c6d524e6d2dc63cc7.gif",
          clickEvent: "HotStockClick",
        },
        {
          title: "股票涨跌原因, AI秒回答",
          text: "某支股票今天为什么暴涨暴跌?<br>问元宝, 1秒获得答案",
          btnText: "点此立即试试",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/e4694fa7dcccd85dd5ca337b75587db7.png",
          clickEvent: "SearchClick",
        },
        {
          title: "订阅「AI每日机会分析」",
          text: "AI分析师盘前前瞻当日机会、<br>盘后复盘当日行情",
          btnText: "点此立即体验",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/ee48d6697478536ff57c41efe1794eef.png",
          clickEvent: "UseAiWen",
        },
      ],
      subscriptions: [
        "pre_market_ai_opportunities_zxg",
        "ai_post_market_analysis_zxg",
      ],
      templateid: [
        "Lnvr7DOcT3AWU4L9TVCXbHxkDvx38UWt28Alw4ZXCj4",
        "TBykLof5TqyFM6hmkPIApW2PS8YPsvLUDiOgddy-WyI",
      ],
      isStragegy: !1,
      mtakeys: { 123: "zxg_ams01" },
      applyIfReject: !1,
      aiPrompt: {
        beforeTitle: "今日A股盘前前瞻（附注日期）",
        afterTitle: "今日A股盘后复盘（附注日期）",
        beforePrompt:
          '以一位资深股票分析师的角色，以"今日A股盘前前瞻（附注日期）"为标题，以上午开盘前的时点，结合国际范围内影响大类资产行情的事件，前瞻分析今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        afterPrompt:
          '以一位资深股票分析师的角色，以"今日A股盘后复盘（附注日期）"为标题，结合国际范围内影响大类资产行情的事件，总结今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        url: "searchfrom=ams-ai-prompt&queryUsage=forceSend",
      },
      isShare: !0,
      bottomText:
        "从事证券投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会网站(http://www.csrc.gov.cn)查询。证券服务由券商提供，技术服务由腾讯微证券提供。",
    },
    2: {
      name: "ams_add_ai_one",
      business: "ai_pre_post_market",
      footerButton: { text: "开通账户并订阅", clickEvent: "applyClick" },
      overlay: {
        text: "我们将通过微信服务通知发送最新提醒。除了AI分析，微信里还能开通炒股账户，欢迎试试！",
        img: "https://st.gtimg.com/design/5bb615978cb55ac2cc3d3f38569c8fbf.png",
        footer: "",
        btnText: "开通股票账户 行情随时接住",
        showBrandText: !0,
        showGif: !0,
        clickEvent: "GoApply",
      },
      headerImage:
        "https://st.gtimg.com/design/7cf008ddbe55afb35bf627c0ddc9345f.png",
      sections: [
        {
          type: "image",
          class: "ams-gif-section",
          img: "https://st.gtimg.com/design/749837b1a0c8be9c6d524e6d2dc63cc7.gif",
          clickEvent: "HotStockClick",
        },
        {
          title: "股票涨跌原因, AI秒回答",
          text: "某支股票今天为什么暴涨暴跌?<br>问元宝, 1秒获得答案",
          btnText: "点此立即试试",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/e4694fa7dcccd85dd5ca337b75587db7.png",
          clickEvent: "SearchClick",
        },
        {
          title: "订阅「AI每日机会分析」",
          text: "AI分析师盘前前瞻当日机会、<br>盘后复盘当日行情",
          btnText: "点此立即体验",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/ee48d6697478536ff57c41efe1794eef.png",
          clickEvent: "UseAiWen",
        },
      ],
      subscriptions: [
        "pre_market_ai_opportunities_zxg",
        "ai_post_market_analysis_zxg",
      ],
      templateid: [
        "Lnvr7DOcT3AWU4L9TVCXbHxkDvx38UWt28Alw4ZXCj4",
        "TBykLof5TqyFM6hmkPIApW2PS8YPsvLUDiOgddy-WyI",
      ],
      isStragegy: !1,
      mtakeys: { 123: "zxg_ams02" },
      applyIfReject: !1,
      aiPrompt: {
        beforeTitle: "今日A股盘前前瞻（附注日期）",
        afterTitle: "今日A股盘后复盘（附注日期）",
        beforePrompt:
          '以一位资深股票分析师的角色，以"今日A股盘前前瞻（附注日期）"为标题，以上午开盘前的时点，结合国际范围内影响大类资产行情的事件，前瞻分析今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        afterPrompt:
          '以一位资深股票分析师的角色，以"今日A股盘后复盘（附注日期）"为标题，结合国际范围内影响大类资产行情的事件，总结今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        url: "searchfrom=ams-ai-prompt&queryUsage=forceSend",
      },
      isShare: !0,
      bottomText:
        "从事证券投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会网站(http://www.csrc.gov.cn)查询。证券服务由券商提供，技术服务由腾讯微证券提供。",
    },
    3: {
      name: "ams_add_ai_two",
      business: "ai_pre_post_market",
      footerButton: {
        left: { text: "订阅AI分析", clickEvent: "applyClick" },
        right: { text: "开户把握机会", clickEvent: "GoApply" },
        tip: "",
      },
      overlay: {
        text: "我们将通过微信服务通知发送最新提醒。除了AI分析，微信里还能开通炒股账户，欢迎试试！",
        img: "https://st.gtimg.com/design/5bb615978cb55ac2cc3d3f38569c8fbf.png",
        footer: "",
        btnText: "开通股票账户 行情随时接住",
        showBrandText: !0,
        showGif: !0,
        clickEvent: "GoApply",
      },
      headerImage:
        "https://st.gtimg.com/design/89bf9c5c374c0e56063f10c317bbdf80.png",
      sections: [
        {
          type: "image",
          class: "ams-gif-section",
          img: "https://st.gtimg.com/design/749837b1a0c8be9c6d524e6d2dc63cc7.gif",
          clickEvent: "HotStockClick",
        },
        {
          title: "股票涨跌原因, AI秒回答",
          text: "某支股票今天为什么暴涨暴跌?<br>问元宝, 1秒获得答案",
          btnText: "点此立即试试",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/e4694fa7dcccd85dd5ca337b75587db7.png",
          clickEvent: "SearchClick",
        },
        {
          title: "订阅「AI每日机会分析」",
          text: "AI分析师盘前前瞻当日机会、<br>盘后复盘当日行情",
          btnText: "点此立即体验",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/ee48d6697478536ff57c41efe1794eef.png",
          clickEvent: "UseAiWen",
        },
      ],
      subscriptions: [
        "pre_market_ai_opportunities_zxg",
        "ai_post_market_analysis_zxg",
      ],
      templateid: [
        "Lnvr7DOcT3AWU4L9TVCXbHxkDvx38UWt28Alw4ZXCj4",
        "TBykLof5TqyFM6hmkPIApW2PS8YPsvLUDiOgddy-WyI",
      ],
      isStragegy: !1,
      mtakeys: { 123: "zxg_ams03" },
      applyIfReject: !1,
      aiPrompt: {
        beforeTitle: "今日A股盘前前瞻（附注日期）",
        afterTitle: "今日A股盘后复盘（附注日期）",
        beforePrompt:
          '以一位资深股票分析师的角色，以"今日A股盘前前瞻（附注日期）"为标题，以上午开盘前的时点，结合国际范围内影响大类资产行情的事件，前瞻分析今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        afterPrompt:
          '以一位资深股票分析师的角色，以"今日A股盘后复盘（附注日期）"为标题，结合国际范围内影响大类资产行情的事件，总结今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        url: "searchfrom=ams-ai-prompt&queryUsage=forceSend",
      },
      isShare: !0,
      bottomText:
        "从事证券投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会网站(http://www.csrc.gov.cn)查询。证券服务由券商提供，技术服务由腾讯微证券提供。",
    },
    4: {
      name: "ams_add_ai_two",
      business: "ai_pre_post_market",
      footerButton: {
        left: { text: "订阅AI分析", clickEvent: "applyClick" },
        right: { text: "开户把握机会", clickEvent: "GoApply" },
        tip: "",
      },
      overlay: {
        text: "我们将通过微信服务通知发送最新提醒。除了AI分析，微信里还能开通炒股账户，欢迎试试！",
        img: "https://st.gtimg.com/design/5bb615978cb55ac2cc3d3f38569c8fbf.png",
        footer: "",
        btnText: "开通股票账户 行情随时接住",
        showBrandText: !0,
        showGif: !0,
        clickEvent: "GoApply",
      },
      headerImage:
        "https://st.gtimg.com/design/7cf008ddbe55afb35bf627c0ddc9345f.png",
      sections: [
        {
          type: "image",
          class: "ams-gif-section",
          img: "https://st.gtimg.com/design/749837b1a0c8be9c6d524e6d2dc63cc7.gif",
          clickEvent: "HotStockClick",
        },
        {
          title: "股票涨跌原因, AI秒回答",
          text: "某支股票今天为什么暴涨暴跌?<br>问元宝, 1秒获得答案",
          btnText: "点此立即试试",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/e4694fa7dcccd85dd5ca337b75587db7.png",
          clickEvent: "SearchClick",
        },
        {
          title: "订阅「AI每日机会分析」",
          text: "AI分析师盘前前瞻当日机会、<br>盘后复盘当日行情",
          btnText: "点此立即体验",
          class: "ams-compact-section",
          backgroundImage:
            "https://st.gtimg.com/design/ee48d6697478536ff57c41efe1794eef.png",
          clickEvent: "UseAiWen",
        },
      ],
      subscriptions: [
        "pre_market_ai_opportunities_zxg",
        "ai_post_market_analysis_zxg",
      ],
      templateid: [
        "Lnvr7DOcT3AWU4L9TVCXbHxkDvx38UWt28Alw4ZXCj4",
        "TBykLof5TqyFM6hmkPIApW2PS8YPsvLUDiOgddy-WyI",
      ],
      isStragegy: !1,
      mtakeys: { 123: "zxg_ams04" },
      applyIfReject: !1,
      aiPrompt: {
        beforeTitle: "今日A股盘前前瞻（附注日期）",
        afterTitle: "今日A股盘后复盘（附注日期）",
        beforePrompt:
          '以一位资深股票分析师的角色，以"今日A股盘前前瞻（附注日期）"为标题，以上午开盘前的时点，结合国际范围内影响大类资产行情的事件，前瞻分析今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        afterPrompt:
          '以一位资深股票分析师的角色，以"今日A股盘后复盘（附注日期）"为标题，结合国际范围内影响大类资产行情的事件，总结今日A股的市场整体行情、风格、资金、具体的大类资产及行业配置机会。涉及数据时务必多加复核确保不能犯基础的数据错误。',
        url: "searchfrom=ams-ai-prompt&queryUsage=forceSend",
      },
      isShare: !0,
      bottomText:
        "从事证券投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会网站(http://www.csrc.gov.cn)查询。证券服务由券商提供，技术服务由腾讯微证券提供。",
    },
    template_report_id: {
      Lnvr7DOcT3AWU4L9TVCXbHxkDvx38UWt28Alw4ZXCj4: "tpl1",
      "TBykLof5TqyFM6hmkPIApW2PS8YPsvLUDiOgddy-WyI": "tpl2",
    },
    useBubble: !0,
  };
function v(e) {
  var t = {};
  if (!e) return t;
  var r = "",
    n = "",
    a = e.split("#"),
    o = i(a, 2),
    s = o[0],
    c = o[1];
  return (
    s.includes("?") && (r = s.split("?")[1]),
    c && c.includes("?") && (n = c.split("?")[1]),
    [r, n]
      .filter(Boolean)
      .join("&")
      .split("&")
      .forEach(function (e) {
        var r = e.split("="),
          n = i(r, 2),
          a = n[0],
          o = n[1];
        if (a)
          try {
            var s = decodeURIComponent(a),
              c = o ? decodeURIComponent(o) : "";
            t[s] = c;
          } catch (e) {
            t[a] = o || "";
          }
      }),
    t
  );
}
var _ = {
    10800: {
      name: "招商证券股份有限公司",
      id: "91440300192238549B",
      img: "https://st.gtimg.com/design/ea38233ef9d06aa0e6ee56e420f04a68.png",
    },
    10100: {
      name: "华林证券股份有限公司",
      id: "10500000",
      img: "https://st.gtimg.com/design/74e9494caeafe834f8ee7267b7a1f8e6.png",
    },
    15900: {
      name: "国金证券股份有限公司",
      id: "000000043132",
      img: "https://st.gtimg.com/design/23d9011bb73c9a1ee59b517f2575271f.png",
    },
    12800: {
      name: "中国中金财富证券有限公司",
      id: "13570000",
      img: "https://st.gtimg.com/design/08843fac2c96fcf67cd74a40ac3ee06e.png",
    },
    10900: {
      name: "国信证券股份有限公司",
      id: "Z27074000",
      img: "https://st.gtimg.com/design/1471cba13c76bdb5010e246723ba8a5a.png",
    },
    10500: {
      name: "广发证券股份有限公司",
      id: "10230000",
      img: "https://st.gtimg.com/design/a7be8c09838d6ddb853beca82c871d46.png",
    },
    11100: {
      name: "中信建投证券股份有限公司",
      id: "91110000781703453H",
      img: "https://st.gtimg.com/design/2b9c4bfcc4158ac3b16eae205b6ba3ad.png",
    },
  },
  x = [
    "https://st.gtimg.com/design/4c9377264b637265c331a36e99a3b4dc.png",
    "https://st.gtimg.com/design/ec9108d6adff02ad5a49dd56935928d3.png",
    "https://st.gtimg.com/design/805b3ef5f97d0dc3e42eaee63baa8244.png",
  ],
  y = [
    "https://st.gtimg.com/design/939674ff0b91142916e886cd92051b52.png",
    "https://st.gtimg.com/design/b1164fdcfee94e38c0ee6542951bb445.png",
    "https://st.gtimg.com/design/70ac560f725d78c60fb89a510edfd767.png",
  ],
  T = {
    ZHAOSHANG: "10800",
    GUOJIN: "15900",
    HUALIN: "10100",
    GUOXIN: "10900",
    ZHONGJIN: "12800",
  },
  S = T.HUALIN,
  w = {
    stockIndex: {
      routeH5: "stockdetail",
      routeMp: "stockdetail",
      routeQuery: {
        market: "1",
        scode: "000001",
        stockType: "ZS",
        label: "ams",
      },
      report: "search_click",
    },
    stockDetail: {
      routeH5: "stockdetail",
      routeMp: "stockdetail",
      report: "go_quote_click",
    },
    stockRemind: {
      routeH5: "RemindIndex",
      routeMp: "RemindIndex",
      routeQuery: {},
      report: "add_stock_remind_click",
    },
    hotStock: {
      routeH5: "search-rank",
      routeMp: "hotStock",
      routeQuery: { tabId: "1" },
      report: "hot_stock_click",
    },
    topicPlaza: {
      routeH5: "topicPlaza",
      routeMp: "topicPlaza",
      routeQuery: {},
      report: "layer_close_click",
    },
    investorStock: {
      routeH5: "stockBasket_detail",
      routeMp: "stockBasket_detail",
      routeQuery: { gdId: "gd000628" },
      report: "section_tops_click",
    },
    wxTops5: {
      routeH5: "discoverWxTopNews",
      routeMp: "discoverWxTopNews",
      routeQuery: {},
      report: "section_three_click",
    },
    etfAllRank: {
      routeH5: "etf-all-rank",
      routeMp: "additionalWebview",
      routeQuery: {
        url: encodeURIComponent(
          "https://wzq.tenpay.com/mp/v2/index.html?lite=1#/etf-all-rank?curTab=etf_all&from=hotEtf"
        ),
        curTab: "etf_all",
        from: "hotEtf",
      },
      report: "etf_all_rank_click",
    },
    searchImgOcr: {
      routeH5: "SearchImgOcr",
      routeMp: "SearchImgOcr",
      routeQuery: {},
      report: "ocr_importlnk_click",
    },
    discoverIndex: {
      routeH5: "DiscoverIndex",
      routeMp: "DiscoverIndex",
      routeQuery: {},
      report: "goto_discover_tab_click",
    },
    etfRank: {
      routeH5: "etfrankmain",
      routeMp: "etfrankmain",
      routeQuery: {},
      report: "etfrank_click",
    },
    etfEnrollMatch: {
      routeH5: "etfEnrollMatch",
      routeMp: "actWebview",
      routeQuery: {
        url: encodeURIComponent(
          "https://zqact.tenpay.com/activity/page/etfEnrollMatchFourthPhase/#/index?lite=1"
        ),
      },
      report: "etf_enroll_match_click",
    },
  },
  A = "wzqxcx",
  I = "sh000001",
  C = "000001",
  B = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  E = function (e) {
    return g.StockBridge.request(
      "https://proxy.finance.qq.com/qt/utf8/?q=".concat(e, "&fmt=json"),
      g.RequestTypeEnum.GET
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  P = function () {
    return g.StockBridge.request(
      "https://wzq.tenpay.com/svr/activity/simple_activity/trade_game_apply",
      g.RequestTypeEnum.POST,
      {},
      B
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  D = g.StockBridge.tradeFunc,
  O = {
    showAiDialog: !1,
    title: "",
    prompt: "",
    theme: "white",
    sourceFrom: "ams-ai",
  },
  R = (null == (t = g.StockBridge) ? void 0 : t.ENV) === g.EnvTypeEnum.MP,
  M = [3, 7],
  j = [25, 26],
  H = {
    name: "AmsUnionPage",
    components: {
      AddToMpGuide: function () {
        return "./components/AddToMpGuide.js";
      },
      Sections: function () {
        return "./components/Sections.js";
      },
      ExtraImages: function () {
        return "./components/ExtraImages.js";
      },
      BrandArea: function () {
        return "./components/BrandArea.js";
      },
      OverlayModal: function () {
        return "./components/OverlayModal.js";
      },
      FooterBar: function () {
        return "./components/FooterBar.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    provide: function () {
      return { hqBridge: g.StockBridge };
    },
    options: { styleIsolation: "shared" },
    props: { params: { type: Object, default: function () {} } },
    data: function () {
      return {
        isMina: R,
        aiConfig: O,
        showPopup: !1,
        currentOverlay: null,
        options: {},
        beforeMap: {},
        baseTemplate: "",
        sectionOrder: "",
        stat: null,
        romoteConfig: null,
        showAddToMpGuide: !1,
        bubbleTimer: null,
        watchHeightTimer: null,
        bubbleConfig: { delay: 3e3, autoClose: !0, autoCloseTime: 8e3 },
        allClose: !1,
        isRuleChecked: !0,
        isAgreementInitialized: !1,
        tradeGameData: { dealerCode: "", applyStatus: null },
        isBind: !1,
        footerBarHeight: 0,
        originalQuery: {},
      };
    },
    computed: {
      currentTemplate: function () {
        if (!this.baseTemplate) return {};
        var e = k;
        this.romoteConfig && (e = this.romoteConfig);
        var t = e[this.baseTemplate] || k[1];
        return !R && t.h5FooterButton && (t.footerButton = t.h5FooterButton), t;
      },
      headerImage: function () {
        var e, t;
        if (!(null == (e = this.currentTemplate) ? void 0 : e.headerImage))
          return null;
        var n = this.currentTemplate.headerImage;
        return Array.isArray(n)
          ? n[Math.max(0, parseInt(this.sectionOrder, 10) - 1)] || n[0]
          : "object" == r(n) && null !== n
          ? n[null == (t = this.options) ? void 0 : t.broker] || null
          : n;
      },
      headerImageBtn: function () {
        var e, t;
        if (!(null == (e = this.currentTemplate) ? void 0 : e.headerImageBtn))
          return null;
        var n = this.currentTemplate.headerImageBtn;
        return "object" == r(n) && null !== n
          ? n[null == (t = this.options) ? void 0 : t.broker] || null
          : n;
      },
      orderedSections: function () {
        var e = this,
          t = this.sectionOrder
            .split("")
            .map(function (t) {
              var r,
                n = parseInt(t, 10) - 1;
              return null == (r = e.currentTemplate.sections) ? void 0 : r[n];
            })
            .filter(Boolean);
        if (3 === this.baseTemplate) {
          var r = (this.currentTemplate.sections || []).find(function (t, r) {
            return (
              "image" === t.type && !e.sectionOrder.includes((r + 1).toString())
            );
          });
          r && t.push(r);
        }
        return t;
      },
      brokerName: function () {
        var e,
          t = {
            10800: "招商证券",
            15900: "国金证券",
            10100: "华林证券",
            10900: "国信证券",
            12800: "中金财富证券",
          };
        return t[null == (e = this.options) ? void 0 : e.broker] || t[S];
      },
      showLogoText: function () {
        var e = this.currentTemplate.applyIfReject;
        return (M.includes(this.baseTemplate) || e) && !!this.brokerName;
      },
      shouldShowRule: function () {
        var e;
        return (
          String(null == (e = this.options) ? void 0 : e.broker) ===
            T.ZHONGJIN || 1 == +this.tradeGameData.applyStatus
        );
      },
      apiStatus: function () {
        return ""
          .concat(1 === this.tradeGameData.applyStatus ? "0" : "1")
          .concat(this.isBind ? "1" : "0");
      },
      placeholderHeight: function () {
        return this.footerBarHeight
          ? "".concat(this.footerBarHeight + 12, "px")
          : "112px";
      },
      overlayKey: function () {
        var e = this.currentOverlay || this.currentTemplate.overlay;
        return e
          ? ""
              .concat(e.title || "", "-")
              .concat(e.text || "", "-")
              .concat(e.btnText || "")
          : "empty";
      },
    },
    watch: {
      "currentTemplate.footerButton": {
        handler: function (e) {
          var t = this;
          this.footerBarHeight > 0 ||
            !e ||
            (this.watchHeightTimer && clearTimeout(this.watchHeightTimer),
            this.$nextTick(function () {
              t.watchHeightTimer = setTimeout(function () {
                t.updateFooterBarHeight(), (t.watchHeightTimer = null);
              }, 500);
            }));
        },
        immediate: !1,
      },
    },
    mounted: function () {
      var e = this;
      this.onLoadPage(),
        (this.bubbleTimer = setTimeout(function () {
          e.checkAndShowBubble();
        }, this.bubbleConfig.delay));
    },
    beforeDestroy: function () {
      this.bubbleTimer &&
        (clearTimeout(this.bubbleTimer), (this.bubbleTimer = null)),
        this.watchHeightTimer &&
          (clearTimeout(this.watchHeightTimer), (this.watchHeightTimer = null));
    },
    methods: {
      checkZhongjinAgreement: function () {
        return !(
          this.options.broker === T.ZHONGJIN &&
          !this.isRuleChecked &&
          (g.StockBridge.toast("请勾选信息授权与协议签署", "none"),
          g.StockBridge.busEmit("shake-agreement"),
          1)
        );
      },
      updateFooterBarHeight: function () {
        var e,
          t = this;
        if (
          !(this.footerBarHeight > 0) &&
          (null == (e = this.currentTemplate) ? void 0 : e.footerButton)
        ) {
          var r = this.$refs.footerBar;
          r &&
            this.$nextTick(function () {
              if (R)
                g.wx$1
                  .createSelectorQuery()
                  .in(r)
                  .select(".ams-footer-bar")
                  .boundingClientRect(function (e) {
                    (null == e ? void 0 : e.height) &&
                      (t.footerBarHeight = e.height);
                  })
                  .exec();
              else if (r.$el) {
                var e = r.$el.getBoundingClientRect();
                (null == e ? void 0 : e.height) &&
                  (t.footerBarHeight = e.height);
              }
            });
        }
      },
      fetchTradeGameHome: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        g.StockBridge.request(
                          "https://wzq.tenpay.com/svr/activity/simple_activity/trade_game_home?new_customer_only=true",
                          g.RequestTypeEnum.GET,
                          {},
                          B
                        )
                          .then(function (e) {
                            return e;
                          })
                          .catch(function (e) {
                            return e;
                          })
                      );
                    case 3:
                      if (0 === (null == (t = e.sent) ? void 0 : t.retcode)) {
                        e.next = 6;
                        break;
                      }
                      throw t;
                    case 6:
                      if (
                        ((this.tradeGameData.dealerCode = t.dealer_code || ""),
                        (this.tradeGameData.applyStatus = t.apply_status),
                        (e.t0 = t.dealer_code),
                        !e.t0)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (this.options.broker = t.dealer_code),
                        (e.next = 13),
                        null == D ? void 0 : D.fetchBrokerInfo()
                      );
                    case 13:
                      this.isBind = D.isBind(t.dealer_code);
                    case 14:
                      e.next = 19;
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t1 = e.catch(0)),
                        (this.options.broker = S);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 16]]
            );
          })
        );
      },
      getIndexImageUrl: function (e) {
        var t, r, n;
        return 1 ===
          ((null == (t = this.currentTemplate.sections) ? void 0 : t.length) ||
            0) ||
          1 === this.orderedSections.length ||
          ([1, 4, 5].includes(this.baseTemplate) && 0 === e)
          ? null
          : e < 3 &&
            (1 !== this.baseTemplate || 0 !== e) &&
            this.currentTemplate.isStragegy
          ? x[e]
          : e < 3 &&
            (1 !== this.baseTemplate || 0 !== e) &&
            !this.currentTemplate.isStragegy
          ? (
              null ==
              (n = null == (r = this.currentTemplate.sections) ? void 0 : r[e])
                ? void 0
                : n.dropPin
            )
            ? null
            : y[e]
          : null;
      },
      handleHeaderBtnClick: function () {
        var e;
        if (null == (e = this.headerImageBtn) ? void 0 : e.clickEvent) {
          var t = "handle".concat(this.headerImageBtn.clickEvent);
          this[t] && this[t]();
        }
      },
      handleButtonClick: function (e) {
        if (e && "object" == r(e)) {
          var t = e.type,
            n = e.config;
          ("subscribe" !== t && "action" !== t) ||
            ("subscribe" === t
              ? this.handleSubscribe(n)
              : this.handleSectionClick(n));
        }
      },
      handleSectionClick: function (e) {
        if (e && e.clickEvent) {
          var t = this["handle".concat(e.clickEvent)];
          "function" == typeof t && t(e);
        }
      },
      checkAllSubs: function (e) {
        return f(
          this,
          null,
          n().mark(function t() {
            var r,
              i = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((this.beforeMap = {}), !(r = e))) {
                        t.next = 12;
                        break;
                      }
                      return (
                        Array.isArray(r) || (r = [r]),
                        (t.prev = 4),
                        (t.next = 7),
                        Promise.all(
                          r.map(function (e) {
                            return f(
                              i,
                              null,
                              n().mark(function t() {
                                var r;
                                return n().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.next = 2),
                                            b.querySubscribeSwitch(e)
                                          );
                                        case 2:
                                          (r = t.sent),
                                            (this.beforeMap[e] =
                                              r.mainSwitch && r.status),
                                            r.mainSwitch ||
                                              (this.allClose = !0);
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  this
                                );
                              })
                            );
                          })
                        )
                      );
                    case 7:
                      this.allClose ||
                        (this.allClose = Object.values(this.beforeMap).every(
                          function (e) {
                            return "reject" === e;
                          }
                        )),
                        (t.next = 12);
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(4));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[4, 10]]
            );
          })
        );
      },
      initSubscribe: function () {
        b
          .setSubscribe(this.currentTemplate.subscriptions)
          .catch(function (e) {}),
          this.currentTemplate.etfSubsFlag &&
            g.StockBridge.request(
              "https://wzq.tenpay.com/svr/user/user_service/etf_competition_subscribe",
              g.RequestTypeEnum.GET,
              { source: "zxgxcx" },
              B
            )
              .then(function (e) {
                return e;
              })
              .catch(function (e) {
                return e;
              })
              .catch(function (e) {});
      },
      checkStatusChanges: function (e, t, r) {
        return (
          Array.isArray(e) || (e = [e]),
          e.every(function (e) {
            return "accept" === t[e];
          })
            ? "accepted"
            : e.every(function (e) {
                return !1 === t[e] || "rejected" === t[e];
              }) ||
              e.every(function (e) {
                return "reject" === r[e];
              }) ||
              e.every(function (e) {
                return (
                  ("accept" === t[e] && "accept" === r[e]) ||
                  ("accept" !== t[e] && "reject" === r[e])
                );
              })
            ? "rejected"
            : e.filter(function (e) {
                return "accept" === r[e] && "accept" !== t[e];
              })
        );
      },
      handledirectApply: function () {
        this.handleGoApply();
      },
      handleSubscribe: function (e) {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, i, a, o, s, c, u, l, p, h;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (R) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void this.toApply());
                    case 2:
                      if (((i = this), !this.checkZhongjinAgreement())) {
                        e.next = 34;
                        break;
                      }
                      if (
                        ((e.prev = 4),
                        (a = this.currentTemplate),
                        (o = a.business),
                        (s = a.templateid),
                        (c = s),
                        !s)
                      ) {
                        e.next = 11;
                        break;
                      }
                      s && !Array.isArray(s) && (c = s[this.sectionOrder]),
                        (e.next = 16);
                      break;
                    case 11:
                      return (e.next = 13), b.getTemplateInfo(o);
                    case 13:
                      (u = e.sent),
                        (l = u.templateInfoList) &&
                          l.length &&
                          (c = l.map(function (e) {
                            return e.template_id;
                          }));
                    case 16:
                      return (e.next = 18), this.checkAllSubs(c);
                    case 18:
                      if (!this.allClose) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (g.wx$1.showModal({
                          title: "订阅提示",
                          content:
                            '由于你此前拒绝过此提醒，需要通过右上角"···"-设置-订阅消息，手动允许消息提醒',
                          showCancel: !1,
                          confirmText: "我知道了",
                          success: function (e) {
                            e.confirm && i.goApply();
                          },
                        }),
                        void this.reportData("srv_notify_breject_click"))
                      );
                    case 20:
                      return (e.next = 22), b.subscribe(o, c, !0);
                    case 22:
                      (p = e.sent),
                        this.initSubscribe(),
                        "accepted" ===
                        (h = this.checkStatusChanges(c, this.beforeMap, p))
                          ? (this.reportData("srv_notify_accepted_click"),
                            (
                              null == (t = this.currentTemplate)
                                ? void 0
                                : t.overlay
                            )
                              ? ((this.currentOverlay = null),
                                (this.showPopup = !0))
                              : this.goApply())
                          : "rejected" === h
                          ? (Request.reportMTAData({
                              eventName: this.formatEventName(
                                "srv_notify_rejected_click"
                              ),
                            }),
                            this.reportData("srv_notify_accepted_click"))
                          : Array.isArray(h) &&
                            h.length > 0 &&
                            (this.reportData(
                              "srv_notify_sub_ok_click",
                              m(d({}, this.options), { tpl: h.join(",") })
                            ),
                            g.StockBridge &&
                              g.StockBridge.report &&
                              g.StockBridge.report(
                                "yy.qd.srv_notify_sub_ok",
                                this.options
                              ),
                            (
                              null == (r = this.currentTemplate)
                                ? void 0
                                : r.overlay
                            )
                              ? ((this.currentOverlay = null),
                                (this.showPopup = !0))
                              : this.goApply()),
                        (e.next = 31);
                      break;
                    case 28:
                      (e.prev = 28), (e.t0 = e.catch(4)), this.goApply();
                    case 31:
                      return (
                        (e.prev = 31),
                        this.reportData("sub_btn_click"),
                        e.finish(31)
                      );
                    case 34:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[4, 28, 31, 34]]
            );
          })
        );
      },
      goApply: function () {
        var e = this.currentTemplate,
          t = e.applyIfReject,
          r = e.allowApply;
        (M.includes(this.baseTemplate) || t || r) && this.toApply();
      },
      toApply: function () {
        var e = this,
          t = this.options.broker;
        t || (t = S),
          (t = String(t)),
          j.includes(this.baseTemplate)
            ? D.navToBrokerPage({
                path: "/pages/account/ts-bind-phone",
                broker: t,
                stat: this.options.stat_data || this.options.stat,
              }).catch(function (t) {
                e.aegisReporterFn("AMS_TOAPPLYSTEP_ERROR", {
                  ext2: JSON.stringify(t),
                });
              })
            : D.navToApplyStep({
                broker: t,
                stat: this.stat,
                hideSubscribe: !0,
              }).catch(function (t) {
                e.aegisReporterFn("AMS_TOAPPLYSTEP_ERROR", {
                  ext2: JSON.stringify(t),
                });
              });
      },
      checkAndShowBubble: function () {
        var e;
        if (!1 !== (null == (e = this.romoteConfig) ? void 0 : e.useBubble)) {
          var t = "mp_guide_shown_".concat(this.baseTemplate);
          g.index.getStorageSync(t) ||
            ((this.showAddToMpGuide = !0), g.index.setStorageSync(t, !0));
        }
      },
      aegisReporterFn: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        g.StockBridge &&
          g.StockBridge.aegisReportEvent &&
          g.StockBridge.aegisReportEvent(
            e,
            m(d({}, t), { ext1: this.options.stat_data || this.options.stat })
          );
      },
      closePopup: function (e) {
        var t,
          r =
            (null == (t = this.currentOverlay) ? void 0 : t.fromSubscribe) ||
            !1;
        if (((this.showPopup = !1), (this.currentOverlay = null), e)) {
          var n = this["handle".concat(e)];
          "function" == typeof n &&
            ("SignupCompetition" === e && r && (this._tempFromSubscribe = !0),
            n(),
            "SignupCompetition" === e && (this._tempFromSubscribe = !1));
        }
      },
      fetchBuySellPoint: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, a, o;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        g.Wuji.get({
                          appid: "act",
                          schemaid: "yy_activity_page_config",
                          filter: encodeURIComponent(
                            "act_id = ams_buysellpoint"
                          ),
                        })
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        (r = i(t.data, 1)),
                        (a = r[0].ctrl_conf),
                        (o = JSON.parse(a) || {}),
                        e.abrupt("return", ((this.romoteConfig = o), o))
                      );
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 10]]
            );
          })
        );
      },
      loadPageConfig: function (t) {
        return f(
          this,
          null,
          n().mark(function r() {
            var a, o, s, c;
            return n().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.prev = 0),
                        (r.next = 3),
                        g.Wuji.get({
                          appid: "act",
                          schemaid: "ams_template_config",
                          filter: encodeURIComponent("temp_id=".concat(t)),
                        })
                      );
                    case 3:
                      (a = r.sent),
                        (o = i(a.data, 1)),
                        (s = o[0]),
                        (c = (null == s ? void 0 : s.config) || {}),
                        (this.romoteConfig = e({}, t, c)),
                        (r.next = 13);
                      break;
                    case 10:
                      (r.prev = 10),
                        (r.t0 = r.catch(0)),
                        (this.romoteConfig = null);
                    case 13:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              this,
              [[0, 10]]
            );
          })
        );
      },
      onLoadPage: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, i, a, o, s;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = {}),
                        (null == (t = g.StockBridge) ? void 0 : t.ENV) ===
                        g.EnvTypeEnum.MP
                          ? (r = this.params || {})
                          : ((i = v(location.search || "")),
                            (a = v(location.hash || "")),
                            (r = d(d({}, i), a))),
                        (this.originalQuery = d({}, r)),
                        1 != +r.usewj)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 5), this.fetchBuySellPoint();
                    case 5:
                      e.next = 11;
                      break;
                    case 7:
                      if (2 != +r.usewj) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (o = this.parseDispStyle(r.disp_style)),
                        (s = o.template),
                        (e.next = 11),
                        this.loadPageConfig(s)
                      );
                    case 11:
                      return (e.next = 13), this.initPage(r);
                    case 13:
                      if (((e.t0 = R), !e.t0)) {
                        e.next = 17;
                        break;
                      }
                      return (e.next = 17), this.initSubscribeStatus();
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      initSubscribeStatus: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, i, a;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        null == (t = this.currentTemplate)
                          ? void 0
                          : t.business)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (
                        (r = this.currentTemplate.business),
                        (e.next = 6),
                        b.getTemplateInfo(r)
                      );
                    case 6:
                      (i = e.sent),
                        (a = i.templateInfoList) &&
                          a.length &&
                          this.checkAllSubs(
                            a.map(function (e) {
                              return e.template_id;
                            })
                          ),
                        (e.next = 13);
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(0));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 11]]
            );
          })
        );
      },
      initPage: function (e) {
        return f(
          this,
          null,
          n().mark(function t() {
            var r, i, a, o, s, c;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((this.options = d({}, e)),
                        (t.t0 = "etf_game" === e.page_type),
                        !t.t0)
                      ) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 5), this.fetchTradeGameHome();
                    case 5:
                      (r = this.parseDispStyle(e.disp_style)),
                        (i = r.template),
                        (a = r.order),
                        (this.baseTemplate = i),
                        (this.sectionOrder = a),
                        this.reportData("page_brow", this.options),
                        (o = e.stat),
                        (s = e.stat_data),
                        (this.stat = o || s),
                        this.stat || this.aegisReporterFn("AMS_STAT_ERROR"),
                        this.reportData("onload_page_brow", this.options),
                        (c = this.getShareConfig()),
                        this.$emit("setShare", c);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getShareConfig: function () {
        var e,
          t,
          r,
          n = this,
          i = (null == (e = this.currentTemplate) ? void 0 : e.isShare) || !1,
          a = [
            "account_id",
            "adgroup_id",
            "site_set",
            "material_id",
            "rta_trace_id",
            "request_id",
            "dynamic_creative",
            "site_set_name",
            "gdt_vid",
            "qz_gdt",
          ],
          o = (function () {
            var e = d({}, n.originalQuery);
            return (
              n.stat &&
                !("stat_data" in n.originalQuery) &&
                (e.stat_data = n.stat),
              (e._scene_from_ = "share"),
              e
            );
          })(),
          s =
            ((r = o),
            Object.keys(r)
              .filter(function (e) {
                return (
                  !(function (e) {
                    return (
                      a.includes(e) || (e.startsWith("__") && e.endsWith("__"))
                    );
                  })(e) &&
                  null != r[e] &&
                  "" !== r[e]
                );
              })
              .map(function (e) {
                return ""
                  .concat(encodeURIComponent(e), "=")
                  .concat(encodeURIComponent(String(r[e])));
              })
              .join("&")),
          c = R
            ? "/pages/act/ams/union?".concat(s)
            : ""
                .concat(location.origin)
                .concat(location.pathname, "?")
                .concat(s);
        if (i) {
          var u = {
            title: "微信里的AI炒股神器，分享给我的股友们！",
            desc: "",
            imgUrl:
              "https://st.gtimg.com/design/5619536bbc41e2aee0485f2f9bc3aa1c.png",
            link: c,
          };
          return (
            (null == (t = this.currentTemplate) ? void 0 : t.shareConfig) || u
          );
        }
        return {
          title: R ? "腾讯微证券" : "你能用微信投资股票啦",
          desc: "无需app，极速开户，微信盯盘，快来体验吧！",
          link: c,
        };
      },
      reportData: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        g.StockBridge &&
          g.StockBridge.report &&
          g.StockBridge.report(this.formatEventName(e), t);
      },
      formatEventName: function (e) {
        var t = this.currentTemplate.mtakeys;
        return "yy.ams_union_page."
          .concat((void 0 === t ? {} : t)[this.sectionOrder] || "", "_")
          .concat(e);
      },
      parseDispStyle: function (e) {
        if (!e) return { template: 1, order: "123" };
        var t = e.includes("_") ? "_" : "-",
          r = e.split(t),
          n = i(r, 2),
          a = n[0],
          o = n[1];
        return {
          template: parseInt(a, 10) || 1,
          order: /^[1-3]{1,}$/.test(o) ? o : "123",
        };
      },
      handleNavigate: function (e) {
        var t;
        e.report && this.reportData(e.report);
        var r = e.routeQuery || {};
        (null == (t = g.StockBridge) ? void 0 : t.ENV) === g.EnvTypeEnum.MP &&
          (r = m(d({}, r), { _scene_from_: "1012" })),
          g.StockRouter.routeTo({ name: R ? e.routeMp : e.routeH5, query: r });
      },
      handleSearchClick: function () {
        this.handleNavigate(w.stockIndex);
      },
      handleGoQuote: function () {
        var e = this.currentTemplate.sections[0].params,
          t = e.code,
          r = e.tip,
          n = e.market;
        this.handleNavigate(
          m(d({}, w.stockDetail), {
            routeQuery: {
              market: n,
              scode: t,
              label: "ams",
              tips: encodeURIComponent(r),
            },
          })
        );
      },
      handleAddStockRemindClick: function () {
        this.handleNavigate(w.stockRemind);
      },
      handleRemindClick: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t = ["QBDM1tKbT0d3bwQtm5LGhiRX2feqFf2yNNOod6bjSBs"]),
                        (r = "price_remind"),
                        (e.next = 4),
                        b.subscribe(r, t)
                      );
                    case 4:
                      return (e.next = 6), b.setSubscribe([r]);
                    case 6:
                      return (
                        (e.next = 8),
                        f(
                          exports,
                          null,
                          n().mark(function e() {
                            var t, r, i, a;
                            return n().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (r = I),
                                        (e.next = 4),
                                        b.queryStockAlert({
                                          market: "1",
                                          code: C,
                                          symbol: I,
                                        })
                                      );
                                    case 4:
                                      if (
                                        ((i = e.sent),
                                        0 !==
                                          (null ==
                                          (t = null == i ? void 0 : i.stocks)
                                            ? void 0
                                            : t.length))
                                      ) {
                                        e.next = 14;
                                        break;
                                      }
                                      return (
                                        (e.t0 = function (e, t) {
                                          var r = null == e ? void 0 : e[t],
                                            n = +(null == r ? void 0 : r[3]);
                                          if ("number" != typeof n || isNaN(n))
                                            throw new Error(
                                              "Invalid current value: must be a valid number"
                                            );
                                          var i = 0.9 * n,
                                            a = "scene=".concat(A);
                                          return {
                                            market: "1",
                                            code: C,
                                            symbol: t,
                                            smart: {
                                              new_high_low: 1,
                                              limit_up_down: 0,
                                              big_event: 0,
                                            },
                                            subscribe_infos: [
                                              {
                                                subs_type: 1,
                                                val: (1.1 * n).toFixed(2),
                                                extra_info: a,
                                              },
                                              {
                                                subs_type: 2,
                                                val: i.toFixed(2),
                                                extra_info: a,
                                              },
                                              {
                                                subs_type: 3,
                                                val: "3".toString(),
                                                extra_info: a,
                                              },
                                              {
                                                subs_type: 4,
                                                val: "3".toString(),
                                                extra_info: a,
                                              },
                                            ],
                                            scenes: 6,
                                            xcxname: A,
                                            come_from: "3",
                                          };
                                        }),
                                        (e.next = 9),
                                        E(r)
                                      );
                                    case 9:
                                      return (
                                        (e.t1 = e.sent),
                                        (e.t2 = r),
                                        (a = (0, e.t0)(e.t1, e.t2)),
                                        (e.next = 14),
                                        b.setStockAlert(a)
                                      );
                                    case 14:
                                      e.next = 19;
                                      break;
                                    case 16:
                                      throw (
                                        ((e.prev = 16),
                                        (e.t3 = e.catch(0)),
                                        e.t3)
                                      );
                                    case 19:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 16]]
                            );
                          })
                        )
                      );
                    case 8:
                      this.handleAddStockRemindClick(), (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(0)),
                        this.handleAddStockRemindClick();
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 11]]
            );
          })
        );
      },
      handleHotStockClick: function () {
        this.handleNavigate(w.hotStock);
      },
      handleFriendTalksTopicsClick: function () {
        this.handleNavigate(w.topicPlaza);
      },
      handleInvestorStockClick: function () {
        this.handleNavigate(w.investorStock);
      },
      handleWxTops5Click: function () {
        this.handleNavigate(w.wxTops5);
      },
      handleEtfAllRankClick: function () {
        this.handleNavigate(w.etfAllRank);
      },
      handleEtfEnrollMatchClick: function () {
        this.handleNavigate(w.etfEnrollMatch);
      },
      handleNavigateClick: function (e) {
        e && e.navigateConfig && this.handleNavigate(e.navigateConfig);
      },
      handleSignupCompetition: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t,
              r,
              i,
              a,
              o,
              s,
              c,
              u,
              l,
              p,
              h,
              f,
              k,
              v,
              _,
              x,
              y = this;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (this.reportData("signup_competition_click"),
                        this.options.broker)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.handleEtfEnrollMatchClick()
                      );
                    case 4:
                      if (
                        ((r = this.currentTemplate),
                        (i = r.overlay00),
                        (a = r.overlay11),
                        (o = 1 == +this.tradeGameData.applyStatus),
                        (s = this.isBind),
                        !(null == (t = this.currentOverlay)
                          ? void 0
                          : t.fromSubscribe) && !this._tempFromSubscribe)
                      ) {
                        e.next = 91;
                        break;
                      }
                      if (!o || s) {
                        e.next = 53;
                        break;
                      }
                      if (
                        (this.reportData("signup_competition_case1_click"),
                        this.isRuleChecked)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void g.StockBridge.toast("请先签署协议", "none")
                      );
                    case 9:
                      if (
                        ((e.prev = 9),
                        (c = this.currentTemplate),
                        (u = c.business),
                        (l = c.templateid),
                        (p = l),
                        !l)
                      ) {
                        e.next = 16;
                        break;
                      }
                      l && !Array.isArray(l) && (p = l[this.sectionOrder]),
                        (e.next = 21);
                      break;
                    case 16:
                      return (e.next = 18), b.getTemplateInfo(u);
                    case 18:
                      (h = e.sent),
                        (null == (f = h.templateInfoList)
                          ? void 0
                          : f.length) &&
                          (p = f.map(function (e) {
                            return e.template_id;
                          }));
                    case 21:
                      return (e.next = 23), this.checkAllSubs(p);
                    case 23:
                      if (!this.allClose) {
                        e.next = 25;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void g.wx$1.showModal({
                          title: "订阅提示",
                          content:
                            '由于你此前拒绝过此提醒，需要通过右上角"···"-设置-订阅消息，手动允许消息提醒',
                          showCancel: !1,
                          confirmText: "我知道了",
                          success: function (e) {
                            e.confirm && y.toApply();
                          },
                        })
                      );
                    case 25:
                      return (e.next = 27), b.subscribe(u, p, !0);
                    case 27:
                      return (
                        g.StockBridge &&
                          g.StockBridge.report &&
                          g.StockBridge.report(
                            "yy.qd.srv_notify_sub_ok",
                            this.options
                          ),
                        this.initSubscribe(),
                        (e.next = 31),
                        P()
                      );
                    case 31:
                      if (
                        ((k = e.sent),
                        (e.t0 = 0 === (null == k ? void 0 : k.retcode)),
                        !e.t0)
                      ) {
                        e.next = 36;
                        break;
                      }
                      return (e.next = 36), this.fetchTradeGameHome();
                    case 36:
                      (this.showPopup = !1),
                        (this.currentOverlay = null),
                        this.reportData("signup_competition_case1_success"),
                        this.toApply(),
                        (e.next = 52);
                      break;
                    case 42:
                      return (
                        (e.prev = 42),
                        (e.t1 = e.catch(9)),
                        this.reportData("signup_competition_case1_fail"),
                        (this.showPopup = !1),
                        (e.next = 48),
                        this.$nextTick()
                      );
                    case 48:
                      return (
                        (this.currentOverlay = m(d({}, a), {
                          title: "活动详情",
                          text: "我们将通过微信服务通知发送榜单提醒。现在报名ETF实盘赛还可领最高18元红包！",
                          btnText: "查看活动详情",
                        })),
                        (e.next = 51),
                        this.$nextTick()
                      );
                    case 51:
                      this.showPopup = !0;
                    case 52:
                      return e.abrupt("return");
                    case 53:
                      if (o || s) {
                        e.next = 60;
                        break;
                      }
                      return (
                        this.reportData("signup_competition_case3_click"),
                        (this.showPopup = !1),
                        (this.currentOverlay = null),
                        (e.next = 59),
                        this.handleSubscribe()
                      );
                    case 59:
                      return e.abrupt("return", void e.sent);
                    case 60:
                      if (o || !s) {
                        e.next = 62;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (this.reportData("signup_competition_case4_click"),
                        (this.showPopup = !1),
                        (this.currentOverlay = null),
                        void this.handleEtfEnrollMatchClick())
                      );
                    case 62:
                      if (!o || !s) {
                        e.next = 91;
                        break;
                      }
                      if (
                        (this.reportData("signup_competition_case2_click"),
                        (e.prev = 64),
                        this.isRuleChecked)
                      ) {
                        e.next = 67;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void g.StockBridge.toast("请先签署协议", "none")
                      );
                    case 67:
                      return (e.next = 69), P();
                    case 69:
                      if (0 === (null == (v = e.sent) ? void 0 : v.retcode)) {
                        e.next = 72;
                        break;
                      }
                      throw new Error(null == v ? void 0 : v.retmsg);
                    case 72:
                      return (e.next = 74), this.fetchTradeGameHome();
                    case 74:
                      (this.showPopup = !1),
                        (this.currentOverlay = null),
                        this.reportData("signup_competition_case2_success"),
                        this.handleEtfEnrollMatchClick(),
                        (e.next = 90);
                      break;
                    case 80:
                      return (
                        (e.prev = 80),
                        (e.t2 = e.catch(64)),
                        this.reportData("signup_competition_case2_fail"),
                        (this.showPopup = !1),
                        (e.next = 86),
                        this.$nextTick()
                      );
                    case 86:
                      return (
                        (this.currentOverlay = m(d({}, a), {
                          title: "活动详情",
                          text: "我们将通过微信服务通知发送榜单提醒。现在报名ETF实盘赛还可领最高18元红包！",
                          btnText: "查看活动详情",
                        })),
                        (e.next = 89),
                        this.$nextTick()
                      );
                    case 89:
                      this.showPopup = !0;
                    case 90:
                      return e.abrupt("return");
                    case 91:
                      if (!o) {
                        e.next = 126;
                        break;
                      }
                      if (
                        (this.reportData("signup_competition_normal_click"),
                        (e.prev = 93),
                        this.isRuleChecked)
                      ) {
                        e.next = 96;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void g.StockBridge.toast("请先签署协议", "none")
                      );
                    case 96:
                      return (e.next = 98), P();
                    case 98:
                      if (0 === (null == (_ = e.sent) ? void 0 : _.retcode)) {
                        e.next = 101;
                        break;
                      }
                      throw new Error(null == _ ? void 0 : _.retmsg);
                    case 101:
                      return (e.next = 103), this.fetchTradeGameHome();
                    case 103:
                      return (
                        (x = s
                          ? m(d({}, a), {
                              clickEvent: "EtfEnrollMatchClick",
                              btnText: "查看活动详情",
                            })
                          : m(d({}, i), {
                              clickEvent: "Subscribe",
                              btnText: "开通股票账户",
                            })),
                        (this.showPopup = !1),
                        (e.next = 107),
                        this.$nextTick()
                      );
                    case 107:
                      return (
                        (this.currentOverlay = m(d({}, x), {
                          title: "报名成功",
                          text: "交易ETF需要先开通股票账户，完成开户后即可参与ETF实盘赛！",
                        })),
                        (e.next = 110),
                        this.$nextTick()
                      );
                    case 110:
                      (this.showPopup = !0),
                        this.reportData("signup_competition_normal_success"),
                        (e.next = 124);
                      break;
                    case 114:
                      return (
                        (e.prev = 114),
                        (e.t3 = e.catch(93)),
                        this.reportData("signup_competition_normal_fail"),
                        (this.showPopup = !1),
                        (e.next = 120),
                        this.$nextTick()
                      );
                    case 120:
                      return (
                        (this.currentOverlay = m(d({}, a), {
                          title: "活动详情",
                          text: "我们将通过微信服务通知发送榜单提醒。现在报名ETF实盘赛还可领最高18元红包！",
                          btnText: "查看活动详情",
                        })),
                        (e.next = 123),
                        this.$nextTick()
                      );
                    case 123:
                      this.showPopup = !0;
                    case 124:
                      e.next = 131;
                      break;
                    case 126:
                      if (!s) {
                        e.next = 128;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (this.reportData("signup_competition_bound_click"),
                        void this.handleEtfEnrollMatchClick())
                      );
                    case 128:
                      return (
                        this.reportData("signup_competition_unbound_click"),
                        (e.next = 131),
                        this.handleSubscribe()
                      );
                    case 131:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [9, 42],
                [64, 80],
                [93, 114],
              ]
            );
          })
        );
      },
      handleEtfRankSubscribe: function (e) {
        return f(
          this,
          null,
          n().mark(function t() {
            var r,
              i,
              a,
              o,
              s,
              c,
              u,
              l,
              p,
              h,
              k,
              v,
              _,
              x,
              y,
              T = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.reportData("etf_rank_subscribe_click"),
                        (r = e.business),
                        (t.prev = 2),
                        (i = []),
                        (t.next = 6),
                        b.getTemplateInfo(r)
                      );
                    case 6:
                      return (
                        (a = t.sent),
                        (o = a.templateInfoList),
                        (s = a.userSettings),
                        o &&
                          o.length &&
                          (i = o.map(function (e) {
                            return e.template_id;
                          })),
                        (c = {}),
                        (u = !1),
                        (t.next = 14),
                        Promise.all(
                          i.map(function (e) {
                            return f(
                              T,
                              null,
                              n().mark(function t() {
                                var r;
                                return n().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2),
                                          b.querySubscribeSwitch(e)
                                        );
                                      case 2:
                                        (r = t.sent),
                                          (c[e] = r.mainSwitch && r.status),
                                          "reject" === r.status && (u = !0);
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                          })
                        )
                      );
                    case 14:
                      if (!u) {
                        t.next = 16;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.reportData("etf_rank_subscribe_rejected"),
                        void g.wx$1.showModal({
                          title: "订阅提示",
                          content:
                            '由于你此前拒绝过此提醒，需要通过右上角"···"-设置-订阅消息，手动允许消息提醒',
                          showCancel: !1,
                          confirmText: "我知道了",
                        }))
                      );
                    case 16:
                      return (t.next = 18), b.subscribe(r, i, !0);
                    case 18:
                      (l = t.sent),
                        b.setSubscribe(s).catch(function (e) {}),
                        i.some(function (e) {
                          return "accept" === l[e];
                        }) &&
                          (g.StockBridge &&
                            g.StockBridge.report &&
                            g.StockBridge.report(
                              "yy.qd.srv_notify_sub_ok",
                              this.options
                            ),
                          (p = this.currentTemplate),
                          (h = p.overlay00),
                          (k = p.overlay01),
                          (v = p.overlay11),
                          (_ = 1 == +this.tradeGameData.applyStatus),
                          (x = this.isBind),
                          null,
                          (y =
                            !_ && x
                              ? m(d({}, v), {
                                  btnText: "查看活动详情",
                                  fromSubscribe: !0,
                                })
                              : _ || x
                              ? _ && x
                                ? m(d({}, k), {
                                    btnText: "立即报名参赛",
                                    fromSubscribe: !0,
                                  })
                                : m(d({}, h), {
                                    btnText: "开户报名参赛",
                                    fromSubscribe: !0,
                                  })
                              : m(d({}, h), {
                                  btnText: "开通股票账户",
                                  fromSubscribe: !0,
                                })) &&
                            ((this.currentOverlay = m(d({}, y), {
                              text: "我们将通过微信服务通知发送榜单提醒。现在报名ETF实盘赛还可领最高18元红包！",
                              title: "订阅成功",
                            })),
                            (this.showPopup = !0))),
                        (t.next = 26);
                      break;
                    case 23:
                      (t.prev = 23),
                        (t.t0 = t.catch(2)),
                        this.reportData("etf_rank_subscribe_fail");
                    case 26:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[2, 23]]
            );
          })
        );
      },
      handleRuleChange: function (e) {
        var t = this.isRuleChecked;
        (this.isRuleChecked = e),
          this.isAgreementInitialized &&
            t &&
            !e &&
            g.StockBridge.toast("请先签署协议", "none"),
          this.isAgreementInitialized || (this.isAgreementInitialized = !0);
      },
      handleImportlnkClick: function () {
        this.handleNavigate(w.searchImgOcr);
      },
      handleEtfrankClick: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.fetchEtfrankData();
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = "yifangda";
                    case 5:
                      (t = e.t0),
                        this.handleNavigate(
                          m(d({}, w.etfRank), {
                            routeQuery: { key: t, stat_data: this.stat },
                          })
                        );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      handleDiscoverTabClick: function () {
        this.handleNavigate(w.discoverIndex);
      },
      handleGoApply: function () {
        this.checkZhongjinAgreement() &&
          (this.reportData("goto_apply_click"), this.toApply());
      },
      handleUseAiWen: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), this.getServerTime();
                    case 3:
                      (t = e.sent),
                        this.setAiConfig(t),
                        this.reportData("useai_click"),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        this.setAiConfig(new Date());
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 7]]
            );
          })
        );
      },
      fetchEtfrankData: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, i;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        g.Wuji.get({
                          appid: "act",
                          schemaid: "etf_optimize_page",
                        })
                      );
                    case 3:
                      if (
                        ((r = e.sent),
                        (i = r.data),
                        !(Array.isArray(i) && i.length > 0))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        null ==
                          (t = i.slice().sort(function (e, t) {
                            var r = new Date(e._mtime).getTime();
                            return new Date(t._mtime).getTime() - r;
                          })[0])
                          ? void 0
                          : t.key
                      );
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(0));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        );
      },
      setAiConfig: function (e) {
        var t = e.getHours(),
          r = ""
            .concat(e.getFullYear(), "/")
            .concat(String(e.getMonth() + 1).padStart(2, "0"), "/")
            .concat(String(e.getDate()).padStart(2, "0")),
          n = t < 15,
          i = this.getPromptTitle(n, r),
          a = i.title,
          o = i.prompt;
        (this.aiConfig.title = a),
          (this.aiConfig.prompt = o),
          (this.aiConfig.showAiDialog = !0);
      },
      getPromptTitle: function (e, t) {
        var r = this.currentTemplate.aiPrompt || {},
          n = "附注日期";
        if (null == r ? void 0 : r.beforeTitle) {
          var i = e ? r.beforeTitle : r.afterTitle,
            a = e ? r.beforePrompt : r.afterPrompt;
          return { title: i.replace(n, t), prompt: a.replace(n, t) };
        }
        return { title: "", prompt: "" };
      },
      getServerTime: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.t0 = function (e) {
                          return "string" == typeof e && e && e.length >= 14
                            ? ""
                                .concat(e.slice(0, 4), "-")
                                .concat(e.slice(4, 6), "-")
                                .concat(e.slice(6, 8), "T")
                                .concat(e.slice(8, 10), ":")
                                .concat(e.slice(10, 12), ":")
                                .concat(e.slice(12, 14))
                            : "";
                        }),
                        (e.next = 4),
                        (function () {
                          var e = "sh000001";
                          return g.StockBridge.request(
                            "https://sqt.gtimg.cn/?q=".concat(e, "&fmt=json"),
                            g.RequestTypeEnum.GET
                          )
                            .then(function (t) {
                              var r;
                              return t &&
                                (null == (r = t[e]) ? void 0 : r.length) >= 30
                                ? t[e][30]
                                : "";
                            })
                            .catch(function (e) {
                              return e;
                            });
                        })()
                      );
                    case 4:
                      return (
                        (e.t1 = e.sent),
                        (t = (0, e.t0)(e.t1)),
                        e.abrupt("return", (t = t ? new Date(t) : new Date()))
                      );
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.t2 = e.catch(0)),
                        e.abrupt("return", new Date())
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        );
      },
    },
  };
Array ||
  (
    g.resolveComponent("AddToMpGuide") +
    g.resolveComponent("ExtraImages") +
    g.resolveComponent("Sections") +
    g.resolveComponent("BrandArea") +
    g.resolveComponent("half-screen-ai-entry") +
    g.resolveComponent("OverlayModal") +
    g.resolveComponent("FooterBar")
  )();
var q = g._export_sfc(H, [
  [
    "render",
    function (e, t, r, n, i, a) {
      return g.e(
        { a: i.isMina },
        i.isMina
          ? {
              b: g.o(function (e) {
                return (i.showAddToMpGuide = !1);
              }, 1296),
              c: g.p({ visible: i.showAddToMpGuide, config: i.bubbleConfig }),
            }
          : {},
        { d: a.headerImage },
        a.headerImage
          ? g.e(
              { e: a.headerImage, f: a.headerImageBtn },
              a.headerImageBtn ? { g: a.headerImageBtn.logo } : {},
              { h: a.headerImageBtn },
              a.headerImageBtn
                ? {
                    i: g.t(a.headerImageBtn.btnText),
                    j: g.o(function () {
                      return (
                        a.handleHeaderBtnClick &&
                        a.handleHeaderBtnClick.apply(a, arguments)
                      );
                    }, 1297),
                  }
                : {}
            )
          : {},
        { k: a.currentTemplate.preImage },
        a.currentTemplate.preImage
          ? { l: g.p({ imgUrl: a.currentTemplate.preImage }) }
          : {},
        {
          m: g.o(a.reportData, 1298),
          n: g.o(a.handleSectionClick, 1299),
          o: g.p({
            orderedSections: a.orderedSections,
            getIndexImageUrl: a.getIndexImageUrl,
          }),
          p: a.currentTemplate.extraImage,
        },
        a.currentTemplate.extraImage
          ? { q: g.p({ extraImage: a.currentTemplate.extraImage || [] }) }
          : {},
        { r: a.currentTemplate.footerButton },
        a.currentTemplate.footerButton
          ? {
              s: g.p({
                showLogoText: a.showLogoText,
                brokerName: a.brokerName,
                bottomText: a.currentTemplate.bottomText || "",
                brokerId: i.options && i.options.broker,
              }),
            }
          : {},
        {
          t: a.placeholderHeight,
          v: g.o(function (e) {
            return (i.aiConfig.showAiDialog = !1);
          }, 1300),
          w: g.p({
            "sse-serve-type": "newsSummaryServerHttp",
            "show-ai-dialog": i.aiConfig.showAiDialog,
            theme: i.aiConfig.theme,
            "need-preset-question": !0,
            "ai-dialog-question": i.aiConfig.title,
            "ai-question-query": i.aiConfig.prompt,
            "source-from": i.aiConfig.sourceFrom,
          }),
          x: i.isMina,
        },
        i.isMina
          ? {
              y: a.overlayKey,
              z: g.o(a.closePopup, 1301),
              A: g.o(a.handleImportlnkClick, 1302),
              B: g.p({
                showPopup: i.showPopup,
                overlay: i.currentOverlay || a.currentTemplate.overlay || null,
                brokerName: a.brokerName,
              }),
            }
          : {},
        {
          C: g.sr("footerBar", "b4278080-7"),
          D: g.o(a.handleButtonClick, 1303),
          E: g.o(a.handleRuleChange, 1304),
          F: g.p({
            footerButton: a.currentTemplate.footerButton || null,
            sectionOrder: i.sectionOrder,
            showRule: a.shouldShowRule,
            broker: i.options && i.options.broker,
            "api-status": a.apiStatus,
            ruleChecked: i.isRuleChecked,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b4278080"],
]);
wx.createComponent(q);
var N = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.BROKER_ID = T),
  (exports.DEFAULT_BROKER = S),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFtcy11bmlvbi9JbmRleC52dWU =
    N),
  (exports.dealerInfo = _),
  (exports.getStockPoint = E),
  (exports.makeInvestTipInfo = function (e) {
    var t = _[+e];
    return "注：<br>1.机构名称："
      .concat(t.name, "，经营证券业务许可证编号：")
      .concat(
        t.id,
        "，从事证券投资或期货交易，请通过合法证券期货经营机构进行，合法机构名单可到中国证监会网站(http://www.csrc.gov.cn)查询。2.市场有风险，投资需谨慎，以上内容不构成任何投资建议。投资者应充分理解证券投资风险，根据自身风险承受能力谨慎投资，独立决策，并自行承担投资风险。"
      );
  });
