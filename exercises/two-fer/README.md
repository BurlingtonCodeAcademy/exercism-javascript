# Two Fer

`Two-fer` or `2-fer` is short for two for one. One for you and one for me.

```text
"One for X, one for me."
```

When X is a name or "you".

If the given name is "Alice", the result should be "One for Alice, one for me."
If no name is given, the result should be "One for you, one for me."

## Steps

1. create a file named `two-fer.js` in this directory
2. type this code into that file:

        module.exports = function(who) {
          return "";
        }

3. run the tests with `jasmine --fail-fast=true two-fer.spec.js`
4. watch it fail! You should see `Expected '' to equal 'One for Alice, one for me.'.`
5. instead of returning `""`, write code to return the correct result


## Source

This is an exercise to introduce users to basic programming constructs, just after Hello World. [https://en.wikipedia.org/wiki/Two-fer](https://en.wikipedia.org/wiki/Two-fer)

