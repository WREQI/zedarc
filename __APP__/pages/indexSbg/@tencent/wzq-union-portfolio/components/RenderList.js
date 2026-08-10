var o = require("../../../../../common/vendor.js"),
  t = require("../Index.js"),
  e = require("../store/useStocksStore.js"),
  r = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  n = {
    components: {
      DynamicHeightPlaceholder: function () {
        return "./DynamicHeightPlaceholder.js";
      },
      RenderSection: function () {
        return "./RenderStockSection/mp.js";
      },
      Empty: function () {
        return "./Empty.js";
      },
      AddStock: function () {
        return "./AddStock.js";
      },
      ChooseRecommend: function () {
        return "../node-modules/@tencent/st-choose-recommend/components/recommend/index.js".then(
          function (o) {
            return o.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS11bmlvbi1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWNob29zZS1yZWNvbW1lbmQvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVl;
          }
        );
      },
    },
    props: {
      groupId: { type: String, default: "1", required: !0 },
      noStock: { type: Boolean, default: !1, required: !0 },
      isStockList: { type: Boolean, default: !1, required: !0 },
      isLoadingShow: { type: Boolean, default: !0, required: !0 },
      protocolStatus: { type: String, default: "" },
      showPrivacyPolicyBar: { type: Boolean, default: !1 },
      groupType: { type: String, default: "" },
      redpockets: {
        type: Array,
        default: function () {
          return [];
        },
      },
      showPosition: { type: Boolean, default: !1 },
      isAllStock: { type: Boolean, default: !0 },
      skin: { type: String, default: "white" },
    },
    emits: ["show-policy-modal", "calculate-card-height", "sort"],
    setup: function (n, i) {
      var c,
        u = i.emit,
        s =
          (null == (c = o.getCurrentInstance()) ? void 0 : c.proxy) ||
          o.getCurrentInstance(),
        l = t.usePortfolioViewHook(),
        d = o.StockBridge.ENV === o.EnvTypeEnum.MP,
        a = e.useStocksStore(),
        p = r.useViewStore(),
        S = o.computed(function () {
          return a.renderListSections[n.groupId] || [];
        }),
        g = o.computed(function () {
          return a.getCurFilterCount(n.groupId);
        }),
        k = o.computed(function () {
          return a.renderListCount[n.groupId] || 0;
        }),
        m = o.computed(function () {
          return 1 === a.filterMap[n.groupId];
        }),
        L = o.computed(function () {
          return m.value
            ? a.renderHkCount[n.groupId] || 0
            : (a.stockList[n.groupId] || {}).hkstocklen || 0;
        }),
        h = o.computed(function () {
          return p.stockItemHeight || 98.4;
        }),
        y = o.computed(function () {
          return "agree" === n.protocolStatus;
        }),
        f = o.computed(function () {
          return m.value && !n.noStock
            ? "当前暂无异动个股"
            : y.value
            ? "添加自选，随时帮你智能盯盘"
            : "查看自选，随时帮您智能盯盘";
        }),
        P = o.computed(function () {
          return y.value
            ? d
              ? {}
              : g.value > 0
              ? { height: k.value * h.value + "px" }
              : {}
            : {};
        }),
        v = o.computed(function () {
          return a.curGroupId === n.groupId;
        }),
        I = o.computed(function () {
          return a.chooseSymbolList;
        }),
        b = o.computed(function () {
          return a.hkVIP;
        }),
        C = o.computed(function () {
          return d
            ? null
            : p.visibleSectionRange[n.groupId] || { start: 0, end: 2 };
        }),
        w = o.computed(function () {
          return { transform: "translateY(".concat(k.value * h.value, "px)") };
        });
      o.watch(
        function () {
          return v.value;
        },
        function (t) {
          t &&
            o.nextTick$1(function () {
              l.setContentHeight(s, n.noStock, u);
            });
        }
      );
      var A = t.useJumpPagesHook(),
        R = A.gotoSearchPage,
        H = A.gotoHotPage;
      return {
        curRenderListSections: S,
        curRenderListCount: k,
        curFilterListLen: g,
        itemHeight: h,
        isMpLite: !1,
        isH5Pro: !1,
        isMPPro: !0,
        isProtocolAgreed: y,
        scrollContentStyle: P,
        hkstocklen: L,
        isCurrent: v,
        chooseSymbolList: I,
        doSearch: function () {
          if (y.value)
            return (
              R({ groupType: n.groupType, groupId: n.groupId }),
              void o.StockBridge.report(t.CHOOSE_TRIGGER_TOP_SEARCH.key)
            );
          u("show-policy-modal");
        },
        visibleRange: C,
        hanldeStort: function (o) {
          u("sort", o);
        },
        goHotStock: function () {
          y.value ? H() : u("show-policy-modal");
        },
        isfilteLabel: m,
        emptyText: f,
        isMP: d,
        dotsStyle: w,
        hkVIP: b,
        showSections: function (o) {
          return !!d || (o >= C.value.start - 2 && o <= C.value.end + 2);
        },
      };
    },
  };
Array ||
  (
    o.resolveComponent("RenderSection") +
    o.resolveComponent("Empty") +
    o.resolveComponent("choose-recommend") +
    o.resolveComponent("add-stock") +
    o.resolveComponent("DynamicHeightPlaceholder")
  )();
