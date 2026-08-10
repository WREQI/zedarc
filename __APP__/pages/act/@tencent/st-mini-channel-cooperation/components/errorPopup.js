var e = require("../../../../../common/vendor.js"),
  t = {
    ineligibility: {
      desc: "抱歉，您不符合参加活动条件！<br/>本次无法获得20元微信立减金",
    },
    received: {
      desc: "您已获得20元微信立减金，请前往微信「我-订单与卡包-优惠券」中查看~请注意在有效期内使用",
    },
  },
  n = {
    setup: function () {
      var n = e.ref(!1),
        u = e.ref(""),
        o = e.ref(""),
        c = e.ref(""),
        i = e.ref(""),
        r = e.ref(""),
        l = e.ref(null);
      return {
        show: n,
        title: o,
        desc: i,
        type: c,
        btnText: r,
        btnFn: l,
        customImg: u,
        handleJump: function () {
          l.value();
        },
        open: function () {
          n.value = !0;
        },
        showPopup: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            s = e.type,
            d = e.title,
            a = e.desc,
            v = e.customImg,
            f = e.btnText,
            m = void 0 === f ? "去微证券领更多福利" : f,
            p = e.btnFn,
            g = void 0 === p ? function () {} : p,
            h = t[s] || {};
          (o.value = d),
            (c.value = s),
            (u.value = v),
            (i.value = a || h.desc),
            (r.value = m),
            (l.value = g),
            (n.value = !0);
        },
      };
    },
  },
  u = e._export_sfc(n, [
    [
      "render",
      function (t, n, u, o, c, i) {
        return e.e(
          { a: o.show },
          o.show
            ? e.e(
                { b: o.type },
                o.type
                  ? e.e(
                      { c: o.customImg },
                      o.customImg
                        ? { d: o.customImg }
                        : { e: e.n("img-" + o.type) }
                    )
                  : {},
                { f: o.title },
                o.title ? { g: e.t(o.title) } : {},
                { h: o.desc },
                o.desc ? { i: o.desc } : {},
                {
                  j: e.t(o.btnText),
                  k: e.o(function () {
                    return o.handleJump && o.handleJump.apply(o, arguments);
                  }, 2495),
                  l: e.o(function () {}, 2496),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-eed573cc"],
  ]);
wx.createComponent(u);
