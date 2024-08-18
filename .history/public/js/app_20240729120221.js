"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _keywords = require('../parser/tokenizer/keywords');
var _types = require('../parser/tokenizer/types');

var _getClassInfo = require('../util/getClassInfo'); var _getClassInfo2 = _interopRequireDefault(_getClassInfo);
var _CJSImportTransformer = require('./CJSImportTransformer'); var _CJSImportTransformer2 = _interopRequireDefault(_CJSImportTransformer);
var _ESMImportTransformer = require('./ESMImportTransformer'); var _ESMImportTransformer2 = _interopRequireDefault(_ESMImportTransformer);
var _FlowTransformer = require('./FlowTransformer'); var _FlowTransformer2 = _interopRequireDefault(_FlowTransformer);
var _JestHoistTransformer = require('./JestHoistTransformer'); var _JestHoistTransformer2 = _interopRequireDefault(_JestHoistTransformer);
var _JSXTransformer = require('./JSXTransformer'); var _JSXTransformer2 = _interopRequireDefault(_JSXTransformer);
var _NumericSeparatorTransformer = require('./NumericSeparatorTransformer'); var _NumericSeparatorTransformer2 = _interopRequireDefault(_NumericSeparatorTransformer);
var _OptionalCatchBindingTransformer = require('./OptionalCatchBindingTransformer'); var _OptionalCatchBindingTransformer2 = _interopRequireDefault(_OptionalCatchBindingTransformer);
var _OptionalChainingNullishTransformer = require('./OptionalChainingNullishTransformer'); var _OptionalChainingNullishTransformer2 = _interopRequireDefault(_OptionalChainingNullishTransformer);
var _ReactDisplayNameTransformer = require('./ReactDisplayNameTransformer'); var _ReactDisplayNameTransformer2 = _interopRequireDefault(_ReactDisplayNameTransformer);
var _ReactHotLoaderTransformer = require('./ReactHotLoaderTransformer'); var _ReactHotLoaderTransformer2 = _interopRequireDefault(_ReactHotLoaderTransformer);

var _TypeScriptTransformer = require('./TypeScriptTransformer'); var _TypeScriptTransformer2 = _interopRequireDefault(_TypeScriptTransformer);








 class RootTransformer {
   __init() {this.transformers = []}
  
  
   __init2() {this.generatedVariables = []}
  
  
  
  

  constructor(
    sucraseContext,
    transforms,
    enableLegacyBabel5ModuleInterop,
    options,
  ) {;RootTransformer.prototype.__init.call(this);RootTransformer.prototype.__init2.call(this);
    this.nameManager = sucraseContext.nameManager;
    this.helperManager = sucraseContext.helperManager;
    const {tokenProcessor, importProcessor} = sucraseContext;
    this.tokens = tokenProcessor;
    this.isImportsTransformEnabled = transforms.includes("imports");
    this.isReactHotLoaderTransformEnabled = tran