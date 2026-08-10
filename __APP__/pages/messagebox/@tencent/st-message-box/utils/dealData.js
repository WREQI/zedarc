var e,
  t = require("../../../../../@babel/runtime/helpers/defineProperty"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  g = function (e, t, s) {
    return t in e
      ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s);
  },
  d = function (e, t) {
    for (var c in t || (t = {})) o.call(t, c) && g(e, c, t[c]);
    if (n) {
      var a,
        i = s(n(t));
      try {
        for (i.s(); !(a = i.n()).done; ) {
          c = a.value;
          r.call(t, c) && g(e, c, t[c]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return a(e, i(t));
  },
  f = require("../../stock-news-core/utils/knife.js"),
  l = {
    trade: "trade",
    platformNotify: "platform_notify",
    platformMessage: "platform",
    customer: "customer",
    feedback: "feedback",
    interaction: "interaction",
    chooseRemind: "dingpan",
  },
  p = {
    trade: {
      icon: "https://st.gtimg.com/design/5f9cee968855b2d960d5d9c88dddb38e.svg",
      title: "交易通知",
      routename: "trade-message",
      tradeflag: !0,
    },
    interaction: {
      icon: "https://st.gtimg.com/design/2d626acec3c3019cb8f200d84fb03b7c.svg",
      title: "互动消息",
      routename: "interaction-message",
      tradeflag: !1,
    },
    platform_notify: {
      icon: "https://st.gtimg.com/design/be3e5672e42ea66b57308c0ef633cf3a.svg",
      title: "平台通知",
      routename: "plat-message",
      tradeflag: !1,
    },
  },
  b =
    (t((e = {}), l.chooseRemind, {
      icon: "https://st.gtimg.com/design/c801c2f21dff24bc2b79147a2c486849.svg",
      iconBlack:
        "https://st.gtimg.com/design/950c18826a1ed574884786694c3efc29.svg",
      iconSelected:
        "https://st.gtimg.com/design/3fb34745fc54493dc18fc097ea2b79cf.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/696575d481967257afff6c5076a1a1d3.svg",
      title: "自选盯盘",
      routename: "choose-message",
      tradeflag: !1,
    }),
    t(e, l.trade, {
      icon: "https://st.gtimg.com/design/bb119b338ccc6a19fa32a7b9973c8da8.svg",
      iconBlack:
        "https://st.gtimg.com/design/6dfc9728551fe60235a7ac483ee04753.svg",
      iconSelected:
        "https://st.gtimg.com/design/e762f9da50a576bebcd2b4309102eef1.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/82a3f91a2e60270834909818e128b318.svg",
      title: "交易通知",
      routename: "trade-message",
      tradeflag: !0,
    }),
    t(e, l.platformMessage, {
      icon: "https://st.gtimg.com/design/783af393d879c99866ae5ab7784c6c99.svg",
      iconBlack:
        "https://st.gtimg.com/design/00f752d6a0075e2b0bfddf79802732e1.svg",
      iconSelected:
        "https://st.gtimg.com/design/3e75a3fa1be3f43c0c008e792661f149.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/7ff1c8dc7bb3d8fe3e294e64e13f20d4.svg",
      title: "平台消息",
      routename: "",
      tradeflag: !1,
    }),
    t(e, l.platformNotify, {
      icon: "https://st.gtimg.com/design/606ff4d70c43ea5a9cc9ffc6d68b4b89.svg",
      iconSelected:
        "https://st.gtimg.com/design/606ff4d70c43ea5a9cc9ffc6d68b4b89.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/ab6719defe6e768fef6b28055c895181.svg",
      title: "平台通知",
      routename: "plat-message",
      tradeflag: !1,
    }),
    t(e, l.customer, {
      icon: "https://st.gtimg.com/design/bfa6430ce77894088343384fa639998f.svg",
      iconSelected:
        "https://st.gtimg.com/design/bfa6430ce77894088343384fa639998f.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/ef4beb51a5cd0c5e2328da4c96c8fc0d.svg",
      title: "客服小助手",
      routename: "",
      tradeflag: !1,
    }),
    t(e, l.feedback, {
      icon: "https://st.gtimg.com/design/d43102d964d72962d76280daedb05d9d.png",
      iconSelected:
        "https://st.gtimg.com/design/d43102d964d72962d76280daedb05d9d.png",
      iconSelectedPro:
        "https://st.gtimg.com/design/51f2e9a5d1798373d0e0264674fc991e.svg",
      title: "意见反馈提醒",
      routename: "feedback-message",
      tradeflag: !1,
    }),
    t(e, l.interaction, {
      icon: "https://st.gtimg.com/design/b43e65f09259bbe9666373c2e502593a.svg",
      iconBlack:
        "https://st.gtimg.com/design/4713fcd752855a90600d835daf1c6830.svg",
      iconSelected:
        "https://st.gtimg.com/design/ce776d3beba97c09ce927a81b1274d5b.svg",
      iconSelectedPro:
        "https://st.gtimg.com/design/ad39fe43406d48aa2a7e8ce61352ef28.svg",
      title: "互动消息",
      routename: "interaction-message",
      tradeflag: !1,
    }),
    e);
(exports.BACK_END_MESSAGE_ID = l),
  (exports.EMPTY_LIST = [
    {
      icon: "https://st.gtimg.com/design/5f9cee968855b2d960d5d9c88dddb38e.svg",
      title: "交易通知",
      routename: "trade-message",
      summary: "暂无未读消息",
      unread_num: 0,
      unsupported: !0,
    },
    {
      icon: "https://st.gtimg.com/design/2d626acec3c3019cb8f200d84fb03b7c.svg",
      title: "互动消息",
      routename: "interaction-message",
      summary: "暂无未读消息",
      unread_num: 0,
    },
    {
      icon: "https://st.gtimg.com/design/be3e5672e42ea66b57308c0ef633cf3a.svg",
      title: "平台通知",
      routename: "plat-message",
      summary: "暂无未读消息",
      unread_num: 0,
    },
  ]),
  (exports.MessageboxConfigV2 = b),
  (exports.dealFeedbackDetailMessage = function (e) {
    var t,
      s = e,
      c = { 0: "提交反馈", 1: "客服受理", 2: "客服跟进" },
      a = {
        0: "你的反馈已收到，我们会尽快处理",
        1: "客服正在跟进你的反馈，请稍候",
        2: "客服已处理你的反馈",
      };
    return (
      (s.createdtime = s.create_time ? f.timeFormat(s.create_time) : ""),
      null == (t = null == s ? void 0 : s.process_nodes) ||
        t.forEach(function (e) {
          (e.title = null == c ? void 0 : c[+e.node_type]),
            (e.subtitle = null == a ? void 0 : a[+e.node_type]),
            (e.processtime = e.process_time
              ? f.timeFormat(e.process_time)
              : ""),
            (0 != +e.node_type && 1 != +e.node_type) || (e.content = "");
        }),
      s
    );
  }),
  (exports.dealFeedbackListMessage = function (e) {
    var t = [];
    return (
      e.forEach(function (e) {
        (e.createdtime = e.create_time ? f.timeFormat(e.create_time) : ""),
          (e.respondtime = e.respond_time ? f.timeFormat(e.respond_time) : ""),
          t.push(e);
      }),
      t
    );
  }),
  (exports.dealMessageList = function (e) {
    var t = [],
      s = !1,
      c = [];
    return (
      null == e ||
        e.forEach(function (e) {
          if ("aics" !== e.msg_box_type) {
            var a = e.summary;
            e.summary ||
              (a =
                0 === e.unread_num
                  ? "暂无未读消息"
                  : "您有".concat(e.unread_num, "条新通知"));
            var i = m(d(d({}, e), p[e.msg_box_type]), {
              redpoint: !1,
              showTime: +e.time,
              summary: a,
            });
            (i.time = f.timeFormat(e.time)),
              0 !== e.unread_num && (s = !0),
              c.push(e.msg_box_type),
              t.push(i);
          }
        }),
      { renderlist: t, canclear: s, msgTypeStr: c.join() }
    );
  }),
  (exports.dealPlatMessage = function (e) {
    var t = [];
    return (
      e.forEach(function (e) {
        var s,
          c,
          a = m(d({}, e), { showTime: +e.time });
        (a.time = f.timeFormat(e.time)),
          (a.title =
            ((s = a.title),
            (c = a.time).length >= 16
              ? s.length > 12
                ? "".concat(s.substring(0, 11), "...")
                : s
              : c.length >= 11
              ? s.length > 14
                ? "".concat(s.substring(0, 13), "...")
                : s
              : c.length >= 5 && s.length > 17
              ? "".concat(s.substring(0, 16), "...")
              : s)),
          t.push(a);
      }),
      t
    );
  });
