var t = require("../../../../Index.js"),
  i = require("../../../../../../../../common/vendor.js"),
  n = {
    inject: {
      hqBridge: { default: function () {} },
      isAccountOpen: {
        default: function () {
          return !1;
        },
      },
      isZhongJinCaiFu: {
        default: function () {
          return !1;
        },
      },
    },
    props: { userInfo: { type: Object, default: function () {} } },
    data: function () {
      return {
        infoList: [],
        isDataReady: !1,
        isHasDaxin: !0,
        buttonText: "",
        type: "",
        routeTimer: null,
        from: "",
      };
    },
    computed: {
      isWzq: function () {
        return !1;
      },
    },
    created: function () {
      this.getData();
    },
    beforeDestroy: function () {
      clearTimeout(this.routeTimer);
    },
    methods: {
      gotoDetail: function (n, e) {
        var a = "".concat(n, "?").concat(t.concatParam(e));
        this.isWzq
          ? this.hqBridge.routeTo({ path: a })
          : i.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#".concat(a)
            );
      },
      getData: function () {
        var i = this;
        Promise.all([
          t.HqAPI.getHSNewStock(this.hqBridge),
          t.HqAPI.getHSNewBond(this.hqBridge),
        ])
          .then(function (t) {
            (i.loading = !1), (i.isDataReady = !0), i.handleData(t);
          })
          .catch(function (t) {});
      },
      handleData: function (t) {
        var i,
          n,
          e,
          a,
          o,
          s,
          h = [],
          u = (null == (i = null == t ? void 0 : t[0]) ? void 0 : i.data) || {},
          r = u.sgrq,
          d = u.jjfx,
          c = (null == r ? void 0 : r.length) || 0,
          l =
            (null == (n = null == r ? void 0 : r[0]) ? void 0 : n.name) || "--",
          p = (null == d ? void 0 : d.length) || 0,
          g =
            (null == (e = null == d ? void 0 : d[0]) ? void 0 : e.name) || "--",
          f = (null == (a = null == t ? void 0 : t[1]) ? void 0 : a.data) || {},
          m = f.jrsg,
          v = f.jjfx,
          y = (null == m ? void 0 : m.length) || 0,
          q =
            (null == (o = null == m ? void 0 : m[0]) ? void 0 : o.name) || "--",
          x = (null == v ? void 0 : v.length) || 0,
          _ =
            (null == (s = null == v ? void 0 : v[0]) ? void 0 : s.name) || "--";
        return 0 !== c || 0 !== y
          ? (c &&
              h.push({
                type: "stock",
                num: c,
                name: "新股".concat(this.getName(c, l)),
              }),
            y &&
              h.push({
                type: "bond",
                num: y,
                name: "新债".concat(c ? "" : this.getName(y, q)),
              }),
            (this.infoList = h),
            void this.setButtonText("yijian"))
          : 0 !== p || 0 !== x
          ? (p &&
              h.push({
                type: "stock",
                num: p,
                name: "新股".concat(this.getName(p, g)),
              }),
            x &&
              h.push({
                type: "bond",
                num: x,
                name: "新债".concat(p ? "" : this.getName(x, _)),
              }),
            (this.infoList = h),
            void this.setButtonText(
              this.isZhongJinCaiFu ? "nodata" : "booking"
            ))
          : ((this.isHasDaxin = !1), void (this.type = "nodata"));
      },
      getName: function (t, i) {
        return 0 === t ? "今日暂无" : "(".concat(i, 1 === t ? ")" : ")等");
      },
      setButtonText: function (t) {
        if (!this.isAccountOpen)
          return (this.buttonText = "开户打新"), void (this.type = "apply");
        (this.type = t),
          (this.buttonText = "yijian" === t ? "一键打新" : "预约打新"),
          "nodata" === this.type && (this.isHasDaxin = !1);
      },
      navigateToDaxinDetail: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "stock",
          i = { type: t, market: "hs", timestamp: Date.now() };
        this.gotoDetail("/hangqingxinzhai", i),
          this.hqBridge.report("hq.choose_hq.click_xingurili_hs", {
            from: this.type,
          });
      },
      handleNavigateToTrade: function () {
        this.isWzq
          ? this.hqBridge.routeTo({
              name: "NewStockToday",
              query: { purchase_type: 2, stat_data: "Iaj57p007s020" },
            })
          : this.hqBridge.busEmit("navigateToTrade");
      },
      handleNavigateToBooking: function () {
        this.isWzq
          ? this.hqBridge.routeTo({
              name: "NewStockToday",
              query: { tab: 1, stat_data: "Iaj57p007s020" },
            })
          : this.hqBridge.busEmit("navigateToTrade");
      },
      handleNavigateToApplyIndex: function () {
        var t = "Iaj57p007s020";
        this.isWzq
          ? i.StockRouter.routeTo({
              name: "ApplyIndex",
              query: { stat_data: t },
            })
          : this.hqBridge.busEmit("navigateToApplyIndex", { stat: t });
      },
      buttonClick: function () {
        var t = "Iaj57p007s020";
        if (this.isAccountOpen) {
          if ("yijian" === this.type)
            return (
              this.handleNavigateToTrade(),
              void this.hqBridge.report("hq.choose_hq.click_hs_yijiandaxin", {
                fchannel_id_fm_i: t,
              })
            );
          if ("booking" === this.type)
            return (
              this.handleNavigateToBooking(),
              void this.hqBridge.report(
                "hq.choose_hq.daxin_calendar_booking_daxin_click",
                { fchannel_id_fm_i: t }
              )
            );
        }
        this.handleNavigateToApplyIndex(),
          this.hqBridge.report(
            "hq.choose_hq.daxin_calendar_apply_daxin_click",
            { fchannel_id_fm_i: t }
          );
      },
    },
  },
  e = i._export_sfc(n, [
    [
      "render",
      function (t, n, e, a, o, s) {
        return i.e(
          { a: o.isDataReady },
          o.isDataReady
            ? i.e(
                { b: o.isHasDaxin },
                o.isHasDaxin
                  ? {
                      c: i.f(o.infoList, function (t, n, e) {
                        return {
                          a: i.t(t.name),
                          b: i.t(t.num),
                          c: n,
                          d: i.o(
                            function (i) {
                              return s.navigateToDaxinDetail(t.type);
                            },
                            4961,
                            n
                          ),
                        };
                      }),
                      d: i.n(o.infoList.length > 1 ? "hasSplit" : ""),
                      e: i.t(o.buttonText),
                      f: i.o(function () {
                        return (
                          s.buttonClick && s.buttonClick.apply(s, arguments)
                        );
                      }, 4962),
                    }
                  : {},
                {
                  g: i.o(function (t) {
                    return s.navigateToDaxinDetail();
                  }, 4963),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b5a8c52a"],
  ]);
wx.createComponent(e);
