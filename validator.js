
// 具体策略类,用于定义验证方法
const strategies  = {
  isEmpty: (value, errMsg) => {
    if (typeof value !== 'string') return true;
    return value ? false : true;
  }
};

// 抽象验证类
class Validator {
  constructor() {
    this.validates = []; // 存储所有的验证规则
  }

  // 增加规则
  add(value, rules) {
    const { strategy, errMsg } = rules;
    const validate = { strategy, value, errMsg, };
    this.validates.push(validate);
  }

  // 开始验证规则
  start() {
    const currentErrObj = this.validates.find((validate) => {
      const { strategy, value, errMsg } = validate;
      const hasErr = strategies[strategy](value, errMsg);
      return hasErr;
    });

    return currentErrObj ? currentErrObj.errMsg : undefined;
  }
}