var i = o._export_sfc(n, [
  [
    "render",
    function (t, e, r, n, i, c) {
      return o.e(
        { a: r.isStockList },
        r.isStockList
          ? o.e(
              {
                b: o.f(n.curRenderListSections, function (t, e, i) {
                  return o.e(
                    { a: n.showSections(e) },
                    n.showSections(e)
                      ? {
                          b: o.o(n.hanldeStort, 3490, e),
                          c: "7ae0b62b-0-" + i,
                          d: o.p({
                            "group-id": r.groupId,
                            "section-index": e,
                            redpockets: r.redpockets,
                            "show-position": r.showPosition,
                            skin: r.skin,
                          }),
                        }
                      : {},
                    { e: e }
                  );
                }),
                c:
                  n.isMP &&
                  !r.noStock &&
                  n.curRenderListCount < n.curFilterListLen,
              },
              (n.isMP &&
                !r.noStock &&
                (n.curRenderListCount, n.curFilterListLen),
              {})
            )
          : {},
        {
          d:
            !r.isLoadingShow &&
            (!n.curFilterListLen ||
              ("" !== r.protocolStatus && "agree" !== r.protocolStatus)),
        },
        r.isLoadingShow ||
          (n.curFilterListLen &&
            ("" === r.protocolStatus || "agree" === r.protocolStatus))
          ? {}
          : o.e(
              { e: r.isAllStock },
              r.isAllStock
                ? o.e(
                    {
                      f: o.p({ text: n.emptyText }),
                      g: r.noStock || !n.isfilteLabel,
                    },
                    r.noStock || !n.isfilteLabel
                      ? o.e(
                          { h: n.isProtocolAgreed },
                          (n.isProtocolAgreed, {}),
                          {
                            i: o.t(
                              n.isProtocolAgreed ? "添加股票" : "查看自选股票"
                            ),
                            j: o.o(function () {
                              return (
                                n.doSearch && n.doSearch.apply(n, arguments)
                              );
                            }, 3491),
                          }
                        )
                      : {},
                    {
                      k:
                        (n.isMPPro || n.isH5Pro) &&
                        n.isProtocolAgreed &&
                        !n.isfilteLabel,
                    },
                    (n.isMPPro || n.isH5Pro) &&
                      n.isProtocolAgreed &&
                      !n.isfilteLabel
                      ? {
                          l: o.o(function () {
                            return (
                              n.goHotStock && n.goHotStock.apply(n, arguments)
                            );
                          }, 3492),
                        }
                      : {}
                  )
                : {},
              {
                m:
                  n.chooseSymbolList &&
                  ("1" === r.groupId ||
                    "3" === r.groupId ||
                    "6" === r.groupId) &&
                  (r.noStock || !n.isProtocolAgreed),
              },
              !n.chooseSymbolList ||
                ("1" !== r.groupId && "3" !== r.groupId && "6" !== r.groupId) ||
                (!r.noStock && n.isProtocolAgreed)
                ? {}
                : {
                    n: o.p({
                      "real-id": r.groupId,
                      "is-current": n.isCurrent,
                      "scode-list": n.chooseSymbolList,
                      protocolStatus: r.protocolStatus,
                    }),
                  },
              { o: r.showPrivacyPolicyBar },
              (r.showPrivacyPolicyBar, {})
            ),
        {
          p: o.n(r.noStock || !n.isProtocolAgreed ? "with-radius" : ""),
          q: o.s(n.scrollContentStyle),
          r:
            !r.noStock &&
            n.curRenderListCount >= n.curFilterListLen &&
            n.curFilterListLen > 0 &&
            n.isProtocolAgreed,
        },
        !r.noStock &&
          n.curRenderListCount >= n.curFilterListLen &&
          n.curFilterListLen > 0 &&
          n.isProtocolAgreed
          ? o.e(
              { s: n.isProtocolAgreed && n.hkstocklen > 0 && !n.hkVIP },
              n.isProtocolAgreed && n.hkstocklen > 0 && !n.hkVIP
                ? o.e({ t: n.hkstocklen > 20 }, (n.hkstocklen, {}))
                : {},
              { v: n.isProtocolAgreed },
              n.isProtocolAgreed ? { w: o.o(n.doSearch, 3493) } : {},
              {
                x:
                  (n.chooseSymbolList && "1" === r.groupId) ||
                  "3" === r.groupId ||
                  "6" === r.groupId,
              },
              (n.chooseSymbolList && "1" === r.groupId) ||
                "3" === r.groupId ||
                "6" === r.groupId
                ? {
                    y: o.p({
                      "real-id": r.groupId,
                      "is-current": n.isCurrent,
                      "scode-list": n.chooseSymbolList,
                      protocolStatus: r.protocolStatus,
                    }),
                  }
                : {}
            )
          : {},
        { z: !r.noStock && n.curRenderListCount >= n.curFilterListLen },
        !r.noStock && n.curRenderListCount >= n.curFilterListLen
          ? { A: o.n(r.showPrivacyPolicyBar ? "showPrivacyPolicyBar" : "") }
          : {},
        {
          B:
            !r.isLoadingShow &&
            ((null !== r.noStock && r.noStock) ||
              ("" !== r.protocolStatus && "agree" !== r.protocolStatus)),
        },
        (!r.isLoadingShow &&
          ((null !== r.noStock && r.noStock) ||
            ("" !== r.protocolStatus && r.protocolStatus)),
        {}),
        {
          C:
            n.isCurrent &&
            !r.noStock &&
            n.curRenderListCount >= n.curFilterListLen,
        },
        (n.isCurrent &&
          !r.noStock &&
          (n.curRenderListCount, n.curFilterListLen),
        {}),
        { D: o.n({ "h5-pro": n.isH5Pro, "mp-pro": n.isMPPro }) }
      );
    },
  ],
  ["__scopeId", "data-v-7ae0b62b"],
]);
wx.createComponent(i);
