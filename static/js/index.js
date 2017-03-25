(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/html/partials/index2.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fuck2"), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();


},{}],2:[function(require,module,exports){
"use strict"

console.log("Fuck 3");
require('./login')();
},{"./login":3}],3:[function(require,module,exports){
"use strict";

require('../../dist/partials.js');

module.exports = function login(){
    console.log("Fuck yeah!");
    console.log("Fuck 1");
};
},{"../../dist/partials.js":1}]},{},[2]);
