require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Objectvalues");
var s = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (t, e, s) {
    return e in t
      ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s);
  },
  h = function (t, e) {
    for (var i in e || (e = {})) r.call(e, i) && l(t, i, e[i]);
    if (n) {
      var a,
        o = s(n(e));
      try {
        for (o.s(); !(a = o.n()).done; ) {
          i = a.value;
          c.call(e, i) && l(t, i, e[i]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  u = function (t, e) {
    return a(t, o(e));
  },
  d = function (t, e, s) {
    return new Promise(function (i, a) {
      var o = function (t) {
          try {
            r(s.next(t));
          } catch (t) {
            a(t);
          }
        },
        n = function (t) {
          try {
            r(s.throw(t));
          } catch (t) {
            a(t);
          }
        },
        r = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, n);
        };
      r((s = s.apply(t, e)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  k = require("../stock-hq-data/index.js"),
  f = {
    bj: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["ltz", "流通市值"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["sjl", "市净率"],
        ["price_ceiling", "涨停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["price_floor", "跌停价"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
        ["market_maker", "做市商数"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "bj-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["raise_count", "涨　家"],
        ["hold_count", "平　家"],
        ["fall_count", "跌　家"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["ltz", "流通市值"],
        ["lsacle", "量　比"],
        ["amplitude", "振　幅"],
        ["zsz", "总市值"],
        ["wbcale", "委　比"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["zdf_day5", "5　 日"],
        ["zdf_day20", "20　日"],
        ["nczj", "年初至今"],
      ],
      ls: [],
    },
    nq: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["ltz", "流通市值"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["sjl", "市净率"],
        ["price_ceiling", "涨停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["price_floor", "跌停价"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "nq-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["raise_count", "涨　家"],
        ["hold_count", "平　家"],
        ["fall_count", "跌　家"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["ltz", "流通市值"],
        ["lsacle", "量　比"],
        ["amplitude", "振　幅"],
        ["zsz", "总市值"],
        ["wbcale", "委　比"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["zdf_day5", "5　 日"],
        ["zdf_day20", "20　日"],
        ["nczj", "年初至今"],
      ],
      ls: [],
    },
    kch: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量", "竞"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额", "竞"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["ltz", "流通市值"],
        ["price_ceiling", "涨停价"],
        ["sjl", "市净率"],
        ["ltgb", "流通股本"],
        ["price_floor", "跌停价"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["week52zgj", "52周高"],
        ["npl", "内　盘"],
        ["phcjl", "成交量", "固"],
        ["week52zdj", "52周低"],
        ["wpl", "外　盘"],
        ["phcje", "成交额", "固"],
        ["gxl", "股息率", "TTM"],
      ],
      pt_extra: [
        ["HasProfit", "是否盈利"],
        ["WeightedVotingRights", "同股同权"],
        ["IsRegistration", "是否注册制"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    chy: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量", "竞"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额", "竞"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["ltz", "流通市值"],
        ["price_ceiling", "涨停价"],
        ["sjl", "市净率"],
        ["ltgb", "流通股本"],
        ["price_floor", "跌停价"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["week52zgj", "52周高"],
        ["npl", "内　盘"],
        ["phcjl", "成交量", "固"],
        ["week52zdj", "52周低"],
        ["wpl", "外　盘"],
        ["phcje", "成交额", "固"],
        ["gxl", "股息率", "TTM"],
      ],
      pt_extra: [
        ["HasProfit", "是否盈利"],
        ["WeightedVotingRights", "同股同权"],
        ["IsRegistration", "是否注册制"],
        ["IsVIE", "VIE结构"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    hs: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量", "竞"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额", "竞"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["ltz", "流通市值"],
        ["price_ceiling", "涨停价"],
        ["sjl", "市净率"],
        ["ltgb", "流通股本"],
        ["price_floor", "跌停价"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["week52zgj", "52周高"],
        ["npl", "内　盘"],
        ["phcjl", "成交量", "固"],
        ["week52zdj", "52周低"],
        ["wpl", "外　盘"],
        ["phcje", "成交额", "固"],
        ["gxl", "股息率", "TTM"],
      ],
      pt_extra: [
        ["HasProfit", "是否盈利"],
        ["WeightedVotingRights", "同股同权"],
        ["IsRegistration", "是否注册制"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "hs-b": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["wbcale", "委　比"],
        ["lyr_ratio", "市盈", "静"],
        ["ltz", "流通市值"],
        ["price_ceiling", "涨停价"],
        ["sjl", "市净率"],
        ["ltgb", "流通股本"],
        ["price_floor", "跌停价"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["week52zgj", "52周高"],
        ["npl", "内　盘"],
        ["gxl", "股息率", "TTM"],
        ["week52zdj", "52周低"],
        ["wpl", "外　盘"],
      ],
      pt_extra: [
        ["HasProfit", "是否盈利"],
        ["WeightedVotingRights", "同股同权"],
        ["IsRegistration", "是否注册制"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "hs-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["raise_count", "涨　家"],
        ["hold_count", "平　家"],
        ["fall_count", "跌　家"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["ltz", "流通市值"],
        ["lsacle", "量　比"],
        ["amplitude", "振　幅"],
        ["zsz", "总市值"],
        ["wbcale", "委　比"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["zdf_day5", "5　 日"],
        ["zdf_day20", "20　日"],
        ["nczj", "年初至今"],
      ],
      ls: [],
    },
    plate: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["ltz", "流通市值"],
        ["lsacle", "量　比"],
        ["sjl", "市净率"],
        ["zsz", "总市值"],
        ["raise_count", "涨家数"],
        ["hold_count", "平家数"],
        ["fall_count", "跌家数"],
        ["amplitude", "振　幅"],
      ],
      ls: [],
    },
    fund: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["yzl", "溢折率"],
        ["jz", "净　值"],
        ["share", "份　额"],
        ["lsacle", "量　比"],
        ["price_ceiling", "涨停价"],
        ["hsl", "换手率"],
        ["wbcale", "委　比"],
        ["price_floor", "跌停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["wpl", "外　盘"],
        ["amplitude", "振　幅"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "bj-fund-etf": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["yzl", "溢折率"],
        ["scale", "规　模"],
        ["share", "份　额"],
        ["lsacle", "量　比"],
        ["jz", "净　值"],
        ["hsl", "换手率"],
        ["wbcale", "委　比"],
        ["price_ceiling", "涨停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["price_floor", "跌停价"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
        ["market_maker", "做市商数"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "fund-etf": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["yzl", "溢折率"],
        ["scale", "规　模"],
        ["share", "份　额"],
        ["lsacle", "量　比"],
        ["jz", "净　值"],
        ["hsl", "换手率"],
        ["wbcale", "委　比"],
        ["price_ceiling", "涨停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["price_floor", "跌停价"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "hs-fund-etf": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量", "竞"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额", "竞"],
        ["yzl", "溢折率"],
        ["scale", "规　模"],
        ["share", "份　额"],
        ["lsacle", "量　比"],
        ["jz", "净　值"],
        ["hsl", "换手率"],
        ["wbcale", "委　比"],
        ["price_ceiling", "涨停价"],
        ["avg_price", "均　价"],
        ["npl", "内　盘"],
        ["price_floor", "跌停价"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
        ["phcjl", "成交量", "固"],
        ["phcje", "成交额", "固"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    kzz: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["convertValue", "转股价值"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["remainSize", "剩余规模"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["scale", "总规模"],
        ["cjl", "成交量"],
        ["convertPrice", "转股价"],
        ["convertible", "是否转股"],
        ["lsacle", "量　比"],
        ["maturityPrice", "到期赎回价"],
        ["convertDate", "转股起始"],
        ["npl", "内　盘"],
        ["maturityYield", "到期收益率"],
        ["callPrice", "强赎价"],
        ["wpl", "外　盘"],
        ["stockPB", "正股PB"],
        ["callTriggerPrice", "强赎触发价"],
        ["amplitude", "振　幅"],
        ["rate", "评　级"],
        ["putPrice", "回售触发价"],
        ["wbcale", "委　比"],
        ["duration", "期　限"],
        ["putDate", "回售起始"],
        ["maturityDate", "到期日"],
        ["remainTime", "剩余期限"],
      ],
      pt_oem: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    nhg: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["npl", "内　盘"],
        ["wbcale", "委　比"],
        ["amplitude", "振　幅"],
        ["wpl", "外　盘"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    hk: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["ttm_ratio", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["wbcale", "委　比"],
        ["syl", "市盈", "静"],
        ["ltz", "流通市值"],
        ["week52zgj", "52周高"],
        ["sjl", "市净率"],
        ["ltgb", "流通股本"],
        ["week52zdj", "52周低"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["weekratio", "股息率", "TTM"],
        ["gx", "股息", "TTM"],
        ["trd_unit", "每　手"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "hk-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cje", "成交额"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["wbcale", "委　比"],
        ["raise_count", "涨　家"],
        ["hold_count", "平　家"],
        ["fall_count", "跌　家"],
        ["zdf_day5", "5　 日"],
        ["zdf_day20", "20　日"],
        ["nczj", "年初至今"],
        ["lsacle", "量　比"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["amplitude", "振　幅"],
      ],
      ls: [],
    },
    "hk-fund": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["syl", "市盈", "静"],
        ["week52zgj", "52周高"],
        ["zsz", "总市值"],
        ["amplitude", "振　幅"],
        ["week52zdj", "52周低"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "call-put": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["jhzb", "街货比"],
        ["yj", "溢　价"],
        ["sjgg", "有效杠杆"],
        ["jhl", "街货量"],
        ["trd_unit", "每　手"],
        ["ysbf", "引伸波幅"],
        ["xqj", "行权价"],
        ["hgj", "换股价"],
        ["xqbl", "行权比例"],
        ["dhd", "打和点"],
        ["dcz", "对冲值"],
        ["ggbl", "杠杆比例"],
        ["dqr", "到期日"],
        ["zhjyr", "最后交易"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "bull-bear": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["jhzb", "街货比"],
        ["yj", "溢　价"],
        ["hsj", "回收价"],
        ["jhl", "街货量"],
        ["trd_unit", "每　手"],
        ["jhsj", "距回收价"],
        ["xqj", "行权价"],
        ["hgj", "换股价"],
        ["xqbl", "行权比例"],
        ["dhd", "打和点"],
        ["jnjw", "价内价外"],
        ["ggbl", "杠杆比例"],
        ["dqr", "到期日"],
        ["zhjyr", "最后交易"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    inline: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["xsjxx", "行权价下限"],
        ["xsjsx", "行权价上限"],
        ["trd_unit", "每手份数"],
        ["jnsy", "界内收益"],
        ["jwsy", "界外收益"],
        ["yxq", "有效期"],
        ["xsjfw", "行权价范围"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    us: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["hsl", "换手率"],
        ["syl", "市盈", "TTM"],
        ["zsz", "总市值"],
        ["lsacle", "量　比"],
        ["dynamic_ratio", "市盈", "动"],
        ["zgb", "总股本"],
        ["mgsy", "收益", "TTM"],
        ["lyr_ratio", "市盈", "静"],
        ["ltz", "流通市值"],
        ["week52zgj", "52周高"],
        ["sjl", "市净率"],
        ["ltgb", "流通股"],
        ["week52zdj", "52周低"],
        ["avg_price", "均　价"],
        ["amplitude", "振　幅"],
        ["gxl", "股息率", "TTM"],
        ["gx", "股息", "TTM"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "us-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["amplitude", "振　幅"],
        ["raise_count", "涨　家"],
        ["hold_count", "平　家"],
        ["fall_count", "跌　家"],
        ["zdf_day5", "5　 日"],
        ["zdf_day20", "20　日"],
        ["nczj", "年初至今"],
        ["lsacle", "量　比"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
      ],
      ls: [],
    },
    "uk-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["amplitude", "振　幅"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["_blank", ""],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
      ],
      ls: [],
    },
    "ft-zs": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cje", "成交额"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["amplitude", "振　幅"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
      ],
      ls: [],
    },
    futures: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["ccl", "持仓量"],
        ["zjj", "昨　结"],
        ["avg_price", "平均价"],
        ["rzc", "日增仓"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    "hd-futures": {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["ccl", "持仓量"],
        ["zjj", "昨　结"],
        ["rzc", "日增仓"],
        ["_blank", ""],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["_blank", ""],
      ],
      ls: [
        ["zgj", "最高"],
        ["jkj", "今开"],
        ["zdj", "最低"],
        ["zsj", "昨收"],
      ],
    },
    forex: {
      pt: [
        ["zgj", "最　高"],
        ["jkj", "今　开"],
        ["buy1", "买入价"],
        ["zdj", "最　低"],
        ["zsj", "昨　收"],
        ["sell1", "卖出价"],
      ],
    },
    spot: {
      pt: [
        ["jkj", "今　开"],
        ["zgj", "最　高"],
        ["cjl", "成交量"],
        ["zsj", "昨　收"],
        ["zdj", "最　低"],
        ["cje", "成交额"],
        ["week52zgj", "52周高"],
        ["week52zdj", "52周低"],
        ["amplitude", "振　幅"],
      ],
    },
    bc: {
      pt: [
        ["zgj", "今日最高"],
        ["zdj", "今日最低"],
        ["cje", "今日成交"],
        ["zsz", "总市值"],
        ["cjl", "成交量"],
      ],
      ls: [],
    },
  },
  g = {
    syl: {
      hasMore: !0,
      stat: "hq.stock_detail.syl.ttm.toast",
      data: [
        { type: "title", content: "市盈率(TTM)" },
        {
          type: "text",
          content:
            "滚动市盈率，公式：总市值/最近四个季度的净利润，代表最近四季度的业绩，弥补了动态市盈率失真及静态市盈率滞后的问题，更加客观的反映了上市公司的真实情况。",
        },
        { type: "title", content: "市盈(静)" },
        {
          type: "text",
          content:
            "静态市盈率，公式：总市值/上年度净利润，代表上一年度的业绩，没有反应最新的盈利变化，会有一定滞后性。",
        },
        { type: "title", content: "市盈(动)" },
        {
          type: "text",
          content:
            "动态市盈率，公式：总市值/预估全年净利润，其中预估全年净利润等于当前最新财报中单季度平均归母净利润的4倍，因公司经营存在季度性波动，可能出现失真。",
        },
        { type: "title", content: "补充说明" },
        {
          type: "text",
          content:
            "企业发布上年年报但未发布当年一季报的时间周期内，上述三个市盈率统计时间周期一致，因此三个指标相同。",
        },
      ],
    },
    sjl: {
      hasMore: !0,
      stat: "hq.stock_detail.sjl.toast",
      data: [
        { type: "title", content: "市净率" },
        { type: "text", content: "公式：市净率=总市值/净资产" },
        {
          type: "text",
          content:
            "含义：相比于市盈率，市净率分母使用每股净资产，适用于周期性行业或营收对资产依赖较大的行业，比如银行、保险、房地产等。",
        },
      ],
    },
    zgb: {
      hasMore: !0,
      stat: "hq.stock_detail.zgb.toast",
      data: [
        { type: "title", content: "总股本、总市值" },
        {
          type: "text",
          content: "通常情况下，指当前参与公司实际利益分配的股本及对应市值。",
        },
        { type: "title", content: "公司采用AB股模式" },
        {
          type: "text",
          content:
            "若B类股仅有投票权但不可交易且不参与经济利益的分配(如分红送配、公司清算得到赔偿的权益)，则总股本及总市值为A类股股本及对应市值；",
        },
        {
          type: "text",
          content:
            "若B类股可交易或可参与经济利益分配，则总股本及总市值为A类股与B类股的股本之和及对应市值之和。",
        },
        { type: "title", content: "公司发生特殊目的收购(SPAC)、反向收购(RTO)" },
        { type: "text", content: "总股本及总市值为最大可赎回股本及对应市值。" },
        {
          type: "text",
          content:
            "具体来说，当公司发生了特殊目的收购(SPAC)、反向收购(RTO)等事件时，目标公司股东有权以现金赎回其股份，因此公司会在收购公告中披露股东均不赎回、50%股东赎回、股东最大赎回等假设条件下的股本数量以告知该公司可能的股权稀释情况，此时我们统一取最大赎回假设条件下的股本数据作为公司当前的总股本。",
        },
      ],
    },
    ltgb: {
      hasMore: !0,
      stat: "hq.stock_detail.ltgb_dialog.toast",
      data: [
        { type: "title", content: "流通股本" },
        { type: "custom" },
        {
          type: "text",
          content: "含义：披露值=公告中披露的无限售条件流通A股；",
        },
        {
          type: "text",
          content:
            "调整值=公告披露的限售股份流通上市的A股股份数量-高管锁定股份变化值-临时锁定股份变化值。",
        },
        { type: "feedback" },
      ],
    },
    ltgb_us: {
      hasMore: !0,
      stat: "hq.stock_detail.ltgb_us_dialog.toast",
      data: [
        { type: "title", content: "流通股本" },
        { type: "text", content: "公告中披露的无限售条件流通股。" },
        {
          type: "text",
          content:
            "基于总股本的差异后，流通股需扣除内部人员股份变动，内部人员股份变动的数据通常不会完全公开，因此不同平台的流通股可能存在一定差异。",
        },
        { type: "title", content: "流通市值" },
        { type: "text", content: "流通市值=流通股股数*最新价。" },
        {
          type: "text",
          content:
            "指上市公司在该市场流通的股份按照当前市场价格计算出来的价值。",
        },
      ],
    },
    hsl: {
      hasMore: !0,
      stat: "hq.stock_detail.hsl_tip_click",
      data: [
        { type: "title", content: "换手率" },
        {
          type: "text",
          content:
            "公式=成交张数/ 剩余张数=(成交额/均价)/ (剩余规模/100)，可转债由于T+0交易，活跃的可转债换手率会超过100%。",
        },
      ],
    },
    stockPB: {
      hasMore: !0,
      stat: "hq.stock_detail.zgpb_tip_click",
      data: [
        { type: "title", content: "正股PB" },
        {
          type: "text",
          content:
            "绝大部分公司在《募集说明书》要求可转债下修时，修正后的转股价格不得低于每股净资产。也就是说此时可转债正股的市净率（PB）低于1时，可转债无法进行转股价格下修。",
        },
      ],
    },
    convertValue: {
      hasMore: !0,
      stat: "hq.stock_detail.zgjj_tip_click",
      data: [
        { type: "title", content: "转股价值" },
        {
          type: "text",
          content:
            "转股价值是指在某一时点，可转债如果转换成股票所对应的股票价值。因为某一时刻的正股价是确定的，所以该时刻的转股价值也可以确定，即转股价值=一张可转债可转股的数量x正股价=债券面值÷转股价格x正股价。",
        },
        { type: "text", content: "举例说明：" },
        {
          type: "text",
          content:
            "如果A公司现在的股价为12元，转股价格为10元，那么此刻:转股价值=100÷10x12=120元。",
        },
      ],
    },
    remainSize: {
      hasMore: !0,
      stat: "hq.stock_detail.sygm_tip_click",
      data: [
        { type: "title", content: "剩余规模" },
        { type: "text", content: "常见的赎回条款例如：" },
        {
          type: "text",
          content:
            "当出现以下两种情形的任意一种时，公司有权决定按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债：",
        },
        {
          type: "text",
          content:
            "公司股票在任意连续三十个交易日中至少十五个交易日的收盘价格不低于当期转股价格的130%本次发行的可转债未转股余额不足3000万元。其中，可转债未转股余额就是剩余规模。",
        },
      ],
    },
    callPrice: {
      hasMore: !0,
      stat: "hq.stock_detail.qsj_tip_click",
      data: [
        { type: "title", content: "强赎价" },
        {
          type: "text",
          content:
            "强制赎回条款(有的写成“有条件赎回条款”)，规定发行人可按事先约定的条件和价格赎回尚未转股的可转债。",
        },
        { type: "text", content: "举例说明：" },
        {
          type: "text",
          content:
            "A公司担心当股价表现特别好的时候，如涨到20元，如果还以10元转股就太亏了。所以A公司就和投资者约定，如果正股连续30个交易日中至少15个交易日收盘价不低于13元时，A公司有权以债券面值加应计利息的价格赎回未转股的可转债。那么此刻，该价格就是可转债的强赎价。",
        },
      ],
    },
    yzl: {
      stat: "hq.stock_detail.yzl_tip_click",
      data: [
        { type: "title", content: "溢折率" },
        {
          type: "text",
          content:
            "基金溢折率反应了基金价格偏离净值的程度，当基金交易价格高于净值时，称为基金溢价，反之则称为基金折价。",
        },
        {
          type: "text",
          content:
            "溢折率计算公式为：溢折率=(单位价格-参考单位净值)/参考单位净值*100%",
        },
      ],
    },
    share: {
      stat: "hq.stock_detail.share_tip_click",
      data: [
        { type: "title", content: "份额" },
        {
          type: "text",
          content:
            "ETF基金份额是ETF基金的数量。ETF净申购会导致份额增长，ETF净赎回会导致份额下降。ETF份额越大的规模越大流动性越好，交易摩擦成本越小。",
        },
      ],
    },
    zjj: {
      data: [
        { type: "title", content: "结算价" },
        {
          type: "text",
          content:
            "结算价是一个期货结算术语，指的是在一个交易日结束后，对未平仓合约进行当日交易保证金及当日盈亏结算的基准价，也是计算下一个交易日涨跌停板价位的基准价。通常在当日交易结束后由交易所统一公布。",
        },
      ],
    },
  },
  z = null,
  m = { fuCN: "fuCN_D", ftDAX30: "ftDAX30D" },
  j = {
    components: {
      Popup: function () {
        return "../wzq-light-quotation/components/batch/Popup.js";
      },
      FlashPrice: function () {
        return "../wzq-light-quotation/FlashPrice.js";
      },
      AddFav: function () {
        return "./components/AddFav.js";
      },
      USPan: function () {
        return "../wzq-light-quotation/USPan.js";
      },
      Teach: function () {
        return "./components/Teach/index.js";
      },
      ZszPopup: function () {
        return "./components/ZszPopup.js";
      },
      ZgbPopup: function () {
        return "./components/ZgbPopup.js";
      },
      PlatePopup: function () {
        return "./components/PlatePopup.js";
      },
      ADRbar: function () {
        return "../wzq-light-quotation/AHADRBar.js";
      },
      WarrantsBar: function () {
        return "../wzq-light-quotation/WarrantsBar.js";
      },
      ETFBar: function () {
        return "../wzq-light-quotation/ETFBar.js";
      },
      IndexBar: function () {
        return "../wzq-light-quotation/IndexBar.js";
      },
      DelistBar: function () {
        return "../wzq-light-quotation/DelistBar.js";
      },
      TradeTimeline: function () {
        return "./components/TradeTimeline.js";
      },
      CustomModal: function () {
        return "./node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    inject: {
      prefetch: { default: function () {} },
      TradeFunc: {},
      hqBridge: {},
    },
    props: {
      landscape: Boolean,
      disablePush: Boolean,
      skin: String,
      market: String,
      scode: String,
      showT0Tag: Boolean,
      userinfo: { default: function () {} },
      isShowTrade: { type: [Boolean, void 0], default: void 0 },
      didAgreeUserAgreement: { type: Boolean, default: !0 },
      isShowLctFollow: Boolean,
      hkVIP: { type: Boolean, default: !1 },
      isHidden: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        activeState: !0,
        infoItems: [],
        infoItemsExtra: [],
        formatData: {},
        stockOverView: {},
        stockOverViewClass: {},
        hqWebSocket: null,
        qtInterval: null,
        plateInterval: null,
        added: !1,
        trackedLabel: "",
        labelsTimeout: null,
        plateInfo: null,
        transDebtIndex: null,
        panData: null,
        compositeStatus: "",
        dataReady: !1,
        isTrading: !1,
        isFold: !0,
        teachIds: {},
        teachId: "",
        zszPopupShow: !1,
        zgbPopupShow: !1,
        ETFBarCode: "",
        etfbarPricezd: "",
        hkHintBarClosed: !1,
        zxzRatio: [],
        zxsRatioShow: !0,
        quotePushSymbol: "",
        indexbarRatio: "",
        indexBarCode: "",
        showPlateBoard: !1,
        showPlateIcon: !1,
        plateDataList: null,
        showTradeTimeLinePop: !1,
        showModal: !1,
        modalConfig: {},
        isLoading: !1,
        showInfoCard: !1,
        showInfoCardBottom: 180,
        stockTagMap: {
          cheng: {
            type: "",
            mainText: "",
            subText: "",
            arrowLink:
              "https://wzq.tenpay.com/mp/v2/index.html#/kch/popularization",
          },
        },
      };
    },
    computed: {
      stockTags: function () {
        return Object.values(this.stockTagMap)
          .map(function (t) {
            return t.type;
          })
          .filter(function (t) {
            return !!t;
          });
      },
      isMP: function () {
        return p.StockBridge.ENV === p.EnvTypeEnum.MP;
      },
      isPCWeixin: function () {
        var t,
          e,
          s = !1;
        try {
          s =
            this.isMP &&
            ((null ==
            (e = null == (t = getApp().globalData.detect) ? void 0 : t.env)
              ? void 0
              : e.IS_PCWEIXIN) ||
              !1);
        } catch (t) {}
        return s;
      },
      symbol: function () {
        return k.utils.getSymbol(this.market, this.scode);
      },
      formattedSymbol: function () {
        if (k.utils.isUSMarket(this.market)) {
          var t = this.symbol.replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, "");
          return k.utils.isIndex(this.stockType) ? "us.".concat(t.slice(2)) : t;
        }
        return this.symbol;
      },
      stockType: function () {
        return this.stockOverView.stocktype;
      },
      isFund: function () {
        return k.utils.isFund(this.stockType);
      },
      isTransDebt: function () {
        return k.utils.isTransferableDebt(this.stockType);
      },
      isWarrants: function () {
        return k.utils.isWarrants(this.stockType);
      },
      isIndex: function () {
        return k.utils.isIndex(this.stockType);
      },
      isHKIndex: function () {
        return k.utils.isHKMarket(this.market) && this.isIndex;
      },
      isPlate: function () {
        return k.utils.isHSPlate(this.market);
      },
      isHS: function () {
        return k.utils.isHSMarket(this.market);
      },
      isPinkSheet: function () {
        return /.PS$/.test(this.scode);
      },
      isDebt: function () {
        return k.utils.isDebt(this.stockType);
      },
      showTradeInfo: function () {
        return this.isHS && !this.isFund && !this.isTransDebt && !this.isDebt;
      },
      showADRBar: function () {
        return (
          (k.utils.isHSMarket(this.market) ||
            k.utils.isHKMarket(this.market) ||
            k.utils.isUSMarket(this.market)) &&
          !k.utils.isIndex(this.stockType)
        );
      },
      showETFBar: function () {
        return (
          k.utils.isIndex(this.stockType) ||
          k.utils.isHSPlate(this.market) ||
          k.utils.isCSIndex(this.market) ||
          k.utils.isFutures(this.market) ||
          k.utils.isSPMarket(this.market) ||
          k.utils.isChuangYeStock(this.stockType) ||
          k.utils.isKeChuangStock(this.stockType) ||
          (["GP-A"].includes(this.stockType) && +this.stockOverView.zsj >= 50)
        );
      },
      showWarrantsBar: function () {
        return (
          k.utils.isHKMarket(this.market) && k.utils.isWarrants(this.stockType)
        );
      },
      showIndexBar: function () {
        return this.isFund;
      },
      showDelistBar: function () {
        if (this.isHS) {
          if ("D" === this.stockOverView.status) return !0;
          var t = this.stockOverView.attribute || "";
          if (0 == +this.market && /D|E|J/.test(t)) return !0;
          if (1 == +this.market && ("S" === t[3] || "P" === t[3])) return !0;
        }
        return !1;
      },
      stockOverViewNoMargin: function () {
        return !this.ETFBarCode && !this.indexBarCode;
      },
      isFutures: function () {
        return k.utils.isFutures(this.market);
      },
      isForex: function () {
        return k.utils.isForex(this.market);
      },
      showHKHintBar: function () {
        return !1;
      },
      monetaryUnit: function () {
        return k.utils.isHKMarket(this.market)
          ? "HKD"
          : k.utils.isUSMarket(this.market) ||
            k.utils.isSGFutures(this.stockType)
          ? "USD"
          : "";
      },
      showUnit: function () {
        return !(
          k.utils.isHSMarket(this.market) ||
          k.utils.isBJMarket(this.market) ||
          k.utils.isNQMarket(this.market) ||
          this.isIndex ||
          this.isPlate
        );
      },
      showDelay: function () {
        var t = "delay" === this.stockOverView.timeliness;
        return this.isTrading && t;
      },
      showExtraGB: function () {
        return k.utils.isUSMarket(this.market) && this.stockOverView.xszgb;
      },
      timeStr: function () {
        var t = new Date(1e3 * this.stockOverView.utime),
          e = "";
        return (
          k.utils.isUSMarket(this.market)
            ? (e = " 美东时间")
            : k.utils.isFutures(this.market) &&
              !k.utils.isHDFutures(this.market)
            ? (e =
                k.utils.isCMEFutures(this.stockType) ||
                k.utils.isCBTRFutures(this.stockType) ||
                k.utils.isCBTGFutures(this.stockType) ||
                k.utils.isCMELFutures(this.stockType)
                  ? " 美中时间"
                  : " 美东时间")
            : k.utils.isUKMarket(this.market)
            ? (e = " 伦敦时间")
            : k.utils.isGermanFTIndex(this.stockType)
            ? (e = " 欧洲中部时间")
            : (k.utils.isHDFutures(this.market) ||
                k.utils.isSGFutures(this.stockType) ||
                k.utils.isSPMarket(this.market)) &&
              (e = " 北京时间"),
          ""
            .concat((t.getMonth() + 1).toString().padStart(2, 0), "-")
            .concat(t.getDate().toString().padStart(2, 0), " ")
            .concat(t.getHours().toString().padStart(2, 0), ":")
            .concat(t.getMinutes().toString().padStart(2, 0), ":")
            .concat(t.getSeconds().toString().padStart(2, 0))
            .concat(e)
        );
      },
      timeShort: function () {
        var t = new Date(1e3 * this.stockOverView.utime);
        return ""
          .concat(t.getHours().toString().padStart(2, 0), ":")
          .concat(t.getMinutes().toString().padStart(2, 0));
      },
      zdClass: function () {
        return this.getColorClass(this.stockOverView.zde);
      },
      transDebtIndexZDClass: function () {
        var t;
        return this.getColorClass(
          null == (t = this.transDebtIndex) ? void 0 : t.zdf
        );
      },
      transPlateZDClass: function () {
        var t;
        return this.getColorClass(
          null == (t = this.plateInfo) ? void 0 : t.zdf
        );
      },
      showAddFav: function () {
        return !k.utils.isUKMarket(this.market);
      },
      stockInfo: function () {
        var t = this.stockOverView,
          e = t.secu_name,
          s = t.secu_code,
          i = t.stk_name,
          a = t.originalZsz,
          o = t.zdf,
          n = t.zde,
          r = t.stocktype,
          c = t.code,
          l = t.dqj,
          h = t.market,
          u = t.status,
          d = c || s;
        return {
          chooseSymbol: this.symbol,
          name: i || e,
          scode: 0 === (null == d ? void 0 : d.indexOf(".")) ? d.substr(1) : d,
          stock_type: r,
          type: h,
          zde: n,
          zdf: o,
          zsz: a,
          dqj: l,
          zjcj: l,
          status: u,
          susp_flag: "S" === u,
          usable: "fu" === h ? "0" : "1",
        };
      },
      showxszsz: function () {
        return k.utils.isUSMarket(this.market) && this.stockOverView.xszsz;
      },
    },
    watch: {
      hkVIP: function (t, e) {
        k.utils.isHKMarket(this.market) && !e && t && this.refresh();
      },
      isHidden: function (t) {
        t ? this.stopUpdate() : this.refresh();
      },
    },
    created: function () {
      return d(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    z ||
                      ((z = new k.DetailApi(function () {
                        for (
                          var t, e = arguments.length, s = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          s[i] = arguments[i];
                        return 1 === s.length
                          ? p.StockBridge.request(
                              s[0],
                              p.RequestTypeEnum.GET,
                              {},
                              { forceCallback: !0 }
                            )
                          : (s[3] && (s[3].forceCallback = !0),
                            (t = p.StockBridge).request.apply(t, s));
                      })).defaultErrorHandler = function (t) {
                        var e = t || {},
                          s = e.symbol,
                          i = void 0 === s ? "" : s,
                          a = e.code;
                        switch (void 0 === a ? "" : a) {
                          case "NO_MATCH":
                            p.StockBridge.aegisReportEvent(
                              "HQ-DETAIL-NOT-FOUND-STOCK",
                              { stockid: i }
                            );
                            break;
                          case "NO_DATA":
                            p.StockBridge.aegisReportEvent(
                              "HQ-DETAIL-NOT-RESPONSE-DATA",
                              { stockid: i }
                            );
                        }
                      }),
                      this.refresh(),
                      this.isMP ||
                        document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityChange
                        ),
                      (this.hkHintBarClosed = p.StockBridge.getStorage(
                        "stock_detail_hk_hint_bar_closed"
                      ));
                  case 1:
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
    mounted: function () {
      this.reportSearchShow();
    },
    activated: function () {
      (this.activeState = !0),
        (this.etfbarPricezd = ""),
        (this.indexbarRatio = ""),
        this.reportSearchShow();
    },
    deactivated: function () {
      (this.activeState = !1),
        (this.showPlateBoard = !1),
        (this.showPlateIcon = !1),
        (this.showTradeTimeLinePop = !1);
    },
    beforeDestroy: function () {
      this.stopUpdate(),
        this.isMP ||
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
    },
    methods: {
      getValue: function (t) {
        return "zsz" === t && this.showxszsz
          ? this.stockOverView.xszsz || this.stockOverView[t] || "--"
          : "zgb" === t
          ? this.stockOverView.xszgb || this.stockOverView[t] || "--"
          : this.stockOverView[t] || "--";
      },
      tagWrapperClick: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a, o, n, r, c;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), this.getEleInfo(".stock-info", this);
                    case 2:
                      if (
                        ((s = t.sent),
                        (i = s.top),
                        (this.showInfoCardBottom = i - 1),
                        (this.showInfoCard = !0),
                        !this.TradeFunc)
                      ) {
                        t.next = 13;
                        break;
                      }
                      if (
                        ((a = this.TradeFunc.isBind()),
                        (o = this.TradeFunc.getCurrentBroker()),
                        !a)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (n =
                          ["12800"].includes(
                            "".concat((null == o ? void 0 : o.code) || "")
                          ) && 0 == +(null == o ? void 0 : o.userstate)),
                        (t.next = 10),
                        this.getAwardStatus()
                      );
                    case 10:
                      (r = t.sent),
                        (c = r.awardStatus),
                        n &&
                          !c &&
                          ((this.stockTagMap.bmp.rightText =
                            "开通港股通免费领1年Level2"),
                          (this.stockTagMap.bmp.arrowLink = "/biz/ggt/index"),
                          (this.stockTagMap.level.arrowLink =
                            "https://wzq.tenpay.com/mp/lite/index.html#/level2"));
                    case 13:
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
      getEleInfo: function (t, e) {
        return new Promise(function (s) {
          p.wx$1
            .createSelectorQuery()
            .in(e)
            .select(t)
            .fields({ node: !0, size: !0, rect: !0 })
            .exec(function (t) {
              var e = (t && t[0]) || {};
              s(e);
            });
        });
      },
      getAwardStatus: function () {
        return p.StockBridge.request(
          "https://wzq.tenpay.com/svr/activity/simple_activity/hkc_account_check_award",
          "GET",
          {}
        )
          .then(function (t) {
            return { awardStatus: t && 1 === t.act_status ? 1 : 0 };
          })
          .catch(function (t) {
            return { awardStatus: 1 };
          });
      },
      handleTagClick: function (t) {
        var e;
        t.arrowLink &&
          ("bmp" !== t.type
            ? t.arrowLink.startsWith("http") &&
              setTimeout(function () {
                p.StockBridge.locationTo(t.arrowLink);
              }, 300)
            : (null == (e = this.TradeFunc) ? void 0 : e.navToBrokerPage) &&
              this.TradeFunc.navToBrokerPage({
                broker: "12800",
                path: "/biz/ggt/index",
                data: {},
              }));
      },
      handlePopupClick: function () {
        this.showInfoCard = !1;
      },
      toggleAdded: function () {
        var t,
          e = (this.$refs.addFav || {}).added;
        null == (t = this.$refs.addFav) || t.toggleAdded(!e);
      },
      showCustomModal: function (t) {
        (this.showModal = !0), (this.modalConfig = t);
      },
      onConfirm: function () {
        var t, e;
        this.closeCustomModal(),
          null == (e = (t = this.modalConfig).onConfirm) || e.call(t);
      },
      closeCustomModal: function () {
        this.showModal = !1;
      },
      showDelistTip: function () {
        this.isMP
          ? p.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/wzq/front/aics/#/aiserviceV2/knowledgeDetail?channel=14&qid=93"
            )
          : this.$emit("showDelistTip");
      },
      onShowTradeTimeLine: function () {
        this.showTradeInfo && (this.showTradeTimeLinePop = !0);
      },
      checkPlateBoard: function () {
        if (
          ((this.showPlateBoard = !this.showPlateBoard),
          this.showPlateBoard &&
            p.StockBridge.busEmit(
              "market-detail-autoHideTradePanel",
              "platePopup"
            ),
          this.showPlateBoard && !this.isMP)
        ) {
          var t = document.querySelectorAll(".bubble--plate-board-entry");
          t && t[0] && t[0].style && (t[0].style.display = "none");
        }
        p.StockBridge.report("hq.stock_detail.plate_list_checkmore", {
          stockid: this.symbol,
        });
      },
      reportSearchShow: function () {
        !this.landscape &&
          p.StockBridge.report("hq.stock_detail.quotation_search_show");
      },
      gotoSearch: function () {
        var t, e;
        p.StockRouter.routeTo({
          name: "search",
          query: { scene: 2, searchFrom: "stockDetail" },
        }),
          p.StockBridge.report("hq.stock_detail.quotation_search_click", {
            stockid: this.symbol,
          }),
          this.isMP ||
            null ==
              (e = null == (t = this.$refs.tempFocus) ? void 0 : t.focus) ||
            e.call(t);
      },
      changeETFCode: function (t) {
        this.ETFBarCode = t;
      },
      changeIndexCode: function (t) {
        var e;
        this.indexBarCode = t;
        var s = [this.symbol, this.indexBarCode];
        null == (e = this.hqWebSocket) ||
          e.changeStockList(s, this.isPCWeixin ? this.hqWebSocket : null);
      },
      onVisibilityChange: function () {
        this.activeState &&
          ("visible" === document.visibilityState
            ? this.refresh()
            : this.stopUpdate());
      },
      refresh: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.isLoading = !0),
                        null == (s = this.$refs.addFav) || s.judgeAdded(),
                        (t.next = 4),
                        this.getQT()
                      );
                    case 4:
                      this.getRatio(),
                        this.handleMarket(),
                        !this.disablePush &&
                        (k.utils.isHSMarket(this.market) ||
                          k.utils.isUSMarket(this.market) ||
                          k.utils.isCSIndex(this.market) ||
                          k.utils.isBJMarket(this.market) ||
                          (k.utils.isHKMarket(this.market) &&
                            (this.isIndex || this.hkVIP)) ||
                          ["fuCN", "ftDAX30"].includes(this.symbol))
                          ? this.openHQWebSocket()
                          : k.utils.isHKMarket(this.market) ||
                            k.utils.isHDFutures(this.market) ||
                            this.refreshQT(),
                        this.$emit("onInitData", this.formatData),
                        this.landscape ||
                          this.isIndex ||
                          this.isFund ||
                          this.isTransDebt ||
                          this.isWarrants ||
                          !(
                            k.utils.isHSMarket(this.market) ||
                            k.utils.isHKMarket(this.market) ||
                            k.utils.isUSMarket(this.market)
                          ) ||
                          (k.utils.isHSMarket(this.market)
                            ? this.getPlateAll()
                            : this.getPlate(),
                          k.utils.isHKMarket(this.market) ||
                            this.refreshPlate()),
                        null == (i = this.$refs.adrbar) || i.getData(),
                        null == (a = this.$refs.etfBar) || a.getData(),
                        null == (o = this.$refs.warrantsBar) ||
                          o.getWarrantsData(),
                        (this.isLoading = !1);
                    case 7:
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
      reload: function () {
        var t = this;
        (this.dataReady = !1),
          (this.infoItems = []),
          (this.infoItemsExtra = []),
          (this.stockOverView = {}),
          (this.stockOverViewClass = {}),
          (this.hqWebSocket = null),
          (this.plateInfo = null),
          (this.transDebtIndex = null),
          (this.panData = null),
          (this.compositeStatus = ""),
          (this.ETFBarCode = ""),
          (this.indexBarCode = ""),
          (this.isTrading = !1),
          (this.isFold = !0),
          (this.zszPopupShow = !1),
          this.$nextTick(function () {
            t.refresh();
          });
      },
      stopUpdate: function () {
        clearInterval(this.plateInterval),
          clearInterval(this.qtInterval),
          clearTimeout(this.labelsTimeout),
          this.hqWebSocket &&
            ((this.hqWebSocket.handleData = function () {}),
            (this.hqWebSocket.handleError = function () {}),
            (this.hqWebSocket.pull = function () {}),
            this.hqWebSocket.close(),
            (this.hqWebSocket = null)),
          (this.labelsTimeout = null);
      },
      getQT: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !(null == (s = this.prefetch) ? void 0 : s.getStockInfo)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (
                        (t.next = 3),
                        this.prefetch.getStockInfo(this.scode, this.market)
                      );
                    case 3:
                      (this.formatData = t.sent), (t.next = 10);
                      break;
                    case 6:
                      return (
                        (o = this.isMP
                          ? p.StockBridge.getStorage("_qluin")
                          : p.StockBridge.getCookie("wzq_qluin")),
                        (t.next = 9),
                        z.getQT(
                          {
                            market: this.market,
                            scode: this.scode,
                            openId: o,
                            encode: "utf8",
                          },
                          { adapterType: "stockinfo", needProcess: !0 }
                        )
                      );
                    case 9:
                      this.formatData = t.sent;
                    case 10:
                      (this.dataReady &&
                        0 ==
                          +(null ==
                          (a =
                            null == (i = this.formatData)
                              ? void 0
                              : i.secu_quote)
                            ? void 0
                            : a.dqj)) ||
                        ((this.stockOverView = u(
                          h(
                            h(
                              h({}, this.stockOverView),
                              this.formatData.secu_info
                            ),
                            this.formatData.secu_quote
                          ),
                          { _blank: " " }
                        )),
                        this.handleClass());
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
      getRatio: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s,
              i,
              a,
              o,
              n,
              r,
              c,
              l = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        "" !==
                        (s =
                          this.stockOverView.hblx || (this.isHS ? "CNY" : ""))
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", void (this.zxsRatioShow = !1));
                    case 3:
                      return (
                        (i = "https://sqt.gtimg.cn/utf8?q=fx"
                          .concat(s, "CNY,fx")
                          .concat(s, "HKD,fxUSD")
                          .concat(s, ",fxCNY")
                          .concat(s, ",fxHKD")
                          .concat(s, ",fxUSD")
                          .concat(s, ",fxUSDCNY,fxUSDHKD&fmt=json")),
                        (t.next = 6),
                        p.StockBridge.request(i, p.RequestTypeEnum.GET)
                      );
                    case 6:
                      (a = t.sent),
                        (this.zxzRatio[0] =
                          (a["fx".concat(s, "CNY")] &&
                            +a["fx".concat(s, "CNY")][3]) ||
                          (a["fxCNY".concat(s)] &&
                            1 / +a["fxCNY".concat(s)][3]) ||
                          +("CNY" === s) ||
                          -1),
                        (this.zxzRatio[1] =
                          (a["fx".concat(s, "HKD")] &&
                            +a["fx".concat(s, "HKD")][3]) ||
                          (a["fxHKD".concat(s)] &&
                            1 / +a["fxHKD".concat(s)][3]) ||
                          +("HKD" === s) ||
                          -1),
                        (this.zxzRatio[2] =
                          (a["fx".concat(s, "USD")] &&
                            +a["fx".concat(s, "USD")][3]) ||
                          (a["fxUSD".concat(s)] &&
                            1 / +a["fxUSD".concat(s)][3]) ||
                          +("USD" === s) ||
                          -1),
                        -1 == +this.zxzRatio[0] &&
                        -1 == +this.zxzRatio[1] &&
                        -1 == +this.zxzRatio[2]
                          ? (this.zxsRatioShow = !1)
                          : ("JPY" === s &&
                              ((this.zxzRatio[0] = this.zxzRatio[0] / 100),
                              (this.zxzRatio[1] = this.zxzRatio[1] / 100)),
                            (o = +a.fxUSDCNY[3]),
                            (n = +a.fxUSDHKD[3]),
                            (r = [
                              [o / n, o],
                              [n / o, n],
                              [1 / o, 1 / n],
                            ]),
                            (c = [
                              [this.zxzRatio[1], this.zxzRatio[2]],
                              [this.zxzRatio[0], this.zxzRatio[2]],
                              [this.zxzRatio[0], this.zxzRatio[1]],
                            ]),
                            this.zxzRatio.forEach(function (t, e) {
                              -1 == +t &&
                                (l.zxzRatio[e] =
                                  c[e][0] * r[e][0] || c[e][1] * r[e][1]);
                            }),
                            (this.zxsRatioShow = !0));
                    case 8:
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
      refreshQT: function () {
        var t = this;
        clearInterval(this.qtInterval),
          (this.qtInterval = setInterval(function () {
            return d(
              t,
              null,
              e().mark(function t() {
                var s;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.t0 = this.isTrading), !t.t0)) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 4), this.getQT();
                        case 4:
                          this.$emit("onUpdateData", this.formatData),
                            this.isTransDebt &&
                              (this.getTransDebtQT(), this.getTransDebtIndex()),
                            (k.utils.isFutures(this.market) ||
                              k.utils.isSPMarket(this.market)) &&
                              this.showETFBar &&
                              this.ETFBarCode &&
                              (null == (s = this.$refs.etfBar) || s.getData());
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          }, 5e3));
      },
      refreshLabels: function (t) {
        return d(
          this,
          null,
          e().mark(function s() {
            var i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((this.added = t),
                        clearTimeout(this.labelsTimeout),
                        !t || this.landscape)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (e.prev = 1), (e.next = 4), this.fetchLabelsData();
                    case 4:
                      e.next = 8;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(1));
                    case 8:
                      this.added &&
                        this.activeState &&
                        (this.labelsTimeout = setTimeout(function () {
                          i.refreshLabels(!0);
                        }, 3e4));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this,
              [[1, 6]]
            );
          })
        );
      },
      hackHSCjl: function (t, e) {
        return (
          ["cjl", "phcjl"].includes(t) &&
            k.utils.isHSMarket(this.market) &&
            k.utils.isKeChuangStock(this.stockType) &&
            (e = e.replace("手", "股")),
          e
        );
      },
      fetchLabelsData: function () {
        return d(
          this,
          null,
          e().mark(function s() {
            var i, a, o, n, r, c, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = { symbols: this.symbol }),
                        (e.prev = 1),
                        (e.next = 4),
                        p.StockBridge.request(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/stockinfo/get",
                          "POST",
                          i,
                          { forceCallback: !0 }
                        )
                      );
                    case 4:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 7;
                        break;
                      }
                      e.t0 = {};
                    case 7:
                      (a = e.t0),
                        (o = a.data),
                        (n = (void 0 === o ? {} : o).list),
                        (r = t(void 0 === n ? [] : n, 1)),
                        (c = r[0]),
                        (l = void 0 === c ? {} : c),
                        (this.trackedLabel =
                          (null == l ? void 0 : l.label) || ""),
                        (e.next = 21);
                      break;
                    case 18:
                      (e.prev = 18),
                        (e.t1 = e.catch(1)),
                        (this.trackedLabel = "");
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this,
              [[1, 18]]
            );
          })
        );
      },
      getQuotePushSymbol: function () {
        var t,
          e = m[this.formattedSymbol];
        return "delay" ===
          (null == (t = this.stockOverView) ? void 0 : t.timeliness) && e
          ? e
          : this.formattedSymbol;
      },
      openHQWebSocket: function () {
        var t = this;
        if (!this.hqWebSocket) {
          this.quotePushSymbol = this.getQuotePushSymbol();
          var i = {
            topic: this.hkVIP ? "quote_lv2_qt_detail" : "quote_qt",
            tag: "detail",
            adapterType: "stockinfo",
            needProcess: !0,
            ensure: !0,
            stockList: this.isTransDebt
              ? [this.symbol, "z_".concat(this.symbol), "sz399413"]
              : [this.quotePushSymbol],
            StockBridge: p.StockBridge,
            needMarketStatus: !0,
            enableFallbackPolling: !0,
          };
          if (
            (this.isFund && (i.stockList = [this.symbol, "sz399380"]),
            this.isMP)
          )
            this.hqWebSocket = new k.MPWebSocket(
              h(
                {
                  auth: {
                    openId: p.StockBridge.getStorage("_qluin"),
                    token: p.StockBridge.getStorage("_qlskey"),
                  },
                },
                i
              ),
              p.wx$1.connectSocket
            );
          else {
            var a = {};
            p.StockBridge.ENV === p.EnvTypeEnum.WZQ
              ? (a = {
                  appName: "wzq",
                  openId: p.StockBridge.getCookie("wzq_qluin"),
                  token: p.StockBridge.getCookie("wzq_qlskey"),
                })
              : "mini" === p.StockBridge.ENV && (a = { appName: "mini" }),
              "wzq.tenpay.com" !== location.host && (i.host = location.host),
              (this.hqWebSocket = new k.HQWebSocket(h({ auth: a }, i)));
          }
          (this.hqWebSocket.handleData = function (e) {
            var i,
              a,
              o,
              n = s(e);
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var r = o.value;
                if (
                  "quote_qt" === r.topic ||
                  "quote_lv2_qt_detail" === r.topic
                ) {
                  if (
                    r.symbol === t.quotePushSymbol ||
                    r.symbol === t.formattedSymbol
                  ) {
                    for (
                      var c = 0,
                        l = [
                          "five_trans",
                          "secu_info",
                          "secu_quote",
                          "lv2_broker",
                        ];
                      c < l.length;
                      c++
                    ) {
                      var u = l[c];
                      for (var d in r.data[u])
                        void 0 !== r.data[u][d] &&
                          (t.formatData[u][d] = t.hackHSCjl(d, r.data[u][d]));
                    }
                    Object.assign(
                      t.stockOverView,
                      h(h({}, t.formatData.secu_info), t.formatData.secu_quote)
                    ),
                      t.handleClass(),
                      t.$emit("onUpdateData", t.formatData);
                  } else if (
                    t.isTransDebt &&
                    r.symbol === "z_".concat(t.symbol)
                  )
                    for (var p in r.data)
                      void 0 !== r.data[p] && (t.stockOverView[p] = r.data[p]);
                  else if (t.isTransDebt && "sz399413" === r.symbol) {
                    var k = r.data.secu_quote,
                      f = k.dqj,
                      g = k.zdf;
                    (f || g) &&
                      (t.transDebtIndex = {
                        price:
                          f ||
                          (null == (i = t.transDebtIndex) ? void 0 : i.price) ||
                          "--",
                        zdf:
                          g ||
                          (null == (a = t.transDebtIndex) ? void 0 : a.zdf) ||
                          "--",
                      });
                  } else if (r.symbol === t.bondSymbol)
                    t.$emit("onUpdateBond", r);
                  else if (t.showETFBar && r.symbol === t.ETFBarCode) {
                    var z = r.data.secu_quote.zdf;
                    z && (t.etfbarPricezd = +z);
                  } else if (t.showIndexBar && r.symbol === t.indexBarCode) {
                    var m = r.data.secu_quote.zdf;
                    m && (t.indexbarRatio = m);
                  }
                } else
                  "quote_market_status" === r.topic &&
                    t.getMarketState(null, r.data);
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }
          }),
            (this.hqWebSocket.pull = function () {
              for (
                var s = arguments.length, i = new Array(s), a = 0;
                a < s;
                a++
              )
                i[a] = arguments[a];
              return d(t, [].concat(i), function () {
                var t = this,
                  s =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return e().mark(function i() {
                  var a;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = t.isTrading || s.online), !e.t0)) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 4), t.getQT();
                        case 4:
                          t.$emit("onUpdateData", t.formatData),
                            t.isTransDebt &&
                              (t.getTransDebtQT(), t.getTransDebtIndex()),
                            k.utils.isFutures(t.market) &&
                              t.showETFBar &&
                              t.ETFBarCode &&
                              (null == (a = t.$refs.etfBar) || a.getData());
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, i);
                })();
              });
            }),
            (this.hqWebSocket.handleError = function (t) {
              if (t) {
                var e =
                    "websocket-close-event" === t.event_type
                      ? "MONITOR-HQ-WEBSOCKET-CLOSE"
                      : "MONITOR-HQ-WEBSOCKET-ERROR",
                  s = "";
                try {
                  s = JSON.stringify(t);
                } catch (t) {
                  s = String((null == t ? void 0 : t.message) || t);
                }
                p.StockBridge.aegisReportEvent(e, { ext3: s });
              }
            });
        }
      },
      handleMarket: function () {
        var t,
          e,
          s = this,
          i = "";
        k.utils.isBJMarket(this.market)
          ? ((i = "bj"),
            (this.teachIds = { syl: !0, sjl: !0 }),
            this.isIndex
              ? (i = "bj-zs")
              : this.isFund &&
                ((i = "fund-etf"),
                ["ETF", "QDII-ETF"].includes(this.stockType) &&
                  (i = "bj-fund-etf"),
                (this.teachIds = { yzl: !0, share: !0 }),
                this.getFundQT(),
                this.getTag(),
                this.$nextTick(function () {
                  s.$refs.indexbar && s.$refs.indexbar.getIndexData();
                })))
          : k.utils.isNQMarket(this.market)
          ? ((i = "nq"),
            (this.teachIds = { syl: !0, sjl: !0 }),
            this.isIndex && (i = "nq-zs"))
          : k.utils.isHSMarket(this.market)
          ? ((i = "hs"),
            (this.teachIds = {
              syl: !0,
              sjl: !0,
              zgb: !0,
              ltgb: !k.utils.isBMarket(this.stockType),
            }),
            this.isIndex
              ? (i = "hs-zs")
              : k.utils.isKeChuangStock(this.stockType)
              ? (i = "kch")
              : k.utils.isChuangYeStock(this.stockType)
              ? (i = "chy")
              : k.utils.isBMarket(this.stockType)
              ? (i = "hs-b")
              : this.isFund
              ? ((i = "fund"),
                (this.teachIds = { yzl: !0, share: !0 }),
                this.getFundQT(),
                this.getTag(),
                this.$nextTick(function () {
                  s.$refs.indexbar && s.$refs.indexbar.getIndexData();
                }),
                ["ETF", "QDII-ETF"].includes(this.stockType)
                  ? (i = "hs-fund-etf")
                  : /REIT/.test(this.stockOverView.secu_name) ||
                    (i = "fund-etf"))
              : k.utils.isDebt(this.stockType) || "ZQ-GZ" === this.stockType
              ? (i = "nhg")
              : this.isTransDebt &&
                ((i = "kzz"),
                (this.teachIds = {
                  hsl: !0,
                  stockPB: !0,
                  convertValue: !0,
                  remainSize: !0,
                  callPrice: !0,
                }),
                this.getTransDebtQT(),
                this.getTransDebtIndex()))
          : k.utils.isHKMarket(this.market)
          ? ((i = "hk"),
            (this.teachIds = { ttm_ratio: !0, sjl: !0, zgb: !0 }),
            this.isIndex
              ? (i = "hk-zs")
              : /^GP-FUND/.test(this.stockType)
              ? (i = "hk-fund")
              : this.isWarrants &&
                (/CALL|PUT/.test(this.stockType)
                  ? (i = "call-put")
                  : /BULL|BEAR/.test(this.stockType)
                  ? (i = "bull-bear")
                  : /INLINE/.test(this.stockType) && (i = "inline")))
          : k.utils.isUSMarket(this.market)
          ? ((i = "us"),
            (this.teachIds = {
              syl: !0,
              sjl: !0,
              zgb: !this.stockOverView.xszgb,
              ltgb: !0,
            }),
            this.isIndex && (i = "us-zs"))
          : k.utils.isUKMarket(this.market)
          ? ((i = "uk"), this.isIndex && (i = "uk-zs"))
          : this.isPlate
          ? ((i = "plate"), (this.teachIds = { syl: !0, sjl: !0 }))
          : k.utils.isCSIndex(this.market)
          ? ((i = "hs-zs"), (this.teachIds = { syl: !0 }))
          : k.utils.isFTIndex(this.market)
          ? (i = "ft-zs")
          : this.isFutures
          ? ((i = "futures"),
            (this.teachIds = { zjj: !0 }),
            k.utils.isHDFutures(this.market) && (i = "hd-futures"))
          : this.isForex
          ? (i = "forex")
          : k.utils.isSPMarket(this.market) && (i = "spot"),
          (this.infoItems = (null == (t = f[i]) ? void 0 : t.pt) || []),
          this.dataReady ||
            ((this.infoItemsExtra = Object.assign(
              [],
              (null == (e = f[i]) ? void 0 : e.pt_extra) || []
            )),
            "hs" === i &&
              0 == +this.market &&
              this.infoItemsExtra.push(["IsVIE", "VIE结构"])),
          (this.dataReady = !0);
      },
      goUSIntro: function () {
        p.StockRouter.routeTo({
          name: "informationDetail",
          query: { id: "SN202403041021157916e5f0", articleStyle: "fullTeach" },
        }),
          p.StockBridge.report("hq.stock_detail.us_intro_click");
      },
      getPlate: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        z.getPlate(
                          { market: this.market, scode: this.scode },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      (a = t.sent),
                        (this.plateInfo = Array.isArray(a) ? a[0] : a),
                        ("--" !==
                          (null == (s = this.plateInfo) ? void 0 : s.name) &&
                          "" !==
                            (null == (i = this.plateInfo) ? void 0 : i.code)) ||
                          ((this.plateInfo = null),
                          clearInterval(this.plateInterval));
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
      },
      getPlateAll: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a, o, n, r;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        (function (t) {
                          var e =
                            "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/plate/get?code="
                              .concat(t, "&app=")
                              .concat(
                                "mp" === p.StockBridge.ENV ? "zxg_xcx" : "wzq",
                                "&zdf=1"
                              );
                          return p.StockBridge.request(
                            e,
                            p.RequestTypeEnum.GET
                          );
                        })(this.symbol)
                      );
                    case 2:
                      (a = t.sent) && 0 == +a.code
                        ? ((o = a.data),
                          (this.plateDataList = o),
                          this.$refs.plateboard &&
                            this.$refs.plateboard.changeData(
                              this.plateDataList
                            ),
                          (n = []),
                          o.plate &&
                            ((n = o.plate).length > 1
                              ? ((r = n.find(function (t) {
                                  return 2 == +t.level;
                                })),
                                (this.plateInfo = r))
                              : (this.plateInfo = Array.isArray(n) ? n[0] : n),
                            ("--" !==
                              (null == (s = this.plateInfo)
                                ? void 0
                                : s.name) &&
                              "" !==
                                (null == (i = this.plateInfo)
                                  ? void 0
                                  : i.code)) ||
                              ((this.plateInfo = null),
                              clearInterval(this.plateInterval))),
                          n && n.length > 0
                            ? (this.showPlateIcon = !0)
                            : (this.showPlateIcon = !1),
                          this.$emit("showPlateEntry", this.showPlateIcon))
                        : ((this.showPlateIcon = !1),
                          (this.plateInfo = null),
                          this.$emit("showPlateEntry", this.showPlateIcon));
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
      },
      refreshPlate: function () {
        var t = this;
        clearInterval(this.plateInterval),
          (this.plateInterval = setInterval(function () {
            t.isTrading &&
              (k.utils.isHSMarket(t.market) ? t.getPlateAll() : t.getPlate());
          }, 5e3));
      },
      goPlate: function () {
        var t = this.plateInfo.id || this.plateInfo.code;
        if ("wzq" === p.StockBridge.ENV) {
          var e = [200, 200, 400, 601][this.market];
          p.StockBridge.routeTo({
            path: "/plate/".concat(e, "/detail"),
            query: { plateId: t },
          });
        } else if ("mini" === p.StockBridge.ENV)
          if (k.utils.isHSMarket(this.market))
            p.StockBridge.routeTo({
              path: "/detail/plate",
              query: { plateId: t },
            });
          else {
            var s = [200, 200, 400, 601][this.market];
            p.StockBridge.routeTo({
              path: "/plate/stock/".concat(s, "/").concat(t),
            });
          }
        else
          this.isMP &&
            (k.utils.isHSMarket(this.market)
              ? p.StockRouter.routeTo({
                  name: "stockdetail",
                  query: { market: "p", scode: t },
                })
              : p.StockRouter.routeTo({
                  name: "plate-list",
                  query: {
                    plate: k.utils.isUSMarket(this.market) ? "601" : "400",
                    code: t,
                    name: this.plateInfo.name,
                  },
                }));
        p.StockBridge.report("hq.stock_detail.plate_entrance", {
          stockid: this.symbol,
        });
      },
      getFundQT: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a, o, n;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (s = "s_jj".concat(this.scode)),
                        (i = "https://sqt.gtimg.cn/utf8?q=".concat(
                          s,
                          "&fmt=json"
                        )),
                        (t.next = 5),
                        p.StockBridge.request(i, p.RequestTypeEnum.GET)
                      );
                    case 5:
                      (a = t.sent),
                        (o = a[s][3]),
                        (this.stockOverView.jz = 0 == +o ? "--" : o),
                        (n = 1e4 * parseFloat(a[s][22])),
                        (this.stockOverView.scale =
                          n >= 1e8
                            ? "".concat((n / 1e8).toFixed(2), "亿")
                            : n >= 1e4
                            ? "".concat((n / 1e4).toFixed(2), "万")
                            : n),
                        (t.next = 14);
                      break;
                    case 12:
                      (t.prev = 12), (t.t0 = t.catch(0));
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 12]]
            );
          })
        );
      },
      getTransDebtQT: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        z.getTransDebtQT(
                          {
                            market: this.market,
                            scode: this.scode,
                            encode: this.isMP ? "utf8" : "",
                          },
                          { adapterType: "stockinfo", needProcess: !0 }
                        )
                      );
                    case 3:
                      (s = t.sent),
                        (this.stockOverView = h(h({}, this.stockOverView), s)),
                        this.handleClass(),
                        (t.next = 9);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      getTransDebtIndex: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i, a;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        z.getQTs(["sz399413"], {
                          encode: this.isMP ? "utf8" : "",
                        })
                      );
                    case 3:
                      (s = t.sent),
                        (i = s.sz399413[3]),
                        (a = s.sz399413[5]),
                        (this.transDebtIndex = {
                          price: i,
                          zdf: "".concat(a > 0 ? "+" : "").concat(a),
                        }),
                        (t.next = 11);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(0));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 9]]
            );
          })
        );
      },
      goTransDebtTab: function () {
        p.StockBridge.report("hq.stock_detail.go_trans_debt_tab"),
          "wzq" === p.StockBridge.ENV
            ? p.StockBridge.routeTo({
                name: "ChooseHq",
                query: { currentTab: "bond" },
              })
            : "mp" === p.StockBridge.ENV &&
              p.wx$1.reLaunch({ url: "/pages/index/market?currentTab=bond" });
      },
      getTag: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var s, i;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s =
                          "https://proxy.finance.qq.com/ifzqgtimg/appstock/invest/investment/getStockTag?app=wzq&code=".concat(
                            this.symbol
                          )),
                        (t.next = 3),
                        p.StockBridge.request(
                          s,
                          p.RequestTypeEnum.GET,
                          {},
                          { header: { "skip-sign": "true" } }
                        )
                      );
                    case 3:
                      1 == +(i = t.sent).data[this.symbol].kcb_fund_zdf20
                        ? ((this.infoItemsExtra = [
                            ["kcb_fund_zdf20", "涨跌幅限制"],
                          ]),
                          (this.stockOverView.kcb_fund_zdf20 = "±20%"))
                        : 1 == +i.data[this.symbol].cyb_fund_zdf20 &&
                          ((this.infoItemsExtra = [
                            ["cyb_fund_zdf20", "涨跌幅限制"],
                          ]),
                          (this.stockOverView.cyb_fund_zdf20 = "±20%"));
                    case 5:
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
      getWarrantsData: function (t) {
        return d(
          this,
          null,
          e().mark(function s() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (this.stockOverView = h(h({}, this.stockOverView), t)),
                        this.handleClass();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this
            );
          })
        );
      },
      getMarketState: function (t) {
        var e,
          s = this,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = null == (e = this.formatData) ? void 0 : e.status;
        if (t && t[0]) {
          this.isTrading = "open" === t[0][1];
          var o = t[0][2];
          this.compositeStatus = a || o || "";
        } else {
          var n = Object.keys(i);
          if (n.length) {
            var r = n.find(function (t) {
              return k.utils.isHSMarket(s.market) &&
                (k.utils.isAMarket(s.stockType) ||
                  k.utils.isKeChuangStock(s.stockType) ||
                  k.utils.isChuangYeStock(s.stockType) ||
                  ["ETF", "QDII-ETF"].includes(s.stockType))
                ? "HSZB" === t
                : k.utils.isDebt(s.stockType) ||
                  k.utils.isNationalDebt(s.stockType) ||
                  k.utils.isDebtIndex(s.stockType)
                ? "ZQ" === t
                : k.utils.isGuoZhengHK(s.stockType)
                ? "JW" === t
                : k.utils.isHKMarket(s.market)
                ? "NEWHK" === t
                : k.utils.isBJMarket(s.market) ||
                  k.utils.isNQMarket(s.market) ||
                  k.utils.isHSMarket(s.market) ||
                  k.utils.isHSPlate(s.market) ||
                  k.utils.isCSIndex(s.market)
                ? "NEWSH" === t
                : k.utils.isUSMarket(s.market)
                ? "NEWUS" === t
                : k.utils.isUKMarket(s.market)
                ? "UK" === t
                : k.utils.isGermanFTIndex(s.stockType)
                ? "DE" === t
                : k.utils.isForex(s.market)
                ? t[0] === s.scode
                : k.utils.isSGFutures(s.stockType)
                ? "SGXS" === t
                : k.utils.isSPMarket(s.market)
                ? "SGE" === t
                : void 0;
            });
            i[r] &&
              ((this.isTrading = "open" === i[r].state),
              (this.compositeStatus = a || i[r].name || ""),
              p.StockBridge.busEmit("market-update-marketStatus", i));
          }
        }
      },
      getZDP: function (t) {
        if (t)
          if (Array.isArray(t))
            t.length > 3
              ? (this.stockOverView = u(h({}, this.stockOverView), {
                  raise_count: t[2],
                  hold_count: t[3],
                  fall_count: t[4],
                }))
              : (this.stockOverView = u(h({}, this.stockOverView), {
                  raise_count: t[0],
                  hold_count: t[1],
                  fall_count: t[2],
                }));
          else {
            var e = t[this.scode] || [];
            this.stockOverView = u(h({}, this.stockOverView), {
              raise_count: e[0],
              hold_count: e[1],
              fall_count: e[2],
            });
          }
      },
      getExtraInfo: function (t) {
        var e = this;
        t
          ? ((t.HasProfit = 1 - t.NoProfit),
            Object.keys(t).forEach(function (s) {
              if ("GrowLayer" === s)
                "G1" === t[s]
                  ? ((e.stockTagMap.cheng.type = "cheng1"),
                    (e.stockTagMap.cheng.mainText = "存量科创成长层股票"))
                  : "G" === t[s] &&
                    ((e.stockTagMap.cheng.type = "cheng"),
                    (e.stockTagMap.cheng.mainText = "新注册科创成长层股票"));
              else {
                var i = +t[s];
                t[s] = isNaN(i) ? "--" : i ? "是" : "否";
              }
            }),
            (this.stockOverView = h(h({}, this.stockOverView), t)))
          : this.isFund || (this.infoItemsExtra = []);
      },
      getUSPanData: function (t) {
        this.panData = t;
      },
      addBondPush: function (t) {
        var e;
        this.bondSymbol = t;
        var s = this.isTransDebt
          ? [this.symbol, "z_".concat(this.symbol), "sz399413", this.bondSymbol]
          : [this.symbol, this.bondSymbol];
        null == (e = this.hqWebSocket) || e.changeStockList(s);
      },
      getColorClass: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return isNaN(+t)
          ? ""
          : ("--" === e && (e = 0),
            +t == +e ? "color-equal" : +t > +e ? "color-rise" : "color-drop");
      },
      handleClass: function () {
        var t = "oem" === p.StockBridge.ENV,
          e = {};
        for (var s in this.stockOverView) {
          var i = this.stockOverView[s];
          "jkj" === s || "zgj" === s || "zdj" === s
            ? (e[s] = this.getColorClass(i, this.stockOverView.zsj))
            : "avg_price" !== s || this.isFutures || t
            ? "lsacle" !== s || t
              ? ("wscale" !== s && "wbcale" !== s && "yzl" !== s) || t
                ? "price_floor" !== s || t
                  ? "price_ceiling" !== s || t
                    ? "npl" !== s || t
                      ? "wpl" !== s || t
                        ? "phcjl" === s
                          ? (e.phcjl = i.length >= 6 ? "small" : "")
                          : "zjj" === s
                          ? (e.zjj = i.length >= 6 ? "small" : "")
                          : ("dqr" !== s &&
                              "zhjyr" !== s &&
                              "convertDate" !== s &&
                              "putDate" !== s &&
                              "maturityDate" !== s &&
                              "maturityPrice" !== s &&
                              "maturityYield" !== s &&
                              "xsjxx" !== s &&
                              "xsjsx" !== s) ||
                            (e[s] = "small")
                        : (e.wpl = "--" === i || 0 == +i ? "" : "color-rise")
                      : (e.npl = "--" === i || 0 == +i ? "" : "color-drop")
                    : (e.price_ceiling =
                        isNaN(i) || 0 == +i ? "" : "color-rise")
                  : (e.price_floor = isNaN(i) || 0 == +i ? "" : "color-drop")
                : (e[s] = this.getColorClass(i.replace("%", ""), 0))
              : (e.lsacle = this.getColorClass(i, 1))
            : (e.avg_price = this.getColorClass(i, this.stockOverView.zsj));
        }
        this.stockOverViewClass = e;
      },
      toggleFold: function () {
        if (this.infoItems.length > 9) {
          if (((this.isFold = !this.isFold), !this.isMP)) {
            var t = this.$refs.stockInfo;
            t.style.maxHeight = this.isFold
              ? ""
              : "".concat(t.scrollHeight, "px");
          }
          var e = this.isFold
            ? "hq.detail.overview_fold"
            : "hq.detail.overview_open";
          p.StockBridge.report(e, { stockid: this.symbol }),
            this.$emit("bjFoldClick");
        }
      },
      infoItemClick: function (t) {
        "zsz" !== t || this.isPlate
          ? "zgb" === t && this.showExtraGB
            ? (p.StockBridge.report("hq.stock_detail.zgb_click"),
              (this.zgbPopupShow = !0),
              p.StockBridge.busEmit(
                "market-detail-autoHideTradePanel",
                "zgbPopup"
              ))
            : this.toggleFold()
          : ((this.zszPopupShow = !0),
            p.StockBridge.busEmit(
              "market-detail-autoHideTradePanel",
              "zszPopup"
            ),
            p.StockBridge.report("hq.stock_detail.zsz_click"),
            p.StockBridge.report(
              "hq.gegu_xiangqingye.market_value_alert_brow",
              { stockid: this.symbol }
            ));
      },
      syncAdded: function (t) {
        this.$refs.addFav.syncAdded(t);
      },
      showTeach: function (t) {
        var e, s;
        p.StockBridge.busEmit("market-detail-autoHideTradePanel", "aiDialog");
        var i = t && "TTM" === t[2],
          a = t && "yzl" === t[0];
        if (i || (a && /etf/i.test(this.stockOverView.secu_name))) {
          var o = i
            ? {
                title: "市盈率解释",
                prompt: "市盈率解释",
                scene: "stockdetail",
                sub_channel: "manual",
                sub_scene: "pe",
                replaceValue: this.stockOverView.secu_name,
              }
            : {
                title: "ETF溢折率是什么",
                prompt: "ETF溢折率是什么",
                scene: "stockdetail",
                sub_channel: "manual",
                sub_scene: "premium",
                replaceValue: this.stockOverView.secu_name,
              };
          p.StockBridge.busEmit("showAiDialog", o);
          var n = i
            ? null == (e = null == g ? void 0 : g.syl)
              ? void 0
              : e.stat
            : null == (s = null == g ? void 0 : g.yzl)
            ? void 0
            : s.stat;
          n && p.StockBridge.report(n);
        } else this.teachId = t[0];
      },
      closeHKHintBar: function () {
        (this.hkHintBarClosed = !0),
          p.StockBridge.setStorage("stock_detail_hk_hint_bar_closed", !0);
      },
      closeLandscape: function () {
        this.$emit("closeLandscape");
      },
    },
  };
