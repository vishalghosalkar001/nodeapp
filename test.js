var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
  assert.equal(3 + 3, 6);
  
}

if (module == require.main) require('test').run(test);
