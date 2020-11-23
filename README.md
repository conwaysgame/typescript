# Conways's Game of Life in TypeScript

This is an implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) in TypeScript created as an exercise in test-driven TypeScript development. Created by [@basicallydan](https://github.com/basicallydan).

## The Game

Check out the game of life in your terminal by running `npm start`.

## Tests

Jest tests are in `src`, so you just need to run `npm test` to run them.

## Contributing

If you'd like to contribute, that's great and I encourage it - I do, however, also encourage reading the [contributing doc](https://github.com/conwaysgame/typescript/blob/master/contributing.md) first. The golden rule for contributing is that **you ensure that the tests are still passing before you make a pull request.**

## Installation issues

* Using `yarn` to install `ts-jest` seems to cause problems when compiling native parts of the module. Use `npm install -D ts-jest` instead.