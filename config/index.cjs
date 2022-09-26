/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wx762b5461d6393cf7',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '9550d86c5f4bbee814824122552d7334',

    /** 天气 */
    weather: 东莞,
    weather2: 长阳,
    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
    /** 当前气温 */
    temp: true,
    /** 每日一句 */
    // 金山每日一句
    CIBA: true,
  
    /** 今天是我们在一起的第 */
    love_days: 2020-04-27,

      // 所在城市
      city1: '东莞',
      city2: '长阳',
     
        {
          type: '生日', name: '臭宝', year: '1997', date: '04-17',
        },
        
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-27' },
       
       

}

module.exports = USER_CONFIG