Array ||
  (
    p.resolveComponent("FlashPrice") +
    p.resolveComponent("AddFav") +
    p.resolveComponent("USPan") +
    p.resolveComponent("ADRbar") +
    p.resolveComponent("WarrantsBar") +
    p.resolveComponent("ETFBar") +
    p.resolveComponent("IndexBar") +
    p.resolveComponent("DelistBar") +
    p.resolveComponent("Teach") +
    p.resolveComponent("ZszPopup") +
    p.resolveComponent("ZgbPopup") +
    p.resolveComponent("PlatePopup") +
    p.resolveComponent("trade-timeline") +
    p.resolveComponent("custom-modal") +
    p.resolveComponent("Popup")
  )();
var b = p._export_sfc(j, [
  [
    "render",
    function (t, e, s, i, a, o) {
      return p.e(
        { a: a.dataReady },
        a.dataReady
          ? p.e(
              { b: !s.landscape },
              s.landscape
                ? {
                    ax: p.t(a.stockOverView.secu_name),
                    ay: p.t(s.scode),
                    az: p.p({
                      skin: s.skin,
                      price: a.stockOverView.dqj,
                      zde: a.stockOverView.zde,
                    }),
                    aA: o.isIndex || o.isPlate ? 1 : "",
                    aB: p.t(
                      (o.isHKIndex
                        ? a.stockOverView.cje
                        : a.stockOverView.cjl) || "--"
                    ),
                    aC: p.t(o.timeShort),
                    aD: p.o(function (t) {
                      return o.closeLandscape();
                    }, 1723),
                    aE: o.isMP ? 1 : "",
                  }
                : p.e(
                    {
                      c: p.p({
                        skin: s.skin,
                        market: s.market,
                        price: a.stockOverView.dqj,
                        zde: a.stockOverView.zde,
                      }),
                      d: s.showT0Tag,
                    },
                    (s.showT0Tag, {}),
                    { e: o.isPinkSheet },
                    o.isPinkSheet
                      ? {
                          f: p.o(function (t) {
                            return o.goUSIntro();
                          }, 1708),
                        }
                      : p.e(
                          { g: o.showUnit },
                          o.showUnit
                            ? { h: p.t(a.stockOverView.hblx || "") }
                            : {},
                          { i: o.showDelay },
                          (o.showDelay, {}),
                          { j: o.showUnit && o.showDelay ? 1 : "" }
                        ),
                    { k: a.trackedLabel && a.added },
                    a.trackedLabel && a.added ? { l: p.t(a.trackedLabel) } : {},
                    {
                      m: p.t(a.stockOverView.zde),
                      n: p.n(o.zdClass),
                      o: p.n(
                        o.isHS && a.showPlateIcon && a.plateInfo
                          ? "small-font"
                          : ""
                      ),
                      p: p.t(a.stockOverView.zdf),
                      q: p.n(o.zdClass),
                      r: p.n(
                        o.isHS && a.showPlateIcon && a.plateInfo
                          ? "small-font"
                          : ""
                      ),
                      s: a.plateInfo || a.transDebtIndex,
                    },
                    (a.plateInfo || a.transDebtIndex, {}),
                    { t: a.plateInfo },
                    a.plateInfo
                      ? {
                          v: p.t(a.plateInfo.name),
                          w: p.t(a.plateInfo.zdf > 0 ? "+" : ""),
                          x: p.t(a.plateInfo.zdf),
                          y: p.n(o.transPlateZDClass),
                          z: p.o(function (t) {
                            return o.goPlate();
                          }, 1709),
                        }
                      : {},
                    { A: o.isHS && a.showPlateIcon },
                    (o.isHS && a.showPlateIcon, {}),
                    { B: o.isHS && a.showPlateIcon },
                    o.isHS && a.showPlateIcon
                      ? p.e({ C: a.showPlateBoard }, (a.showPlateBoard, {}), {
                          D: p.o(function (t) {
                            return o.checkPlateBoard();
                          }, 1710),
                        })
                      : {},
                    { E: a.transDebtIndex },
                    a.transDebtIndex
                      ? {
                          F: p.t(a.transDebtIndex.zdf),
                          G: p.n(o.transDebtIndexZDClass),
                          H: p.o(function (t) {
                            return o.goTransDebtTab();
                          }, 1711),
                        }
                      : {},
                    { I: !o.isMP || o.isPCWeixin },
                    !o.isMP || o.isPCWeixin
                      ? p.e(
                          { J: p.t(a.compositeStatus), K: o.showTradeInfo },
                          (o.showTradeInfo, {}),
                          { L: p.t(o.timeStr), M: o.isPCWeixin },
                          o.isPCWeixin
                            ? {
                                N: a.isLoading ? 1 : "",
                                O: p.o(function () {
                                  return (
                                    o.refresh && o.refresh.apply(o, arguments)
                                  );
                                }, 1712),
                              }
                            : {},
                          {
                            P: p.o(function (t) {
                              return o.onShowTradeTimeLine();
                            }, 1713),
                          }
                        )
                      : o.stockTags.length
                      ? {
                          R: p.f(o.stockTags, function (t, e, s) {
                            return { a: t, b: p.n("tag ".concat(t)) };
                          }),
                          S: p.o(function () {
                            return (
                              o.tagWrapperClick &&
                              o.tagWrapperClick.apply(o, arguments)
                            );
                          }, 1714),
                        }
                      : {},
                    { Q: o.stockTags.length, T: o.showAddFav },
                    o.showAddFav
                      ? {
                          U: p.sr("addFav", "b1166ab7-1"),
                          V: p.o(o.refreshLabels, 1715),
                          W: p.p({
                            skin: s.skin,
                            market: s.market,
                            scode: s.scode,
                            "stock-type": o.stockType,
                            symbol: o.symbol,
                            "stock-info": o.stockInfo,
                            userinfo: s.userinfo,
                            "is-show-trade": s.isShowTrade,
                            "is-show-lct-follow": s.isShowLctFollow,
                            "did-agree-user-agreement": s.didAgreeUserAgreement,
                          }),
                        }
                      : {},
                    { X: o.showAddFav },
                    (o.showAddFav, {}),
                    {
                      Y: p.o(function () {
                        return o.gotoSearch && o.gotoSearch.apply(o, arguments);
                      }, 1716),
                      Z: p.f(a.infoItems, function (t, e, s) {
                        return p.e(
                          {
                            a: p.t(
                              a.teachIds[t[0]] && "ltgb" === t[0]
                                ? t[1].substr(0, 3)
                                : t[1]
                            ),
                            b: t[2],
                          },
                          t[2] ? { c: p.t(t[2]) } : {},
                          { d: a.teachIds[t[0]] },
                          a.teachIds[t[0]]
                            ? {
                                e: p.o(
                                  function (e) {
                                    return o.showTeach(t);
                                  },
                                  1717,
                                  t[0]
                                ),
                              }
                            : {},
                          { f: "zsz" === t[0] && !o.isPlate && a.zxsRatioShow },
                          "zsz" === t[0] && !o.isPlate && a.zxsRatioShow
                            ? { g: a.zszPopupShow ? 1 : "" }
                            : "zgb" === t[0] && o.showExtraGB
                            ? { i: a.zgbPopupShow ? 1 : "" }
                            : {},
                          {
                            h: "zgb" === t[0] && o.showExtraGB,
                            j: p.t(o.getValue(t[0])),
                            k: p.n(a.stockOverViewClass[t[0]]),
                            l: (e + 1) % 3 == 0 ? 0 : "",
                            m: t[0],
                            n: p.o(
                              function (e) {
                                return o.infoItemClick(t[0]);
                              },
                              1718,
                              t[0]
                            ),
                          }
                        );
                      }),
                      aa: a.infoItemsExtra.length > 0,
                    },
                    (a.infoItemsExtra.length, {}),
                    {
                      ab: p.f(a.infoItemsExtra, function (t, e, s) {
                        return {
                          a: p.t(t[1]),
                          b: p.t(a.stockOverView[t[0]] || "--"),
                          c: (e + 1) % 3 == 0 ? 0 : "",
                          d: t[0],
                        };
                      }),
                      ac: a.isFold ? 1 : "",
                      ad: p.o(function (t) {
                        return o.toggleFold();
                      }, 1719),
                      ae: a.infoItems.length > 9,
                    },
                    a.infoItems.length > 9
                      ? {
                          af: a.isFold ? "" : 1,
                          ag: p.t(a.isFold ? "unfold" : "fold"),
                          ah: p.o(function (t) {
                            return o.toggleFold();
                          }, 1720),
                        }
                      : {},
                    { ai: a.panData && a.panData.tag },
                    a.panData && a.panData.tag
                      ? { aj: p.p({ skin: s.skin, "pan-data": a.panData }) }
                      : {},
                    { ak: o.showADRBar },
                    o.showADRBar
                      ? {
                          al: p.sr("adrbar", "b1166ab7-3"),
                          am: p.p({
                            scode: s.scode,
                            market: s.market,
                            hkVIP: s.hkVIP,
                          }),
                        }
                      : {},
                    { an: o.showWarrantsBar },
                    o.showWarrantsBar
                      ? {
                          ao: p.sr("warrantsBar", "b1166ab7-4"),
                          ap: p.o(o.getWarrantsData, 1721),
                          aq: p.p({
                            skin: s.skin,
                            "stock-type": o.stockType,
                            market: s.market,
                            scode: s.scode,
                            data: a.stockOverView,
                          }),
                        }
                      : {},
                    { ar: o.showETFBar },
                    o.showETFBar
                      ? {
                          as: p.sr("etfBar", "b1166ab7-5"),
                          at: p.o(o.changeETFCode, 1722),
                          av: p.p({
                            symbol: o.symbol,
                            "etfbar-pricezd": a.etfbarPricezd,
                            "hq-web-socket": a.hqWebSocket,
                            scode: s.scode,
                            market: s.market,
                            "stock-type": o.stockType,
                            "formatted-symbol": o.formattedSymbol,
                          }),
                        }
                      : {},
                    { aw: o.stockOverViewNoMargin ? 1 : "" }
                  ),
              { aF: !s.landscape && o.showIndexBar },
              !s.landscape && o.showIndexBar
                ? {
                    aG: p.sr("indexbar", "b1166ab7-7"),
                    aH: p.o(o.changeIndexCode, 1724),
                    aI: p.o(o.showCustomModal, 1725),
                    aJ: p.p({ symbol: o.symbol }),
                  }
                : {},
              { aK: !s.landscape && o.showDelistBar },
              !s.landscape && o.showDelistBar
                ? {
                    aL: p.o(o.showDelistTip, 1726),
                    aM: p.o(o.showCustomModal, 1727),
                    aN: p.p({
                      market: s.market,
                      symbol: o.symbol,
                      "stock-over-view": a.stockOverView,
                    }),
                  }
                : {},
              { aO: a.teachId },
              a.teachId
                ? {
                    aP: p.o(function (t) {
                      return (a.teachId = "");
                    }, 1728),
                    aQ: p.p({
                      skin: s.skin,
                      "teach-id": a.teachId,
                      market: s.market,
                      "stock-type": o.stockType,
                      ltgb: a.stockOverView.ltgb,
                      ltgb_tz: a.stockOverView.ltgb_tz,
                    }),
                  }
                : {},
              { aR: a.zszPopupShow && a.zxsRatioShow },
              a.zszPopupShow && a.zxsRatioShow
                ? {
                    aS: p.o(function (t) {
                      return (a.zszPopupShow = !1);
                    }, 1729),
                    aT: p.p({
                      skin: s.skin,
                      market: s.market,
                      symbol: o.symbol,
                      zsz: a.stockOverView.zsz,
                      xszsz: a.stockOverView.xszsz,
                      hblx: a.stockOverView.hblx,
                      "zxz-ratio": a.zxzRatio,
                      "is-trading": a.isTrading,
                      "is-hidden": s.isHidden,
                      hkVIP: s.hkVIP,
                    }),
                  }
                : {},
              { aU: a.zgbPopupShow },
              a.zgbPopupShow
                ? {
                    aV: p.o(function (t) {
                      return (a.zgbPopupShow = !1);
                    }, 1730),
                    aW: p.p({
                      skin: s.skin,
                      zgb: a.stockOverView.zgb,
                      xszgb: a.stockOverView.xszgb,
                    }),
                  }
                : {},
              { aX: a.showPlateBoard },
              a.showPlateBoard
                ? {
                    aY: p.sr("plateboard", "b1166ab7-12"),
                    aZ: p.o(function (t) {
                      return (a.showPlateBoard = !1);
                    }, 1731),
                    ba: p.p({
                      skin: s.skin,
                      "pre-data": a.plateDataList,
                      symbol: o.symbol,
                      "is-trading": a.isTrading,
                    }),
                  }
                : {},
              { bb: a.showTradeTimeLinePop },
              a.showTradeTimeLinePop
                ? {
                    bc: p.o(function (t) {
                      return (a.showTradeTimeLinePop = !1);
                    }, 1732),
                    bd: p.p({
                      skin: s.skin,
                      market: s.market,
                      "stock-type": o.stockType,
                    }),
                  }
                : {},
              { be: a.showModal },
              a.showModal
                ? {
                    bf: p.o(o.onConfirm, 1733),
                    bg: p.o(o.closeCustomModal, 1734),
                    bh: p.p({
                      skin: s.skin,
                      config: a.modalConfig,
                      isMP: o.isMP,
                    }),
                  }
                : {},
              {
                bi: p.s("height: ".concat(a.showInfoCardBottom, "px")),
                bj: p.o(function () {
                  return (
                    o.handlePopupClick && o.handlePopupClick.apply(o, arguments)
                  );
                }, 1735),
                bk: p.f(a.stockTagMap, function (t, e, s) {
                  return p.e(
                    { a: t.type },
                    t.type
                      ? p.e(
                          {
                            b: p.n("tag ".concat(t.type)),
                            c: p.t(t.mainText),
                            d: p.t(t.subText),
                            e: t.rightText,
                          },
                          t.rightText ? { f: p.t(t.rightText) } : {},
                          { g: t.arrowLink },
                          (t.arrowLink, {})
                        )
                      : {},
                    {
                      h: t.type,
                      i: p.o(
                        function (e) {
                          return o.handleTagClick(t);
                        },
                        1736,
                        t.type
                      ),
                    }
                  );
                }),
                bl: p.o(o.handlePopupClick, 1737),
                bm: p.p({
                  value: a.showInfoCard,
                  "mask-closable": !0,
                  "mask-style": "height: calc(100% - "
                    .concat(a.showInfoCardBottom, "px); margin-top: ")
                    .concat(a.showInfoCardBottom, "px"),
                  "z-index": 110,
                  align: "top",
                }),
                bn: "black" === s.skin ? 1 : "",
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b1166ab7"],
]);
wx.createComponent(b);
var w = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1xdW90YXRpb24vUXVvdGF0aW9uLnZ1ZQ =
  w),
  (exports.teachJson = g);
