var R,
  r = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  E = {
    LOADING: "loading",
    ERROR_NETWORK: "error_network",
    ERROR_DELETED: "error_deleted",
    ERROR_RESTRICTED: "error_restricted",
  },
  e =
    (r((R = {}), E.ERROR_NETWORK, "当前网络不可用，请检查网络设置"),
    r(R, E.ERROR_DELETED, "风吹散了这一页，去看看新故事吧"),
    r(R, E.ERROR_RESTRICTED, "内容由于太害羞，已经悄悄隐身啦"),
    R);
(exports.NEWS_STATUS_TEXT = e), (exports.NEWS_STATUS_TYPE = E);
