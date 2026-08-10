require("../../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var r in t || (t = {})) o.call(t, r) && u(e, r, t[r]);
    if (s) {
      var i,
        a = n(s(t));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          r = i.value;
          c.call(t, r) && u(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return i(e, a(t));
  },
  _ = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  b = require("../../../stock-base/visibilityObserver/index.js"),
  m = require("../../../stock-base/service/common/sign.js"),
  f = require("../../../stock-news-core/utils/loginHelper.js"),
  g = require("../../../stock-news-core/utils/request/index.js"),
  v = (function (e) {
    return (e.HS = "hs"), (e.HK = "hk"), (e.US = "us"), e;
  })(v || {}),
  h = (function (e) {
    return (
      (e.FINANCE_CALENDAR = "finance_calendar"),
      (e.CORE_OPPORTUNITY = "core_opportunity"),
      (e.RHYTHM = "rhythm"),
      (e.HIGH_LIGHT = "high_light"),
      (e.EARNINGS = "earnings"),
      (e.MACRO_SECTORS = "macro_sectors"),
      (e.TRADE_NOTIFY = "trade_notify"),
      e
    );
  })(h || {});
h.MACRO_SECTORS;
var w = function (e) {
    var t = new Date(e > 9999999999 ? e : 1e3 * e);
    return ""
      .concat(t.getFullYear(), "-")
      .concat(String(t.getMonth() + 1).padStart(2, "0"), "-")
      .concat(String(t.getDate()).padStart(2, "0"));
  },
  y = function (e) {
    var t, n, r, i, a;
    return d(l({}, e), {
      high_light:
        (null == (t = e.high_light)
          ? void 0
          : t.map(function (e) {
              return d(l({}, e), { dateStr: w(e.date) });
            })) || [],
      earnings:
        (null == (n = e.earnings)
          ? void 0
          : n.map(function (e) {
              return d(l({}, e), { dateStr: w(e.date) });
            })) || [],
      macro_sectors:
        (null == (r = e.macro_sectors)
          ? void 0
          : r.map(function (e) {
              var t,
                n = (null == (t = e.symbols) ? void 0 : t[0]) || {
                  code: "",
                  name: "",
                };
              return d(l({}, e), {
                dateStr: e.date ? w(Number(e.date)) : "",
                code: n.code,
                name: n.name,
              });
            })) || [],
      trade_notify:
        (null == (i = e.trade_notify)
          ? void 0
          : i.map(function (e) {
              return d(l({}, e), {
                startStr: w(e.start_date),
                endStr: w(e.end_date),
              });
            })) || [],
      earnings_next:
        (null == (a = e.earnings_next)
          ? void 0
          : a.map(function (e) {
              return d(l({}, e), { dateStr: w(e.date) });
            })) || [],
    });
  },
  x = function (e) {
    return _(
      exports,
      null,
      t().mark(function n() {
        var r, i, a, s, o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (i = f.getLoginParamsObject()),
                  (a = new Date().getTime()),
                  (s = d(
                    l({ date: e.date, days: null != (r = e.days) ? r : 30 }, i),
                    { t: a }
                  )),
                  e.market && (s.market = e.market),
                  e.symbols && (s.symbols = e.symbols),
                  e.widget_type && (s.widget_type = e.widget_type),
                  (t.next = 4),
                  g.request(
                    "https://snp.tenpay.com/cgi-bin/snp/finance_calendar/widget",
                    m.getSignV3({
                      data: s,
                      method: "get",
                      origin: null == i ? void 0 : i.app,
                    }),
                    { forceCallback: !0, method: "get", dropCookie: !0 }
                  )
                );
              case 4:
                return (
                  (o = t.sent),
                  t.abrupt("return", d(l({}, o), { data: y(o.data) }))
                );
              case 6:
              case "end":
                return t.stop();
            }
        }, n);
      })
    );
  },
  S = function (e) {
    var t = new Date(e > 9999999999 ? e : 1e3 * e);
    return ""
      .concat(t.getFullYear(), "-")
      .concat(String(t.getMonth() + 1).padStart(2, "0"), "-")
      .concat(String(t.getDate()).padStart(2, "0"));
  };
