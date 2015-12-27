var expect = require('chai').expect;
var graphemeUtils = require('../index.js');

describe('slice', function () {
  it('works like String.slice', function () {
    expect(
      graphemeUtils.slice('Test', 0, 1)
    ).to.equal('T');

    expect(
      graphemeUtils.slice('Test', 1, 3)
    ).to.equal('es');

    expect(
      graphemeUtils.slice('Test', 0, -2)
    ).to.equal('Te');

    expect(
      graphemeUtils.slice('Test', -4, -2)
    ).to.equal('Te');
  });

  it('correctly slices strings containing surrogate pairs', function () {
    expect(
      graphemeUtils.slice('😰😰💩💩', 1, 3)
    ).to.equal('😰💩');
  });
});

describe('truncate', function () {
  it('works like _.trunc', function () {
    expect(
      graphemeUtils.truncate('Test string', {length: 11})
    ).to.equal('Test string');

    expect(
      graphemeUtils.truncate('Test string', {length: 100})
    ).to.equal('Test string');

    expect(
      graphemeUtils.truncate('Test string', {length: 10})
    ).to.equal('Test st...');

    expect(
      graphemeUtils.truncate('Test string', {length: 0})
    ).to.equal('...');

    expect(
      graphemeUtils.truncate('Test string', {length: 10, omission: '!'})
    ).to.equal('Test stri!');
  });

  it('correctly truncates strings containing surrogate pairs', function () {
    expect(
      graphemeUtils.truncate('😰😰😰💩💩😰😰', {length: 6})
    ).to.equal('😰😰😰...');
  });
});
