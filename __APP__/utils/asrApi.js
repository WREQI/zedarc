var e = (0, require("../@babel/runtime/helpers/interopRequireDefault").default)(
    require("./errorHandle")
  ),
  t = require("./cryptojs"),
  o = require("./util"),
  r = require("./config"),
  n = {},
  i = [],
  a = function (e) {
    Object.assign(
      n,
      { method: "POST", protocol: "https", serviceType: "asr" },
      e
    );
  };
function c(t, o, n, a, c, l, s) {
  try {
    var u = {
      "content-type": "application/octet-stream",
      Host: "asr.cloud.tencent.com",
      "Content-Length": n.bufLen,
      Authorization: a,
    };
    s && (u["X-TC-Token"] = s),
      wx.request({
        url: "https://asr.cloud.tencent.com/asr/v1/" + t + "?" + o,
        data: n.frameBuffer,
        method: "POST",
        header: u,
        success: function (t) {
          if (t.data) {
            var o = t.data;
            if (e.default[o.code] && 127 !== o.code) {
              var n = o;
              return (
                console.log("queryASR fail:", JSON.stringify(n)),
                void l(n, null)
              );
            }
            0 === o.code &&
              (r.GetQCloudSecret().openConsole &&
                console.log("queryASR succ:", JSON.stringify(o)),
              (o.final = c.end),
              l(null, o),
              (i[c.seq] = !0));
          } else l(null, t), (i[c.seq] = !0);
        },
        fail: function (e) {
          console.log("queryASR fail:", e), l(e, null);
        },
      });
  } catch (e) {
    console.log(e);
  }
}
(a.prototype.generateUrl = function (e) {
  e = e || {};
  var t = this._getHost(e),
    o = void 0 === e.path ? n.path : e.path;
  return (e.protocol || n.protocol) + "://" + t + o;
}),
  (a.prototype.generateQueryString = function (e) {
    var t = (e = e || n).timeStampOffset
        ? +e.timeStampOffset + Math.round(Date.now() / 1e3)
        : Math.round(Date.now() / 1e3),
      o = null === e.engine_model_type ? "16k_zh" : e.engine_model_type,
      i = {
        secretid: e.secretId || n.secretId,
        timestamp: t,
        expired: t + 180,
        nonce: Math.round(65535 * Math.random()),
        seq: e.seq,
        end: e.end,
        res_type: 0,
        sub_service_type: 1,
        engine_model_type: o,
        result_text_format: 0,
        voice_format: 8,
        source: 0,
        voice_id: e.voice_id,
        timeout: 5e3,
      },
      a = Object.prototype.hasOwnProperty;
    a.call(e, "hotword_id") && (i.hotword_id = e.hotword_id),
      a.call(e, "customization_id") &&
        (i.customization_id = e.customization_id),
      a.call(e, "filter_dirty") && (i.filter_dirty = e.filter_dirty),
      a.call(e, "filter_modal") && (i.filter_modal = e.filter_modal),
      a.call(e, "filter_punc") && (i.filter_punc = e.filter_punc),
      a.call(e, "convert_num_mode") &&
        (i.convert_num_mode = e.convert_num_mode),
      a.call(e, "needvad") && (i.needvad = e.needvad);
    var c = Object.keys(i),
      l = "",
      s = this._getHost(e),
      u = (e.method || n.method).toUpperCase(),
      d = n.path;
    c.sort(),
      c.forEach(function (e) {
        var t = i[e];
        "" !== e &&
          ((null == t || ("number" == typeof t && isNaN(t))) && (t = ""),
          (l += "&" + e + "=" + t));
      }),
      (l = l.slice(1));
    var p = e.appId || n.appId;
    return (
      r.GetQCloudSecret().openConsole &&
        console.log("加密前：", u + s + d + p + "?" + l),
      l
    );
  }),
  (a.prototype.request = function (e, t, o) {
    "function" == typeof e && ((t = e), (e = n)),
      (e = e || n),
      (t = t || Function.prototype);
    var a = this.generateQueryString(e),
      l = e.appId || n.appId,
      s = this.sign(
        "POSTasr.cloud.tencent.com/asr/v1/" + l + "?" + a,
        e.secretKey || n.secretKey
      );
    setTimeout(function () {
      i[e.seq] ||
        (r.GetQCloudSecret().openConsole &&
          console.log("未收到回包，重发一次，seq=", e.seq),
        c(l, a, o, s, e, t, n.token));
    }, 1e3),
      c(l, a, o, s, e, t, n.token);
  }),
  (a.prototype.sign = function (e, n) {
    var i = t.HmacSHA1(e, n),
      a = o.toUint8Array(i),
      c = wx.arrayBufferToBase64(a);
    return (
      r.GetQCloudSecret().openConsole && console.log("wx.base64后：", c), c
    );
  }),
  (a.prototype._getHost = function (e) {
    var t = e.host;
    return (
      t ||
        (t =
          (e.serviceType || n.serviceType) + "." + (e.baseHost || n.baseHost)),
      t
    );
  }),
  (module.exports = a);
