import path from 'path';
import functionExmple from './function';

functionExmple.test = function (describe, it, assert) {
  describe(path.join(__dirname, 'function.js'), function () {
    it('测试demo: 1 + 1 === 2', function () {
      assert.equal(functionExmple(1, 1), 2);
    });
  });
};

export default functionExmple;
