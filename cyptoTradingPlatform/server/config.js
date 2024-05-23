module.exports = {
    SERVER_URL: 'http://localhost:3000',
    SECURITY_PHRASE: 'crptoalert',
    HASH_ALGORITHM: ['HS256'],
    ALERT_CHECK_INTERVAL: 30,//second
    SEARCH_TOKEN_INTERVAL: 20,//second
    EVERY_TIME: 3600,//second
    EMAIL_SERVICE: 'gmail',
    EMAIL: 'cryptoalerttest@gmail.com',
    EMAIL_PWD: 'cryptoalerts?',
    /*TWILIO_SID: 'ACe3b2caa47d8ad53396fb792770fd301c',
    TWILIO_AUTH_TOKEN: '29fa5e2180c2aa0339160245f82d70fb',
    PHONE_NUMBER:'+15754003464',*/
    TWILIO_SID: '',
    TWILIO_AUTH_TOKEN: '',
    PHONE_NUMBER:'+15754003464',
    /*    MESSAGE_TEMP_EMAIL: '<html>alert: {ALERT ID}, token name: {TOKEN NAME}, symbol: {SYMBOL}, address: {TOKEN ADDRESS}, current price: {CURRENT PRICE}, alert price: {ALERT PRICE}, wallet: {WALLET ADDRESS}, timeStamp: {TIMESTAMP}</html>',
        MESSAGE_TEMP_SMS: '<html>alert: {ALERT ID}, token name: {TOKEN NAME}, symbol: {SYMBOL}, address: {TOKEN ADDRESS}, current price: {CURRENT PRICE}, alert price: {ALERT PRICE}, wallet: {WALLET ADDRESS}, timeStamp: {TIMESTAMP}</html>',
        MESSAGE_TEMP_CALL: '<html>alert: {ALERT ID}, token name: {TOKEN NAME}, symbol: {SYMBOL}, address: {TOKEN ADDRESS}, current price: {CURRENT PRICE}, alert price: {ALERT PRICE}, wallet: {WALLET ADDRESS}, timeStamp: {TIMESTAMP}</html>',
        MESSAGE_TEMP_WEB: '<html>alert: {ALERT ID}, token name: {TOKEN NAME}, symbol: {SYMBOL}, address: {TOKEN ADDRESS}, current price: {CURRENT PRICE}, alert price: {ALERT PRICE}, wallet: {WALLET ADDRESS}, timeStamp: {TIMESTAMP}</html>',
         */
    MESSAGE_TEMP_EMAIL: '{TOKEN NAME} has reached ${CURRENT PRICE}',
    MESSAGE_TEMP_SMS: '{TOKEN NAME} has reached ${CURRENT PRICE}',
    MESSAGE_TEMP_CALL: '{TOKEN NAME} has reached ${CURRENT PRICE}',
    MESSAGE_TEMP_WEB: '{"tokenName": "{TOKEN NAME}","tokenPrice": "${CURRENT PRICE}","timestamp": "{TIMESTAMP}"}',
    TOKEN_SEARCH_MODE: 2, //1: bscscan 2: bitquery
    TIER_INFO: {
        max_possible_days: 365,
        tier_token_address: "0xccbcec79d632a682ec0295027d0f17833f9786ad",
        tier_lp_address: "0x663188E7b78Edf6B0994d20a636E840aE54D8Ea7",
        tier_1_name: "Silver",
        tier_1_min_tokens: 100000,
        tier_1_min_lp: 0,
        tier_1_max_alerts_total: 10,
        tier_1_max_email_alerts: 10,
        tier_1_max_sms_alerts: 0,
        tier_1_max_call_alerts: 0,
        tier_1_max_api_alerts: 0,
        tier_2_name: "Gold",
        tier_2_min_tokens: 20000000,
        tier_2_min_lp: 0.0014,
        tier_2_max_alerts_total: 20,
        tier_2_max_email_alerts: 20,
        tier_2_max_sms_alerts: 10,
        tier_2_max_call_alerts: 5,
        tier_2_max_api_alerts: 0,
        tier_3_name: "Pro",
        tier_3_min_tokens: 100000000,
        tier_3_min_lp: 0.1,
        tier_3_max_alerts_total: 30,
        tier_3_max_email_alerts: 30,
        tier_3_max_sms_alerts: 20,
        tier_3_max_call_alerts: 10,
        tier_3_max_api_alerts: 0,
        email_tier: "tier_1",
        sms_tier: "tier_2",
        call_tier: "tier_3",
        webhook_tier: "tier_1",
    },
    BITQUERY_KEYS: ["BQYfcncMYzEBsc7Dywt5tHfSL2zKxSGv","BQYfcncMYzEBsc7Dywt5tHfSL2zKxSGv","BQYfcncMYzEBsc7Dywt5tHfSL2zKxSGv"]
}
