var e = require("../../common/vendor.js"),
  t = getApp().globalData,
  n = {
    data: function () {
      return {
        urlParams: {},
        head: {},
        columns: [],
        currentSlide: 0,
        currentTab: 1,
        loading: !0,
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        ver: "",
        types: [
          { name: "全部", action: 1, visible: "always" },
          { name: "年报", action: 2, type: 0, visible: !0 },
          { name: "中报", action: 3, type: 1, visible: !0 },
          { name: "一季报", action: 4, type: 2, visible: !0 },
          { name: "三季报", action: 5, type: 3, visible: !0 },
        ],
      };
    },
    onShareAppMessage: function () {
      return {
        title: this.urlParams.title,
        path: "pages/stock/report?".concat(
          e.Fns.queryStringify(this.urlParams)
        ),
      };
    },
    onLoad: function (e) {
      var n = this;
      (e.name = decodeURIComponent(e.name)),
        "2" == e.market
          ? "4" == e.type
            ? (e.type = "5")
            : "5" == e.type && (e.type = "4")
          : 3 == +e.market && (this.types[3].name = "单季报"),
        (this.urlParams = e),
        e.action && (this.currentTab = +e.action),
        e.period
          ? this.queryReportData(this.currentTab, e.period)
          : this.queryReportData(this.currentTab),
        t.setSkin(function (e) {
          (n.skin = "black" === e ? "black" : "white"),
            (n.ver = t.getPhoneModel(t.device.model));
        }),
        this.updatePageTitle();
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    methods: {
      updatePageTitle: function () {
        var t,
          n = this.urlParams.type;
        switch (parseInt(n)) {
          case 4:
            t = "2" == this.urlParams.market ? "综合损益表" : "利润表";
            break;
          case 5:
            t = "资产负债表";
            break;
          case 6:
            t = "现金流量表";
        }
        t && e.wx$1.setNavigationBarTitle({ title: t });
      },
      switchCurrentTab: function (e) {
        var t = e.currentTarget.dataset.action;
        (this.currentTab = t), this.queryReportData(t);
      },
      queryReportData: function (e, n) {
        var r = this,
          a = this.urlParams,
          i = a.type,
          o = {
            url: t.CGI_PREFIX + "information.fcgi",
            data: { scode: a.scode, markets: a.market, type: i, action: e },
            success: function (a) {
              if (a && "0" === a.retcode) {
                var o = a.data,
                  u = o.rttype,
                  s = r.types;
                if (
                  ((s = s.map(function (e) {
                    return (
                      "always" !== e.visible &&
                        (e.visible = u.indexOf(e.type.toString()) >= 0),
                      e
                    );
                  })),
                  r.currentTab === e)
                ) {
                  var c = r.formatCompanyFinanceReportData(i, o.data),
                    l = c.shift(),
                    p = c.reduce(function (e, t) {
                      if (1 === t.rank) e.push({ title: t, items: [] });
                      else {
                        var n = e.pop();
                        n || (n = { title: null, items: [] }),
                          n.items.push(t),
                          e.push(n);
                      }
                      return e;
                    }, []);
                  (r.head = l),
                    (r.columns = p),
                    (r.types = s),
                    n && l && l.value && l.value.length
                      ? (r.currentSlide =
                          l.value.findIndex(function (e) {
                            return e === n;
                          }) || 0)
                      : (r.currentSlide = 0),
                    (r.loading = "");
                }
              } else t.showError(a.retmsg, a.retcode);
            },
          };
        t.wx.request(o);
      },
      getReportItemKey: function (e) {
        var t = e[0][0];
        return "其中：对联营企业和合营企业的投资收益" ===
          (t = t.replace(":", "：").replace(/\s+/g, function (e, t) {
            for (var n = e.length, r = ""; n-- > 0; ) r += "　";
            return 0 == t ? r : "";
          }))
          ? "　　对联营企业和合营企业的投资收益"
          : t;
      },
      getCompanyFinanceReportItemRank: function (e, t) {
        return e[0][1]
          ? 4 == e[0][1].font || 3 == e[0][1].font || 2 == e[0][1].font
            ? 2
            : 1
          : 0;
      },
      getCompanyFinanceReportItemValue: function (e, t) {
        var n,
          r,
          a = [];
        for (r = 0; r < t.length && r < 4; r++) (n = t[r]), a.push(n[e][1][0]);
        return a;
      },
      textIsOverflow: function (e) {
        var t = [
          "购建固定资产、无形资产和其他长期资产支付的现金",
          "购建固定资产、无形资产和其他长期资产所支付的现金",
          "四：汇率变动对现金及现金等价物的影响",
        ];
        for (var n in t) if (t[n] === e) return !0;
        return !1;
      },
      formatCompanyFinanceReportData: function (e, t) {
        for (var n, r, a, i = [], o = 0; o < 1; o++) {
          n = t[o];
          for (var u = 0; u < n.length; u++)
            (a = this.getReportItemKey(n[u])),
              (r = {
                rank: this.getCompanyFinanceReportItemRank(n[u], u, e),
                name: a,
                value: this.getCompanyFinanceReportItemValue(u, t),
              }),
              this.textIsOverflow(a) && (r.height = "5rem"),
              i.push(r);
        }
        return i;
      },
      setCurrentSlide: function (e) {
        var t = e.currentTarget.dataset;
        this.currentSlide = t.slide;
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var r = e._export_sfc(n, [
  [
    "render",
    function (t, n, r, a, i, o) {
      return e.e(
        {
          a: t.rootFontSize,
          b: e.p({ "no-auto": !0 }),
          c: t.types && t.types.length > 0 && !t.loading,
        },
        t.types && t.types.length > 0 && !t.loading
          ? e.e(
              { d: t.item.visible },
              t.item.visible
                ? {
                    e: e.f(t.types, function (n, r, a) {
                      return {
                        a: e.t(n.name),
                        b: e.n(n.action === t.currentTab ? "cur" : ""),
                        c: e.o(
                          function () {
                            return (
                              t.switchCurrentTab &&
                              t.switchCurrentTab.apply(t, arguments)
                            );
                          },
                          365,
                          n.name
                        ),
                        d: n.action,
                        e: n.name,
                      };
                    }),
                  }
                : {}
            )
          : {},
        {
          f: e.t(t.urlParams.name),
          g: e.f(t.columns, function (t, n, r) {
            return e.e(
              { a: t.title },
              t.title ? { b: e.t(t.title.name) } : {},
              {
                c: e.f(t.items, function (t, n, r) {
                  return { a: e.t(t.name), b: n };
                }),
                d: e.n(0 === n ? "report-section-first" : ""),
                e: n,
              }
            );
          }),
          h: e.t(t.urlParams.name),
          i: e.f(t.head.value, function (n, r, a) {
            return e.e(
              t.head.value.length && t.currentSlide > 0
                ? {
                    a: e.o(
                      function () {
                        return (
                          t.setCurrentSlide &&
                          t.setCurrentSlide.apply(t, arguments)
                        );
                      },
                      366,
                      r
                    ),
                    b: r - 1,
                  }
                : {},
              { c: e.t(n) },
              t.head.value.length && t.head.value.length - 1 > t.currentSlide
                ? {
                    d: e.o(
                      function () {
                        return (
                          t.setCurrentSlide &&
                          t.setCurrentSlide.apply(t, arguments)
                        );
                      },
                      367,
                      r
                    ),
                    e: r + 1,
                  }
                : {},
              { f: r }
            );
          }),
          j: t.head.value.length && t.currentSlide > 0,
          k: t.head.value.length && t.head.value.length - 1 > t.currentSlide,
          l: e.f(t.columns, function (t, n, r) {
            return e.e(
              { a: t.title },
              t.title
                ? {
                    b: e.t(t.title.name),
                    c: e.f(t.title && t.title.value, function (t, n, r) {
                      return { a: e.t(t), b: n };
                    }),
                  }
                : {},
              {
                d: e.f(t.items, function (t, n, r) {
                  return {
                    a: e.t(t.name),
                    b: e.f(t.value, function (t, n, r) {
                      return { a: e.t(t), b: n };
                    }),
                    c: n,
                  };
                }),
                e: e.n(0 === n ? "report-section-first" : ""),
                f: n,
              }
            );
          }),
          m: e.n("slide-" + t.currentSlide),
          n: e.n("skin-" + t.skin),
          o: e.n(t.ver),
        }
      );
    },
  ],
  ["__scopeId", "data-v-301b0a2b"],
]);
wx.createPage(r);
