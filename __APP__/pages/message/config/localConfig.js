exports.localConfig = [
  {
    type: "index_remind_up,index_remind_down",
    wzq_xcx: {
      path: "/pages/quote/quote",
      name: "stockdetail",
      opt: "not-broker",
      params: [
        { pKey: "scode", pValue: "scode", pDefaultValue: "" },
        { pKey: "market", pValue: "type", pDefaultValue: "" },
        { pKey: "act_flow_id", pValue: "", pDefaultValue: "stk_wave" },
      ],
    },
    zxg_xcx: {
      path: "/pages/quote/quote_zs",
      name: "indexdetail",
      opt: "not-broker",
      params: [
        { pKey: "scode", pValue: "scode", pDefaultValue: "" },
        { pKey: "market", pValue: "type", pDefaultValue: "" },
        { pKey: "act_flow_id", pValue: "", pDefaultValue: "stk_wave" },
      ],
    },
    wzq_h5: {
      path: "/trade/index_detail.shtml",
      name: "indexdetail",
      opt: "not-broker",
      params: [
        { pKey: "scode", pValue: "scode", pDefaultValue: "" },
        { pKey: "type", pValue: "type", pDefaultValue: "" },
        { pKey: "act_flow_id", pValue: "", pDefaultValue: "stk_wave" },
      ],
    },
    lite_h5: {
      path: "/quote/quote",
      name: "stockdetail",
      opt: "not-broker",
      params: [
        { pKey: "scode", pValue: "scode", pDefaultValue: "" },
        { pKey: "market", pValue: "type", pDefaultValue: "" },
        { pKey: "act_flow_id", pValue: "", pDefaultValue: "stk_wave" },
      ],
    },
  },
  {
    type: "condorder_order_unbind_invalid,newstock_booking_unbind_invalid,apply_source_remind_huafei,apply_source_remind_xinyonka,apply_lost_remind",
    wzq_xcx: {
      path: "/pages/index/trade",
      name: "",
      opt: "not-broker",
      params: [
        { pKey: "dealercode", pValue: "dealercode", pDefaultValue: "" },
        { pKey: "linkscene", pValue: "", pDefaultValue: "msg" },
      ],
    },
    zxg_xcx: {
      path: "/pages/index/trade",
      name: "",
      opt: "not-broker",
      params: [
        { pKey: "dealercode", pValue: "dealercode", pDefaultValue: "" },
        { pKey: "linkscene", pValue: "", pDefaultValue: "msg" },
      ],
    },
    wzq_h5: {
      path: "/apply/index",
      name: "ApplyIndex",
      opt: "not-broker",
      params: [],
    },
    lite_h5: {
      path: "/apply/index",
      name: "ApplyIndex",
      opt: "not-broker",
      params: [],
    },
  },
];
