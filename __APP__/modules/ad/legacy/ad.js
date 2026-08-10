var r,
  t,
  e,
  o,
  i,
  a = require("../../../@babel/runtime/helpers/interopRequireDefault").default,
  n = require("../../../@babel/runtime/helpers/defineProperty"),
  p = require("../../utils/index"),
  l = a(require("../../../libs/md5")),
  u = require("../../../behaviors/logger"),
  c = require("../../performance/enum"),
  d = require("./adReport"),
  s = "",
  h = "",
  U = "",
  m = 0,
  f = 1,
  R = -1,
  v = 0,
  g = "",
  E = "",
  O = (0, u.logFactory)("ad");
function D(r) {
  (0, p.request)({
    url: r,
    header: { Cookie: "appuser=".concat(e, "; Lturn=").concat(t) },
  }).then(
    function (r) {
      O("上报成功"), O(r);
    },
    function (t) {
      O("上报失败"),
        O(t),
        (r = "".concat(r, "&appuesr=").concat(e)),
        i.emit("report", { reportUrl: r }),
        O("用message抛出上报事件");
    }
  );
}
function S(r) {
  var t = [];
  return (
    r.item.forEach(function (r, e) {
      t.push(r);
    }),
    t
  );
}
function K(t) {
  O("开始检查trueview贴片状态");
  for (var e = t.length, o = [], i = 0, a = 0; a < e; a++)
    (t[a].trueviewTurn = !1),
      1 == t[a].order_id || "FT" == t[a].type
        ? (o[a] = 0)
        : (w(t[a]) && (t[a].trueviewTurn = !0), (o[a] = 1), (i += 1));
  (r = 1 == i),
    O("trueviewCheckArr内容是：".concat(o, ",trueviewCount值是：").concat(i));
}
function w(r) {
  if (
    (O("开始检查trueview开关"), r.params && null != r.params && "" != r.params)
  ) {
    var t = r.params;
    if (-1 != t.indexOf("richdata=")) {
      var e = t.substr(t.indexOf("richdata=") + 9);
      -1 != e.indexOf("&") && (e = e.substr(0, e.indexOf("&"))),
        (e = decodeURIComponent(e.replace(/\+/g, " "))),
        O("转换出来的richdata参数是：".concat(e));
      try {
        var o = JSON.parse(e);
        if (
          (O("转换成json后的对象是：".concat(o)),
          o.plugins &&
            null != o.plugins &&
            o.plugins.trueview &&
            null != o.plugins.trueview &&
            "Y" == o.plugins.trueview)
        )
          return O("trueview开关是打开的Y！"), !0;
      } catch (r) {
        O("richdata解析出错！");
      }
    }
  }
  return !1;
}
function L(r) {
  v = 0;
  for (var t = 0; t < r.length; t++)
    1 != r[t].order_id && (v += r[t].duration / 1e3);
  O("广告总时长为：".concat(v));
}
(module.exports = function (a, u, w) {
  O(a),
    (i = u),
    d.attachReporter(u),
    a.vid && (s = a.vid),
    a.previd && (h = a.previd),
    a.live && a.live,
    a.chid && (m = a.chid),
    a.coverid && (U = a.coverid),
    a.pu && a.pu,
    a.openid && (E = a.openid),
    w.collectReportTime(n({}, c.PERFORMANCE_KEY.computeMD5Start, Date.now())),
    (e = String((0, l.default)(E).substr(0, 16)).toUpperCase()),
    w.collectReportTime(n({}, c.PERFORMANCE_KEY.computeMD5End, Date.now())),
    (function () {
      (t = p.Cache.get("ad_Lturn")),
        O("Lturn:".concat(t)),
        t
          ? O("Lturn+1:".concat((t += 1)))
          : ((t = Math.floor(1e3 * Math.random())),
            O("create Lturn:".concat(t)));
      t > 999 && (t = 0);
      p.Cache.set("ad_Lturn", t, 72e5);
    })();
  var q = {};
  return (
    w.collectReportTime(n({}, c.PERFORMANCE_KEY.getAdRequestStart, Date.now())),
    (0, p.request)({
      url: "https://livew.l.qq.com/livemsg?".concat(
        (0, p.objectToQueryString)(a)
      ),
      needlogin: !0,
      header: { Cookie: "appuser=".concat(e, "; Lturn=").concat(t) },
    })
      .then(
        function (r) {
          w.collectReportTime(
            n({}, c.PERFORMANCE_KEY.getAdRequestEnd, Date.now())
          ),
            (o = r),
            r.data.adLoc && r.data.adLoc.tpid && (f = r.data.adLoc.tpid),
            (q = {
              t: "0",
              url: "",
              vid: s,
              previd: h,
              coverid: U,
              pf: "H5",
              vptag: "",
              pid: "",
              chid: m,
              tpid: f,
            });
          var t = S(r.data.adList);
          return O("最终adList: ", t), K(t), L(t), t;
        },
        function (r) {
          return (
            O("livew error，再试一次", r),
            w.setReportParam(n({}, c.PERFORMANCE_KEY.hasAdRequestRetry, !0)),
            w.collectReportTime(
              n({}, c.PERFORMANCE_KEY.getAdRequestStart, Date.now())
            ),
            (0, p.request)({
              url: "https://livew.l.qq.com/livemsg?".concat(
                (0, p.objectToQueryString)(a)
              ),
              header: { Cookie: "appuser=".concat(e, "; Lturn=").concat(t) },
            }).then(
              function (r) {
                w.collectReportTime(
                  n({}, c.PERFORMANCE_KEY.getAdRequestEnd, Date.now())
                ),
                  (o = r),
                  r.data.adLoc && r.data.adLoc.tpid && (f = r.data.adLoc.tpid),
                  (q = {
                    t: "0",
                    url: "",
                    vid: s,
                    previd: h,
                    coverid: U,
                    pf: "H5",
                    vptag: "",
                    pid: "",
                    chid: m,
                    tpid: f,
                  });
                var t = S(r.data.adList);
                return O("最终adList: ", t), K(t), L(t), t;
              },
              function (r) {
                return [];
              }
            )
          );
        }
      )
      .then(function (t) {
        return (
          w.collectReportTime(
            n({}, c.PERFORMANCE_KEY.handleAdStart, Date.now())
          ),
          (t = t.map(function (t, e) {
            return function () {
              var e = [];
              if (t.reportUrlOther.reportitem)
                for (var i = 0; i < t.reportUrlOther.reportitem.length; i++)
                  e[i] = {
                    url: t.reportUrlOther.reportitem[i].url,
                    time: t.reportUrlOther.reportitem[i].reporttime,
                    isReported: !1,
                  };
              var a = [];
              if (t.reportUrlSDK.reportitem)
                for (i = 0; i < t.reportUrlSDK.reportitem.length; i++)
                  a[i] = {
                    url: t.reportUrlSDK.reportitem[i].url,
                    time: t.reportUrlSDK.reportitem[i].reporttime,
                    isReported: !1,
                  };
              return (
                O("当前广告的trueview开关是否打开：".concat(t.trueviewTurn)),
                O("当前广告是否符合trueview条件：".concat(r)),
                r
                  ? (O("allAdDuration:".concat(v)), (R = v <= 5 ? 0 : 5))
                  : (R = -1),
                O("skipable:".concat(R)),
                {
                  oid: t.order_id,
                  url: t.image[0].url,
                  reportUrl: {
                    url: t.reportUrl,
                    time: t.ReportTime,
                    isReported: !1,
                  },
                  reportUrlOther: e,
                  reportUrlSDK: a,
                  skipable: R,
                  duration: t.duration / 1e3,
                  allDuration: v,
                  onSkip: function () {
                    O("当前广告被跳过了，上报智慧点10237"),
                      d.reportWisdomPoint(10237, t.order_id, t.order_id, "");
                  },
                  onTimeupdate: function (r) {},
                  onEnd: function () {
                    o.data.adLoc &&
                      o.data.adLoc.rfid &&
                      ((g = o.data.adLoc.rfid), O("rfid赋值成功：".concat(g)));
                  },
                  onStart: function () {
                    if (
                      (O("当前广告开始播放".concat(t)),
                      O("当前广告的oid是：".concat(this.oid)),
                      (this.reportUrl.url = d.updateUrlParam(
                        this.reportUrl.url,
                        q
                      )),
                      this.reportUrl.time >= 0 && !this.reportUrl.isReported)
                    ) {
                      this.reportUrl.isReported = !0;
                      try {
                        D(this.reportUrl.url);
                      } catch (r) {}
                    }
                    for (var r = 0; r < this.reportUrlOther.length; r++)
                      if (
                        ((this.reportUrlOther[r].url = d.updateUrlParam(
                          this.reportUrlOther[r].url,
                          q
                        )),
                        this.reportUrlOther[r].time >= 0 &&
                          !this.reportUrlOther[r].isReported)
                      ) {
                        this.reportUrlOther[r].isReported = !0;
                        try {
                          d.pingUrl(this.reportUrlOther[r].url);
                        } catch (r) {}
                      }
                    for (r = 0; r < this.reportUrlSDK.length; r++)
                      if (
                        ((this.reportUrlSDK[r].url = d.updateUrlParam(
                          this.reportUrlSDK[r].url,
                          q
                        )),
                        this.reportUrlSDK[r].time >= 0 &&
                          !this.reportUrlSDK[r].isReported)
                      ) {
                        this.reportUrlSDK[r].isReported = !0;
                        try {
                          d.pingUrl(this.reportUrlSDK[r].url);
                        } catch (r) {}
                      }
                  },
                  onReportEmpty: function () {
                    O(
                      "我是空单上报，当前广告的上报地址是：".concat(
                        this.reportUrl.url
                      )
                    ),
                      (this.reportUrl.url = d.updateUrlParam(
                        this.reportUrl.url,
                        q
                      ));
                    try {
                      D(this.reportUrl.url);
                    } catch (r) {}
                    for (var r = 0; r < this.reportUrlOther.length; r++)
                      if (
                        ((this.reportUrlOther[r].url = d.updateUrlParam(
                          this.reportUrlOther[r].url,
                          q
                        )),
                        this.reportUrlOther[r].time >= 0 &&
                          !this.reportUrlOther[r].isReported)
                      ) {
                        this.reportUrlOther[r].isReported = !0;
                        try {
                          d.pingUrl(this.reportUrlOther[r].url);
                        } catch (r) {}
                      }
                    for (r = 0; r < this.reportUrlSDK.length; r++)
                      if (
                        ((this.reportUrlSDK[r].url = d.updateUrlParam(
                          this.reportUrlSDK[r].url,
                          q
                        )),
                        this.reportUrlSDK[r].time >= 0 &&
                          !this.reportUrlSDK[r].isReported)
                      ) {
                        this.reportUrlSDK[r].isReported = !0;
                        try {
                          d.pingUrl(this.reportUrlSDK[r].url);
                        } catch (r) {}
                      }
                  },
                }
              );
            };
          })),
          w.collectReportTime(n({}, c.PERFORMANCE_KEY.handleAdEnd, Date.now())),
          { adList: t }
        );
      })
      .catch(function (r) {
        return {};
      })
  );
}).reporter = d.reporter;