[
  {
    symbol: "sz000001",
    symbol_name: "平安银行",
    logo_url: "",
    type: 1,
    title: "平安银行2024年度第四季度财务报告披露暨业绩说明会",
    date: 1766592e3,
    forecast_net: "15.23",
    target_price: "28.50",
    rise_probability: "68.75",
    news_id: "news_001",
    subscribe_status: 0,
    labels: ["A股", "自选"],
    live_status: 0,
    widget_title: "平安银行Q4财报",
    widget_content:
      "平安银行2024年第四季度财务报告即将披露，关注净利润及不良率变化",
  },
  {
    symbol: "sz000002",
    symbol_name: "万科A",
    logo_url: "",
    type: 1,
    title: "万科企业股份有限公司2024年度业绩预告及经营情况说明",
    date: 1766592e3,
    forecast_net: "8.56",
    target_price: "15.80",
    rise_probability: "55.20",
    news_id: "news_001_2",
    subscribe_status: 1,
    labels: ["A股"],
    live_status: 0,
  },
  {
    symbol: "hk01810",
    symbol_name: "小米集团",
    logo_url: "",
    type: 2,
    title: "小米集团2024年全年业绩发布会暨投资者交流会",
    date: 1766592e3,
    forecast_net: "45.60",
    target_price: "18.50",
    rise_probability: "62.30",
    news_id: "news_001_3",
    subscribe_status: 0,
    labels: ["港股", "自选"],
    live_status: 20,
  },
  {
    symbol: "hk00700",
    symbol_name: "腾讯控股",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1766678400,
    forecast_net: "490.34",
    target_price: "380.82",
    rise_probability: "72.50",
    news_id: "news_002",
    subscribe_status: 1,
    labels: ["港股", "我常关注"],
    live_status: 0,
  },
  {
    symbol: "hk09988",
    symbol_name: "阿里巴巴",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1766678400,
    forecast_net: "156.80",
    target_price: "95.00",
    rise_probability: "58.40",
    news_id: "news_002_2",
    subscribe_status: 0,
    labels: ["港股"],
    live_status: 0,
  },
  {
    symbol: "sh600519",
    symbol_name: "贵州茅台",
    logo_url: "",
    type: 2,
    title: "直播",
    date: 1766764800,
    forecast_net: "320.15",
    target_price: "1850.00",
    rise_probability: "65.30",
    news_id: "news_003",
    subscribe_status: 0,
    labels: ["A股"],
    live_status: 21,
  },
  {
    symbol: "sh601318",
    symbol_name: "中国平安",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1766764800,
    forecast_net: "88.50",
    target_price: "52.00",
    rise_probability: "60.15",
    news_id: "news_003_2",
    subscribe_status: 1,
    labels: ["A股", "自选"],
    live_status: 0,
  },
  {
    symbol: "us.AAPL",
    symbol_name: "苹果",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1766851200,
    forecast_net: "125.80",
    target_price: "198.50",
    rise_probability: "70.25",
    news_id: "news_004",
    subscribe_status: 0,
    labels: ["美股"],
    live_status: 0,
  },
  {
    symbol: "us.MSFT",
    symbol_name: "微软",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1766851200,
    forecast_net: "220.45",
    target_price: "420.00",
    rise_probability: "75.80",
    news_id: "news_004_2",
    subscribe_status: 1,
    labels: ["美股", "我常关注"],
    live_status: 0,
  },
  {
    symbol: "us.NVDA",
    symbol_name: "英伟达",
    logo_url: "",
    type: 2,
    title: "直播",
    date: 1766851200,
    forecast_net: "580.20",
    target_price: "150.00",
    rise_probability: "82.50",
    news_id: "news_004_3",
    subscribe_status: 0,
    labels: ["美股", "自选"],
    live_status: 22,
  },
  {
    symbol: "sz300750",
    symbol_name: "宁德时代",
    logo_url: "",
    type: 2,
    title: "直播",
    date: 1767283200,
    forecast_net: "180.25",
    target_price: "320.00",
    rise_probability: "62.80",
    news_id: "LV2025123010223997a0d602",
    subscribe_status: 1,
    labels: ["A股", "自选"],
    live_status: 20,
  },
  {
    symbol: "sz002594",
    symbol_name: "比亚迪",
    logo_url: "",
    type: 1,
    title: "财报",
    date: 1767283200,
    forecast_net: "350.80",
    target_price: "280.00",
    rise_probability: "68.90",
    news_id: "news_005_2",
    subscribe_status: 0,
    labels: ["A股"],
    live_status: 0,
  },
]
  .slice(0, 5)
  .map(function (e) {
    return d(l({}, e), { dateStr: S(e.date) });
  }),
  [
    {
      id: "macro_002",
      title: "美联储12月议息会议暨2025年货币政策展望发布会",
      img_url: "",
      symbols: [{ code: "sh601318", name: "中国平安" }],
      important_level: 3,
      attention: "利率决议及政策指引",
      date: 1766592e3,
      widget_title: "美联储议息会议",
      widget_content:
        "美联储12月议息会议即将召开，市场高度关注利率决议及2025年货币政策展望",
      ai_question: {
        id: 325,
        title: "今天需要关注哪些重要事件",
        prompt: "今天需要关注哪些财经领域大事",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "1f2ee48b0908d51517c673fc050b7f30",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_002_2",
      title: "2024年全球央行货币政策年度总结与2025年展望论坛",
      img_url: "",
      symbols: [{ code: "sh600036", name: "招商银行" }],
      important_level: 2,
      attention: "各国央行货币政策走向",
      date: 1766592e3,
      ai_question: {
        id: 326,
        title: "全球央行政策对A股影响",
        prompt: "全球央行货币政策对A股市场有什么影响",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "2a3ff59c1019e62628d784gd161c8g41",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_003",
      title: "第六届中国国际6G技术研发与产业化应用发展大会",
      img_url: "",
      symbols: [{ code: "sh600050", name: "中国联通" }],
      important_level: 2,
      attention: "是否有6G新技术发布",
      date: 1766678400,
      ai_question: {
        id: 327,
        title: "6G技术发展前景",
        prompt: "6G技术发展前景如何，哪些公司值得关注",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "3b4gg60d2120f73739e895he272d9h52",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_003_2",
      title: "2024中国数字经济创新发展高峰论坛暨产业数字化转型峰会",
      img_url: "",
      symbols: [{ code: "sz000977", name: "浪潮信息" }],
      important_level: 2,
      attention: "数字化转型政策及产业机遇",
      date: 1766678400,
      ai_question: {
        id: 328,
        title: "数字经济投资机会",
        prompt: "数字经济领域有哪些投资机会",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "4c5hh71e3231g84840f906if383e0i63",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_004",
      title: "集成电路设计业展览会",
      img_url: "",
      symbols: [{ code: "sh688981", name: "中芯国际" }],
      important_level: 2,
      attention: "台积电等龙头企业新技术发布",
      date: 1766764800,
      ai_question: {
        id: 329,
        title: "半导体行业发展趋势",
        prompt: "半导体行业发展趋势如何，有哪些投资机会",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "5d6ii82f4342h95951g017jg494f1j74",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_004_2",
      title: "新能源汽车产业大会",
      img_url: "",
      symbols: [{ code: "sz002594", name: "比亚迪" }],
      important_level: 3,
      attention: "新能源汽车销量及政策补贴",
      date: 1766764800,
      ai_question: {
        id: 330,
        title: "新能源汽车板块分析",
        prompt: "新能源汽车板块近期表现如何，后市怎么看",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "6e7jj93g5453i06062h128kh505g2k85",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_001",
      title: "中国制造业PMI",
      img_url: "",
      symbols: [{ code: "sh600031", name: "三一重工" }],
      important_level: 3,
      attention: "制造业景气度",
      date: 1766851200,
      ai_question: {
        id: 331,
        title: "PMI数据解读",
        prompt: "最新PMI数据对股市有什么影响",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "7f8kk04h6564j17173i239li616h3l96",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_001_2",
      title: "工业企业利润数据",
      img_url: "",
      symbols: [{ code: "sh601766", name: "中国中车" }],
      important_level: 2,
      attention: "工业企业盈利能力变化",
      date: 1766851200,
      ai_question: {
        id: 332,
        title: "工业企业利润分析",
        prompt: "工业企业利润数据反映了什么经济趋势",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "8g9ll15i7675k28284j340mj727i4m07",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_001_3",
      title: "房地产市场月报",
      img_url: "",
      symbols: [{ code: "sz000002", name: "万科A" }],
      important_level: 2,
      attention: "房价走势及销售数据",
      date: 1766851200,
      ai_question: {
        id: 333,
        title: "房地产市场走势",
        prompt: "房地产市场近期走势如何，对相关板块有什么影响",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "9h0mm26j8786l39395k451nk838j5n18",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_005",
      title: "人工智能创新大会",
      img_url: "",
      symbols: [{ code: "sz300496", name: "中科创达" }],
      important_level: 3,
      attention: "AI计算机技术、产品应用与生态成果",
      date: 1767283200,
      ai_question: {
        id: 334,
        title: "AI板块投资机会",
        prompt: "人工智能板块有哪些投资机会",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "0i1nn37k9897m40406l562ol949k6o29",
        answer_cache: 0,
        icon: "",
      },
    },
    {
      id: "macro_005_2",
      title: "机器人产业发展论坛",
      img_url: "",
      symbols: [{ code: "sz300124", name: "汇川技术" }],
      important_level: 2,
      attention: "人形机器人技术突破及商业化进展",
      date: 1767283200,
      ai_question: {
        id: 335,
        title: "机器人产业前景",
        prompt: "机器人产业发展前景如何，有哪些龙头公司",
        scene: "fin_calendar",
        sub_scene: "news01",
        sub_channel: "",
        expire: 0,
        content_id: "",
        priority: 0,
        sub_priority: 0,
        trigger_time: "",
        ext_content: "",
        triggers: [],
        heat: 0,
        record_id: "0",
        uuid: "1j2oo48l0908n51517m673pm050l7p30",
        answer_cache: 0,
        icon: "",
      },
    },
  ]
    .slice(0, 5)
    .map(function (e) {
      var t,
        n = (null == (t = e.symbols) ? void 0 : t[0]) || { code: "", name: "" };
      return d(l({}, e), {
        dateStr: e.date ? S(e.date) : "",
        code: n.code,
        name: n.name,
      });
    }),
  [
    {
      start_date: 1766592e3,
      end_date: 1766592e3,
      title: "圣诞节假期港股通交易暂停通知",
      content: "因圣诞节假期，港股通今日暂停交易",
      img_url: "",
      widget_title: "港股通暂停交易",
      widget_content: "因圣诞节假期，港股通今日暂停交易，请注意调整交易安排",
    },
    {
      start_date: 1766592e3,
      end_date: 1766592e3,
      title: "美国股市圣诞节休市公告",
      content: "美股因圣诞节休市一天",
      img_url: "",
    },
    {
      start_date: 1766592e3,
      end_date: 1766764800,
      title: "欧美市场圣诞假期交易量下降预警",
      content: "欧美市场圣诞假期，交易量可能下降",
      img_url: "",
    },
    {
      start_date: 1766764800,
      end_date: 1766764800,
      title: "港股圣诞节翌日休市安排公告",
      content: "港股因圣诞节翌日休市一天，27日恢复正常交易",
      img_url: "",
    },
    {
      start_date: 1766764800,
      end_date: 1766764800,
      title: "英国股市节礼日休市通知",
      content: "英国股市因节礼日休市",
      img_url: "",
    },
    {
      start_date: 1766937600,
      end_date: 1767283200,
      title: "A股2026年元旦假期休市安排公告",
      content: "A股元旦假期休市，1月2日恢复正常交易",
      img_url: "",
    },
    {
      start_date: 1767110400,
      end_date: 1767196800,
      title: "年末结算窗口",
      content: "年末资金结算高峰期，注意账户资金变动",
      img_url: "",
    },
    {
      start_date: 1767196800,
      end_date: 1767196800,
      title: "年度收官",
      content: "2025年最后一个交易日，关注年度收益结算",
      img_url: "",
    },
    {
      start_date: 1767283200,
      end_date: 1767283200,
      title: "月末结算日",
      content: "本月最后一个交易日，注意资金结算和持仓调整",
      img_url: "",
    },
    {
      start_date: 1767283200,
      end_date: 1767283200,
      title: "期权到期日",
      content: "12月期权合约到期，注意行权及平仓",
      img_url: "",
    },
    {
      start_date: 1767283200,
      end_date: 1767283200,
      title: "股指期货交割日",
      content: "本月股指期货合约交割日，市场波动可能加大，注意风险控制",
      img_url: "",
    },
    {
      start_date: 1767369600,
      end_date: 1767628800,
      title: "年初建仓窗口",
      content: "新年首周，机构资金入场布局，关注开门红行情",
      img_url: "",
    },
    {
      start_date: 1767196800,
      end_date: 1767369600,
      title: "跨年交易窗口",
      content: "跨年期间市场流动性变化，注意仓位管理和风险控制",
      img_url: "",
    },
  ]
    .slice(0, 5)
    .map(function (e) {
      return d(l({}, e), { startStr: S(e.start_date), endStr: S(e.end_date) });
    }),
  h.MACRO_SECTORS;
var k = "".concat(v.HS, ",").concat(v.HK, ",").concat(v.US),
  M = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  O = "zxgxcx",
  j = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      i = {
        source: O,
        business: e,
        subscribeDetails: t,
        allow_silent_subscribe: n,
        auto_subscribe: r,
      };
    return p.StockBridge.request(
      "https://wzq.tenpay.com/svr/user/user_service/user_open_subscribe",
      p.RequestTypeEnum.POST,
      i,
      M
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  C = function (e) {
    var t = l({ source: O }, e);
    return p.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
      p.RequestTypeEnum.POST,
      t
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  T = null,
  A = null,
  E = function () {
    if (T) return Promise.resolve(T);
    if (A) return A;
    if ((3, !p.Wuji)) throw new Error("Wuji is not loaded");
    return (A = p.Wuji.get({
      appid: "act",
      schemaid: "wx_subscribe_tmpl_id",
      rowid: 3,
    })
      .then(function (e) {
        return (T = e.data), (A = null), T;
      })
      .catch(function (e) {
        throw ((A = null), e);
      }));
  };
!(function e() {
  var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
  return _(
    exports,
    null,
    t().mark(function r() {
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (T) {
                  t.next = 9;
                  break;
                }
                return (t.prev = 1), (t.next = 4), E();
              case 4:
                t.next = 9;
                break;
              case 6:
                (t.prev = 6),
                  (t.t0 = t.catch(1)),
                  n &&
                    setTimeout(function () {
                      return e(!1);
                    }, 1500);
              case 9:
              case "end":
                return t.stop();
            }
        },
        r,
        null,
        [[1, 6]]
      );
    })
  );
})();
var q = function (e, r) {
    return new Promise(function (i, a) {
      if (!r || 0 === r.length) return a("invalid param");
      p.wx$1.requestSubscribeMessage({
        tmplIds: r,
        success: function (s) {
          return _(
            exports,
            null,
            t().mark(function o() {
              var c, u, l, d, _, b, m, f, g, v, h, w;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((c = s.errMsg), !((u = s.errCode) && u > 0))) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return", a(c));
                      case 3:
                        return (
                          (l = new Map()),
                          (d = []),
                          (t.prev = 4),
                          (t.next = 7),
                          (function (e) {
                            return new Promise(function (t, n) {
                              if (!Array.isArray(e) || 0 === e.length)
                                return t(new Map());
                              p.wx$1.getSetting({
                                withSubscriptions: !0,
                                success: function (n) {
                                  var r = n.subscriptionsSetting || {},
                                    i = r.mainSwitch,
                                    a = void 0 !== i && i,
                                    s = r.itemSettings,
                                    o = void 0 === s ? {} : s,
                                    c = new Map();
                                  e.forEach(function (e) {
                                    var t = a && o[e] ? o[e] : "unset";
                                    c.set(e, { mainSwitch: a, status: t });
                                  }),
                                    t(c);
                                },
                                fail: function (e) {
                                  p.StockBridge.aegisReportEvent(
                                    "wx.getSetting fail: "
                                      .concat(e.errno, " ")
                                      .concat(e.errMsg)
                                  ),
                                    n(e.errMsg);
                                },
                              });
                            });
                          })(r)
                        );
                      case 7:
                        (l = t.sent),
                          (d = r.filter(function (e) {
                            var t = l.get(e);
                            return t && "accept" === t.status;
                          })),
                          (t.next = 14);
                        break;
                      case 11:
                        (t.prev = 11),
                          (t.t0 = t.catch(4)),
                          p.StockBridge.aegisReportEvent(
                            "query_subscribe_switch_fail"
                          );
                      case 14:
                        (_ = []), (b = n(r));
                        try {
                          for (b.s(); !(m = b.n()).done; )
                            (f = m.value),
                              "accept" === s[f] &&
                                _.push({ template_id: f, status: "accept" });
                        } catch (e) {
                          b.e(e);
                        } finally {
                          b.f();
                        }
                        if (!_.length) {
                          t.next = 33;
                          break;
                        }
                        return (
                          (t.prev = 18),
                          (g = 0),
                          d.length === r.length && (g = 1),
                          (t.next = 23),
                          j(e, _, g)
                        );
                      case 23:
                        if (
                          ((v = t.sent),
                          (h = v.retcode),
                          (w = v.retmsg),
                          0 === h)
                        ) {
                          t.next = 28;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          (p.StockBridge.aegisReportEvent(
                            "wx_subscribe_backend_fail"
                          ),
                          a(w || "backend error"))
                        );
                      case 28:
                        t.next = 33;
                        break;
                      case 30:
                        return (
                          (t.prev = 30),
                          (t.t1 = t.catch(18)),
                          t.abrupt("return", a("backend error"))
                        );
                      case 33:
                        return t.abrupt("return", i(s));
                      case 34:
                      case "end":
                        return t.stop();
                    }
                },
                o,
                null,
                [
                  [4, 11],
                  [18, 30],
                ]
              );
            })
          );
        },
        fail: function (e) {
          p.StockBridge.aegisReportEvent(
            "wx_subscribe_fail_".concat(r.join(","))
          ),
            a(e.errMsg);
        },
      });
    });
  },
  N = (function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = null,
      i = null,
      a = null,
      s = 0,
      o = n || {},
      c = o.leading,
      u = void 0 === c || c,
      l = o.trailing,
      d = void 0 === l || l,
      _ = function (t) {
        if (((s = t), "function" != typeof e))
          throw new Error("func必须为函数");
        e.apply(a, i), (i = null), (a = null);
      },
      p = function () {
        for (
          var e = Date.now(), n = arguments.length, o = new Array(n), c = 0;
          c < n;
          c++
        )
          o[c] = arguments[c];
        if (((i = o), (a = this), 0 === s && u)) _(e);
        else {
          r && (clearTimeout(r), (r = null));
          var l,
            p = ((l = e), Math.max(t - (l - s), 0));
          p > 0 &&
            d &&
            (r = setTimeout(function () {
              _(Date.now());
            }, p)),
            p <= 0 && _(e);
        }
      };
    return (
      (p.cancel = function () {
        r && (clearTimeout(r), (r = null)), (s = 0), (i = null), (a = null);
      }),
      p
    );
  })(function (n) {
    return _(
      exports,
      null,
      t().mark(function r() {
        var i, a, s, o, c, u, l, d, b, m, f, g, v, h, w, y, x, S, k;
        return t().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 2), E();
                case 2:
                  return (
                    (i = r.sent),
                    (a = i.limit),
                    (s = i.expire),
                    (o = i.template_ids),
                    (c = s ? 60 * s * 1e3 + Date.now() : null),
                    (r.next = 9),
                    "wx_subscribe_limit_info",
                    _(
                      exports,
                      null,
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    return _(
                                      exports,
                                      null,
                                      t().mark(function n() {
                                        var r, i, a, s;
                                        return t().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.next = 2),
                                                  p.wx$1.getStorageSync(
                                                    "wx_subscribe_limit_info"
                                                  )
                                                );
                                              case 2:
                                                return (
                                                  (r = t.sent),
                                                  (i = r.data),
                                                  (a = r.expire),
                                                  (s = Date.now()),
                                                  t.abrupt(
                                                    "return",
                                                    e(a && s > a ? null : i)
                                                  )
                                                );
                                              case 7:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, n);
                                      })
                                    );
                                  })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 9:
                  return (
                    (u = r.sent),
                    (l = o
                      .filter(function (e) {
                        if (n) return e.business === n;
                        if (
                          ![
                            "price_remind",
                            "calendar_event",
                            "gudan_notice",
                          ].includes(e.business)
                        )
                          return !1;
                        if (!e.isAdd) return !1;
                        if (!u) return !0;
                        var t = u.find(function (t) {
                          return t.template_id === e.template_id;
                        });
                        return !(t && +t.left_number >= a);
                      })
                      .map(function (e) {
                        return e.template_id.trim();
                      })),
                    (d = []),
                    (r.next = 14),
                    Promise.all(
                      l.map(function (e) {
                        return (
                          (t = e),
                          new Promise(function (e, n) {
                            if (!t) return n("invalid param");
                            p.wx$1.getSetting({
                              withSubscriptions: !0,
                              success: function (n) {
                                var r = n.subscriptionsSetting || {},
                                  i = r.mainSwitch,
                                  a = void 0 !== i && i,
                                  s = r.itemSettings,
                                  o = void 0 === s ? {} : s;
                                return a && o[t]
                                  ? e({ mainSwitch: a, status: o[t] })
                                  : e({ mainSwitch: a, status: "unset" });
                              },
                              fail: function (e) {
                                p.StockBridge.aegisReportEvent(
                                  "wx.getSetting fail: "
                                    .concat(e.errno, " ")
                                    .concat(e.errMsg)
                                ),
                                  n(e.errMsg);
                              },
                            });
                          })
                        );
                        var t;
                      })
                    )
                  );
                case 14:
                  if (
                    ((b = r.sent),
                    !(
                      (m = l.filter(function (e, t) {
                        return b[t] && "accept" === b[t].status;
                      })).length > 0
                    ))
                  ) {
                    r.next = 45;
                    break;
                  }
                  return (
                    (r.prev = 17),
                    (r.next = 20),
                    new Promise(function (e) {
                      p.wx$1.requestSubscribeMessage({
                        tmplIds: m,
                        success: function (t) {
                          m.forEach(function (e) {
                            t.errCode ||
                              "accept" !== t[e] ||
                              d.push({ template_id: e, status: "accept" });
                          }),
                            e(t);
                        },
                        fail: function () {
                          e(null);
                        },
                      });
                    })
                  );
                case 20:
                  if (!(d.length > 0)) {
                    r.next = 41;
                    break;
                  }
                  if (!n) {
                    r.next = 26;
                    break;
                  }
                  return (r.next = 24), j(n, d, 1, 1);
                case 24:
                  r.next = 41;
                  break;
                case 26:
                  (f = {}),
                    d.forEach(function (e) {
                      var t = e.template_id,
                        n = o.find(function (e) {
                          return e.template_id === t;
                        });
                      n &&
                        (f[n.business] || (f[n.business] = []),
                        f[n.business].push({
                          template_id: t,
                          status: "accept",
                        }));
                    }),
                    (g = []),
                    (v = 0),
                    (h = Object.entries(f));
                case 30:
                  if (!(v < h.length)) {
                    r.next = 40;
                    break;
                  }
                  return (
                    (w = e(h[v], 2)),
                    (y = w[0]),
                    (x = w[1]),
                    (r.next = 34),
                    j(y, x, 1, 1)
                  );
                case 34:
                  (S = r.sent), (k = S.template_subscribe_number), g.push(k);
                case 37:
                  v++, (r.next = 30);
                  break;
                case 40:
                  !(function (e, n, r) {
                    _(
                      exports,
                      null,
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  p.wx$1.setStorageSync(
                                    "wx_subscribe_limit_info",
                                    { data: n, expire: r || null }
                                  )
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                  })(0, g.flat(), c);
                case 41:
                  r.next = 45;
                  break;
                case 43:
                  (r.prev = 43), (r.t0 = r.catch(17));
                case 45:
                case "end":
                  return r.stop();
              }
          },
          r,
          null,
          [[17, 43]]
        );
      })
    );
  }, 1e3),
  R = "fin_calendar_subscribe";
