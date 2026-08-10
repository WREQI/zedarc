var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../utils/constant"),
  i = require("../../utils/api"),
  a = require("../../utils/img"),
  s = require("../../utils/index"),
  n = require("../../utils/error-handle"),
  o = require("../../utils/language"),
  c = {
    sess: "",
    sid: "",
    prehandleHttpErrorCount: 0,
    refreshHttpErrorCounter: 0,
    verifyHttpErrorCounter: 0,
    areaBoundary: [],
    fgBindingList: [],
    initDragCfg: [],
    startDragPos: [],
    currDragPos: [],
  };
Component({
  behaviors: ["wx://component-export"],
  export: function () {
    return {
      show: this.show.bind(this),
      refresh: this.refresh.bind(this),
      destroy: this.destroy.bind(this),
    };
  },
  properties: {
    appId: { type: String, value: "" },
    appid: { type: String, value: "" },
    aidEncrypted: { type: String, value: "" },
    lang: { type: String, value: "zh-CN" },
    themeColor: {
      type: String,
      value: "#1A79FF",
      observer: function (t) {
        this.setData({ themeRgbaColor: (0, s.colorRgba)(t) });
      },
    },
  },
  languageChooser: null,
  data: {
    themeRgbaColor: "",
    title: "",
    btnVerifyText: "",
    requesting: !1,
    isShowCaptcha: !1,
    showLoadingCover: !1,
    showSuccessCover: !1,
    statusSuccessText: "",
    showLoadFailCover: !1,
    statusLoadFailText: "",
    showVerifyErrorCover: !1,
    verifyErrorText: "",
    sid: "",
    statusFailText: "",
    animateName: "",
    instruction: "",
    imgRate: 1,
    spriteConfig: { url: "", width: 0, height: 0, size: "" },
    bgConfig: { url: "", width: 0, height: 0, size_2d: [] },
    bgStyles: { url: "", height: 0, pos: "", size: "" },
    insStyles: [],
    showVerifyBtn: !1,
    clickCfg: null,
    clickElCfg: [],
    dragElCfg: [],
  },
  methods: {
    triggerVerify: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.triggerEvent("verify", t);
    },
    triggerError: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { errMsg: "" };
      this.triggerEvent("error", t);
    },
    getElRect: function (t, e) {
      this.createSelectorQuery()
        .select(t)
        .boundingClientRect(function (t) {
          e(t);
        })
        .exec();
    },
    getEventPos: function (t) {
      var e = t.touches[0];
      return [e.clientX, e.clientY];
    },
    prehandleHttpError: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function () {};
      (c.prehandleHttpErrorCount += 1),
        c.prehandleHttpErrorCount < 3
          ? this.getPrehandleData(t)
          : this.verifySuccess(
              (0, n.getErrorRes)(
                n.ERROR_TYPE.GET_CAPTCHA_CONFIG_REQUEST_ERROR,
                this.data.appId
              )
            );
    },
    getPrehandleData: function () {
      var t = this,
        e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : function () {};
      this.data.requesting ||
        (this.setData({ requesting: !0 }),
        wx.request({
          timeout: 15e3,
          url: i.PREHANDLE_URL,
          data: {
            lang: (0, o.langTransform)(this.data.lang),
            userLanguage: (0, o.langTransform)(this.data.lang),
            customize_aid: this.data.appId || this.data.appid,
            aid: this.data.appId || this.data.appid,
            aidEncrypted: this.data.aidEncrypted,
          },
          success: function (r) {
            if (200 === r.statusCode) {
              c.prehandleHttpErrorCount = 0;
              var i = r.data;
              if (i) {
                var a = "string" == typeof i ? JSON.parse(i.slice(1, -1)) : i,
                  s = a.subcapclass;
                "27" === s || "1408" === s || "10052" === s || s >= "30000"
                  ? (t.setData({ requesting: !1, isShowCaptcha: !0 }),
                    e && e(a))
                  : (t.triggerError({
                      errMsg:
                        "请升级插件版本2.0,并且使用小程序类型的CaptchaAppId",
                    }),
                    t.destroy());
              }
            } else t.setData({ requesting: !1 }), t.prehandleHttpError(e);
          },
          fail: function () {
            t.setData({ requesting: !1 }), t.prehandleHttpError(e);
          },
        }));
    },
    clearInstruction: function () {
      this.setData({ instruction: "" });
    },
    clearInsStyles: function () {
      this.setData({ insStyles: [] });
    },
    clearBg: function () {
      this.setData({
        bgConfig: { url: "", width: 0, height: 0, size_2d: [] },
        bgStyles: { url: "", height: 0, pos: "", size: "" },
      });
    },
    clearEl: function () {
      this.setData({ clickCfg: null, clickElCfg: [], dragElCfg: [] });
    },
    clearCover: function () {
      this.setData({
        showLoadingCover: !1,
        showSuccessCover: !1,
        showLoadFailCover: !1,
        showVerifyErrorCover: !1,
      });
    },
    clearElements: function () {
      this.setData({ showVerifyBtn: !1, title: "" }),
        this.clearInstruction(),
        this.clearBg(),
        this.clearCover(),
        this.clearEl(),
        this.clearInsStyles();
    },
    initConfig: function (t, i) {
      var s = this,
        n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : function () {};
      (c.sess = t.sess), t.sid && (c.sid = t.sid);
      var h = i.sprite_url,
        g = i.bg_elem_cfg,
        u = void 0 === g ? {} : g,
        l = i.verify_trigger_cfg,
        f = void 0 === l ? {} : l,
        d = i.lang,
        p = u.img_url,
        E = u.size_2d,
        v = u.click_cfg,
        C = { showVerifyBtn: !!f.verify_icon, clickCfg: v || null };
      (this.languageChooser = this.languageChooser || o.languageChooser),
        this.languageChooser.init(d),
        this.setData({
          title: this.languageChooser.getWord(o.KEYS_MAP.FRAME_VERIFICATION),
          btnVerifyText: this.languageChooser.getWord(o.KEYS_MAP.FRAME_OK),
          statusSuccessText: this.languageChooser.getWord(
            o.KEYS_MAP.NOTE_VERIFY_SUCCESS
          ),
          statusLoadFailText: this.languageChooser.getWord(
            o.KEYS_MAP.NOTE_IMG_LOAD_FAILED
          ),
        }),
        this.getElRect("#bgImg", function (t) {
          var i = t.width / E[0];
          (c.areaBoundary = [E[0] * i, E[1] * i]),
            (0, a.loadImg)({
              src: "".concat(r.API_DOMAIN).concat(p),
              onSuccess: function (t) {
                var o = {
                  url: "".concat(r.API_DOMAIN).concat(p),
                  width: t.width,
                  height: t.height,
                  size_2d: E,
                };
                h
                  ? (0, a.loadImg)({
                      src: "".concat(r.API_DOMAIN).concat(h),
                      onSuccess: function (t) {
                        s.setData(
                          e(
                            {
                              bgConfig: o,
                              imgRate: i,
                              spriteConfig: {
                                url: "".concat(r.API_DOMAIN).concat(h),
                                width: t.width,
                                height: t.height,
                                size: ""
                                  .concat(t.width * i, "px ")
                                  .concat(t.height * i, "px"),
                              },
                            },
                            C
                          ),
                          n
                        );
                      },
                    })
                  : s.setData(e({ imgRate: i, bgConfig: o }, C), n);
              },
            });
        });
    },
    initElments: function (t, e) {
      var r = this;
      this.initConfig(t, e, function () {
        r.initInstruction(e), r.initBg(e.bg_elem_cfg), r.initDragEl(e);
      });
    },
    initInstruction: function (t) {
      var e = t.instruction,
        r = t.ins_elem_cfg;
      if ((this.setData({ instruction: e }), r && r.length)) {
        var i = this.data.imgRate;
        this.setData({
          insStyles: r.map(function (t) {
            return {
              width: "".concat(t.size_2d[0] * i, "px"),
              height: "".concat(t.size_2d[1] * i, "px"),
              pos: ""
                .concat(-t.sprite_pos[0] * i, "px ")
                .concat(-t.sprite_pos[1] * i, "px"),
            };
          }),
        });
      }
    },
    initBg: function (t) {
      var e = t.size_2d,
        r = t.sprite_pos,
        i = this.data,
        a = i.bgConfig,
        s = i.imgRate,
        n = i.spriteConfig;
      a.url
        ? this.setData({
            bgStyles: {
              url: a.url,
              height: "".concat(e[1] * s, "px"),
              pos: "auto",
              size: "".concat(a.width * s, "px ").concat(a.height * s, "px"),
            },
          })
        : n.url &&
          r &&
          this.setData({
            bgStyles: {
              url: n.url,
              height: "".concat(e[1] * s, "px"),
              pos: "".concat(-r[0] * s, "px ").concat(-r[1] * s, "px"),
              size: "".concat(a.width * s, "px ").concat(a.height * s, "px"),
            },
          });
    },
    initDragEl: function (t) {
      var e = this;
      if (t.fg_elem_list && t.fg_elem_list.length) {
        var r = t.fg_elem_list,
          i = t.fg_binding_list,
          a = void 0 === i ? [] : i;
        c.fgBindingList = a || [];
        var n = this.data.imgRate,
          o = r.map(function (t) {
            var r = a.filter(function (e) {
              return e.master === t.id;
            })[0];
            return {
              id: t.id,
              className: t.type || "",
              boxShadow:
                "slider" === t.type
                  ? "0 0 "
                      .concat(10 * n, "px ")
                      .concat(n, "px ")
                      .concat((0, s.colorRgba)(e.data.themeColor, 0.5))
                  : "none",
              slaveId: r ? r.slave : "",
              moveCfg: t.move_cfg,
              width: t.size_2d[0] * n,
              height: t.size_2d[1] * n,
              left: t.init_pos[0] * n,
              top: t.init_pos[1] * n,
              pos: ""
                .concat(-t.sprite_pos[0] * n, "px ")
                .concat(-t.sprite_pos[1] * n, "px"),
            };
          });
        (c.initDragCfg = JSON.parse(JSON.stringify(o))),
          this.setData({ dragElCfg: o });
      }
    },
    updateDragPos: function (t, e, r) {
      var i = this.data.dragElCfg,
        a = [t];
      r &&
        c.initDragCfg.forEach(function (t, e) {
          t.id === r && a.push(e);
        }),
        a.forEach(function (t) {
          var r = i[t],
            a = c.initDragCfg[t],
            n = a.moveCfg.move_factor || [1, 1];
          (r.left = (0, s.setInRange)(
            a.left + (e[0] - c.startDragPos[0]) * n[0],
            [0, c.areaBoundary[0] - a.width]
          )),
            (r.top = (0, s.setInRange)(
              a.top + (e[1] - c.startDragPos[1]) * n[1],
              [0, c.areaBoundary[1] - a.height]
            )),
            (i[t] = r);
        }),
        this.setData({ dragElCfg: i });
    },
    onTouchStart: function (t) {
      var e = t.currentTarget.dataset.moveCfg;
      !this.data.requesting && e && (c.startDragPos = this.getEventPos(t));
    },
    onTouchMove: function (t) {
      var e = t.currentTarget.dataset,
        r = e.moveCfg,
        i = e.index,
        a = e.slaveId;
      !this.data.requesting &&
        r &&
        ((c.currDragPos = this.getEventPos(t)),
        this.updateDragPos(i, this.getEventPos(t), a));
    },
    onTouchEnd: function (t) {
      var e = this,
        r = t.currentTarget.dataset.moveCfg;
      if (!this.data.requesting && r) {
        c.startDragPos = c.currDragPos;
        var i = [];
        this.data.dragElCfg.forEach(function (t) {
          t.moveCfg &&
            t.moveCfg.data_type &&
            t.moveCfg.data_type.length &&
            t.moveCfg.data_type.forEach(function (r) {
              var a = "";
              "DynAnswerType_POS" === r &&
                (a = ""
                  .concat(Math.floor(t.left / e.data.imgRate), ",")
                  .concat(Math.floor(t.top / e.data.imgRate))),
                "DynAnswerType_CENTER_POS" === r &&
                  (a = ""
                    .concat(
                      Math.floor((t.left + t.width / 2) / e.data.imgRate),
                      ","
                    )
                    .concat(
                      Math.floor((t.top + t.height / 2) / e.data.imgRate)
                    )),
                i.push({ elem_id: t.id, type: r, data: a });
            });
        }),
          this.verify({ sess: c.sess, ans: JSON.stringify(i) });
      }
    },
    handleBgClick: function (e) {
      var r = this,
        i = this.data,
        a = i.clickCfg,
        s = i.clickElCfg,
        n = i.bgConfig,
        o = a ? a.data_type : "";
      a &&
        o &&
        this.getElRect("#bgImg", function (i) {
          var c = s.length,
            h = r.getEventPos(e),
            g = h[0] - i.left,
            u = h[1] - i.top;
          o.forEach(function (e) {
            if ("DynAnswerType_POS" === e) {
              var o;
              "inc_number" === a.mark_style
                ? (o = c + 1)
                : "icon" === a.mark_style || (o = void 0);
              var h = u / i.height,
                l = g / i.width,
                f = {
                  top: "".concat(100 * h, "%"),
                  left: "".concat(100 * l, "%"),
                  contentType: "number",
                  id: c + 1,
                  content: o,
                  type: e,
                  data: ""
                    .concat((n.size_2d[0] * l).toFixed(0), ",")
                    .concat((n.size_2d[1] * h).toFixed(0)),
                };
              r.setData({ clickElCfg: [].concat(t(s), [f]) });
            }
          });
        });
    },
    cancelClickEl: function (t) {
      var e = t.currentTarget.dataset.index,
        r = 0 === e ? [] : this.data.clickElCfg.slice(0, e);
      this.setData({ clickElCfg: r });
    },
    initFromPrehandle: function (t) {
      var e = this;
      this.getPrehandleData(function (r) {
        t && t(), e.clearElements();
        var i = r.data.dyn_show_info;
        e.initElments(r, i);
      });
    },
    verifySuccess: function (t) {
      var e = this,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = t.ticket,
        a = t.randstr;
      r && this.setData({ showSuccessCover: !0 }),
        setTimeout(function () {
          e.triggerVerify({ ret: 0, ticket: i, randstr: a }), e.destroy();
        }, 600);
    },
    verifyFail: function (t) {
      var e = this,
        r = t.errorCode,
        i = t.ticket,
        a = t.randstr;
      this.setData({
        animateName: "shake",
        statusFailText: this.languageChooser.getWord(
          o.KEYS_MAP.NOTE_VERIFY_FAILED
        ),
      }),
        setTimeout(function () {
          e.setData({
            animateName: "",
            statusFailText: "",
            clickElCfg: [],
            dragElCfg: JSON.parse(JSON.stringify(c.initDragCfg)),
          }),
            e.triggerVerify({ ret: r, ticket: i, randstr: a });
        }, 500);
    },
    verifyFailRefresh: function (t) {
      var e = this,
        r = t.errorCode,
        i = t.ticket,
        a = t.randstr;
      this.setData({
        animateName: "shake",
        statusFailText: this.languageChooser.getWord(
          o.KEYS_MAP.NOTE_VERIFY_FAILED_MAX
        ),
      }),
        setTimeout(function () {
          e.setData({ animateName: "", statusFailText: "" }, e.refresh),
            e.triggerVerify({ ret: r, ticket: i, randstr: a });
        }, 500);
    },
    verifyError: function (t) {
      var e = this,
        r = t.errorCode,
        i = t.ticket,
        a = t.randstr,
        s =
          "12" === t.errorCode
            ? o.KEYS_MAP.NOTE_VERIFY_ERROR
            : "52" === t.errorCode
            ? o.KEYS_MAP.NOTE_APPID_REGION_WRONG
            : o.KEYS_MAP.NOTE_VERIFY_DEFAULT;
      this.setData({
        showVerifyErrorCover: !0,
        verifyErrorText: this.languageChooser.getWord(s),
        sid: c.sid || "",
      }),
        setTimeout(function () {
          e.triggerVerify({ ret: r, ticket: i, randstr: a }), e.refresh();
        }, 1e3);
    },
    verifyTimeout: function (t) {
      var e = t.errorCode,
        r = t.ticket,
        i = t.randstr;
      this.triggerVerify({ ret: e, ticket: r, randstr: i }),
        this.initFromPrehandle();
    },
    verifyHttpError: function () {
      var t = this;
      (c.verifyHttpErrorCounter += 1),
        c.refreshHttpErrorCounter < 3
          ? (this.setData({
              animateName: "shake",
              statusFailText: this.languageChooser.getWord(
                o.KEYS_MAP.NOTE_VERIFY_TIMEOUT
              ),
            }),
            setTimeout(function () {
              t.setData({ animateName: "", statusFailText: "" }, t.refresh);
            }, 500))
          : this.verifySuccess(
              (0, n.getErrorRes)(
                n.ERROR_TYPE.VERIFY_ERROR,
                this.data.appId || this.data.appid
              )
            );
    },
    verify: function (t) {
      var e = this;
      if (!this.data.requesting && this.data.isShowCaptcha) {
        this.setData({ requesting: !0 });
        var r = {
          0: function (t) {
            return e.verifySuccess(t, !0);
          },
          9: function (t) {
            return e.verifyFailRefresh(t);
          },
          12: function (t) {
            return e.verifyError(t);
          },
          20: function (t) {
            return e.verifyTimeout(t);
          },
          50: function (t) {
            return e.verifyFail(t);
          },
          52: function (t) {
            return e.verifyError(t);
          },
          206: function (t) {
            return e.verifyTimeout(t);
          },
          default: function (t) {
            return e.verifyError(t);
          },
        };
        wx.request({
          timeout: 15e3,
          method: "POST",
          url: i.VERIFY_URL,
          header: { "content-type": "application/x-www-form-urlencoded" },
          data: t,
          success: function (t) {
            if ((e.setData({ requesting: !1 }), 200 === t.statusCode)) {
              c.verifyHttpErrorCounter = 0;
              var i = t.data,
                a = i.errorCode,
                s = i.sess;
              (c.sess = s), setTimeout(r[a] || r.default, 0, i);
            } else e.verifyHttpError();
          },
          fail: function () {
            e.setData({ requesting: !1 }, e.verifyHttpError);
          },
        });
      }
    },
    handleClickVerify: function () {
      var e = this.data.clickElCfg.reduce(function (e, r) {
          return [].concat(t(e), [
            { elem_id: r.id, type: r.type, data: r.data },
          ]);
        }, []),
        r = { ans: JSON.stringify(e), sess: c.sess };
      this.verify(r);
    },
    show: function () {
      var t = this;
      this.setData({ themeRgbaColor: (0, s.colorRgba)(this.data.themeColor) }),
        this.initFromPrehandle(function () {
          t.triggerEvent("ready", {});
        });
    },
    refreshSuccess: function (t) {
      this.clearEl(),
        this.clearInsStyles(),
        this.clearBg(),
        this.clearCover(),
        this.initElments(t, t.data);
    },
    refreshHttpError: function () {
      (c.refreshHttpErrorCounter += 1),
        c.refreshHttpErrorCounter < 3
          ? this.setData({ showLoadFailCover: !0 })
          : this.verifySuccess(
              (0, n.getErrorRes)(
                n.ERROR_TYPE.REFRESH_ERROR,
                this.data.appId || this.data.appid
              )
            );
    },
    refresh: function () {
      var t = this;
      if (!this.data.requesting && this.data.isShowCaptcha) {
        this.setData({ requesting: !0, showLoadFailCover: !1 });
        var e = {
          0: function (e) {
            return t.refreshSuccess(e);
          },
          default: function () {
            return t.initFromPrehandle();
          },
        };
        wx.request({
          timeout: 15e3,
          method: "POST",
          header: { "content-type": "application/x-www-form-urlencoded" },
          url: i.REFRESH_URL,
          data: { sess: c.sess },
          success: function (r) {
            if ((t.setData({ requesting: !1 }), 200 === r.statusCode)) {
              c.refreshHttpErrorCounter = 0;
              var i = r.data,
                a = e[i.ret] || e.default;
              setTimeout(a, 0, i);
            } else t.refreshHttpError();
          },
          fail: function () {
            t.setData({ requesting: !1 }, t.refreshHttpError);
          },
        });
      }
    },
    destroy: function (t) {
      (c.sess = ""),
        (c.sid = ""),
        (c.prehandleHttpErrorCount = 0),
        (c.refreshHttpErrorCounter = 0),
        (c.verifyHttpErrorCounter = 0),
        (c.areaBoundary = []),
        (c.fgBindingList = []),
        (c.initDragCfg = []),
        (c.startDragPos = []),
        (c.currDragPos = []);
      var e = t ? 2 : 0;
      this.clearElements(),
        this.setData({ isShowCaptcha: !1, requesting: !1 }),
        this.triggerEvent("close", { ret: e });
    },
  },
});
