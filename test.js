var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
  assert.equal(3 + 3, 6);
  assert.equal(4 + 4, 8);
  
}

if (module == require.main) require('test').run(test);
