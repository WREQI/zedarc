var t = require("../../../../../common/vendor.js"),
  e = t.defineComponent({
    emits: ["toggleRule"],
    setup: function (e, n) {
      var o = n.emit,
        c = t.inject("stockBridge"),
        i = t.computed(function () {
          return "mp" === c.ENV;
        });
      return {
        isMp: i,
        ruleContent: [
          {
            title: "热搜",
            content:
              '显示搜索热度较高的行情标的，按标的热度值降序排序。\n      <img src="https://st.gtimg.com/design/4a22b1f64524e7e0fa8b59993cf3c7cc.png"\n        style="width:19px;height:15px;margin:0 -2px -2px 0;"/>\n      <span style="color:#E63535;font-weight:500;">为短期搜索热度陡增的内容，</span>\n      <img src="https://st.gtimg.com/design/a82631c105b60be56cccfa759b9ec446.png"\n        style="width:19px;height:15px;margin:0 -2px -2px 0;"/>\n      <span style="color:#FF891E;font-weight:500;">为社区用户广泛讨论的内容。</span>\n      所属概念取该标的涨幅最高的所属概念。',
          },
          {
            title: "微信热股",
            content:
              "显示微信搜一搜统计的当日热门搜索标的，按标的热度值降序排序。",
          },
          {
            title: "热文",
            content: "显示热度较高的新闻。新闻按热度降序排列。",
          },
          {
            title: "板块",
            content:
              "显示涨幅较高的行情板块，相关热点事件，和最新涨停股个数。按板块涨跌幅降序排列。",
          },
          { title: "ETF", content: "基于用户平台行为，按照ETF热度降序排列。" },
        ],
        closeRule: function () {
          i.value || (document.body.style.overflow = "auto"),
            o("toggleRule", !1);
        },
      };
    },
  }),
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, c, i, s) {
        return {
          a: t.f(e.ruleContent, function (n, o, c) {
            return t.e(
              { a: t.t(n.title) },
              e.isMp ? { b: n.content } : { c: n.content },
              { d: o }
            );
          }),
          b: e.isMp,
          c: t.o(function () {}, 3013),
          d: t.o(function () {
            return e.closeRule && e.closeRule.apply(e, arguments);
          }, 3014),
        };
      },
    ],
    ["__scopeId", "data-v-d3650acd"],
  ]);
wx.createComponent(n);
