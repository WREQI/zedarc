var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = function (r, t) {
    for (var n in t || (t = {})) u.call(t, n) && c(r, n, t[n]);
    if (s) {
      var i,
        a = e(s(t));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          n = i.value;
          o.call(t, n) && c(r, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return r;
  },
  a = function (e, r) {
    return t(e, n(r));
  },
  p = require("../../../../../common/vendor.js"),
  f = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  l = "",
  d = "",
  v = "https://".concat(
    "mp" !== p.StockBridge.ENV ? location.host : "wzq.tenpay.com",
    "/"
  ),
  y = "3",
  _ = "zxg_xcx";
(exports.getPlatMessage = function (e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  r && ((l = ""), (d = ""));
  var t = {
    page: e,
    page_size: 10,
    system_lastid: d,
    forum_lastid: l,
    version: y,
  };
  return p.StockBridge.request(
    v + "svr/user/user_service/user_platform_message",
    p.RequestTypeEnum.POST,
    i({}, t),
    f
  )
    .then(function (e) {
      return (l = e.forum_lastid), (d = e.system_lastid), e;
    })
    .catch(function (e) {
      return e;
    });
}),
  (exports.queryFeedbackDetailMessage = function (e) {
    var r = { record_id: e, channel_id: "75", version: y };
    return p.StockBridge.request(
      v + "wzq/svr/openapi/aics/query_feedback_record_details",
      p.RequestTypeEnum.POST,
      i({}, r),
      f
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryFeedbackListMessage = function (e) {
    var r = { channel_id: "75", page: e, limit: 10, version: y };
    return p.StockBridge.request(
      v + "wzq/svr/openapi/aics/query_user_feedback_records",
      p.RequestTypeEnum.POST,
      i({}, r),
      f
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryMessagelist = function (e) {
    var r = a(i({ source: _ }, e), { version: y });
    return p.StockBridge.request(
      v + "svr/user/user_service/user_message_boxes",
      p.RequestTypeEnum.POST,
      i({}, r),
      f
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.readMessage = function (e) {
    var r = a(i({ source: _ }, e), { version: y });
    return p.StockBridge.request(
      v + "svr/user/user_service/user_message_read",
      p.RequestTypeEnum.POST,
      i({}, r),
      f
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  });