function D() {
  var e = this,
    n = p.ref(!1),
    r = p.ref(!1);
  return {
    isCalendarSubscribed: n,
    isSubscribeLoading: r,
    fetchSubscribeStatus: function () {
      return _(
        e,
        null,
        t().mark(function e() {
          var i, a;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (r.value = !0),
                      (e.next = 4),
                      C({ querysub: [R].join(",") })
                    );
                  case 4:
                    return (
                      (a = e.sent),
                      e.abrupt(
                        "return",
                        (a &&
                          (n.value =
                            1 ===
                            (null == (i = null == a ? void 0 : a[R])
                              ? void 0
                              : i.switch)),
                        n.value)
                      )
                    );
                  case 8:
                    return (
                      (e.prev = 8), (e.t0 = e.catch(0)), e.abrupt("return", !1)
                    );
                  case 11:
                    return (e.prev = 11), (r.value = !1), e.finish(11);
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 8, 11, 14]]
          );
        })
      );
    },
    updateSubscribeStatus: function (i) {
      return _(
        e,
        null,
        t().mark(function e() {
          var a, s, o;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), (r.value = !0), !i)) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (e.next = 4),
                      R,
                      new Promise(function (e, n) {
                        return _(
                          exports,
                          null,
                          t().mark(function r() {
                            var i, a, s, o, c;
                            return t().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), E();
                                  case 2:
                                    if (
                                      ((i = t.sent),
                                      (a = i.template_ids),
                                      0 !==
                                        (s = a.filter(function (e) {
                                          return (
                                            "fin_calendar_subscribe" ===
                                            e.business
                                          );
                                        })).length)
                                    ) {
                                      t.next = 7;
                                      break;
                                    }
                                    return t.abrupt(
                                      "return",
                                      n("no template id")
                                    );
                                  case 7:
                                    return (
                                      (o = s.map(function (e) {
                                        return e.template_id;
                                      })),
                                      (c = s.map(function (e) {
                                        return e.usersetting || "";
                                      })),
                                      t.abrupt(
                                        "return",
                                        e({
                                          templateIds: o,
                                          userSettings: c,
                                          templateInfoList: s,
                                        })
                                      )
                                    );
                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, r);
                          })
                        );
                      })
                    );
                  case 4:
                    return (
                      (a = e.sent), (s = a.templateIds), (e.next = 8), q(R, s)
                    );
                  case 8:
                    return (
                      (e.next = 10),
                      (o = [R]),
                      Promise.all(
                        o.map(function (e) {
                          return C({ subscribe: e });
                        })
                      )
                    );
                  case 10:
                    e.next = 14;
                    break;
                  case 12:
                    return (
                      (e.next = 14),
                      (function (e) {
                        return Promise.all(
                          e.map(function (e) {
                            return C({ unsubscribe: e });
                          })
                        );
                      })([R])
                    );
                  case 14:
                    return e.abrupt("return", ((n.value = i), !0));
                  case 17:
                    return (
                      (e.prev = 17), (e.t0 = e.catch(0)), e.abrupt("return", !1)
                    );
                  case 20:
                    return (e.prev = 20), (r.value = !1), e.finish(20);
                  case 23:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 17, 20, 23]]
          );
        })
      );
    },
    handleSlientSubscribe: function () {
      return _(
        e,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), N(R);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    (e.prev = 5), (e.t0 = e.catch(0));
                  case 7:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 5]]
          );
        })
      );
    },
  };
}
var I = { earnings: [], macro_sectors: [], trade_notify: [] },
  W = p.defineComponent({
    name: "FinanceCalendarWidget",
    components: {
      WidgetOverview: function () {
        return "./WidgetOverview.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1pbnZlc3RtZW50LWNhbGVuZGFyL2NvbXBvbmVudHMvd2lkZ2V0L1dpZGdldE92ZXJ2aWV3LnZ1ZQ;
        });
      },
      WidgetEarnings: function () {
        return "./WidgetEarnings.js";
      },
      WidgetMacro: function () {
        return "./WidgetMacro.js";
      },
      WidgetTrading: function () {
        return "./WidgetTrading.js";
      },
    },
    props: { model: { type: Object, required: !0 } },
    emits: [
      "subscribe-change",
      "item-click",
      "more",
      "add-stock",
      "load",
      "error",
      "hide",
    ],
    setup: function (e, n) {
      var r,
        i = this,
        a = n.emit,
        s =
          (null == (r = p.getCurrentInstance()) ? void 0 : r.proxy) ||
          p.getCurrentInstance(),
        o = p.inject("getIsOnShow", function () {
          return !1;
        }),
        c = p.computed(function () {
          return o();
        }),
        u = p.computed(function () {
          return e.model.type || "";
        }),
        d = p.computed(function () {
          return e.model.symbols || "";
        }),
        m = p.computed(function () {
          var t;
          return null != (t = e.model.maxCount) ? t : 3;
        }),
        f = p.computed(function () {
          return e.model.pageType || "";
        }),
        g = p.ref(!1),
        v = p.ref(!1),
        w = p.ref(I),
        y = D(),
        S = y.isCalendarSubscribed,
        M = y.fetchSubscribeStatus,
        O = y.updateSubscribeStatus,
        j = p.computed(function () {
          return "newsDetail" === f.value;
        }),
        C = p.computed(function () {
          return u.value === h.FINANCE_CALENDAR;
        }),
        T = p.computed(function () {
          return u.value === h.EARNINGS;
        }),
        A = p.computed(function () {
          return u.value === h.MACRO_SECTORS;
        }),
        E = p.computed(function () {
          return u.value === h.TRADE_NOTIFY;
        }),
        q = function () {
          var e = new Date();
          return ""
            .concat(e.getFullYear(), "-")
            .concat(String(e.getMonth() + 1).padStart(2, "0"), "-")
            .concat(String(e.getDate()).padStart(2, "0"));
        },
        N = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return _(
            i,
            null,
            t().mark(function n() {
              var r, i;
              return t().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          e || ((g.value = !0), (v.value = !1)),
                          (n.prev = 1),
                          (n.next = 4),
                          (i = {
                            date: q(),
                            widgetType: u.value,
                            symbols: d.value || void 0,
                          }),
                          _(
                            exports,
                            null,
                            t().mark(function e() {
                              var n, r, a;
                              return t().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          x({
                                            date: i.date,
                                            market: i.market || k,
                                            days: null != (n = i.days) ? n : 30,
                                            symbols: i.symbols,
                                            widget_type: i.widgetType,
                                          })
                                        );
                                      case 3:
                                        if (0 === (r = e.sent).code) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return", {
                                          code: r.code,
                                          msg: r.msg,
                                          data: {
                                            earnings: [],
                                            macro_sectors: [],
                                            trade_notify: [],
                                          },
                                        });
                                      case 6:
                                        return (
                                          (a = r.data),
                                          e.abrupt("return", {
                                            code: 0,
                                            msg: "成功",
                                            data: {
                                              earnings: a.earnings,
                                              macro_sectors: a.macro_sectors,
                                              trade_notify: a.trade_notify,
                                            },
                                            widget_type: r.widget_type,
                                          })
                                        );
                                      case 10:
                                        return (
                                          (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          e.abrupt("return", {
                                            code: -1,
                                            msg: "系统繁忙，请稍后重试",
                                            data: {
                                              earnings: [],
                                              macro_sectors: [],
                                              trade_notify: [],
                                            },
                                          })
                                        );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 10]]
                              );
                            })
                          )
                        );
                      case 4:
                        0 === (r = n.sent).code
                          ? ((w.value = r.data), a("load", r.data))
                          : (e || (w.value = I),
                            a("error", { code: r.code, msg: r.msg })),
                          (n.next = 11);
                        break;
                      case 8:
                        (n.prev = 8),
                          (n.t0 = n.catch(1)),
                          e || (w.value = I),
                          a("error", { code: -1, msg: "请求失败" });
                      case 11:
                        return (
                          (n.prev = 11),
                          (g.value = !1),
                          (v.value = !0),
                          n.finish(11)
                        );
                      case 14:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 8, 11, 14]]
              );
            })
          );
        },
        R = null;
      return (
        p.onMounted(function () {
          M(),
            N(),
            p.nextTick$1(function () {
              var e, t;
              null ==
                (t =
                  null == (e = null == R ? void 0 : R.observer)
                    ? void 0
                    : e.disconnect) || t.call(e),
                (R = null),
                (R = new b.VisibilityObserver(
                  ".widget",
                  {
                    once: !0,
                    callback: function (e) {
                      e &&
                        j.value &&
                        p.StockBridge.mtaReport({
                          busi: "news",
                          eventName: "financial_calendar_window_exposure_brow",
                          params: { type: u.value },
                        });
                    },
                    intersection: { threshold: 0 },
                  },
                  { context: s }
                ));
            });
        }),
        p.onUnmounted(function () {
          var e, t;
          try {
            null ==
              (t =
                null == (e = null == R ? void 0 : R.observer)
                  ? void 0
                  : e.disconnect) || t.call(e),
              (R = null);
          } catch (e) {}
        }),
        p.watch(
          function () {
            return e.model;
          },
          function () {
            N();
          },
          { deep: !0 }
        ),
        p.watch(c, function (e) {
          e && (M(), N(!0));
        }),
        {
          loading: g,
          loaded: v,
          widgetData: w,
          isCalendarSubscribed: S,
          isOnShow: c,
          innerMaxCount: m,
          isOverview: C,
          isEarnings: T,
          isMacro: A,
          isTrading: E,
          handleSubscribe: function (e) {
            return _(
              i,
              null,
              t().mark(function n() {
                var r;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), O(e);
                        case 3:
                          (r = t.sent),
                            a("subscribe-change", {
                              subscribed: S.value,
                              success: r,
                            }),
                            (t.next = 9);
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t.catch(0));
                        case 9:
                          p.StockBridge.mtaReport({
                            busi: "news",
                            eventName:
                              "finance_calendar_window_subscribe_click",
                            params: { type: u.value },
                          });
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                );
              })
            );
          },
          handleItemClick: function (e) {
            a("item-click", e);
          },
          handleMore: function () {
            a("more", u.value),
              j.value &&
                p.StockBridge.mtaReport({
                  busi: "news",
                  eventName: "financial_calendar_window_view_more_click",
                  params: { type: u.value },
                });
          },
          handleAddStock: function (e) {
            a("add-stock", e);
          },
          handleHide: function (e) {
            j.value &&
              p.StockBridge.mtaReport({
                busi: "news",
                eventName: "financial_calendar_no_data_brow",
                params: { type: u.value },
              }),
              a("hide", l({ widget_type: u.value }, e));
          },
          refresh: function () {
            N();
          },
        }
      );
    },
  });
