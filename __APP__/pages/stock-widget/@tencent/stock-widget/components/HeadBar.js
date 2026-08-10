var t = require("../api/index.js"),
  e = require("../../../../../common/vendor.js"),
  n = {
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    props: {
      title: { type: String, default: "" },
      intor: { type: String, default: "" },
      theme: { type: String, default: "white" },
      accountText: { type: String, default: "" },
      statData: { type: String, default: "" },
      backgroundImage: { type: Object, default: {} },
      titleImage: { type: Object, default: {} },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { showOpenAccountBtn: !0 };
    },
    computed: {
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      themeStatu: function () {
        return "black" === this.theme ? this.theme : "white";
      },
      isHasOpenAccount: function () {
        return !1 === this.showOpenAccountBtn;
      },
    },
    created: function () {
      this.handleIsAccountOpen();
      var t = this.env,
        e = t.__MP__,
        n = t.IS_WZQ_XCX;
      (e || n) && (this.showOpenAccountBtn = !1);
    },
    methods: {
      onOpenAccountClick: function () {
        this.$emit("onClickAccount");
        var t = this.env,
          e = t.__APP__,
          n = t.__WZQ__,
          o = t.__MP__,
          s = t.IS_WZQ_XCX;
        if (o || s) {
          var c = "/pages/asset/index?stat_data=".concat(this.statData);
          this.routeTo({
            url: "/pages/broker/transfer?url=".concat(
              encodeURIComponent(c),
              "&linkscene=h5"
            ),
          });
        } else
          e
            ? this.gotoOpenAccountAPPPage()
            : n && this.gotoOpenAccountWzqPage();
      },
      gotoOpenAccountAPPPage: function () {
        var t = this,
          e = this.helper.shy;
        e.getUserInfo(function (n) {
          if (n && "none" !== n.type) {
            if (!t.isHasOpenAccount) return void t.gotoOpenAccountAPPPage();
            var o = { report_channel: t.statData, index: 0 },
              s = "qqstock://GotoTradeTab?info=".concat(
                encodeURIComponent(JSON.stringify(o))
              );
            e.navigateTo({ url: s });
          } else
            e.login(function (e) {
              "success" === e.status &&
                setTimeout(function () {
                  t.handleIsAccountOpen();
                }, 2e3);
            });
        });
      },
      gotoOpenAccountWzqPage: function () {
        var t = this,
          e = "AssetIndex";
        this.isHasOpenAccount ||
          ((e = "ApplyIndex"),
          this.$toast("您还没有开通股票账户，请先开通后再申购")),
          setTimeout(function () {
            t.routeTo({ name: e, query: { stat_data: t.statData } });
          }, 1e3);
      },
      handleIsAccountOpen: function () {
        var t = this,
          e = this.env.__APP__,
          n = this.helper.shy;
        e
          ? n.getUserInfo(function (e) {
              e && "none" !== e.type
                ? t.requestBrokerListData(e)
                : (t.showOpenAccountBtn = !0);
            })
          : this.userInfo &&
            this.userInfo.userstate &&
            ("0" === this.userInfo.userstate ||
              "3" === this.userInfo.userstate) &&
            (this.showOpenAccountBtn = !1);
      },
      requestBrokerListData: function () {
        var e = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.StockAPiService.getBrokerList(n, this.helper)
          .then(function (t) {
            e.resultHandle(t);
          })
          .catch(function (t) {
            e.resultHandle(t);
          });
      },
      resultHandle: function (t) {
        for (
          var e = !1, n = t.has_bind, o = void 0 === n ? [] : n, s = 0;
          s < o.length;
          s++
        ) {
          var c = o[s];
          if (1 === parseInt(c.is_default, 10)) {
            e = !0;
            break;
          }
        }
        e && (this.showOpenAccountBtn = !1);
      },
      routeTo: function (t) {
        this.$emit("routeToPage", t);
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (t, n, o, s, c, a) {
        return e.e(
          {
            a: "url(".concat(o.titleImage[a.themeStatu], ")"),
            b: e.t(o.intor),
            c: c.showOpenAccountBtn,
          },
          c.showOpenAccountBtn
            ? {
                d: e.t(o.accountText),
                e: e.o(function (t) {
                  return a.onOpenAccountClick();
                }, 5854),
              }
            : {},
          { f: "url(".concat(o.backgroundImage[a.themeStatu], ")") }
        );
      },
    ],
    ["__scopeId", "data-v-c2de479a"],
  ]);
wx.createComponent(o);
