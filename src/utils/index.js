/* 判断值是否为空
* @param {*} value 
*/
export const isEmpty = value => {
   return (
       value === undefined ||
       value === null ||
       (typeof value === "object" && Object.keys(value).length === 0) ||
       (typeof value === "string" && value.trim().length === 0)
   );
}
 
 /**
   * 节流|不延迟 单位时间内调用一次
   * @param {*} fn 函数
   * @param {*} iTime 时间
   * @returns 
   */
   export const throttle = function (fn, iTime) {
    let last = 0;
    return function (...args) {
      let context = this;
      let now = +new Date();
      if (now - last < iTime) return;
      last = now;
      fn.apply(context, args);
    }
   }
  