Array ||
  (
    p.resolveComponent("WidgetOverview") +
    p.resolveComponent("WidgetEarnings") +
    p.resolveComponent("WidgetMacro") +
    p.resolveComponent("WidgetTrading")
  )();
var P = p._export_sfc(W, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return p.e(
        { a: e.loading },
        e.loading
          ? {}
          : e.isOverview
          ? {
              c: p.o(e.handleSubscribe, 5617),
              d: p.o(e.handleItemClick, 5618),
              e: p.o(e.handleMore, 5619),
              f: p.o(e.handleHide, 5620),
              g: p.p({
                "widget-data": e.widgetData,
                subscribed: e.isCalendarSubscribed,
                "max-count": e.innerMaxCount,
                loaded: e.loaded,
              }),
            }
          : e.isEarnings
          ? {
              i: p.o(e.handleSubscribe, 5621),
              j: p.o(e.handleItemClick, 5622),
              k: p.o(e.handleMore, 5623),
              l: p.o(e.handleHide, 5624),
              m: p.p({
                list: e.widgetData.earnings,
                subscribed: e.isCalendarSubscribed,
                "max-count": e.innerMaxCount,
                loaded: e.loaded,
              }),
            }
          : e.isMacro
          ? {
              o: p.o(e.handleSubscribe, 5625),
              p: p.o(e.handleItemClick, 5626),
              q: p.o(e.handleMore, 5627),
              r: p.o(e.handleAddStock, 5628),
              s: p.o(e.handleHide, 5629),
              t: p.p({
                list: e.widgetData.macro_sectors,
                subscribed: e.isCalendarSubscribed,
                "max-count": e.innerMaxCount,
                "is-on-show": e.isOnShow,
                loaded: e.loaded,
              }),
            }
          : e.isTrading
          ? {
              w: p.o(e.handleSubscribe, 5630),
              x: p.o(e.handleItemClick, 5631),
              y: p.o(e.handleMore, 5632),
              z: p.o(e.handleHide, 5633),
              A: p.p({
                list: e.widgetData.trade_notify,
                subscribed: e.isCalendarSubscribed,
                "max-count": e.innerMaxCount,
                loaded: e.loaded,
              }),
            }
          : {},
        { b: e.isOverview, h: e.isEarnings, n: e.isMacro, v: e.isTrading }
      );
    },
  ],
  ["__scopeId", "data-v-691f6bec"],
]);
wx.createComponent(P);
var L = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1pbnZlc3RtZW50LWNhbGVuZGFyL2NvbXBvbmVudHMvd2lkZ2V0L1dpZGdldC52dWU =
  L),
  (exports.MarketType = v),
  (exports.WidgetType = h);
