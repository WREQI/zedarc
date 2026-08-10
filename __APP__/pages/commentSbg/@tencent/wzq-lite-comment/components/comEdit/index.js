var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js"),
  n = require("../../../stock-community-ui/utils/service/index.js"),
  o = require("../../../stock-community-base/utils/knife.js"),
  i = o.sdk.showToast,
  r = {
    name: "commentFloatEditor",
    props: {
      comEditData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      headimageurl: {
        type: String,
        default:
          "https://st.gtimg.com/design/374f66b04aedd22bd7ac8225ec3a14c2.png",
      },
    },
    watch: {
      comEditData: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          (this.showComEdit = !0), (this.focus = !0);
        },
      },
    },
    data: function () {
      return {
        focus: !0,
        showComEdit: !0,
        editStatus: "edit",
        keyboardHeight: 0,
        keyboardDuration: "0.3s",
        inputBottom: 0,
        disable: !0,
        animation: "",
        replyText: "",
        mpKeyboardChange: { type: Function, default: function () {} },
      };
    },
    created: function () {
      var t = this;
      (this.mpKeyboardChange = function (e) {
        var n = e.height,
          o = e.duration;
        t.keyboardHeight !== n &&
          ((t.keyboardHeight = n),
          (t.keyboardDuration = o),
          0 === n
            ? ((t.animation = "hide"), t.hideEdit())
            : n > 0 &&
              setTimeout(function () {
                (t.inputBottom = n), (t.animation = "popup");
              }, 1e3 * o));
      }),
        e.wx$1.onKeyboardHeightChange(this.mpKeyboardChange);
    },
    beforeDestroy: function () {
      e.wx$1.offKeyboardHeightChange(this.mpKeyboardChange);
    },
    computed: {
      showEdit: function () {
        return this.editStatus;
      },
      placeholder: function () {
        var t;
        return "回复 ".concat(
          decodeURIComponent(
            (null == (t = this.comEditData) ? void 0 : t.touser) || ""
          ),
          "："
        );
      },
      platformClass: function () {
        return o.platform;
      },
    },
    methods: {
      preventTouch: function (t) {
        t.preventDefault && t.preventDefault(),
          t.stopPropagation && t.stopPropagation();
      },
      onInput: function (t) {
        var e, n, o, i;
        try {
          (this.disable =
            0 ===
            (null == (n = null == (e = t.detail) ? void 0 : e.value)
              ? void 0
              : n.length)),
            (this.replyText =
              (null == (o = t.detail) ? void 0 : o.value) ||
              (null == (i = null == t ? void 0 : t.target) ? void 0 : i.value));
        } catch (t) {}
      },
      onConfirm: function (e) {
        return (
          (o = this),
          null,
          (r = t().mark(function () {
            var e, o, r, a, u, c, d, s, p, h, l, m, f, v, y, b, g;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.disable) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (e = this.comEditData),
                        (o = e.toOpenid),
                        (r = e.touser),
                        (a = e.content),
                        (u = e.id),
                        (c = e.rootid),
                        (d = e.type2),
                        (s = e.symbol),
                        (p = e.topicId),
                        (h = {
                          stock_id: "",
                          content:
                            "reply" === d
                              ? ""
                                  .concat(this.replyText, "<1,")
                                  .concat(o, ":")
                                  .concat(r, "> ")
                                  .concat(a)
                              : "".concat(this.replyText),
                          parent_id: u,
                          root_id: d && "reply" === d ? c : u,
                          attitude: 0,
                        }),
                        s ? (h.stock_id = s) : p && (h.topics = p),
                        (h.to_user = o || ""),
                        (t.prev = 4),
                        (t.next = 7),
                        n.getPreSendInfo({ parent_id: u })
                      );
                    case 7:
                      if (((l = t.sent), (m = l.data), (f = m.send_token))) {
                        t.next = 12;
                        break;
                      }
                      return t.abrupt("return");
                    case 12:
                      return (h.send_token = f), (t.next = 15), n.putComment(h);
                    case 15:
                      if (
                        ((v = t.sent), (y = v.code), (b = v.data), -56001 != +y)
                      ) {
                        t.next = 20;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void i(
                          b ||
                            "您发布的内容包含敏感信息，待后台审核通过后再展示，请您耐心等待～"
                        )
                      );
                    case 20:
                      if (-56003 != +y) {
                        t.next = 22;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void i(b || "亲，帖子正在审核中，请稍稍等一下哦~")
                      );
                    case 22:
                      (g = v.data), this.loadNewComment(h, g), (t.next = 28);
                      break;
                    case 26:
                      (t.prev = 26), (t.t0 = t.catch(4));
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              u,
              this,
              [[4, 26]]
            );
          })),
          new Promise(function (t, e) {
            var n = function (t) {
                try {
                  a(r.next(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (t) {
                try {
                  a(r.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, i);
              };
            a((r = r.apply(o, null)).next());
          })
        );
        var o, r;
      },
      loadNewComment: function (t, e) {
        this.$emit("newComment", t, e), this.hideEdit();
      },
      hideEdit: function () {
        (this.focus = !1), (this.showComEdit = !1), this.$emit("hideComEdit");
      },
    },
  },
  a = e._export_sfc(r, [
    [
      "render",
      function (t, n, o, i, r, a) {
        return {
          a: e.o(function () {
            return a.hideEdit && a.hideEdit.apply(a, arguments);
          }, 2035),
          b: e.o(function () {
            return a.preventTouch && a.preventTouch.apply(a, arguments);
          }, 2036),
          c: o.headimageurl,
          d: r.focus,
          e: a.placeholder,
          f: -1,
          g: e.o(function () {
            return a.onInput && a.onInput.apply(a, arguments);
          }, 2037),
          h: e.o(function () {
            return a.onConfirm && a.onConfirm.apply(a, arguments);
          }, 2038),
          i: e.o(function () {
            return a.onConfirm && a.onConfirm.apply(a, arguments);
          }, 2039),
          j: e.n(r.disable ? "disable" : ""),
          k: e.n(r.animation),
          l: e.n(a.platformClass),
          m: r.inputBottom + "px",
          n: r.showComEdit,
          o: e.o(function () {
            return a.preventTouch && a.preventTouch.apply(a, arguments);
          }, 2040),
        };
      },
    ],
    ["__scopeId", "data-v-fcaa0aed"],
  ]);
wx.createComponent(a);
