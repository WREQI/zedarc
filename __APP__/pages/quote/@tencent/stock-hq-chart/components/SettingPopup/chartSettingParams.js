var t = require("../../../../../../common/vendor.js"),
  e = require("../constants.js"),
  i = {
    macd: [
      {
        type: "text",
        text: "DIFF: 收盘价短期与长期平滑移动平均值的差",
        rect: "#CCB714",
      },
      {
        type: "option",
        key: "short",
        left: { width: "25%", title: "短期 (日)" },
        min: 5,
        max: 40,
        default: 12,
      },
      { type: "line" },
      {
        type: "option",
        key: "long",
        left: { width: "25%", title: "长期 (日)" },
        min: 10,
        max: 100,
        default: 26,
      },
      { type: "line" },
      { type: "text", text: "DEA: DIFF的M日平滑移动平均值", rect: "#0C9FF5" },
      {
        type: "option",
        key: "m",
        left: { width: "25%", title: "M (日)" },
        min: 2,
        max: 40,
        default: 9,
      },
      { type: "line" },
      {
        type: "text",
        text: "MACD: 2倍的 (DIFF-DEA)",
        rect: "#E63535",
        rect2: "#1CAA3C",
      },
    ],
    dmi: [
      {
        type: "option",
        key: "n",
        left: {
          width: "30%",
          block: [
            { title: "PDI", color: "#98A0B3", bgColor: "#F5F6FA" },
            {
              title: "MDI",
              color: "#CCB714",
              bgColor: "rgba(204,183,20,0.08)",
            },
          ],
        },
        min: 1,
        max: 300,
        default: 14,
      },
      { type: "line" },
      {
        type: "option",
        key: "m",
        left: {
          width: "30%",
          block: [
            {
              title: "ADX",
              color: "#CC2FA4",
              bgColor: "rgba(204,47,164,0.08)",
            },
            {
              title: "ADXR",
              color: "#0C9FF5",
              bgColor: "rgba(12,159,245,0.08)",
            },
          ],
        },
        min: 1,
        max: 300,
        default: 6,
      },
    ],
    cci: [
      {
        type: "option",
        key: "n",
        left: {
          width: "30%",
          block: [
            {
              title: "CCI",
              color: "#CCB714",
              bgColor: "rgba(204,183,20,0.08)",
            },
          ],
        },
        min: 2,
        max: 100,
        default: 14,
      },
    ],
    wr: [
      {
        type: "formula",
        left: "WR",
        top: "N日最高价 - 收盘价",
        bottom: "N日最高价 - N日最低价",
      },
      {
        type: "option",
        key: "n1",
        left: {
          width: "30%",
          block: [
            {
              title: "WR1",
              color: "#CCB714",
              bgColor: "rgba(204,183,20,0.08)",
            },
          ],
          title: "N1",
        },
        min: 2,
        max: 100,
        default: 10,
      },
      { type: "line" },
      {
        type: "option",
        key: "n2",
        left: {
          width: "30%",
          block: [
            {
              title: "WR2",
              color: "#0C9FF5",
              bgColor: "rgba(12,159,245,0.08)",
            },
          ],
          title: "N2",
        },
        min: 2,
        max: 100,
        default: 6,
      },
    ],
    boll: [
      {
        type: "option",
        key: "deviation",
        left: { width: "25%", title: "标准差 (日)" },
        min: 5,
        max: 300,
        default: 20,
      },
      { type: "line" },
      {
        type: "option",
        key: "width",
        left: { width: "25%", title: "宽度 (日)" },
        min: 1,
        max: 10,
        default: 2,
      },
    ],
    kdj: [
      {
        type: "formula",
        left: "随机指数RSV",
        top: "收盘价 - 最近N1日最低价",
        bottom: "最近N1日最高价 - 最近N1日最低价",
      },
      {
        type: "option",
        key: "n1",
        left: { width: "auto", title: "N1" },
        min: 1,
        max: 100,
        default: 9,
      },
      { type: "line" },
      {
        type: "text",
        text: "K: 快速移动平均线，N2日随机指数RSV的移动平均值",
        rect: "#CCB714",
      },
      {
        type: "option",
        key: "n2",
        left: { width: "auto", title: "N2" },
        min: 2,
        max: 40,
        default: 3,
      },
      { type: "line" },
      {
        type: "text",
        text: "D: 慢速移动平均线，N3日快速平均K的移动平均值",
        rect: "#0C9FF5",
      },
      {
        type: "option",
        key: "n3",
        left: { width: "auto", title: "N3" },
        min: 2,
        max: 40,
        default: 3,
      },
      { type: "line" },
      { type: "text", text: "J = 3K-2D，3倍的K值减2倍的D值", rect: "#CC2FA4" },
    ],
    rsi: [
      {
        type: "formula",
        left: "RSI",
        top: "移动平均 (N日涨幅)",
        bottom: "移动平均 (N日涨跌幅绝对值)",
      },
      {
        type: "option",
        key: "n1",
        left: {
          width: "27.5%",
          block: [
            {
              title: "RSI1",
              color: "#CCB714",
              bgColor: "rgba(204,183,20,0.08)",
            },
          ],
          title: "N1",
        },
        min: 2,
        max: 100,
        default: 6,
      },
      { type: "line" },
      {
        type: "option",
        key: "n2",
        left: {
          width: "27.5%",
          block: [
            {
              title: "RSI2",
              color: "#0C9FF5",
              bgColor: "rgba(12,159,245,0.08)",
            },
          ],
          title: "N2",
        },
        min: 2,
        max: 100,
        default: 12,
      },
      { type: "line" },
      {
        type: "option",
        key: "n3",
        left: {
          width: "27.5%",
          block: [
            {
              title: "RSI3",
              color: "#CC2FA4",
              bgColor: "rgba(204,47,164,0.08)",
            },
          ],
          title: "N3",
        },
        min: 2,
        max: 100,
        default: 24,
      },
    ],
  },
  o = {
    macd: {
      brief:
        "MACD（指数移动平均线），是利用短期指数移动平均线和长期指数移动平均线之前的离散、聚合来判断当前股价的多空趋势，适用于股市的偏中长线的走势分析，是目前股市中最常使用的技术指标之一。",
      detail: [
        "1.金叉/死叉：当DIFF上穿DEA为金叉，DIFF下穿DEA为死叉，在0轴上方的多头行情下，金叉的成功概率更大。",
        "2.顶/底背离：当股价创新高的时候，DIFF、DEA线并没有一起创新高，这种情况为macd顶背离；反之股价创新低，DIFF、DEA未创新低为底背离，在实际使用过程中，顶背离比底背离准确性更高。",
        "3.红绿柱：红柱持续放大表明市场处于多头行情，柱子的高低代表了上涨的动力；反之绿柱放大代表空头行情。",
        "4.多空趋势：DIFF、DEA两条曲线在0轴上方时，表示当前处于多头趋势；反之两条线在0轴下方表明在空头占优。",
      ],
    },
    dmi: {
      brief:
        "DMI（趋向指标），属于趋势判断型技术指标，主要是通过分析股价在上涨和下跌的过程中供需关系的均衡点，即股价的涨跌会导致买方力量和卖方力量发生均衡到向一方倾斜现象，以此来进行中长期趋势判断。",
      detail: [
        "1.单边行情：当股价朝着一个方向形成趋势性行情时，无论是单边上涨还是下跌，如果ADX线的数值持续变大，表明仍能维持现在的趋势。",
        "2.震荡行情：当PDI和MDI两条曲线逐渐靠近，且出现反复交叉，ADX线也在下降或走平，表明当前处于震荡行情，无明显趋势。",
        "3.趋势反转：当ADX线处于高位出现滞涨或者下降时，表明原有趋势可能出现反转，若出现背离反转的概率更大。",
      ],
    },
    cci: {
      brief:
        "CCI（顺势指标），是根据统计学原理，引进价格和周期内股价平均区间的偏离程度的概念，强调股价平均绝对偏差在股市技术分析中的重要性，专门衡量股价是否超出常态分布范围，属于超买超卖类指标。",
      detail: [
        "1.当CCI>+100时，表明股价进入非常态化的超买区间，股价进入中短期的强势波动阶段，如果同时成交量有配合放大，趋势更准确。",
        "2.当CCI<﹣100时，表明股价进入非常态化的超卖区间，股价从一个盘整区间，进入一个比较长的寻底过程。",
        "3.当CCI指标在（-100，+100）时，表明股价在常态区间运行，投资者则可以用KDJ、WR等其他超买超卖指标结合使用。",
      ],
    },
    wr: {
      brief:
        "WR（威廉超买超卖指标），主要用于研究股价的波动，通过分析股价波动变化中的峰和谷来做决策，利用摆动点来度量市场的超买超卖现象，找出其有效信号，是分析市场短期行情走势的技术指标。",
      detail: [
        "1.当WR<20时，表明短期上涨较多，股价进入超买区间。",
        "2.当WR>80时，表明股价下跌后处于近期底部，进入超卖区间。",
        "3.WR在震荡行情中，指标的参考意义更大，在强势上涨或下跌的过程中，指标可能会出现钝化。",
      ],
    },
    boll: {
      brief:
        "BOLL（布林线），是股市技术分析的常用工具之一，通过计算股价的“标准差”，再求股价的“信赖区间”，绘制三条轨道线。",
      detail: [
        "1.当布林线的三条曲线同时向上运行时，表明股价处于上涨周期当中，且趋势保持良好；反之三线同时向下运行，表明下跌周期。",
        "2.当上涨过程中，股价下跌到中轨和下轨，下跌会受到支撑；当下跌过程中，股价短期反弹到中轨和上轨，上涨会受到阻力。",
        "3.股价短期的快速上涨或下跌，会出现股价超出布林线上轨和下轨的情况，此时要结合其他指标共同分析。",
      ],
    },
    kdj: {
      brief:
        "KDJ（随机指标），是以最高价、最低价及收盘价为基础数据进行计算，同时也融合了动量观念、强弱指标和移动平均线的一些优点，适用于股市的中短期走势分析，是目前股市中最常使用的技术指标之一。",
      detail: [
        "1.金叉/死叉：K、J线由下向上交叉D线为KDJ金叉，K、J线由上向下交叉D线为KDJ死叉。",
        "2.超买/超卖：D值大于80，J大于100属于超买状态，股价容易出现回落；D小于20，J小于0属于超卖状态，股价容易产生反弹。",
        "3.KDJ在高位连续出现两次向下死叉，或者在低位连续出现两次向上金叉，对走势的判断可靠性更高。",
      ],
    },
    obv: {
      brief:
        "OBV（能量潮指标），主要研究成交量变化与股价涨跌的关系，来推测市场的人气和多空双方的力量，股价的变化必须有成交量的配合。",
      detail: [
        "1.若股价持续上涨，而OBV不能配合一起上涨，表明股价和量能的配合出现了背离，可能趋势无法持续。",
        "2.同理股价下跌时，OBV却逐渐上升，表明买方能力大于卖方，股价可能会出现止跌回升。",
        "3.若股票主力控盘程度比较高时，也会出现股价上涨，成交量不会放大的情况，此时指标可能会失效，投资者要灵活使用。",
      ],
    },
    rsi: {
      brief:
        "RSI（相对强弱指标），是根据一定周期内股价上涨幅度和波动总幅度的比率，来判断近期股票价格走势强弱，反应一定周期内该股的景气程度，推测价格未来的变动方向。",
      detail: [
        "1.RSI通常在40-60之间徘徊，当RSI大于60表示该股处于强势周期，当RISI小于40表示该股处于弱势周期。",
        "2.当短周期RSI在低位向上金叉长期RSI线时，表示该股出现由弱势周期慢慢转强的迹象。",
        "3.当短周期RSI在高位向下死叉长期RSI线时，表示该股出现由强势周期慢慢转弱的迹象。",
        "4.如果股价继续创新高的时点，RSI并没有跟着一起出现新高，此时出现了顶背离形态，表明强势难以持续。反之为底背离。",
      ],
    },
    sar: {
      brief:
        "SAR（抛物线转向），也称停损点转向，是利用抛物线方式，随时调整停损点位置以做出操作判断，SAR由红绿点呈现，相对比较简单、明确。",
      detail: [
        "1.股价在SAR曲线上方时，SAR显示为红点，表明当前股价处于多头市场，买方的力量大于卖方。",
        "2.股价在SAR曲线下方时，SAR显示为绿点，表明当前股价处于空头市场，卖方的力量大于买方。",
        "3.当行情处于横盘震荡区间，SAR会出现红绿快速交替变化的情况，指标失误率高，效果较差。",
      ],
    },
  },
  n = {
    props: { type: { type: String, default: "macd" } },
    components: {
      SliderBar: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
      },
    },
    data: function () {
      return {
        items: i,
        intro: o,
        setting: Object.assign({}, e.DEFAULT_SETTING),
      };
    },
    created: function () {
      (this.isMP = t.StockBridge.ENV === t.EnvTypeEnum.MP),
        t.StockBridge.setTitle({ title: this.type.toUpperCase() });
      var i = t.StockBridge.getStorage(e.CHART_SETTING) || {};
      i && "string" == typeof i && (i = JSON.parse(i)),
        Object.assign(this.setting, i);
    },
    mounted: function () {
      this.isMP || window.scrollTo(0, 0);
    },
    methods: {
      sliderChange: function (t, e) {
        var i = this;
        (this.setting["".concat(this.type, "Params")][e.key] = t),
          this.sliderTimer && clearTimeout(this.sliderTimer),
          (this.sliderTimer = setTimeout(function () {
            i.changeValue();
          }, 500));
      },
      judgeValue: function (t, e, i) {
        var o = +t.target.value,
          n = this.setting["".concat(this.type, "Params")][e];
        this.setting["".concat(this.type, "Params")][e] = o;
        var a = this.items[this.type][i],
          l = a.min,
          r = a.max;
        Object.prototype.hasOwnProperty.call(t.detail, "data")
          ? null !== t.data
            ? o < l || o > r || isNaN(o)
              ? (o = n)
              : o >= l && this.changeValue()
            : o <= r && o >= l && this.changeValue()
          : o < l || o > r || isNaN(o)
          ? (this.setting["".concat(this.type, "Params")][e] = n)
          : o <= r && o >= l && this.changeValue();
      },
      judgeValueAgain: function (t, e, i) {
        var o = this,
          n = t.target.value,
          a = this.setting["".concat(this.type, "Params")][e];
        this.setting["".concat(this.type, "Params")][e] = n;
        var l = this.items[this.type][i],
          r = l.min,
          c = l.max;
        (n = n < r || n > c ? a : +n),
          setTimeout(function () {
            o.setting["".concat(o.type, "Params")][e] = n;
          }, 0);
      },
      changeValue: function () {
        t.StockBridge.setStorage(e.CHART_SETTING, this.setting),
          t.StockBridge.busEmit("market-chartSetting-Update", {
            key: "".concat(this.type, "Types"),
            setting: this.setting,
          });
      },
      resetDefault: function () {
        var t = this,
          e = function (e) {
            var i = t.items[t.type].findIndex(function (t) {
              return t.key === e;
            });
            t.setting["".concat(t.type, "Params")][e] =
              t.items[t.type][i].default;
          };
        for (var i in this.setting["".concat(this.type, "Params")]) e(i);
        this.changeValue();
      },
    },
  };
