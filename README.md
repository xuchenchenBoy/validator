## Usage
        // create a instance
        const validator = new Validator();

        // define rules and register
        const value = 2; 
        const rules = {strategy: 'isEmpty', errMsg: '不能为空'}; 
        validator.add(value, rules); 

        // start to validate
        const errMsg = validator.start(); 

        // if error
        if (errMsg) {
          // to do
        }

## API
属性如下

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :-------------: | -----: | ------: |
| rules | 验证规则 | Object | - |
| strategy | 验证策略(验证方法) | Function | - |
| errMsg | 验证失败的信息 | String | - |
| value | 验证的值 | String | - |