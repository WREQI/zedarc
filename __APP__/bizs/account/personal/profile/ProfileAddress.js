var e = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  s = require("./mixin.js"),
  a = require("../../../../model/apply/profile/utils/address.js"),
  c = require("../../../../utils/getPlatform.js"),
  u = require("../../../../cgi/apply.js"),
  l = require("../../../../common/components/Dialog/index.js"),
  d = require("../../../../stores/apply/useAddress.js"),
  h = require("../../../../service/aegis/platform/not-wujie.js"),
  m = c.getPlatform(),
  p = m.isWeixin,
  g = void 0 !== p && p,
  f = m.platform,
  b = ["号", "室", "房", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  S = ["省", "市", "州", "旗", "区", "盟", "县", "乡", "镇", "路", "街", "道"],
  k = {
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
      StCellGroup: function () {
        return "../../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
      DistrictSelect: function () {
        return "./DistrictSelect.js";
      },
      SuggestionList: function () {
        return "./SuggestionList.js";
      },
    },
    mixins: [s.ProfileComponentMixin],
    props: {
      ignoreSplitFailure: { type: Boolean, default: !1 },
      biz: { type: String, required: !0 },
    },
    setup: function () {
      var e = d.useAddressStore(),
        t = n.storeToRefs(e).codes,
        r = e.onPickerChange;
      return {
        codes: t,
        onPickerChange: r,
        onPickerChangeDebounce: n.debounce(r, 100),
      };
    },
    data: function () {
      return {
        isPickerShow: !1,
        showPicker: !1,
        errText: "",
        location: { area: [], street: "", houseNumber: "" },
        isWechat: g,
        wechatAddrInfo: null,
        suggestionList: [],
        streetFocus: !1,
        houseNumberFocus: !1,
        errorBorderShow: !1,
        isHouseNumberShow: !1,
        timer: null,
        isSuggestListShow: !1,
        isSuggesting: !1,
        initSdkOnce: !1,
        isHold: !1,
      };
    },
    computed: {
      address: function () {
        return []
          .concat(i(this.location.area), [
            this.location.street,
            this.location.houseNumber,
          ])
          .join("");
      },
      isSubmitable: function () {
        return this.location.area.join("") && this.location.street;
      },
      areaWithCrossbarareaWithCrossbar: function () {
        return this.location.area
          .filter(function (e) {
            return e;
          })
          .join("-");
      },
    },
    watch: {
      isShow: function (e) {
        var t = this;
        e
          ? setTimeout(function () {
              t.streetFocus = !0;
            }, 300)
          : (this.streetFocus = !1);
      },
      "location.area": function () {
        this.onPickerChange(this.location.area, { ignoreFail: !0 });
      },
      isPickerShow: function (e) {
        e && this.onPickerChange(this.location.area || []);
      },
    },
    methods: {
      setData: function (e) {
        this.setAddress(e[this.item.key]);
      },
      valid: function (e, t) {
        var i = this;
        return o(
          r().mark(function o() {
            var n;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (i.areaWithCrossbarareaWithCrossbar) {
                      r.next = 2;
                      break;
                    }
                    throw "请选择所在区域";
                  case 2:
                    if (
                      !(
                        (i.item.data.minLength &&
                          e.street.length + e.houseNumber.length <
                            i.item.data.minLength) ||
                        (i.item.data.maxLength &&
                          e.street.length + e.houseNumber.length >
                            i.item.data.maxLength)
                      )
                    ) {
                      r.next = 4;
                      break;
                    }
                    throw "详细地址长度需为"
                      .concat(i.item.data.minLength || 0, " - ")
                      .concat(i.item.data.maxLength || "无上限");
                  case 4:
                    if (
                      ((n = (
                        i.location.street + i.location.houseNumber
                      ).replace(/[\s\f\t\n]/g, "")),
                      !/^[0-9a-zA-Z一二三四五六七八九十]{1,}$/.test(n))
                    ) {
                      r.next = 7;
                      break;
                    }
                    throw "请输入真实有效的地址，地址需精确到门牌号";
                  case 7:
                    if (((r.t0 = i.item.data.valid), !r.t0)) {
                      r.next = 11;
                      break;
                    }
                    return (r.next = 11), i.item.data.valid(e, t);
                  case 11:
                    return r.abrupt("return", !0);
                  case 12:
                  case "end":
                    return r.stop();
                }
            }, o);
          })
        )();
      },
      onClose: function (e) {
        e || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (e) {
        var i = this;
        return o(
          r().mark(function o() {
            var n, s, c, u, d, h;
            return r().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        i.item.data.trim &&
                          (i.location.street = i.item.data.trim(
                            i.location.street
                          )),
                        (s = i.address),
                        (c = i.location),
                        (u = c.street),
                        (d = c.houseNumber),
                        (r.t0 = s),
                        (r.t1 = u),
                        (r.t2 = d),
                        (r.next = 10),
                        a.addressUtil.splitAddress(s, { ignoreFail: !0 })
                      );
                    case 10:
                      return (
                        (r.t3 = r.sent.filter(function (e, t) {
                          return e && t < 2;
                        })),
                        (h = {
                          address: r.t0,
                          street: r.t1,
                          houseNumber: r.t2,
                          topTwoAddress: r.t3,
                        }),
                        (r.prev = 12),
                        (r.next = 15),
                        i.valid(h, i.formData)
                      );
                    case 15:
                      r.next = 20;
                      break;
                    case 17:
                      return (
                        (r.prev = 17),
                        (r.t4 = r.catch(12)),
                        r.abrupt(
                          "return",
                          (i.showToast(r.t4), void (null == e || e(!1)))
                        )
                      );
                    case 20:
                      if (i.errText || i.validReasonable()) {
                        r.next = 22;
                        break;
                      }
                      return r.abrupt(
                        "return",
                        ((i.errorBorderShow = !0),
                        (i.errText = "门牌号缺失，可能无法通过审核"),
                        i.$stat.click(
                          "trade."
                            .concat(
                              i.biz,
                              ".personaldate.house_number_miss_modal_show."
                            )
                            .concat(i.item.key)
                        ),
                        l.Dialog({
                          message: i.errText,
                          showCancelButton: !0,
                          cancelButtonText: "继续提交",
                          confirmButtonText: "重新填写",
                          onCancel: function () {
                            i.$stat.click(
                              "trade."
                                .concat(
                                  i.biz,
                                  ".personaldate.miss_modal_continue_submit."
                                )
                                .concat(i.item.key)
                            ),
                              i.onBeforeClose(e);
                          },
                          onConfirm: function () {
                            i.$stat.click(
                              "trade."
                                .concat(
                                  i.biz,
                                  ".personaldate.miss_modal_fill_again."
                                )
                                .concat(i.item.key)
                            ),
                              setTimeout(function () {
                                i.isHouseNumberShow
                                  ? (i.houseNumberFocus = !0)
                                  : (i.streetFocus = !0);
                              }, 300);
                          },
                        }),
                        void (null == e || e(!1)))
                      );
                    case 22:
                      if (!i.item.data.confirm) {
                        r.next = 31;
                        break;
                      }
                      return (
                        (r.prev = 23),
                        (r.next = 26),
                        i.item.data.confirm(h, i.formData)
                      );
                    case 26:
                      r.next = 31;
                      break;
                    case 28:
                      return (
                        (r.prev = 28),
                        (r.t5 = r.catch(23)),
                        r.abrupt("return", void (null == e || e(!1)))
                      );
                    case 31:
                      i.$stat.click(
                        "trade."
                          .concat(i.biz, ".personaldate.")
                          .concat(i.item.key, ".confirm")
                      ),
                        i.commitData(
                          (t((n = {}), i.item.key, i.address),
                          t(n, "province_code", i.codes[0]),
                          t(n, "city_code", i.codes[1]),
                          t(n, "area_code", i.codes[2]),
                          t(n, "detailed_address", i.location.street),
                          n)
                        ),
                        i.$nextTick(i.resetData),
                        null == e || e();
                    case 32:
                    case "end":
                      return r.stop();
                  }
              },
              o,
              null,
              [
                [12, 17],
                [23, 28],
              ]
            );
          })
        )();
      },
      resetData: function () {
        (this.errText = ""),
          (this.location.area = []),
          (this.location.street = ""),
          (this.location.houseNumber = ""),
          (this.suggestionList = []),
          (this.isHouseNumberShow = !1),
          (this.isSuggestListShow = !1);
      },
      onPickerClose: function () {
        (this.isPickerShow = !1),
          this.onPickerChange(this.location.area, { ignoreFail: !0 });
      },
      onPickerConfirm: function (e) {
        this.location.area = e;
      },
      setAddress: function (e) {
        var t = this;
        return o(
          r().mark(function i() {
            var s, c, u;
            return r().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (i.prev = 0),
                        (i.next = 3),
                        a.addressUtil.splitAddress(e)
                      );
                    case 3:
                      return (
                        (s = i.sent), (i.next = 6), a.addressUtil.getSelected(s)
                      );
                    case 6:
                      (c = i.sent),
                        (u = c.codes),
                        !t.ignoreSplitFailure &&
                        u.some(function (e) {
                          return !e;
                        })
                          ? ((t.location.area = []), (t.location.street = ""))
                          : ((t.location.area = [s[0], s[1], s[2]]),
                            (t.location.street = s[3] || "")),
                        (i.next = 14);
                      break;
                    case 11:
                      (i.prev = 11),
                        (i.t0 = i.catch(0)),
                        i.t0.retcode === a.errType.fetchFail &&
                          l.Dialog({
                            message: i.t0.retmsg,
                            showCancelButton: !0,
                            confirmButtonText: "重试",
                            onConfirm: (function () {
                              var i = o(
                                r().mark(function o() {
                                  return r().wrap(function (r) {
                                    for (;;)
                                      switch ((r.prev = r.next)) {
                                        case 0:
                                          return (
                                            n.index.showLoading(),
                                            (r.next = 3),
                                            t.setAddress(e)
                                          );
                                        case 3:
                                          n.index.hideLoading();
                                        case 4:
                                        case "end":
                                          return r.stop();
                                      }
                                  }, o);
                                })
                              );
                              return function () {
                                return i.apply(this, arguments);
                              };
                            })(),
                          });
                    case 14:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[0, 11]]
            );
          })
        )();
      },
      validReasonable: function () {
        var e = !1,
          t = this.location.street + this.location.houseNumber;
        if (
          ((e = !1),
          /[A-Za-z0-9]/.test(t) && (e = e || !0),
          !(e =
            e ||
            b.some(function (e) {
              return t.includes(e);
            })))
        )
          return !1;
        e = !1;
        var r = [].concat(S, i(this.item.data.keywordList2 || []));
        return !(e =
          e ||
          r.some(function (e) {
            return t.endsWith(e);
          }));
      },
      onFocus: function () {
        (this.errorBorderShow = !1), clearTimeout(this.timer);
      },
      onBlur: function () {
        var e = this;
        setTimeout(function () {
          e.isHold || (e.isSuggestListShow = !1);
        });
      },
      onHouseNumberBlur: function () {
        this.houseNumberFocus = !1;
      },
      clearHandler: function () {
        var e = this;
        (this.location.street = ""),
          (this.streetFocus = !1),
          setTimeout(function () {
            e.streetFocus = !0;
          }, 300);
      },
      importWechatAddr: function () {
        var e = this;
        return o(
          r().mark(function t() {
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    setTimeout(
                      o(
                        r().mark(function t() {
                          var o, i, s, c, u, l, d, m, p;
                          return r().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((t.prev = 0),
                                      e.$stat.click(
                                        "trade."
                                          .concat(
                                            e.biz,
                                            ".personaldate.address_from_wechat."
                                          )
                                          .concat(e.item.key)
                                      ),
                                      (t.t0 =
                                        (null == window
                                          ? void 0
                                          : window.__POWERED_BY_WUJIE__) &&
                                        !e.initSdkOnce &&
                                        "android" === f),
                                      !t.t0)
                                    ) {
                                      t.next = 9;
                                      break;
                                    }
                                    return (
                                      n.index.showLoading({ title: "加载中" }),
                                      (t.next = 7),
                                      e.$sdk.initSdk()
                                    );
                                  case 7:
                                    (e.initSdkOnce = !0), n.index.hideLoading();
                                  case 9:
                                    return (
                                      (t.next = 11), e.$sdk.importAddress()
                                    );
                                  case 11:
                                    return (
                                      (o = t.sent),
                                      (i = o.provinceName),
                                      (s = o.cityName),
                                      (c = o.countyName),
                                      (u = void 0 === c ? null : c),
                                      (l = o.detailInfo),
                                      (d = o.countryName),
                                      (m = (m = void 0 === d ? null : d) || u),
                                      (e.location.area =
                                        a.addressUtil.MUNICIAPLITY.includes(i)
                                          ? [i, m, ""]
                                          : [i, s, m]),
                                      (e.location.street = l),
                                      e.$stat.click(
                                        "trade."
                                          .concat(
                                            e.biz,
                                            ".personaldate.address_from_wechat_success."
                                          )
                                          .concat(e.item.key)
                                      ),
                                      (t.next = 21),
                                      a.addressUtil.getSelected(
                                        e.location.area,
                                        { ignoreFail: !0 }
                                      )
                                    );
                                  case 21:
                                    (p = t.sent),
                                      p.codes.some(function (e) {
                                        return !e;
                                      }) &&
                                        e.$stat.click(
                                          "trade."
                                            .concat(
                                              e.biz,
                                              ".personaldate.split_fail_from_wechat."
                                            )
                                            .concat(e.item.key)
                                        ),
                                      h.aegisReporter.reportEvent(
                                        "MONITOR-APPLY-ADDRESS-WECHAT-SUC"
                                      ),
                                      (t.next = 30);
                                    break;
                                  case 26:
                                    (t.prev = 26),
                                      (t.t1 = t.catch(0)),
                                      "EFAILED" === t.t1.retcode &&
                                        (n.index.showToast({
                                          title:
                                            "微信地址导入失败，请手动填写联系地址",
                                          icon: "none",
                                        }),
                                        h.aegisReporter.reportEvent(
                                          "MONITOR-APPLY-ADDRESS-WECHAT-FAIL",
                                          { ext2: f, ext3: t.t1 }
                                        ));
                                  case 30:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 26]]
                          );
                        })
                      ),
                      100
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )();
      },
      addrSuggestion: n.debounce(
        o(
          r().mark(function t() {
            var o, i, n, s, a, c, l, d;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !(
                          this.ignoreSplitFailure &&
                          this.location.street.length &&
                          this.location.street.length > 1
                        ) ||
                        this.isSuggesting
                      ) {
                        t.next = 20;
                        break;
                      }
                      return (
                        (o = this.location),
                        (i = e(o.area, 2)),
                        i[0],
                        (n = i[1]),
                        (s = o.street),
                        (t.prev = 2),
                        (a = this.getTimeStamp()),
                        (t.next = 6),
                        u.applyCgi.processApplyAccount(u.ACTION.SUGGEST_ADDR, {
                          params: JSON.stringify({
                            keyword: s,
                            region: n || "",
                            policy: "1",
                          }),
                        })
                      );
                    case 6:
                      (c = t.sent),
                        (l = c.data),
                        (d = this.getTimeStamp()),
                        h.aegisReporter.reportTime(
                          "SUGGEST_ADDR_VELOCITY",
                          Math.floor(d - a)
                        ),
                        (this.suggestionList = l || []),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(2)),
                        (this.suggestionList = []),
                        this.$stat.click(
                          "trade."
                            .concat(
                              this.biz,
                              ".personaldate.address_suggestion_fail."
                            )
                            .concat(this.item.key)
                        ),
                        h.aegisReporter.reportEvent("ADDRESS-IMPORT-FAIL", {
                          ext2: "suggestion",
                          ext3: t.t0,
                        });
                    case 15:
                      return (
                        (t.prev = 15), (this.isSuggesting = !1), t.finish(15)
                      );
                    case 18:
                      t.next = 21;
                      break;
                    case 20:
                      this.suggestionList = [];
                    case 21:
                      this.isSuggestListShow = !!this.suggestionList.length;
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[2, 12, 15, 18]]
            );
          })
        ),
        200
      ),
      closeSuggestion: function () {
        (this.isHold = !1), (this.isSuggestListShow = !1);
      },
      chooseSuggestion: function (e) {
        var t = this;
        return o(
          r().mark(function o() {
            var i, n, s, c, u, l, d, h;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (i = t.suggestionList.find(function (t) {
                        return t.id === e.id;
                      })),
                      (n = i.province),
                      (s = i.city),
                      (c = i.district),
                      (u = i.title),
                      (l = i.address),
                      (t.location.area = a.addressUtil.MUNICIAPLITY.includes(n)
                        ? [n, c, ""]
                        : [n, s, c]),
                      t.location.area.forEach(function (e) {
                        l.startsWith(e) && (l = l.slice(e.length));
                      }),
                      t.$stat.click(
                        "trade."
                          .concat(
                            t.biz,
                            ".personaldate.address_from_suggestion."
                          )
                          .concat(t.item.key)
                      ),
                      (t.location.street = l + u),
                      (r.next = 5),
                      a.addressUtil.getSelected(t.location.area, {
                        ignoreFail: !0,
                      })
                    );
                  case 5:
                    (d = r.sent),
                      (null == (h = d.codes)
                        ? void 0
                        : h.some(function (e) {
                            return !e;
                          })) &&
                        t.$stat.click(
                          "trade."
                            .concat(
                              t.biz,
                              ".personaldate.split_fail_from_suggestion."
                            )
                            .concat(t.item.key)
                        ),
                      (t.isSuggestListShow = !1),
                      (t.isHouseNumberShow = !0),
                      (t.isHold = !1),
                      setTimeout(function () {
                        t.houseNumberFocus = !0;
                      }, 300);
                  case 8:
                  case "end":
                    return r.stop();
                }
            }, o);
          })
        )();
      },
      getTimeStamp: function () {
        return Date.now();
      },
      holdSuggestList: function () {
        this.isHold = !0;
      },
    },
  };