Array || t.resolveComponent("slider-bar")();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, i, o, n, a, l) {
      return t.e(
        { a: a.items[o.type] },
        a.items[o.type]
          ? {
              b: t.f(a.items[o.type], function (e, i, n) {
                return t.e(
                  { a: "text" === e.type },
                  "text" === e.type
                    ? t.e(
                        { b: e.rect && e.rect2 },
                        e.rect && e.rect2
                          ? { c: e.rect, d: e.rect2 }
                          : e.rect
                          ? { f: e.rect }
                          : {},
                        { e: e.rect, g: t.t(e.text) }
                      )
                    : "formula" === e.type
                    ? { i: t.t(e.left), j: t.t(e.top), k: t.t(e.bottom) }
                    : "option" === e.type
                    ? t.e(
                        { m: e.left },
                        e.left
                          ? t.e(
                              {
                                n: t.f(e.left.block, function (e, i, o) {
                                  return {
                                    a: e.color,
                                    b: t.t(e.title),
                                    c: e.color,
                                    d: i > 0 ? 1 : "",
                                    e: e.bgColor,
                                    f: e.title,
                                  };
                                }),
                                o: e.left.title,
                              },
                              e.left.title
                                ? {
                                    p: t.t(e.left.title),
                                    q: e.left.block ? 1 : "",
                                  }
                                : {},
                              { r: e.left.width }
                            )
                          : {},
                        {
                          s: e.default,
                          t: a.setting["".concat(o.type, "Params")][e.key],
                          v: t.o(
                            function (t) {
                              return l.judgeValue(t, e.key, i);
                            },
                            501,
                            i
                          ),
                          w: t.o(
                            function (t) {
                              return l.judgeValueAgain(t, e.key, i);
                            },
                            502,
                            i
                          ),
                          x: t.o(
                            function (t) {
                              return l.sliderChange(t, e);
                            },
                            503,
                            i
                          ),
                          y: "bfc7e934-0-" + n,
                          z: t.p({
                            value:
                              a.setting["".concat(o.type, "Params")][e.key],
                            max: e.max,
                            min: e.min,
                            width: 180,
                            showOperator: !1,
                          }),
                        }
                      )
                    : {},
                  {
                    h: "formula" === e.type,
                    l: "option" === e.type,
                    A: i,
                    B: t.n(e.type + "-item-content"),
                  }
                );
              }),
              c: t.o(function (t) {
                return l.resetDefault();
              }, 504),
            }
          : {},
        { d: a.intro && a.intro[o.type] },
        a.intro && a.intro[o.type]
          ? t.e(
              { e: t.t(a.intro[o.type].brief), f: "macd" === o.type },
              "macd" === o.type
                ? {
                    g: t.t(a.intro.macd.detail[0]),
                    h: t.t(a.intro.macd.detail[1]),
                    i: t.t(a.intro.macd.detail[2]),
                    j: t.t(a.intro.macd.detail[3]),
                  }
                : {
                    k: t.f(a.intro[o.type].detail, function (e, i, o) {
                      return { a: t.t(e), b: i };
                    }),
                  }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-bfc7e934"],
]);
wx.createComponent(a);
