// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _header = require("../components/header");
var _title = require("../components/title");
var _pendingTask = require("../components/pending-task");
var _todoItem = require("../components/todo-item");
var _pageA = require("../pages/page-a");
var _router = require("./router");
var _state = require("./state");
(function() {
    _header.init();
    _title.init();
    _pendingTask.init();
    _todoItem.init();
    _state.state.init();
    let firstItem = {
        id: 0,
        task: "Resolver el desafio",
        checked: false
    };
    _state.state.addTask(firstItem);
    const pageA = _pageA.initPageA();
    const root = document.querySelector(".root");
    _router.initRouter(root, pageA);
})();

},{"../components/header":"SR48h","../components/title":"kjvXx","../components/pending-task":"bpp3U","../components/todo-item":"3eviK","../pages/page-a":"kBDqN","./router":"b2iia","./state":"28XHA"}],"SR48h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class HeaderEl extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            let style = document.createElement("style");
            let divEl = document.createElement("div");
            divEl.className = "header-style";
            style.textContent = `\n            .header-style{\n            background-color: #FF8282;\n            height: 40px;\n            padding: 17px;\n            }\n\n\n            `;
            this.shadow.appendChild(style);
            this.shadow.appendChild(divEl);
        }
    }
    customElements.define("custom-header", HeaderEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kjvXx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class TitleEl extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            let titleEl = document.createElement("h1");
            let style = document.createElement("style");
            titleEl.textContent = this.textContent;
            titleEl.className = "title-style";
            style.textContent = `\n           \n            .title-style{\n            text-align: start;\n            font-size: 38px;\n            margin: 0px;\n            padding:0px;\n            font-family: 'Poppins', sans-serif;\n            font-weight: bold;\n            margin-bottom: 25px;\n\n            }\n\n            @media (min-width: 960px) {\n                .title-style {\n                    font-size: 52px;\n                }\n            `;
            this.shadow.appendChild(style);
            this.shadow.appendChild(titleEl);
        }
    }
    customElements.define("custom-title", TitleEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bpp3U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _state = require("../src/state");
function init() {
    class PendingInputEl extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            let style = document.createElement("style");
            let containerEl = document.createElement("div");
            containerEl.className = "container-style";
            let formEl = document.createElement("form");
            formEl.className = "form-style";
            let labelEl = document.createElement("label");
            labelEl.setAttribute("for", "text");
            labelEl.className = "label-style";
            labelEl.textContent = this.id;
            let inputEl = document.createElement("input");
            inputEl.className = "input-style";
            inputEl.type = "text";
            inputEl.id = "text";
            inputEl.placeholder = this.getAttribute("placeholder");
            if (this.getAttribute("placeholder") == null) inputEl.placeholder = "";
            let buttonEl = document.createElement("button");
            buttonEl.className = "button-style";
            buttonEl.textContent = this.textContent;
            style.textContent = `\n\n\n                \n      @media(min-width:960px){\n        .form-style{\n        display:flex;\n        align-items:center;\n        max-width:960px;\n        }\n\n        .input-style{\n          width:100%;\n          margin-right: 25px;\n        }\n\n\n\n      }\n\n      .label-style{\n        text-align:start;\n        font-size: 18px;\n        font-family: 'Poppins', sans-serif;\n        font-weight: 400;\n\n      }\n\n      .input-style{\n        text-align:start;\n        font-size: 18px;\n        font-family: 'Poppins', sans-serif;\n        font-weight: 400;\n        min-width:312px;\n        margin-bottom: 10px;\n        padding: 17px 13px;\n        box-sizing: border-box;\n      }\n\n      .button-style{\n        background-color:#9CBBE9;\n        width:100%;\n        max-width:312px;\n        padding: 16px 0px;\n        text-align:center;\n        font-size: 22px;\n        font-family: 'Poppins', sans-serif;\n        font-weight: 500;\n        margin-bottom:10px;\n        border-radius: 4px;\n      }\n\n  \n  \n      `;
            formEl.addEventListener("submit", (event)=>{
                event.preventDefault();
                let id = _state.state.lastId();
                let item = {
                    id: id,
                    task: "",
                    checked: false
                };
                item.task = inputEl.value;
                if (item) {
                    _state.state.addTask(item);
                    inputEl.value = "";
                } else alert("El campo de tarea esta vacio, VAGO!");
            });
            this.shadow.appendChild(style);
            this.shadow.appendChild(containerEl);
            containerEl.appendChild(labelEl);
            containerEl.appendChild(formEl);
            formEl.appendChild(inputEl);
            formEl.appendChild(buttonEl);
        }
    }
    customElements.define("custom-pending", PendingInputEl);
}

},{"../src/state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        tasks: []
    },
    listeners: [],
    init () {
        const localData = localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData));
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
        localStorage.setItem("saved-state", JSON.stringify(this.getState()));
        console.log("soy el state he cambiado", this.data);
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    addTask (passedTask) {
        const cs = this.getState();
        const found = this.searchTask(passedTask.id);
        if (found[0] == undefined) {
            cs.tasks.push(passedTask);
            this.setState(cs);
        }
    },
    removeTask (id) {
        const cs = this.getState();
        const filteredState = cs.tasks.filter((task)=>task.id != id
        );
        const newState = {
            tasks: filteredState
        };
        this.data = newState;
        localStorage.setItem("saved-state", JSON.stringify(this.getState()));
        console.log(`eliminaste un task, soy el state`, this.getState());
    },
    lastTask () {
        const cs = this.getState();
        const arrayLn = cs.tasks.length;
        const lastTask = cs.tasks[arrayLn - 1];
        return lastTask;
    },
    lastId () {
        const cs = this.getState();
        const arrayLn = cs.tasks.length;
        return arrayLn;
    },
    searchTask (id) {
        const cs = this.getState();
        const task = cs.tasks.filter((item)=>item.id == id
        );
        return task;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3eviK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _state = require("../src/state");
function init() {
    class TodoItemEl extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        connectedCallback() {
            _state.state.subscribe(()=>{
                this.render();
            });
        }
        render() {
            this.shadow.innerHTML = "";
            let style = document.createElement("style");
            style.textContent = `\n\n  \n            .todo-style{\n              box-sizing: border-box;\n              background-color:#FFF599;\n              width:100%;\n              max-width:311px;\n              min-height: 112px;\n              margin: 0px;\n              padding: 22px 13px;\n              font-size: 18px;\n              font-family: 'Poppins', sans-serif;\n              font-weight: 400;\n              margin: 20px 0px;\n              display: flex;\n              justify-content: space-between;\n\n            }\n\n          \n\n\n            .container-style{\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: space-between;\n            }\n\n            .checkbox-style{\n                width:21px;\n                height:21px;\n            }\n\n            .remove-style{\n                width:21px;\n                height:21px;\n                display:none;\n            }\n  \n    \n    \n        `;
            this.shadow.appendChild(style);
            const stateData = _state.state.getState();
            stateData.tasks.sort((a, b)=>a.checked - b.checked
            );
            stateData.tasks.map((item)=>{
                let toDoEl = document.createElement("div");
                toDoEl.className = "todo-style";
                toDoEl.textContent = item.task;
                toDoEl.id = item.id;
                toDoEl.setAttribute("checked", item.checked);
                let checkBoxEl = document.createElement("input");
                checkBoxEl.type = "checkbox";
                checkBoxEl.className = "checkbox-style";
                checkBoxEl.textContent = this.textContent;
                let removeEl = document.createElement("img");
                removeEl.src = "./__parcel_source_root/images/bin.png";
                removeEl.className = "remove-style";
                toDoEl.addEventListener("click", ()=>{
                    if (toDoEl.style.border == "2px solid") toDoEl.style.border = "";
                    else toDoEl.style.border = "solid 2px";
                });
                checkBoxEl.addEventListener("click", ()=>{
                    let selectedTask = _state.state.searchTask(toDoEl.id);
                    selectedTask = selectedTask[0];
                    if (toDoEl.style.textDecorationLine === "line-through") {
                        toDoEl.style.textDecorationLine = "";
                        removeEl.style.display = "none";
                        selectedTask.checked = false;
                    } else {
                        toDoEl.style.textDecorationLine = "line-through";
                        removeEl.style.display = "initial";
                        selectedTask.checked = true;
                    }
                    console.log(`le hiciste check a una task, este es el state actualizado`, _state.state.getState());
                    localStorage.setItem("saved-state", JSON.stringify(_state.state.getState()));
                });
                const checkedValue = toDoEl.getAttribute("checked");
                if (checkedValue === "true") {
                    toDoEl.style.textDecorationLine = "line-through";
                    removeEl.style.display = "initial";
                    checkBoxEl.checked = true;
                } else {
                    toDoEl.style.textDecorationLine = "";
                    removeEl.style.display = "none";
                    checkBoxEl.checked = false;
                }
                removeEl.addEventListener("click", ()=>{
                    _state.state.removeTask(toDoEl.id);
                    toDoEl.remove();
                });
                let containerEl = document.createElement("div");
                containerEl.className = "container-style";
                this.shadow.appendChild(toDoEl);
                toDoEl.appendChild(containerEl);
                containerEl.appendChild(checkBoxEl);
                containerEl.appendChild(removeEl);
            });
        }
    }
    customElements.define("todo-item", TodoItemEl);
}

},{"../src/state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kBDqN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageA", ()=>initPageA
);
function initPageA(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n    <custom-header></custom-header>\n    <div class="page-container">\n    <custom-title>Mis Pendientes</custom-title>\n    <custom-pending id="Nuevo pendiente" placeholder="Ingrese una tarea">Agregar</custom-pending>\n    \n    <div class="todo-container">\n    <todo-item></todo-item>\n    </div>\n    </div>\n    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
function initRouter(container, page) {
    container.appendChild(page);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequirecba3")

//# sourceMappingURL=index.b31310b1.js.map
