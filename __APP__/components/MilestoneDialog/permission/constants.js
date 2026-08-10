var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../app.js");
var i = require("../../../config/enum.js"),
  t = require("../../../model/biz/permission/types.js"),
  a = require("../../../model/biz/permission/constants.js"),
  r = { SH_REITS: "600564", SZ_REITS: "600563", KZZ_DELISTING: "600524" },
  s = { REITS: "600565", KZZ_ALL: "600555", GGT: "600535", ST_ALL: "600530" };
Object.values(r), Object.values(s);
var o = [
    { childExciteIds: ["60009", "60010"], mergedConfigKey: "ggt" },
    { childExciteIds: ["60012", "60013"], mergedConfigKey: "st" },
    { childExciteIds: ["60003", "60004"], mergedConfigKey: "kzz" },
    { childExciteIds: [r.SH_REITS, r.SZ_REITS], mergedConfigKey: "reits" },
  ],
  n = "https://st.gtimg.com/design/b03ed9ff67439bb1d7aea7f44d7b3bcb.png",
  m = "https://st.gtimg.com/design/9746cf8f3e5d11da9f12abb1902260c6.png",
  g = "https://st.gtimg.com/design/3441e9271daaf25c9159d9026db946a6.png",
  p = "https://st.gtimg.com/design/3ef34f73b629827ca959fd192cb8f85b.png",
  S = "https://st.gtimg.com/design/c23910c6aa12548ee6802dbd3b337e7b.png",
  E = function (e, i) {
    return { permissionKey: e, market: i, tier: "same" };
  },
  I = function (e, i) {
    return { permissionKey: e, market: i, tier: "lower" };
  },
  c = [
    {
      configKey: "reits",
      exciteIds: [s.REITS],
      permissionKey: a.PERMISSION_KEY.SH_REITS,
      priority: 565,
      permissionName: "基础设施基金",
      tagLogo: n,
      tagName: "基础设施基金权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限",
      subtitle: "解锁REITs基金，欢迎来到不动产投资赛道",
      tips: ["一手起购", "无印花税"],
      quote: {
        type: "sector",
        code: "02111367",
        market: "p",
        label: "REITs板块",
      },
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "index",
    },
    {
      configKey: "sh_reits",
      exciteIds: [r.SH_REITS],
      permissionKey: a.PERMISSION_KEY.SH_REITS,
      market: i.MARKET.HA,
      priority: 564,
      permissionName: "沪市基础设施基金",
      tagLogo: n,
      tagName: "沪市基础设施基金权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限",
      subtitle: "解锁REITs基金，欢迎来到不动产投资赛道",
      tips: ["一手起购", "无印花税"],
      quote: {
        type: "sector",
        code: "02111367",
        market: "p",
        label: "REITs板块",
      },
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "index",
    },
    {
      configKey: "sz_reits",
      exciteIds: [r.SZ_REITS],
      permissionKey: a.PERMISSION_KEY.SZ_REITS,
      market: i.MARKET.SA,
      priority: 563,
      permissionName: "深市基础设施基金",
      tagLogo: n,
      tagName: "深市基础设施基金权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限",
      subtitle: "解锁REITs基金，欢迎来到不动产投资赛道",
      tips: ["一手起购", "无印花税"],
      quote: {
        type: "sector",
        code: "02111367",
        market: "p",
        label: "REITs板块",
      },
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "index",
    },
    {
      configKey: "gem",
      exciteIds: ["60001"],
      permissionKey: a.PERMISSION_KEY.GEM,
      priority: 560,
      permissionName: "创业板",
      tagLogo:
        "https://st.gtimg.com/design/45c841c5ce0b17ccbac3bbfe7300a735.png",
      tagName: "创业板权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁A股创新成长企业赛道",
      tips: ["20%限幅", "前5日不限幅"],
      quote: { type: "index", code: "399006", market: "0", label: "创业板指" },
      linkageSame: [E(a.PERMISSION_KEY.KZZ)],
      linkageLower: [],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.GEM,
    },
    {
      configKey: "kzz",
      exciteIds: [s.KZZ_ALL],
      permissionKey: a.PERMISSION_KEY.KZZ,
      priority: 555,
      permissionName: "可转债",
      tagLogo: m,
      tagName: "可转债权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁兼具股票与债券双重属性的交易市场",
      tips: ["T+0交易", "股债双栖"],
      quote: {
        type: "index",
        code: "000832",
        market: "1",
        label: "中证转债指数",
      },
      linkageSame: [E(a.PERMISSION_KEY.GEM)],
      linkageLower: [],
      tradeTarget: "kzz_rank",
      marketTabKey: a.PERMISSION_KEY.KZZ,
    },
    {
      configKey: "sz_kzz",
      exciteIds: ["60004"],
      permissionKey: a.PERMISSION_KEY.SZ_KZZ,
      market: i.MARKET.SA,
      priority: 554,
      permissionName: "深市可转债",
      tagLogo: m,
      tagName: "深市可转债权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁兼具股票与债券双重属性的交易市场",
      tips: ["T+0交易", "股债双栖"],
      quote: {
        type: "index",
        code: "000832",
        market: "1",
        label: "中证转债指数",
      },
      linkageSame: [E(a.PERMISSION_KEY.SH_KZZ, i.MARKET.HA)],
      linkageLower: [],
      tradeTarget: "kzz_rank",
      marketTabKey: a.PERMISSION_KEY.KZZ,
    },
    {
      configKey: "sh_kzz",
      exciteIds: ["60003"],
      permissionKey: a.PERMISSION_KEY.SH_KZZ,
      market: i.MARKET.HA,
      priority: 553,
      permissionName: "沪市可转债",
      tagLogo: m,
      tagName: "沪市可转债权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁兼具股票与债券双重属性的交易市场",
      tips: ["T+0交易", "股债双栖"],
      quote: {
        type: "index",
        code: "000832",
        market: "1",
        label: "中证转债指数",
      },
      linkageSame: [E(a.PERMISSION_KEY.SZ_KZZ, i.MARKET.SA)],
      linkageLower: [],
      tradeTarget: "kzz_rank",
      marketTabKey: a.PERMISSION_KEY.KZZ,
    },
    {
      configKey: "ke_chuang",
      exciteIds: ["60005"],
      permissionKey: a.PERMISSION_KEY.KE_CHUANG,
      priority: 545,
      permissionName: "科创板",
      tagLogo: g,
      tagName: "科创板权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁A股硬核科技赛道",
      tips: ["20%限幅", "前5日不限幅", "战略新兴产业"],
      quote: {
        type: "index",
        code: "000688",
        market: "1",
        label: "科创50指数",
      },
      linkageSame: [E(a.PERMISSION_KEY.BJ), E(a.PERMISSION_KEY.GGT)],
      linkageLower: [I(a.PERMISSION_KEY.GEM), I(a.PERMISSION_KEY.KZZ)],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.KE_CHUANG,
    },
    {
      configKey: "kc_grow",
      exciteIds: ["60006"],
      permissionKey: a.PERMISSION_KEY.KC_GROW,
      priority: 544,
      permissionName: "科创板成长层",
      tagLogo: g,
      tagName: "科创板成长层权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁A股硬核科技赛道",
      tips: ["高风险", "20%限幅"],
      quote: { type: "index", code: "000690", market: "1", label: "科创成长" },
      linkageSame: [E(a.PERMISSION_KEY.BJ), E(a.PERMISSION_KEY.GGT)],
      linkageLower: [I(a.PERMISSION_KEY.GEM), I(a.PERMISSION_KEY.KZZ)],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.KE_CHUANG,
    },
    {
      configKey: "bj",
      exciteIds: ["60007"],
      permissionKey: a.PERMISSION_KEY.BJ,
      priority: 540,
      permissionName: "北交所",
      tagLogo:
        "https://st.gtimg.com/design/caac1beef0e599b9dfb12aca5f68effc.png",
      tagName: "北交所权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: '更多"小而强"公司等你发掘',
      tips: ["30%限幅", "首日无涨跌幅"],
      quote: { type: "index", code: "899050", market: "13", label: "北证50" },
      linkageSame: [E(a.PERMISSION_KEY.KE_CHUANG), E(a.PERMISSION_KEY.GGT)],
      linkageLower: [I(a.PERMISSION_KEY.GEM), I(a.PERMISSION_KEY.KZZ)],
      tradeTarget: "bj_rank",
      marketTabKey: a.PERMISSION_KEY.BJ,
    },
    {
      configKey: "ggt",
      exciteIds: [s.GGT],
      permissionKey: a.PERMISSION_KEY.GGT,
      priority: 535,
      permissionName: "港股通",
      tagLogo: p,
      tagName: "港股通权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁港股市场优质股",
      tips: ["无涨跌幅限制", "T+0交易", "T+2交收"],
      quote: { type: "index", code: "HSI", market: "14", label: "恒生指数" },
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.GGT,
    },
    {
      configKey: "sgt",
      exciteIds: ["60010"],
      permissionKey: a.PERMISSION_KEY.SGT,
      market: t.CardType.SGT,
      priority: 534,
      permissionName: "深港通",
      tagLogo: p,
      tagName: "深港通权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁港股市场优质股",
      tips: ["无涨跌幅限制", "T+0交易", "T+2交收"],
      quote: { type: "index", code: "HSI", market: "14", label: "恒生指数" },
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.GGT,
    },
    {
      configKey: "hgt",
      exciteIds: ["60009"],
      permissionKey: a.PERMISSION_KEY.HGT,
      market: t.CardType.HGT,
      priority: 533,
      permissionName: "沪港通",
      tagLogo: p,
      tagName: "沪港通权限",
      titleTemplate: "恭喜您成功开通{permissionName}权限！",
      subtitle: "已解锁港股市场优质股",
      tips: ["无涨跌幅限制", "T+0交易", "T+2交收"],
      quote: { type: "index", code: "HSI", market: "14", label: "恒生指数" },
      linkageSame: [E(a.PERMISSION_KEY.SGT, t.CardType.SGT)],
      linkageLower: [],
      tradeTarget: "market",
      marketTabKey: a.PERMISSION_KEY.GGT,
    },
    {
      configKey: "st",
      exciteIds: [s.ST_ALL],
      permissionKey: a.PERMISSION_KEY.ST,
      priority: 530,
      permissionName: "沪深ST",
      tagLogo: S,
      tagName: "沪深ST权限",
      titleTemplate: "您已开通{permissionName}权限",
      description:
        "沪深主板中被实施 ST（特别处理）或 *ST（退市风险警示）标志的股票",
      tips: ["10%限幅"],
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "position",
    },
    {
      configKey: "sh_st",
      exciteIds: ["60012"],
      permissionKey: a.PERMISSION_KEY.SH_ST,
      market: i.MARKET.HA,
      priority: 529,
      permissionName: "沪市ST",
      tagLogo: S,
      tagName: "沪市ST权限",
      titleTemplate: "您已开通{permissionName}权限",
      description:
        "沪市主板中被实施 ST（特别处理）或 *ST（退市风险警示）标志的股票",
      tips: ["10%限幅"],
      linkageSame: [E(a.PERMISSION_KEY.SZ_ST, i.MARKET.SA)],
      linkageLower: [],
      tradeTarget: "position",
    },
    {
      configKey: "sz_st",
      exciteIds: ["60013"],
      permissionKey: a.PERMISSION_KEY.SZ_ST,
      market: i.MARKET.SA,
      priority: 528,
      permissionName: "深市ST",
      tagLogo: S,
      tagName: "深市ST权限",
      titleTemplate: "您已开通{permissionName}权限",
      description:
        "深市主板中被实施 ST（特别处理）或 *ST（退市风险警示）标志的股票",
      tips: ["10%限幅"],
      linkageSame: [E(a.PERMISSION_KEY.SH_ST, i.MARKET.HA)],
      linkageLower: [],
      tradeTarget: "position",
    },
    {
      configKey: "kzz_delisting",
      exciteIds: [r.KZZ_DELISTING],
      permissionKey: a.PERMISSION_KEY.SZ_KZZ_DELISTING,
      priority: 524,
      permissionName: "退市整理可转债",
      tagLogo: m,
      tagName: "退市整理可转债权限",
      titleTemplate: "您已开通{permissionName}权限",
      description: "已被交易所做出退市决定、且处于退市整理期内的可转债",
      tips: ["交易期限一般15个交易日"],
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "position",
    },
    {
      configKey: "nq",
      exciteIds: ["60015"],
      permissionKey: a.PERMISSION_KEY.NQ,
      priority: 520,
      permissionName: "退市板（老三板）",
      tagLogo:
        "https://st.gtimg.com/design/bbaf2f3e0759389a428a7f21847b21b9.png",
      tagName: "退市板（老三板）权限",
      titleTemplate: "您已开通{permissionName}权限",
      description: "从交易所退市摘牌后的各类公司股票",
      tips: ["5%限幅", "首日不限幅"],
      linkageSame: [],
      linkageLower: [],
      tradeTarget: "position",
    },
  ],
  l = c.reduce(function (e, i) {
    return (e[i.configKey] = i), e;
  }, {}),
  K = c.reduce(function (e, i) {
    return (
      i.exciteIds.forEach(function (t) {
        e[t] = i;
      }),
      e
    );
  }, {});
