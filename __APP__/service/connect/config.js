(exports.CONNECT = {
  ENABLE: !0,
  TRY_TIME: 2,
  ERROR_LIMIT: 10,
  PRIORITY: !0,
  BROKERS: ["10800", "10100"],
  WHITELIST: [],
}),
  (exports.REGEXP = {
    NEEDLOGIN: /^510010\d\d$/,
    DOMAIN: /^http(s)?:\/\/[^/]+/,
    NEED_TRADE_SESSION: /^51088820$/,
  }),
  (exports.TIME_DIFF = 2500);
