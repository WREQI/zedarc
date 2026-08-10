require("../../../@babel/runtime/helpers/Objectvalues");
var e,
  t,
  s,
  a,
  i,
  r,
  o,
  l,
  n,
  u,
  g,
  d,
  c,
  k,
  m,
  p,
  _,
  y,
  f,
  A,
  T,
  b,
  z,
  R,
  h,
  K,
  E = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var S = require("../../../config/enum.js"),
  F = require("./types.js");
require("../../../service/broker.js");
var M = require("../../../config/broker/11100/index.js"),
  H = (function (e) {
    return (
      (e.ETF = "etf"),
      (e.MAIN_BOARD = "main_board"),
      (e.REPO = "repo"),
      (e.KZZ = "kzz"),
      (e.ST = "st"),
      (e.ALL = "all"),
      (e.SH_ETF = "sh_etf"),
      (e.SH_MAIN = "sh_main"),
      (e.SH_REPO = "sh_repo"),
      (e.SH_KZZ = "sh_kzz"),
      (e.SH_ST = "sh_st"),
      (e.SH_REITS = "sh_reits"),
      (e.SH_DELISTING = "sh_delisting"),
      (e.SZ_ETF = "sz_etf"),
      (e.SZ_MAIN = "sz_main"),
      (e.SZ_REPO = "sz_repo"),
      (e.SZ_KZZ = "sz_kzz"),
      (e.SZ_ST = "sz_st"),
      (e.SZ_REITS = "sz_reits"),
      (e.SZ_DELISTING = "sz_delisting"),
      (e.SZ_KZZ_DELISTING = "sz_kzz_delisting"),
      (e.KE_CHUANG = "ke_chuang"),
      (e.KC_GROW = "kc_grow"),
      (e.GEM = "gem"),
      (e.HGT = "hgt"),
      (e.SGT = "sgt"),
      (e.GGT = "ggt"),
      (e.BJ = "bj"),
      (e.NQ = "nq"),
      e
    );
  })(H || {}),
  C =
    (E((e = {}), S.MARKET.SA, "深A"),
    E(e, S.MARKET.HA, "沪A"),
    E(e, S.MARKET.BJ, "北交所"),
    E(e, S.MARKET.NQ, "退市市场"),
    e),
  N = {
    gem: { name: "gem", key: "gem", title: "创业板", route: "BizGem" },
    kc: {
      name: "kechuang",
      key: "ke_chuang",
      title: "科创板",
      route: "BizKeChuangOpen",
    },
    kcGrow: {
      name: "kechuanggrowth",
      key: "kc_grow",
      title: "科创板-成长层",
      route: "BizKeChuangGrowthOpen",
    },
    kzz: { name: "kzz", key: "kzz", title: "可转债", route: "BizKzz" },
    repo: {
      name: "debtPermission",
      key: "repo",
      title: "通用回购",
      route: "BizDebtIndex",
    },
    st: { name: "st", key: "st", title: "沪深ST", route: "BizSt" },
    bj: { name: "bj", key: "bj", title: "北交所", route: "BizBjIndex" },
    ggt: { name: "ggt", key: "ggt", title: "港股通", route: "BizGGTOpen" },
    nq: {
      name: "stocktransfer",
      key: "gz",
      title: "股转账户权限",
      route: "BizStockTransferIndex",
    },
  },
  G =
    (E((t = {}), F.CardType.SH, [
      { key: "sh_main", title: "沪市主板", statusField: "" },
      { key: "sh_etf", title: "沪市指数基金(ETF)", statusField: "" },
      {
        key: "sh_repo",
        title: "沪市通用回购",
        statusField: "repo_status",
        funcKey: "debtPermission",
      },
      {
        key: "sh_kzz",
        title: "沪市可转债",
        statusField: "kzz_status",
        funcKey: "kzz",
      },
      {
        key: "ke_chuang",
        title: "科创板",
        statusField: "ke_chuang_status",
        funcKey: "kechuang",
      },
      {
        key: "kc_grow",
        title: "科创板-成长层",
        statusField: "kc_grow_status",
        funcKey: "kechuanggrowth",
      },
      {
        key: "sh_st",
        title: "沪市ST",
        statusField: "st_status",
        funcKey: "st",
      },
    ]),
    E(t, F.CardType.SZ, [
      { key: "sz_main", title: "深市主板", statusField: "" },
      { key: "sz_etf", title: "深市指数基金(ETF)", statusField: "" },
      {
        key: "sz_repo",
        title: "深市通用回购",
        statusField: "repo_status",
        funcKey: "debtPermission",
      },
      {
        key: "sz_kzz",
        title: "深市可转债",
        statusField: "kzz_status",
        funcKey: "kzz",
      },
      {
        key: "gem",
        title: "创业板",
        statusField: "gem_status",
        funcKey: "gem",
      },
      {
        key: "sz_st",
        title: "深市ST",
        statusField: "st_status",
        funcKey: "st",
      },
    ]),
    E(t, F.CardType.HGT, [
      {
        key: "hgt",
        title: "港股通",
        statusField: "ggt_status",
        funcKey: "ggt",
      },
    ]),
    E(t, F.CardType.SGT, [
      {
        key: "sgt",
        title: "港股通",
        statusField: "ggt_status",
        funcKey: "ggt",
      },
    ]),
    E(t, F.CardType.BJ, [
      { key: "bj", title: "北交所", statusField: "bj_status", funcKey: "bj" },
      {
        key: "nq",
        title: "退市板",
        statusField: "gz_status",
        funcKey: "stocktransfer",
      },
    ]),
    t),
  v = M.brokerConfig.dictionary.Enties.shareholder || {},
  I = !v.hidden && v.routeName ? v.routeName : "",
  j =
    (E((s = {}), F.CardType.SH, I),
    E(s, F.CardType.SZ, I),
    E(s, F.CardType.HGT, N.ggt.route),
    E(s, F.CardType.SGT, N.ggt.route),
    E(s, F.CardType.BJ, N.bj.route),
    s),
  x =
    (E((a = {}), F.CardType.BJ, {
      front: "https://st.gtimg.com/design/9a58eae6d6d4899501621f73391dda44.png",
      back: "https://st.gtimg.com/design/050856cded55f3f5eca2977b7b2599bc.png",
    }),
    E(a, F.CardType.HGT, {
      front: "https://st.gtimg.com/design/4c51db8258694709fa81db28f4461c83.png",
      back: "https://st.gtimg.com/design/83e1f4e511128c1dd4960b46d650721b.png",
    }),
    E(a, F.CardType.SH, {
      front: "https://st.gtimg.com/design/832b1c73e88814a339f3d027a782245e.png",
      back: "https://st.gtimg.com/design/de7e4ce37e868cd63f1891402d68c736.png",
    }),
    E(a, F.CardType.SGT, {
      front: "https://st.gtimg.com/design/6502edc613ef64ff753d368c6da8e1f1.png",
      back: "https://st.gtimg.com/design/3e2e866ad9213156b79de3a74753601b.png",
    }),
    E(a, F.CardType.SZ, {
      front: "https://st.gtimg.com/design/a76652603bf99f805a6aa9d297f44da0.png",
      back: "https://st.gtimg.com/design/362105c08b66a2d1c9fada819da44abe.png",
    }),
    a),
  B =
    (E((i = {}), F.CardType.BJ, { prefix: "", title: "京市/股转" }),
    E(i, F.CardType.HGT, { prefix: "沪H", title: "沪港通" }),
    E(i, F.CardType.SH, { prefix: "沪A", title: "沪市" }),
    E(i, F.CardType.SGT, { prefix: "深H", title: "深港通" }),
    E(i, F.CardType.SZ, { prefix: "深A", title: "深市" }),
    i),
  O = {
    etf: {
      key: "etf",
      title: "指数基金(ETF)",
      icon: "https://st.gtimg.com/design/7c028067457799c59d3239940169375c.png",
      lightRule: {
        type: "shareholderCard",
        markets: [S.MARKET.HA, S.MARKET.SA],
      },
    },
    main_board: {
      key: "main_board",
      title: "沪深主板",
      icon: "https://st.gtimg.com/design/2bf58c981205ce61bc377cf1ff6dfbf1.png",
      lightRule: {
        type: "shareholderCard",
        markets: [S.MARKET.HA, S.MARKET.SA],
      },
    },
    repo: {
      key: "repo",
      title: "通用回购",
      icon: "https://st.gtimg.com/design/7c7f531e26fc15a8146ee2b9477fa0fa.png",
      lightRule: {
        type: "statusField",
        statusFields: [
          { market: S.MARKET.HA, field: "repo_status" },
          { market: S.MARKET.SA, field: "repo_status" },
        ],
      },
    },
    kzz: {
      key: "kzz",
      title: "可转债",
      icon: "https://st.gtimg.com/design/954b0a65496dc3f12763eca3ad8cdf04.png",
      lightRule: {
        type: "statusField",
        statusFields: [
          { market: S.MARKET.HA, field: "kzz_status" },
          { market: S.MARKET.SA, field: "kzz_status" },
        ],
      },
    },
    kc_grow: {
      key: "kc_grow",
      title: "科创板与成长层",
      icon: "https://st.gtimg.com/design/1a6a3bbf788aff3a336a9d2897111330.png",
      lightRule: {
        type: "kcGrow",
        statusFields: [
          { market: S.MARKET.HA, field: "ke_chuang_status" },
          { market: S.MARKET.HA, field: "kc_grow_status" },
        ],
      },
    },
    gem: {
      key: "gem",
      title: "创业板",
      icon: "https://st.gtimg.com/design/626651cc370eb599c8357b23a6a2b0ed.png",
      lightRule: {
        type: "statusField",
        statusFields: [{ market: S.MARKET.SA, field: "gem_status" }],
      },
    },
    st: {
      key: "st",
      title: "ST",
      icon: "https://st.gtimg.com/design/a0a3dc8df51bda9e77cbe15160f9780c.png",
      lightRule: {
        type: "statusField",
        statusFields: [
          { market: S.MARKET.HA, field: "st_status" },
          { market: S.MARKET.SA, field: "st_status" },
        ],
      },
    },
    bj: {
      key: "bj",
      title: "北交所",
      icon: "https://st.gtimg.com/design/a3d7f496f9e96ae168799a2315728835.png",
      lightRule: {
        type: "statusField",
        statusFields: [{ market: S.MARKET.BJ, field: "bj_status" }],
      },
    },
    nq: {
      key: "nq",
      title: "退市板",
      icon: "https://st.gtimg.com/design/d161e4c09a298b66da987e3b41e047e1.png",
      lightRule: {
        type: "statusField",
        statusFields: [{ market: S.MARKET.NQ, field: "gz_status" }],
      },
    },
    ggt: {
      key: "ggt",
      title: "港股通",
      icon: "https://st.gtimg.com/design/5f4a8316b26a6c0803776509f219b699.png",
      lightRule: {
        type: "statusField",
        statusFields: [{ market: S.MARKET.HK, field: "ggt_status" }],
      },
    },
    all: {
      key: "all",
      title: "全部",
      icon: "https://st.gtimg.com/design/b2741ef10a29dc5919deaa5e8d414c37.png",
      lightRule: { type: "always" },
    },
  },
  P = M.brokerConfig.dictionary.Enties || {},
  w = [
    {
      key: "main_board",
      title: "沪深主板",
      icon: null == (r = O.main_board) ? void 0 : r.icon,
      noOpenRequired: !0,
      markets: [
        { label: "沪A", market: S.MARKET.HA },
        { label: "深A", market: S.MARKET.SA },
      ],
    },
    {
      key: "etf",
      title: "指数基金（ETF）",
      icon: null == (o = O.etf) ? void 0 : o.icon,
      noOpenRequired: !0,
      markets: [
        { label: "沪A", market: S.MARKET.HA },
        { label: "深A", market: S.MARKET.SA },
      ],
    },
    {
      key: "repo",
      title: "通用回购",
      icon: null == (l = O.repo) ? void 0 : l.icon,
      markets: [
        {
          label: "沪A",
          market: S.MARKET.HA,
          statusField: "repo_status",
          funcKey: "debtPermission",
          openRoute: N.repo.route,
        },
        {
          label: "深A",
          market: S.MARKET.SA,
          statusField: "repo_status",
          funcKey: "debtPermission",
          openRoute: N.repo.route,
        },
      ],
    },
    {
      key: "gem",
      title: "创业板",
      icon: null == (n = O.gem) ? void 0 : n.icon,
      markets: [
        {
          label: "深A",
          market: S.MARKET.SA,
          statusField: "gem_status",
          funcKey: "gem",
          openRoute:
            (null == (u = P.gem) ? void 0 : u.routeName) || N.gem.route,
        },
      ],
    },
    {
      key: "kc_grow",
      title: "科创板与成长层",
      icon: null == (g = O.kc_grow) ? void 0 : g.icon,
      markets: [
        {
          label: "科创板",
          market: S.MARKET.HA,
          statusField: "ke_chuang_status",
          funcKey: "kechuang",
          openRoute:
            (null == (d = P.kechuang) ? void 0 : d.routeName) || N.kc.route,
        },
        {
          label: "科创板-成长层",
          market: S.MARKET.HA,
          statusField: "kc_grow_status",
          funcKey: "kechuanggrowth",
          openRoute:
            (null == (c = P.kechuanggrowth) ? void 0 : c.routeName) ||
            N.kcGrow.route,
        },
      ],
    },
    {
      key: "ggt",
      title: "港股通",
      icon: null == (k = O.ggt) ? void 0 : k.icon,
      markets: [
        {
          label: "沪H",
          market: F.CardType.HGT,
          statusField: "ggt_status",
          funcKey: "ggt",
          openRoute:
            (null == (m = P.ggt) ? void 0 : m.routeName) || N.ggt.route,
        },
        {
          label: "深H",
          market: F.CardType.SGT,
          statusField: "ggt_status",
          funcKey: "ggt",
          openRoute:
            (null == (p = P.ggt) ? void 0 : p.routeName) || N.ggt.route,
        },
      ],
    },
    {
      key: "nq",
      title: "股转账户",
      icon: null == (_ = O.nq) ? void 0 : _.icon,
      markets: [
        {
          label: "退市板（老三板）",
          market: S.MARKET.NQ,
          statusField: "gz_status",
          funcKey: "stocktransfer",
          openRoute:
            (null == (y = P.stocktransferAuth) ? void 0 : y.routeName) ||
            N.nq.route,
        },
      ],
    },
    {
      key: "bj",
      title: "北交所",
      icon: null == (f = O.bj) ? void 0 : f.icon,
      markets: [
        {
          label: "北交所",
          market: S.MARKET.BJ,
          statusField: "bj_status",
          funcKey: "bj",
          openRoute: (null == (A = P.bj) ? void 0 : A.routeName) || N.bj.route,
        },
      ],
    },
    {
      key: "st",
      title: "ST（风险警示股票）",
      icon: null == (T = O.st) ? void 0 : T.icon,
      markets: [
        {
          label: "沪A",
          market: S.MARKET.HA,
          statusField: "st_status",
          funcKey: "st",
          openRoute: (null == (b = P.st) ? void 0 : b.routeName) || N.st.route,
        },
        {
          label: "深A",
          market: S.MARKET.SA,
          statusField: "st_status",
          funcKey: "st",
          openRoute: (null == (z = P.st) ? void 0 : z.routeName) || N.st.route,
        },
      ],
    },
    {
      key: "kzz",
      title: "可转债",
      icon: null == (R = O.kzz) ? void 0 : R.icon,
      markets: [
        {
          label: "沪A",
          market: S.MARKET.HA,
          statusField: "kzz_status",
          funcKey: "kzz",
          openRoute:
            (null == (h = P.kzz) ? void 0 : h.routeName) || N.kzz.route,
        },
        {
          label: "深A",
          market: S.MARKET.SA,
          statusField: "kzz_status",
          funcKey: "kzz",
          openRoute:
            (null == (K = P.kzz) ? void 0 : K.routeName) || N.kzz.route,
        },
      ],
    },
  ];
(exports.CARD_BG_MAP = x),
  (exports.CARD_INFO_MAP = B),
  (exports.CARD_OPEN_ROUTE_MAP = j),
  (exports.CARD_PERMISSIONS = G),
  (exports.DEFAULT_PERMISSION_PANEL_KEYS = [
    "main_board",
    "etf",
    "repo",
    "kzz",
    "kc_grow",
    "gem",
    "st",
    "all",
  ]),
  (exports.MARKET_NAME = C),
  (exports.PAGE_STATUS = {
    loading: "loading",
    error: "error",
    ready: "ready",
  }),
  (exports.PERMISSION_KEY = H),
  (exports.PERMISSION_PANEL_META = O),
  (exports.QUERY_PERMISSION_CONFIGS = w),
  (exports.RIGHT_NAME = N),
  (exports.getCardBgUrls = function () {
    return Object.values(x).flatMap(function (e) {
      return [e.front, e.back];
    });
  });
