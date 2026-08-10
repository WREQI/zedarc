var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js"), require("../../index.js");
var n = require("../../stores/actconfig/useActconfig.js"),
  t = require("../../service/aegis/utils.js"),
  r = require("../../model/transfer/transferMonitorEvents.js"),
  i = require("../../common/vendor.js"),
  o = {
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    components: {
      StSegment: function () {
        return "../../node-modules/@tencent/stock-ui/mp/lib/segment/index.js";
      },
      TransferIn: function () {
        return "./components/TransferIn.js";
      },
      TransferOut: function () {
        return "./components/TransferOut.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      CommonBulletinBar: function () {
        return "../../components/CommonBulletinBar/CommonBulletinBar.js";
      },
    },
    data: function () {
      return {
        transferType: 0,
        segments: ["转入资金", "转出资金"],
        firstInit: !0,
        isEmptyCard: !1,
        pageOpenStartTime: 0,
      };
    },
    setup: function () {
      var e = i.getCurrentInstance().proxy;
      return i.provide("curPageContext", e), {};
    },
    watch: {
      transferType: function () {
        var e = this;
        this.$nextTick(function () {
          e.initTransfer();
        });
      },
    },
    mounted: function () {
      var e,
        t = null == (e = this.$route.query) ? void 0 : e.type;
      (this.transferType = "out" === t ? 1 : 0),
        (0, n.useActConfigStore().setActRechargeID)();
    },
    methods: {
      initTransfer: function () {
        var e,
          n,
          t,
          r,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        0 === this.transferType
          ? (this.$stat.click("trade.transferin.show"),
            null == (n = null == (e = this.$refs) ? void 0 : e.in) ||
              n.initTransfer(i))
          : (this.$stat.click("trade.transferout.show"),
            null == (r = null == (t = this.$refs) ? void 0 : t.out) ||
              r.initTransfer(i));
      },
      handleShow: function () {
        var n = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.$nextTick(function () {
          var r, i;
          if (
            null ==
            (i = null == (r = null == n ? void 0 : n.$vm) ? void 0 : r.__page__)
              ? void 0
              : i.options
          ) {
            var o = n.$vm.__page__.options.type,
              s = void 0 === o ? "" : o;
            if (s) {
              var a = "out" === s ? 1 : 0;
              a !== n.transferType && (n.transferType = a);
              var u = e(e({}, t), n.$vm.__page__.options);
              n.initTransfer(u), (n.$vm.__page__.options = {});
            } else n.initTransfer(t);
          } else n.initTransfer(t);
        });
      },
      showEmptyCard: function () {
        (this.isEmptyCard = !0),
          this.clearMonitorTimers(),
          t.reportMonitorEvent(r.TRANSFER_MONITOR.EMPTY_CARD);
      },
      checkWhiteScreen: function () {
        var e = this;
        this._whiteScreenTimer = setTimeout(function () {
          if (((e._whiteScreenTimer = null), !e.isEmptyCard)) {
            var n = e.$el;
            n &&
              n.querySelector &&
              ((null == n ? void 0 : n.querySelector(".segments-wrapper")) ||
                (null == n
                  ? void 0
                  : n.querySelector(".transfer-form-container")) ||
                t.reportMonitorEvent(r.TRANSFER_MONITOR.WHITE_SCREEN));
          }
        }, 5e3);
      },
      checkPageOpenTimeout: function () {
        var e = this;
        this._pageOpenTimer = setTimeout(function () {
          if (((e._pageOpenTimer = null), !e.isEmptyCard)) {
            var n = e.$el;
            n &&
              n.querySelector &&
              ((null == n ? void 0 : n.querySelector(".segments-wrapper")) ||
                (null == n
                  ? void 0
                  : n.querySelector(".transfer-form-container")) ||
                t.reportMonitorEvent(r.TRANSFER_MONITOR.PAGE_OPEN_FAIL));
          }
        }, 5e3);
      },
      clearPageOpenTimer: function () {
        this._pageOpenTimer &&
          (clearTimeout(this._pageOpenTimer), (this._pageOpenTimer = null));
      },
      clearMonitorTimers: function () {
        this.clearPageOpenTimer(),
          this._whiteScreenTimer &&
            (clearTimeout(this._whiteScreenTimer),
            (this._whiteScreenTimer = null));
      },
    },
    onShow: function () {
      var n,
        t = this,
        r =
          (null == (n = null == this ? void 0 : this.$route)
            ? void 0
            : n.query) || {},
        i = e({}, r);
      if (
        (this._monitorStarted ||
          ((this._monitorStarted = !0),
          (this.pageOpenStartTime = Date.now()),
          this.checkPageOpenTimeout(),
          this.checkWhiteScreen()),
        delete r.money,
        this.firstInit)
      )
        return (
          (this.firstInit = !1),
          void this.$nextTick(function () {
            t.initTransfer(i);
          })
        );
      this.handleShow(i);
    },
    onHide: function () {
      this.clearMonitorTimers();
    },
    beforeDestroy: function () {
      this.clearMonitorTimers();
    },
  };
Array ||
  (
    i.resolveComponent("CommonBulletinBar") +
    i.resolveComponent("StSegment") +
    i.resolveComponent("TransferIn") +
    i.resolveComponent("TransferOut") +
    i.resolveComponent("EmptyBankcardTip") +
    i.resolveComponent("MpDialog") +
    i.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/CommonBulletinBar/CommonBulletinBar.js";
      } +
      function () {
        return "../../components/EmptyBankcardTip/EmptyBankcardTip.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var s = i._export_sfc(o, [
  [
    "render",
    function (e, n, t, r, o, s) {
      return i.e(
        { a: e.rootFontSize, b: i.p({ scene: "TRANSFER" }), c: !o.isEmptyCard },
        o.isEmptyCard
          ? {
              k: i.p({
                title: "当前未绑定银行卡，出金入金受限",
                biz: "出金入金",
              }),
            }
          : i.e(
              {
                d: i.o(function (e) {
                  return (o.transferType = e);
                }),
                e: i.p({ value: o.transferType, segments: o.segments }),
                f: 0 === o.transferType,
              },
              0 === o.transferType
                ? {
                    g: i.sr("in", "34f2c1e6-3,34f2c1e6-0"),
                    h: i.o(s.showEmptyCard),
                  }
                : {
                    i: i.sr("out", "34f2c1e6-4,34f2c1e6-0"),
                    j: i.o(s.showEmptyCard),
                  }
            ),
        {
          l: i.p({ id: "mp-dialog" }),
          m: i.sr("#global-wrap", "34f2c1e6-0"),
          n: i.p({
            id: "global-wrap",
            filePath: "/transfer/fund",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(s);
