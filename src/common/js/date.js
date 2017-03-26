/** 格式化时间
 *  @param {string} date 需要格式化的时间
 *  @param {string} fmt 想要格式化的格式
 */
exports.formatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
/** 格式化时间，返回年，月，日
 *  @param {string } date 需要格式化的时间
 */
exports.objectDate = (date) => {
    if (date && typeof date === 'string') {
        date = new Date(date);
        let o = {
            'Y': date.getFullYear(),
            'M': date.getMonth() + 1,
            'D': date.getDate()
        };
        return o;
    }
    return date;
};

/** 格式化时间，返回时间差，年，月，日
 * @param {string} date 需要格式化的时间
* */
exports.timeDiff = (date) => {
  // 开始时间
  let startTime = date;
  // 结束时间
  let endTime = new Date();
  // 时间差的毫秒数
  let timeDifferent = endTime.getTime() - new Date(startTime).getTime();
  // 计算出相差年数
  let years = Math.floor(timeDifferent / (24 * 3600 * 1000 * 365));
  // 计算出相差月数
  let months = Math.floor(timeDifferent / (24 * 3600 * 1000 * 30));
  // 计算出相差天数
  let days = Math.floor(timeDifferent / (24 * 3600 * 1000));
  // 计算出小时数
  let leave1 = timeDifferent % (24 * 3600 * 1000);
  // 计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000));
  // 计算相差分钟数
  let leave2 = leave1 % (3600 * 1000);
  // 计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000));
  // 计算相差秒数
  let leave3 = leave2 % (60 * 1000);
  // 计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000);
  if (seconds) {
    if (minutes) {
      if (hours) {
        if (days) {
          if (months) {
            if (years) {
              return years + '年前';
            } else {
              return months + '个月前';
            }
          } else {
            return days + '天前';
          }
        } else {
          return hours + '个小时前';
        }
      } else {
        return minutes + '分钟前';
      }
     } else {
      return seconds + '秒前';
    }
  }
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
