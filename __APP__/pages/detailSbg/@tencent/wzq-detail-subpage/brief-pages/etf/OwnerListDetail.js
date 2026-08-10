var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../stock-markets-base/utils/market.js"),
  a = require("../api/index.js"),
  n = require("../../../../../../common/vendor.js"),
  r = {
    components: {
      SelectPlate: function () {
        return "../../../wzq-detail-finance/components/SelectPlate.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      symbol: { type: String, default: "" },
      reportIndex: { type: Number, default: "" },
    },
    data: function () {
      return {
        data: {},
        tabList: {},
        currentId: 0,
        showTabPlate: !1,
        curTabName: "",
      };
    },
    computed: {
      isMini: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isApp: function () {
        return "app" === this.hqBridge.ENV;
      },
      isSpecialPlatform: function () {
        return this.isWzq || this.isApp;
      },
    },
    watch: {
      reportIndex: function (t) {
        if ("" !== t) {
          var e = this.tabList.find(function (e) {
            return +e.id === t;
          });
          e &&
            ((this.currentId = t), (this.curTabName = e.name), this.getData()),
            this.isSpecialPlatform &&
              this.hqBridge.report("hq.stock_detail.etf_owner.date_change");
        }
      },
    },
    created: function () {
      this.getData();
    },
    mounted: function () {
      this.hqBridge.report("hq.stock_detail.etf_owner_brow");
    },
    methods: {
      changeTab: function (t, e, a) {
        var n = this.tabList.find(function (e) {
          return +e.id === t;
        });
        n &&
          ((this.currentId = n.id), (this.curTabName = n.name), this.getData()),
          this.hqBridge.report("hq.stock_detail.etf_owner.date_change");
      },
      showSelectPlate: function (t) {
        var e = this;
        this.isMini
          ? ((this.showTabPlate = !0),
            this.$nextTick(function () {
              e.$refs.selectPlate && e.$refs.selectPlate.onPopupMore();
            }))
          : this.$emit("showCommonPopup", {
              data: this.tabList,
              currentId: this.currentId,
              location: t.target.getBoundingClientRect(),
            });
      },
      getData: function () {
        return (
          (n = this),
          null,
          (r = t().mark(function n() {
            var r,
              i,
              o,
              s,
              c,
              u,
              d,
              h,
              l,
              f,
              p,
              m = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        a.getInnerTenHolder(this.hqBridge, {
                          symbol: this.symbol,
                          date: this.curTabName,
                        })
                      );
                    case 2:
                      0 == +(i = t.sent).code &&
                        (null == (r = i.data) ? void 0 : r.ten_holder) &&
                        ((o = i.data.ten_holder),
                        (s = o.date_list),
                        (c = void 0 === s ? [] : s),
                        (u = o.holder),
                        (d = void 0 === u ? [] : u),
                        (h = o.sum),
                        (l = void 0 === h ? {} : h),
                        (f = o.now_date),
                        c.length &&
                          (this.curTabName || (this.curTabName = f || c[0]),
                          (p = []),
                          c.map(function (t, e) {
                            p.push({ id: e, name: t });
                          }),
                          (this.currentId = p.findIndex(function (t) {
                            return t.name === m.curTabName;
                          })),
                          (this.tabList = p)),
                        (this.data = {
                          desc: "前十大持有人累计持有份额"
                            .concat(
                              e.formatBigToText(l.volume, 1, 2, 2),
                              "份，占比"
                            )
                            .concat(l.ratio, "%。"),
                          holder: d.filter(function (t) {
                            return (
                              (t.volume = e.formatBigToText(t.volume, 1, 2, 2)),
                              (t.ratio = "".concat(t.ratio, "%")),
                              t
                            );
                          }),
                        }));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (t, e) {
            var a = function (t) {
                try {
                  o(r.next(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (t) {
                try {
                  o(r.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, i);
              };
            o((r = r.apply(n, null)).next());
          })
        );
        var n, r;
      },
    },
  };
Array || n.resolveComponent("SelectPlate")();
var i = n._export_sfc(r, [
  [
    "render",
    function (t, e, a, r, i, o) {
      return n.e(
        {
          a: n.t(i.curTabName),
          b: n.o(function () {
            return o.showSelectPlate && o.showSelectPlate.apply(o, arguments);
          }, 510),
          c: i.data.desc,
        },
        i.data.desc ? { d: n.t(i.data.desc) } : {},
        {
          e: n.f(i.data.holder, function (t, e, a) {
            return { a: n.t(t.name), b: n.t(t.volume), c: n.t(t.ratio), d: e };
          }),
          f: i.showTabPlate && o.isMini,
        },
        i.showTabPlate && o.isMini
          ? {
              g: n.sr("selectPlate", "a2a74a5d-0"),
              h: n.o(o.changeTab, 511),
              i: n.p({
                data: i.tabList,
                "cur-tab-index": i.currentId,
                "tab-type": "owner",
              }),
            }
          : {},
        { j: !o.isApp },
        (o.isApp, {}),
        { k: o.isSpecialPlatform ? 1 : "", l: o.isApp ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-a2a74a5d"],
]);
wx.createComponent(i);
