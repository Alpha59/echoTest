(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/html/index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<body>\n\nFuck yeah!\n\n";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fuck"), env.opts.autoescape);
output += "\n\n    <script src=\"js/index.js\" />\n    <script src=\"css/base.css\" />\n\n</body>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/html/index2.html"] = (function() {
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