Array ||
  (
    n.resolveComponent("st-cell") +
    n.resolveComponent("suggestion-list") +
    n.resolveComponent("st-cell-group") +
    n.resolveComponent("mp-action-sheet") +
    n.resolveComponent("district-select") +
    n.resolveComponent("mp-dialog")
  )();
var w = n._export_sfc(k, [
  [
    "render",
    function (e, t, r, o, i, s) {
      return n.e(
        { a: e.isShow && s.areaWithCrossbarareaWithCrossbar.length > 0 },
        e.isShow && s.areaWithCrossbarareaWithCrossbar.length > 0
          ? {
              b: s.areaWithCrossbarareaWithCrossbar.length > 0,
              c: s.areaWithCrossbarareaWithCrossbar,
              d: n.o(function (e) {
                return (s.areaWithCrossbarareaWithCrossbar = e.detail.value);
              }),
            }
          : {},
        {
          e: n.o(function (e) {
            i.isPickerShow = !0;
          }),
          f: n.p({ border: !1 }),
          g: e.item.data.maxLength || 20,
          h: e.placeholder || "请填写",
          i: i.streetFocus,
          j: n.o([
            function (e) {
              return (i.location.street = e.detail.value);
            },
            function () {
              return s.addrSuggestion && s.addrSuggestion.apply(s, arguments);
            },
          ]),
          k: n.o(function () {
            return s.onFocus && s.onFocus.apply(s, arguments);
          }),
          l: n.o(function () {
            return s.onBlur && s.onBlur.apply(s, arguments);
          }),
          m: i.location.street,
          n: i.location.street,
        },
        i.location.street
          ? {
              o: n.o(function () {
                return s.clearHandler && s.clearHandler.apply(s, arguments);
              }),
            }
          : {},
        {
          p: i.errorBorderShow ? 1 : "",
          q: n.p({ border: !1 }),
          r: i.location.street && i.isSuggestListShow,
        },
        i.location.street && i.isSuggestListShow
          ? {
              s: e.item.id,
              t: n.o(s.closeSuggestion),
              v: n.o(s.chooseSuggestion),
              w: n.o(s.holdSuggestList),
              x: n.p({
                "suggestion-list": i.suggestionList,
                keyword: i.location.street,
              }),
            }
          : {},
        { y: i.isHouseNumberShow },
        i.isHouseNumberShow
          ? {
              z: i.errorBorderShow ? 1 : "",
              A: i.houseNumberFocus,
              B: n.o(function () {
                return s.onFocus && s.onFocus.apply(s, arguments);
              }),
              C: n.o(function () {
                return (
                  s.onHouseNumberBlur && s.onHouseNumberBlur.apply(s, arguments)
                );
              }),
              D: n.o(function (t) {
                return e.$stat.click(
                  "trade."
                    .concat(r.biz, ".personaldate.house_number_input_click.")
                    .concat(e.item.key)
                );
              }),
              E: i.location.houseNumber,
              F: n.o(function (e) {
                return (i.location.houseNumber = e.detail.value);
              }),
            }
          : {},
        { G: n.p({ border: !1 }), H: n.p({ border: !1 }), I: i.errText },
        i.errText ? { J: n.t(i.errText) } : {},
        { K: i.isWechat && r.ignoreSplitFailure },
        i.isWechat && r.ignoreSplitFailure
          ? {
              L: n.o(function () {
                return (
                  s.importWechatAddr && s.importWechatAddr.apply(s, arguments)
                );
              }),
            }
          : {},
        {
          M: i.isWechat || i.isHouseNumberShow || !i.isSuggestListShow ? "" : 1,
          N: s.isSubmitable ? "" : 1,
          O: n.o(s.onClose),
          P: n.p({
            "picker-style": !0,
            "mask-closable": !0,
            value: e.isShow,
            title: e.title,
            "confirm-txt": "确定",
            "before-close": s.onBeforeClose,
          }),
          Q: i.isPickerShow,
        },
        i.isPickerShow
          ? {
              R: n.o(s.onPickerClose),
              S: n.o(o.onPickerChangeDebounce),
              T: n.o(s.onPickerConfirm),
              U: n.p({ "is-show": i.isPickerShow, title: e.title }),
            }
          : {},
        { V: n.p({ id: "mp-dialog" }) }
      );
    },
  ],
  ["__scopeId", "data-v-c8f18fda"],
]);
wx.createComponent(w);