function d(e) {
  return K[e];
}
(exports.INDEX_MARKET_MAP = {
  399006: "0",
  "000688": "1",
  "000690": "1",
  899050: "13",
  HSI: "14",
  "000832": "1",
}),
  (exports.formatTitle = function (e, i) {
    return e.replace("{permissionName}", i);
  }),
  (exports.getConfigByExciteId = d),
  (exports.getLinkageTargetConfig = function (e) {
    return e.market
      ? c.find(function (i) {
          return i.permissionKey === e.permissionKey && i.market === e.market;
        })
      : c.find(function (i) {
          return i.permissionKey === e.permissionKey && !i.market;
        });
  }),
  (exports.isPermissionUnlockExciteId = function (e) {
    return /^60\d+$/.test(e);
  }),
  (exports.mergeMarketExcites = function (i) {
    var t = new Set(i),
      a = [];
    return (
      o.forEach(function (i) {
        if (
          i.childExciteIds.every(function (e) {
            return t.has(e);
          })
        ) {
          i.childExciteIds.forEach(function (e) {
            return t.delete(e);
          });
          var r = l[i.mergedConfigKey];
          r &&
            a.push({
              config: r,
              sourceExciteIds: e(i.childExciteIds),
              isMerged: !0,
            });
        }
      }),
      t.forEach(function (e) {
        var i = d(e);
        i && a.push({ config: i, sourceExciteIds: [e], isMerged: !1 });
      }),
      a
    );
  }),
  (exports.resolveLinkageConfigs = function (i) {
    return [].concat(e(i.linkageSame), e(i.linkageLower));
  }),
  (exports.resolvePermissionOrder = function (e, i) {
    if (null != i && "" !== String(i).trim()) {
      var t = Number(i);
      if (!Number.isNaN(t)) return t;
    }
    return (function (e) {
      var i, t;
      return null !== (i = null == (t = d(e)) ? void 0 : t.priority) &&
        void 0 !== i
        ? i
        : 0;
    })(e);
  });
