var Forth = require('./forth');

describe('Forth', function () {
  var forth;

  beforeEach(function () {
    forth = new Forth();
  });

  describe('parsing and numbers', function () {
    it('just pushes numbers onto the stack', function () {
      forth.evaluate('1 2 3 4 5');
      expect(forth.stack).toEqual([1, 2, 3, 4, 5]);
    });
    it('pushes negative numbers onto the stack', function () {
      forth.evaluate('-1 -2 -3 -4 -5');
      expect(forth.stack).toEqual([-1, -2, -3, -4, -5]);
    });
  });

  describe('addition', function () {
    it('can add two numbers', function () {
      forth.evaluate('1 2 +');
      expect(forth.stack).toEqual([3]);
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 +');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('+');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('subtraction', function () {
    it('can subtract two numbers', function () {
      forth.evaluate('3 4 -');
      expect(forth.stack).toEqual([-1]);
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 -');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('-');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('multiplication', function () {
    it('can multiply two numbers', function () {
      forth.evaluate('2 4 *');
      expect(forth.stack).toEqual([8]);
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 *');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('*');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('division', function () {
    it('can divide two numbers', function () {
      forth.evaluate('12 3 /');
      expect(forth.stack).toEqual([4]);
    });
    it('performs integer division', function () {
      forth.evaluate('8 3 /');
      expect(forth.stack).toEqual([2]);
    });
    it('errors if dividing by zero', function () {
      expect(function () {
        forth.evaluate('4 0 /');
      }).toThrow(new Error('Division by zero'));
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 /');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('/');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('combined arithmetic', function () {
    it('performs addition and subtraction', function () {
      forth.evaluate('1 2 + 4 -');
      expect(forth.stack).toEqual([-1]);
    });
    it('performs multiplication and division', function () {
      forth.evaluate('2 4 * 3 /');
      expect(forth.stack).toEqual([2]);
    });
  });

  describe('dup', function () {
    it('copies a value on the stack', function () {
      forth.evaluate('1 dup');
      expect(forth.stack).toEqual([1, 1]);
    });
    it('copies the top value on the stack', function () {
      forth.evaluate('1 2 dup');
      expect(forth.stack).toEqual([1, 2, 2]);
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('dup');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('drop', function () {
    it('removes the top value on the stack if it is the only one', function () {
      forth.evaluate('1 drop');
      expect(forth.stack).toEqual([]);
    });
    it('removes the top value on the stack if it is not the only one', function () {
      forth.evaluate('1 2 drop');
      expect(forth.stack).toEqual([1]);
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('drop');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('swap', function () {
    it('swaps the top two values on the stack if they are the only ones', function () {
      forth.evaluate('1 2 swap');
      expect(forth.stack).toEqual([2, 1]);
    });
    it('swaps the top two values on the stack if they are not the only ones', function () {
      forth.evaluate('1 2 3 swap');
      expect(forth.stack).toEqual([1, 3, 2]);
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 swap');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('swap');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('over', function () {
    it('copies the second element if there are only two', function () {
      forth.evaluate('1 2 over');
      expect(forth.stack).toEqual([1, 2, 1]);
    });
    it('copies the second element if there are more than two', function () {
      forth.evaluate('1 2 3 over');
      expect(forth.stack).toEqual([1, 2, 3, 2]);
    });
    it('errors if there is only one value on the stack', function () {
      expect(function () {
        forth.evaluate('1 over');
      }).toThrow(new Error('Stack empty'));
    });
    it('errors if there is nothing on the stack', function () {
      expect(function () {
        forth.evaluate('over');
      }).toThrow(new Error('Stack empty'));
    });
  });

  describe('user-defined words', function () {
    it('can consist of built-in words', function () {
      forth.evaluate(': dup-twice dup dup ;');
      forth.evaluate('1 dup-twice');
      expect(forth.stack).toEqual([1, 1, 1]);
    });
    it('execute in the right order', function () {
      forth.evaluate(': countup 1 2 3 ;');
      forth.evaluate('countup');
      expect(forth.stack).toEqual([1, 2, 3]);
    });
    it('can override other user-defined words', function () {
      forth.evaluate(': foo dup ;');
      forth.evaluate(': foo dup dup ;');
      forth.evaluate( '1 foo');
      expect(forth.stack).toEqual([1, 1, 1]);
    });
    it('can override built-in words', function () {
      forth.evaluate(': swap dup ;');
      forth.evaluate('1 swap');
      expect(forth.stack).toEqual([1, 1]);
    });
    it('can override built-in operators', function () {
      forth.evaluate(': + * ;');
      forth.evaluate('3 4 +');
      expect(forth.stack).toEqual([12]);
    });
    it('cannot redefine numbers', function () {
      expect(function () {
        forth.evaluate(': 1 2 ;');
      }).toThrow(new Error('Invalid definition'));
    });
    it('errors if executing a non-existent word', function () {
      expect(function () {
        forth.evaluate('foo');
      }).toThrow(new Error('Unknown command'));
    });
    it('only defines words for current instance', function () {
      var first = new Forth();
      var second = new Forth();
      first.evaluate(': + - ;');
      first.evaluate('1 1 +');
      second.evaluate('1 1 +');
      expect(first.stack).toEqual([0]);
      expect(second.stack).toEqual([2]);
    });
  });

  describe('case-insensitivity', function () {
    it('DUP is case-insensitive', function () {
      forth.evaluate('1 DUP Dup dup');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });
    it('DROP is case-insensitive', function () {
      forth.evaluate('1 2 3 4 DROP Drop drop');
      expect(forth.stack).toEqual([1]);
    });
    it('SWAP is case-insensitive', function () {
      forth.evaluate('1 2 SWAP 3 Swap 4 swap');
      expect(forth.stack).toEqual([2, 3, 4, 1]);
    });
    it('OVER is case-insensitive', function () {
      forth.evaluate('1 2 OVER Over over');
      expect(forth.stack).toEqual([1, 2, 1, 2, 1]);
    });
    it('user-defined words are case-insensitive', function () {
      forth.evaluate(': foo dup ;');
      forth.evaluate('1 FOO Foo foo');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });
    it('definitions are case-insensitive', function () {
      forth.evaluate(': SWAP DUP Dup dup ;');
      forth.evaluate('1 swap');
      expect(forth.stack).toEqual([1, 1, 1, 1]);
    });
  });
});
