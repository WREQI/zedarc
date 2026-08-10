var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../common/vendor.js"),
  t = require("../../../components/OpenPopup/utils.js"),
  s = {
    mixins: [
      {
        data: function () {
          return {
            hasMessageCount: n.wx$1.getStorageSync(t.SUBCRIBE_COUNT_FLAG),
          };
        },
        methods: {
          requestPermission: function () {
            return (
              (s = this),
              null,
              (r = e().mark(function s() {
                var r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.requestSubscibe();
                        case 2:
                          return (
                            (r = e.sent),
                            e.abrupt(
                              "return",
                              ((this.hasMessageCount = r === t.TEMP_IDS.length),
                              n.wx$1.setStorageSync(
                                t.SUBCRIBE_COUNT_FLAG,
                                this.hasMessageCount
                              ),
                              r)
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  s,
                  this
                );
              })),
              new Promise(function (e, n) {
                var t = function (e) {
                    try {
                      o(r.next(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  i = function (e) {
                    try {
                      o(r.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  o = function (n) {
                    return n.done
                      ? e(n.value)
                      : Promise.resolve(n.value).then(t, i);
                  };
                o((r = r.apply(s, null)).next());
              })
            );
            var s, r;
          },
        },
      },
    ],
    props: {
      pageHide: { type: Boolean, required: !0 },
      needCheckPermission: { type: Boolean, default: !0 },
      openfrom: { type: String, default: t.OPEN_MESSAGE_PATH_PARAM.ANIM },
      isSubscribe: { type: Boolean },
    },
    watch: {
      pageHide: function (e) {
        e && (this.checkPermission = !1);
      },
    },
    data: function () {
      return {
        user: {},
        OPEN_MESSAGE_PATH: t.OPEN_MESSAGE_PATH,
        checkPermission: !1,
      };
    },
    computed: {
      sendMessagePath: function () {
        return this.isSubscribe
          ? "".concat(t.OPEN_MESSAGE_PATH, "?subscribe=1")
          : t.constructChatPath(this.openfrom, this.user);
      },
    },
    methods: {
      handleOpenChat: function () {
        this.$emit("click", "chat"), (this.checkPermission = !1);
      },
      authPermission: function () {
        this.$emit("click", "auth"), this.reqPermisson();
      },
      reqPermisson: function () {
        (this.checkPermission = !0), this.requestPermission();
      },
    },
    created: function () {
      var e = this;
      n.userinfo.get(function (n) {
        e.user = n;
      });
    },
  },
  r = n._export_sfc(s, [
    [
      "render",
      function (e, t, s, r, i, o) {
        return n.e(
          {
            a: e.hasMessageCount || !s.needCheckPermission || i.checkPermission,
          },
          e.hasMessageCount || !s.needCheckPermission || i.checkPermission
            ? {
                b: o.sendMessagePath,
                c: n.o(function () {
                  return (
                    o.handleOpenChat && o.handleOpenChat.apply(o, arguments)
                  );
                }, 2534),
              }
            : {
                d: n.o(function () {
                  return (
                    o.authPermission && o.authPermission.apply(o, arguments)
                  );
                }, 2535),
              }
        );
      },
    ],
    ["__scopeId", "data-v-95d0354c"],
  ]);
wx.createComponent(r);
