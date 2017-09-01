
// 具体策略类,用于定义验证方法
const strategies  = {
  isEmpty: (value, errMsg) => {
    return value ? false : true;
  }
};

// 抽象验证类
export default class Validator {
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

// example
const validator = new Validator(); // 生成验证实例
const value = 2; // 输入的值
const rules = {strategy: 'isEmpty', errMsg: '不能为空'}; // 定义规则
validator.add(value, rules); // 注册验证
const errMsg = validator.start(); // 开始验证

// 如果有错误
if (errMsg) {
  // do error
}
