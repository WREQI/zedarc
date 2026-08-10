require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-hq-data/index.js"),
  i = [
    { text: "不复权", value: 3 },
    { text: "前复权", value: 1 },
    { text: "后复权", value: 2 },
  ],
  c = [
    {
      text: "筹码分布",
      type: "cmfb",
      enable: !0,
      value: 0,
      iconActive:
        "https://st.gtimg.com/design/b9082011ddbefcc52a3454625362b6e1.png",
      iconWhite:
        "https://st.gtimg.com/design/8604183e415657f28ac8092114441a94.png",
      iconBlack:
        "https://st.gtimg.com/design/f74129353d4531527265a3f2a8ee6e70.png",
    },
    {
      text: "趋势线",
      type: "trendLine",
      value: 1,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/ec833d2019faf0f78de8ba652b74d337.png",
      iconWhite:
        "https://st.gtimg.com/design/ff43ed9f796a101b32c91f9736d9d4b4.png",
      iconBlack:
        "https://st.gtimg.com/design/8991e4e683747a1249dd0e9fd9374c5c.png",
    },
    {
      text: "支撑压力位",
      type: "supportPressureLine",
      enable: !0,
      value: 2,
      iconActive:
        "https://st.gtimg.com/design/58fd56e80f9daf0e285624e11a796af9.png",
      iconWhite:
        "https://st.gtimg.com/design/41bcbd5f94f3f33ce07fcceeb901219c.png",
      iconBlack:
        "https://st.gtimg.com/design/f6a0f7c6c3666a241a82ec4bb887ff18.png",
    },
    {
      text: "画线工具",
      type: "draw",
      value: 3,
      enable: !1,
      iconActive:
        "https://st.gtimg.com/design/7c72ef4a773b42c2f69711a9dfd8863d.png",
      iconWhite:
        "https://st.gtimg.com/design/2aae0f13b2e49cb368a36f56345e793d.png",
      iconBlack:
        "https://st.gtimg.com/design/985c710d037ad60a7e7f4ca6d0237dda.png",
    },
    {
      text: "区间统计",
      type: "areaSelect",
      value: 4,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/1a3e063d9af8867c5d97d3061dd33036.png",
      iconWhite:
        "https://st.gtimg.com/design/23b8d9420aed91535fa6fe9f834b7b5c.png",
      iconBlack:
        "https://st.gtimg.com/design/9c563a5c5382b41126d53a34aff43fcc.png",
    },
    {
      text: "神奇九转",
      type: "magicNine",
      value: 2,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/d3f495c74ed38215fa67cac08f46ca08.png",
      iconWhite:
        "https://st.gtimg.com/design/740a2cf686ceec853e03d316583d41a2.png",
      iconBlack:
        "https://st.gtimg.com/design/9819041249f96c79585e9a5ed3874db1.png",
    },
    {
      text: "操盘线",
      type: "tradeLine",
      value: 2,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/7872dbdcf83dd5257d18643c8785dfe4.png",
      iconActiveBlack:
        "https://st.gtimg.com/design/6844de8d3edff719046fbc93627faf18.png",
      iconWhite:
        "https://st.gtimg.com/design/c715780d1e0b4578d7192b3b31f3ef61.png",
      iconBlack:
        "https://st.gtimg.com/design/c15b6bf56d6066b64017eddd645261f8.png",
    },
    {
      text: "择时秘技",
      type: "tradeSecret",
      value: 2,
      enable: !1,
      iconActive:
        "https://st.gtimg.com/design/7872dbdcf83dd5257d18643c8785dfe4.png",
      iconWhite:
        "https://st.gtimg.com/design/c715780d1e0b4578d7192b3b31f3ef61.png",
      iconBlack:
        "https://st.gtimg.com/design/c15b6bf56d6066b64017eddd645261f8.png",
    },
    {
      text: "券商分析",
      type: "aiVolatile",
      value: 5,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/b0b1993d1245a86d79e97c649b9aaed7.png",
      iconWhite:
        "https://st.gtimg.com/design/bee6907b12c774a68231645555a0cbec.png",
      iconBlack:
        "https://st.gtimg.com/design/bee6907b12c774a68231645555a0cbec.png",
    },
    {
      text: "撑压信号",
      type: "supportPressureSignal",
      value: 6,
      enable: !0,
      iconActive:
        "https://st.gtimg.com/design/aec165f68057331c453a5b22531e6f0f.png",
      iconWhite:
        "https://st.gtimg.com/design/a50d885445c3a100f6329450cfe8cfdc.png",
      iconBlack:
        "https://st.gtimg.com/design/a50d885445c3a100f6329450cfe8cfdc.png",
    },
  ],
  n = e.defineComponent({
    name: "KlineSetting",
    props: {
      skin: { type: String, default: "white" },
      market: [String, Number],
      isSupportChip: Boolean,
      isAccountOpen: Boolean,
      canShowAiVolatile: { type: Boolean, default: !1 },
      canShowSupportPressureSignal: { type: Boolean, default: !1 },
      klineSetData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["change"],
    setup: function (n, a) {
      var s = a.emit,
        g = e.ref(i),
        d = JSON.parse(
          JSON.stringify(
            c.filter(function (e) {
              return e.enable;
            })
          )
        ),
        o = e.ref(d),
        p = ["black", "dark"].includes(n.skin);
      return (
        e.onMounted(function () {
          (o.value = o.value.filter(function (e) {
            switch (e.type) {
              case "cmfb":
                (e.enable = n.isSupportChip),
                  (e.isActive = n.klineSetData.cmfbChecked);
                break;
              case "trendLine":
                e.isActive = n.klineSetData.trendLineChecked;
                break;
              case "supportPressureLine":
                e.isActive = n.klineSetData.supportPressureChecked;
                break;
              case "draw":
                e.isActive = n.klineSetData.drawChecked;
                break;
              case "areaSelect":
                e.isActive = n.klineSetData.areaSelectChecked;
                break;
              case "magicNine":
                (e.enable = n.isAccountOpen),
                  (e.isActive = n.klineSetData.magicNineChecked);
                break;
              case "tradeLine":
                (e.isActive = n.klineSetData.tradeLineChecked),
                  (e.enable =
                    n.isAccountOpen && n.klineSetData.supportTradeLine);
                break;
              case "aiVolatile":
                (e.isActive = !1), (e.enable = n.canShowAiVolatile);
                break;
              case "supportPressureSignal":
                (e.isActive = !1), (e.enable = n.canShowSupportPressureSignal);
            }
            return e.enable;
          })),
            t.utils.isUSMarket(n.market) &&
              (g.value = g.value.filter(function (e) {
                return 2 !== e.value;
              }));
        }),
        {
          isBlack: p,
          fqTypes: g,
          switchTypes: o,
          changefq: function (e) {
            s("change", { type: "fq", value: e });
          },
          changeSwitchSet: function (e) {
            if (
              ((o.value = o.value.map(function (t) {
                return t.type === e && (t.isActive = !t.isActive), t;
              })),
              "aiVolatile" === e || "supportPressureSignal" === e)
            ) {
              var t = o.value.find(function (t) {
                return t.type === e;
              });
              setTimeout(function () {
                t && (t.isActive = !1);
              }, 800);
            }
            s("change", { type: e });
          },
          jumpIndicatorSetting: function (e) {
            s("jumpIndicatorSetting", e);
          },
        }
      );
    },
  }),
  a = e._export_sfc(n, [
    [
      "render",
      function (t, i, c, n, a, s) {
        return {
          a: e.f(t.switchTypes, function (i, c, n) {
            return {
              a: i.isActive
                ? (t.isBlack && i.iconActiveBlack) || i.iconActive
                : t.isBlack
                ? i.iconBlack
                : i.iconWhite,
              b: e.t(i.text),
              c: c,
              d: e.n(i.isActive && "gt-active"),
              e: e.o(
                function (e) {
                  return t.changeSwitchSet(i.type);
                },
                4392,
                c
              ),
            };
          }),
          b: e.f(t.fqTypes, function (i, c, n) {
            return {
              a: e.t(i.text),
              b: i.value,
              c: e.n(t.klineSetData.fq === i.value && "active"),
              d: e.o(
                function (e) {
                  return t.changefq(i.value);
                },
                4393,
                i.value
              ),
            };
          }),
          c: e.o(function (e) {
            return t.jumpIndicatorSetting("kline");
          }, 4394),
          d: e.o(function (e) {
            return t.jumpIndicatorSetting("indicator");
          }, 4395),
          e: t.isBlack ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-4bd93b27"],
  ]);
wx.createComponent(a);
