"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint max-len: 0 */

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser











var _flow = require('../plugins/flow');
var _index = require('../plugins/jsx/index');
var _types = require('../plugins/types');









var _typescript = require('../plugins/typescript');












var _index3 = require('../tokenizer/index');
var _keywords = require('../tokenizer/keywords');
var _state = require('../tokenizer/state');
var _types3 = require('../tokenizer/types');
var _charcodes = require('../util/charcodes');
var _identifier = require('../util/identifier');
var _base = require('./base');






var _lval = require('./lval');







var _statement = require('./statement');









var _util = require('./util');

 class StopState {
  
  constructor(stop) {
    this.stop = stop;
  }
} exports.StopState = StopState;

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function (s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.
 function parseExpression(noIn = false) {
  parseMaybeAssign(noIn);
  if (_index3.match.call(void 0, _types3.TokenType.comma)) {
    while (_index3.eat.call(void 0, _types3.TokenType.comma)) {
      parseMaybeAssign(noIn