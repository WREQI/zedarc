var t = require("../../common/vendor.js"),
  e = getApp().globalData,
  a = {
    data: function () {
      return {
        list: [],
        total: 1 / 0,
        date: null,
        skin: t.wx$1.getStorageSync("user/skin") || "white",
        title: "",
      };
    },
    onShareAppMessage: function () {
      return {
        title: this.title,
        path: "pages/stock/shareholder?".concat(
          t.Fns.queryStringify(this.urlParams)
        ),
      };
    },
    onLoad: function (a) {
      var r = this;
      (a.holder = parseInt(a.holder)),
        (a.name = decodeURIComponent(a.name || ""));
      var n = "".concat(a.name, "(").concat(a.scode, ")");
      (this.urlParams = a),
        (this.title = n),
        t.wx$1.setNavigationBarTitle({ title: n }),
        this.queryData(),
        e.setSkin(function (t) {
          r.skin = "black" === t ? "black" : "white";
        });
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    methods: {
      queryData: function () {
        var t = this,
          a = this.urlParams,
          r = {
            url: e.CGI_PREFIX + "information.fcgi",
            data: { scode: a.scode, markets: a.market, type: 2 },
            success: function (r) {
              if (r && "0" === r.retcode) {
                var n = [],
                  o = r.circulation_date;
                if (o) {
                  var i,
                    c,
                    s = (o || "").match(/(\d*)[^\d]*(\d*)[^\d]*\d*/);
                  s &&
                    s.length &&
                    ((i = s[1]),
                    (o = i +=
                      (c = parseInt(s[2], 10)) < 4
                        ? "一季报"
                        : c < 7
                        ? "半年报"
                        : c < 10
                        ? "三季报"
                        : "年报"));
                }
                switch (parseInt(a.holder)) {
                  case 1:
                    n = (n = r.circulation_top || []).map(function (t) {
                      return (t.data = parseFloat(t.ratio).toFixed(2)), t;
                    });
                    break;
                  case 2:
                    n = (n = r.institution || []).map(function (t) {
                      return (t.data = parseFloat(t.ratio).toFixed(2)), t;
                    });
                    break;
                  default:
                    n = r.institution || [];
                    var d = r.circulation_a;
                    n = n.map(function (t) {
                      return (
                        (t.data = (parseFloat(t.bcccgs / d) / 100).toFixed(3)),
                        t
                      );
                    });
                }
                (n = n.map(function (t) {
                  switch (parseInt(t.change)) {
                    case 0:
                      t.changeText = "未变";
                      break;
                    case 1:
                      t.changeText = "新进";
                      break;
                    case 2:
                      t.changeText = "减持";
                      break;
                    case 3:
                      t.changeText = "增持";
                  }
                  return t;
                })),
                  (t.list = n),
                  (t.date = o);
              } else e.showError(r.retmsg, r.retcode);
            },
          };
        e.wx.request(r);
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var r = t._export_sfc(a, [
  [
    "render",
    function (e, a, r, n, o, i) {
      return t.e(
        {
          a: e.rootFontSize,
          b: t.p({ "no-auto": !0 }),
          c: 1 === e.urlParams.holder,
        },
        (e.urlParams.holder, {}),
        { d: t.t(e.date), e: 1 === e.urlParams.holder },
        (e.urlParams.holder, {}),
        {
          f: t.f(e.list, function (e, a, r) {
            return {
              a: t.t(e.stockholder),
              b: t.t(e.data),
              c: t.t(e.changeText),
              d: e.stockholder,
            };
          }),
          g: t.n("skin-" + e.skin),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dc6b091d"],
]);
wx.createPage(r);
