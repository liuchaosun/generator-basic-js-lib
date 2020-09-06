import assert from 'assert';
// 获取所有的函数模块
import AllFunctions from '../src/test';

let funcList = Object.keys(AllFunctions) || [];

funcList
  .filter((fc) => AllFunctions[fc].test && typeof AllFunctions[fc].test === 'function')
  .forEach((fc) => {
    /* eslint-disable no-undef */
    AllFunctions[fc].test(describe, it, assert);
  });
