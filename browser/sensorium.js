this["Sensorium"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.0.11.1@regenerator-runtime/runtime-module.js":
/*!********************************************************************!*\
  !*** ./node_modules/.0.11.1@regenerator-runtime/runtime-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.0.11.1@regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.0.11.1@regenerator-runtime/runtime.js":
/*!*************************************************************!*\
  !*** ./node_modules/.0.11.1@regenerator-runtime/runtime.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/array/from.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/array/from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/.2.5.3@core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/array/of.js":
/*!************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/array/of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.of */ "./node_modules/.2.5.3@core-js/library/modules/es6.array.of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Array.of;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/get-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/get-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/.2.5.3@core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/create.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/define-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/define-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-descriptor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-descriptor.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-names.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-names.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-names.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-symbols.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-symbols.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/.2.5.3@core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/get-prototype-of.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/get-prototype-of.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/keys.js":
/*!***************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/object/set-prototype-of.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/object/set-prototype-of.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/promise.js":
/*!***********************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/promise.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/.2.5.3@core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/.2.5.3@core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/.2.5.3@core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/.2.5.3@core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/symbol/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/symbol/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/.2.5.3@core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/.2.5.3@core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/.2.5.3@core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/.2.5.3@core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/fn/symbol/iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/fn/symbol/iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/.2.5.3@core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/.2.5.3@core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_a-function.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_a-function.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_add-to-unscopables.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_add-to-unscopables.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_an-instance.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_an-instance.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_an-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_array-includes.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_array-includes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.2.5.3@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/.2.5.3@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_classof.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_classof.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.3@core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_cof.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_cof.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_core.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_core.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_create-property.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_create-property.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_ctx.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.2.5.3@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_defined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_defined.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_descriptors.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_dom-create.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_dom-create.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_enum-bug-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_enum-bug-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_enum-keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_enum-keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.3@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.3@core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_export.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_export.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_fails.js":
/*!***************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_fails.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_for-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_for-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/.2.5.3@core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/.2.5.3@core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.2.5.3@core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_global.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_global.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_has.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_has.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_hide.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_hide.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_html.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_html.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_ie8-dom-define.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_ie8-dom-define.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/.2.5.3@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_invoke.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_invoke.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iobject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iobject.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.3@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_is-array-iter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_is-array-iter.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_is-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_is-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.3@core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_is-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iter-call.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iter-call.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iter-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iter-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.3@core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iter-define.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iter-define.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.2.5.3@core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.2.5.3@core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/.2.5.3@core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.2.5.3@core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iter-detect.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iter-detect.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iter-step.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iter-step.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_iterators.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_library.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_library.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_meta.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_meta.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.3@core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_microtask.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_microtask.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/.2.5.3@core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/.2.5.3@core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_new-promise-capability.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_new-promise-capability.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.2.5.3@core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-assign.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.3@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.3@core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.2.5.3@core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/.2.5.3@core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.3@core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.3@core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/.2.5.3@core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/.2.5.3@core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-dp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.2.5.3@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.3@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-dps.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-dps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-gopd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-gopd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.3@core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.3@core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.2.5.3@core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn-ext.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-gopn-ext.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-gopn.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.3@core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-gops.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-gops.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-gpo.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-gpo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.3@core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-keys-internal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-keys-internal.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/.2.5.3@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.2.5.3@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.2.5.3@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-pie.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-pie.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_object-sap.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_object-sap.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_perform.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_perform.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_promise-resolve.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_promise-resolve.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/.2.5.3@core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_property-desc.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_redefine-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_redefine-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_redefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_redefine.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_set-proto.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_set-proto.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_set-species.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_set-species.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_shared-key.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_shared-key.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.3@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.3@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_shared.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_species-constructor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_species-constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.2.5.3@core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_string-at.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_string-at.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.3@core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.3@core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_task.js":
/*!**************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_task.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/.2.5.3@core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/.2.5.3@core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/.2.5.3@core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/.2.5.3@core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-absolute-index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-absolute-index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.3@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.2.5.3@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.3@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-length.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-length.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.2.5.3@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.2.5.3@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_wks-define.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_wks-define.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.2.5.3@core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.2.5.3@core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_wks-ext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_wks-ext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/_wks.js":
/*!*************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/_wks.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.3@core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.3@core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator-method.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/core.get-iterator-method.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/.2.5.3@core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/core.get-iterator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.array.from.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.array.from.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/.2.5.3@core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/.2.5.3@core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.2.5.3@core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/.2.5.3@core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/.2.5.3@core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/.2.5.3@core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.array.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.array.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/.2.5.3@core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/.2.5.3@core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/.2.5.3@core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.array.of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.array.of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/.2.5.3@core-js/library/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.assign.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.assign.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/.2.5.3@core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.create.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.create.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.3@core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.define-property.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.define-property.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/.2.5.3@core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-names.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.get-own-property-names.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/.2.5.3@core-js/library/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.get-prototype-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.get-prototype-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.2.5.3@core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/.2.5.3@core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.2.5.3@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/.2.5.3@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.set-prototype-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.set-prototype-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/.2.5.3@core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.object.to-string.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.object.to-string.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.promise.js":
/*!********************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.promise.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.2.5.3@core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.2.5.3@core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/.2.5.3@core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.2.5.3@core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/.2.5.3@core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/.2.5.3@core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/.2.5.3@core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/.2.5.3@core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/.2.5.3@core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/.2.5.3@core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/.2.5.3@core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/.2.5.3@core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/.2.5.3@core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/.2.5.3@core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/.2.5.3@core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.string.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/.2.5.3@core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/.2.5.3@core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es6.symbol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es6.symbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.2.5.3@core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/.2.5.3@core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.2.5.3@core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/.2.5.3@core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/.2.5.3@core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.2.5.3@core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.2.5.3@core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.2.5.3@core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.2.5.3@core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.3@core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/.2.5.3@core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/.2.5.3@core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.2.5.3@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.2.5.3@core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.2.5.3@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.2.5.3@core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.2.5.3@core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/.2.5.3@core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.2.5.3@core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.2.5.3@core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/.2.5.3@core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/.2.5.3@core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/.2.5.3@core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/.2.5.3@core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es7.promise.finally.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es7.promise.finally.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.2.5.3@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/.2.5.3@core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/.2.5.3@core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es7.promise.try.js":
/*!************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es7.promise.try.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.2.5.3@core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/.2.5.3@core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/.2.5.3@core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es7.symbol.async-iterator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es7.symbol.async-iterator.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.3@core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/es7.symbol.observable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/es7.symbol.observable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.2.5.3@core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/.2.5.3@core-js/library/modules/web.dom.iterable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.2.5.3@core-js/library/modules/web.dom.iterable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/.2.5.3@core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.2.5.3@core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.2.5.3@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.2.5.3@core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.2.5.3@core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/array/from.js":
/*!******************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/array/from.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/.2.5.3@core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/array/of.js":
/*!****************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/array/of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/of */ "./node_modules/.2.5.3@core-js/library/fn/array/of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/get-iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/get-iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/.2.5.3@core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/.2.5.3@core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/.2.5.3@core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/define-property.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/define-property.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/.2.5.3@core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-names.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-names.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-names.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-symbols.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-symbols.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/.2.5.3@core-js/library/fn/object/get-own-property-symbols.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/.2.5.3@core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/.2.5.3@core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/object/set-prototype-of.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/object/set-prototype-of.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/.2.5.3@core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/promise.js":
/*!***************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/promise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/.2.5.3@core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/.2.5.3@core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/.2.5.3@core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js":
/*!************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/.6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js":
/*!*******************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/createClass.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/.6.26.0@babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js":
/*!****************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/inherits.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/.6.26.0@babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/.6.26.0@babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js":
/*!**************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/helpers/typeof.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.6.26.0@babel-runtime/regenerator/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.0.11.1@regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./src/communicate/transport.js":
/*!**************************************!*\
  !*** ./src/communicate/transport.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Transport 类，协议指令的传输通道，由 Transport.send 将协议发送给蓝牙，串口，2.4G，wifi等
 * @private
 */
var Transport = function () {
  /**
   * Create a command.
   */
  function Transport() {
    (0, _classCallCheck3.default)(this, Transport);

    this.send = function () {};
  }

  /**
   * setter interface
   * @private
   * @param  {Function} fn this fn will be set as the sender
   * @return {Undefined}
   */


  (0, _createClass3.default)(Transport, [{
    key: 'sender',
    set: function set(fn) {
      if (typeof fn === 'function') {
        this.send = fn;
      }
    }
  }]);
  return Transport;
}();

exports.default = new Transport();

/***/ }),

/***/ "./src/core/board.js":
/*!***************************!*\
  !*** ./src/core/board.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _version = __webpack_require__(/*! ../electronic/version */ "./src/electronic/version.js");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create id for electronic module joined into the mainboard
 * @param  {Object} eModuleObj  包含电子模块类和电子模块的名称
 * @param  {Array} argsList [description]
 * @param  {String} eModuleName 模块的名称，为生成 id 为准备
 * @return {String}          当前实例 id
 * @private
 */
var createModuleId = function createModuleId(eModuleObj, argsList) {
  // 注意，不能使用 eModule.name，在编译压缩的时候，变量会被替换，不同的 eModule，
  // 都会被替换成同一个变量名称，会导致 id 生成重复。
  var name = eModuleObj.name;
  var eModule = eModuleObj.eModule;
  var expectLength = eModule.length;
  var argsLength = argsList.length;
  if (argsLength < expectLength) {
    //参数不足的提示
    var dl = expectLength - argsLength;
    var more = argsLength > 0 ? ' more' : ''; //更多
    console.warn('you need to pass in ' + dl + ' argument' + (dl > 1 ? 's' : '') + more + ', otherwise the ' + name + ' sensor may not work as a result');
  } else if (argsLength > expectLength) {
    //参数多余
    argsList.splice(expectLength);
  }
  return [name].concat(argsList).join('_').toLowerCase();
}; /**
    * @fileOverview Board 主控板的基类.
    * @author Jeremy
    */

var Board = function () {
  /**
   * Create a board
   * @private
   * @param  {Object} conf configure
   */
  function Board(conf) {
    (0, _classCallCheck3.default)(this, Board);

    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
    // 版本
    this.version = _version2.default;
  }

  /**
   * 电子模块实例工厂
   * @private
   * @param  {Object} eModuleObj 包含电子模块类和电子模块的名称
   * @param  {Array-Like} args    [port, slot, id...]
   * @param  {String} host    电子模块的宿主，即主控板名——大部分电子模块是无需识别宿主的，少数电子模块因为宿主不同而表现不同特征
   * @return {Object}         电子模块实例
   */


  (0, _createClass3.default)(Board, [{
    key: 'eModuleFactory',
    value: function eModuleFactory(eModuleObj, args, host) {
      var argsList = [].concat((0, _toConsumableArray3.default)(args)); //转数组
      var eModule = eModuleObj.eModule;
      var id = createModuleId(eModuleObj, argsList);
      if (this.connecting[id]) {
        return this.connecting[id];
      } else {
        var params = argsList.length ? args : [undefined]; //这里 es6 有坑
        var emodule = new (Function.prototype.bind.apply(eModule, [null].concat((0, _toConsumableArray3.default)(params), [host])))();
        // 保存模块
        this.connecting[id] = emodule;
        return emodule;
      }
    }
  }]);
  return Board;
}();

exports.default = Board;

/***/ }),

/***/ "./src/core/control.js":
/*!*****************************!*\
  !*** ./src/core/control.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/.6.26.0@babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/.6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _read = __webpack_require__(/*! ./read */ "./src/core/read.js");

var _read2 = _interopRequireDefault(_read);

var _write = __webpack_require__(/*! ./write */ "./src/core/write.js");

var _write2 = _interopRequireDefault(_write);

var _parse = __webpack_require__(/*! ./parse */ "./src/core/parse.js");

var _parse2 = _interopRequireDefault(_parse);

var _transport = __webpack_require__(/*! ../communicate/transport */ "./src/communicate/transport.js");

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
/**
 * @fileOverview Control 类，管理数据读写调度，对外提供以下接口：pipe、read、write
 * @author Jeremy
 */
var Control = function () {
  /**
   * Create a control.
   */
  function Control() {
    (0, _classCallCheck3.default)(this, Control);
  }

  /**
   * execute write
   * @param  {Array}   buf   protocol buffer
   * @return {Undefined}     return undefined
   */


  (0, _createClass3.default)(Control, [{
    key: 'write',
    value: function write(buf) {
      _write2.default.addRequest(_transport2.default.send.bind(_transport2.default), buf);
    }

    /**
     * execute read
     * @param  {Array}   buf   protocol buffer
     * @return {Promise}       return a promise
     */

  }, {
    key: 'read',
    value: function read(buf) {
      return new _promise2.default(function (resolve, reject) {
        _read2.default.addRequest(_transport2.default.send.bind(_transport2.default), buf, function (val) {
          resolve(val);
        });
      });
    }

    /**
     * parse the buffer
     * @param  {Array}  buff    a buffer responsed from transporter
     * @return {Number}
     */

  }, {
    key: 'pipe',
    value: function pipe(buff) {
      var buffData = buff.data || buff;
      var buffers = _parse2.default.doParse(buffData); //undefined or [[], [], [xxx]]
      if (!buffers) {
        return;
        //可能因为接收了异常数据
        //do nothing
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(buffers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var buf = _step.value;

          if (buf.length == 0) {
            // do nothing with write command
          } else {
            var value = _parse2.default.getResult(buf);
            // console.log('after parse ------>', buf[0], buf, value);
            _read2.default.emitCallback(buf[0], value);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Control;
}();

exports.default = new Control();

/***/ }),

/***/ "./src/core/parse.js":
/*!***************************!*\
  !*** ./src/core/parse.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ "./src/core/utils.js");

// 获取到的最大指令长度
var REC_BUF_MAX_LENGTH = 36; /**
                              * @fileOverview 解析器负责数据解析，对外输出解析方法.
                              */

var BUF_START_FLAG = [0xff, 0x55];
var BUF_END_FLAG = [0x0d, 0x0a];

function checkStart(flag1, flag2) {
  return flag1 === BUF_START_FLAG[0] && flag2 === BUF_START_FLAG[1];
}

function checkEnd(flag1, flag2) {
  return flag1 === BUF_END_FLAG[0] && flag2 === BUF_END_FLAG[1];
}

function findIndexOfStart(checkStart, data) {
  for (var i = 0; i < data.length; i++) {
    var data1 = data[i],
        data2 = data[i + 1];
    if (checkStart(data1, data2)) {
      return i;
    }
  }
  return -1;
}

exports.default = {
  cacheBuffer: [],

  /**
   * 解析从硬件传递过来的数据
   * @param  {Array} buffData buffer that from the response
   * @return {Array|undefined}          the parsed result
   * data : 当前处理的数据
   * this.cacheBuffer: 历史缓存数据, 记录数据和历史数据分开记录
   */
  doParse: function doParse(buffData) {
    var result = [];
    var data = (0, _utils.arrayFromArrayBuffer)(buffData);
    var totalData = this.cacheBuffer.concat(data);

    // 检测协议头 [ff, 55]
    var index = findIndexOfStart(checkStart, totalData);
    if (index > -1) {
      totalData = totalData.slice(index);
      // 更新缓存
      this.cacheBuffer = totalData;
    } else {
      return undefined;
    }

    var tempBuffer = [];
    for (var i = 2; i < totalData.length; i++) {
      var data1 = totalData[i],
          data2 = totalData[i + 1];
      if (checkEnd(data1, data2)) {
        result.push(tempBuffer);
        // 下一帧数据
        var nextFrame = totalData.slice(tempBuffer.length + 4);
        var nextFrameIndex = findIndexOfStart(checkStart, nextFrame);
        // 清空容器
        tempBuffer = [];
        // 更新缓存
        this.cacheBuffer = nextFrame;
        if (nextFrameIndex === -1) {
          break;
        } else {
          i += nextFrameIndex + 3;
        }
      } else {
        // the data we really want
        if (tempBuffer.length >= REC_BUF_MAX_LENGTH) {
          console.warn("receive buffer overflow!");
        }
        tempBuffer.push(data1);
      }
    }
    return result.length && result;
  },

  /**
   * Get result from buffer data.
   * @param  {Array} buf array data.
   * @return {Float}         value of sensor's callback
   * 回复数据数值解析, 从左到右第四位数据：
   *     1: 单字符(1 byte)
   *     2： float(4 byte)
   *     3： short(2 byte)，16个长度
   *     4： 字符串
   *     5： double(4 byte)
   *     6: long(4 byte)
   *  @example
   *  ff 55 02 02 7c 1a 81 41 0d 0a
   */
  getResult: function getResult(buf) {
    // 获取返回的数据类型
    var dataType = buf[1];
    var result = null;
    switch (dataType) {
      case "1":
      case 1:
        // 1byte
        result = buf[2];
        break;
      case "3":
      case 3:
        // 2byte
        result = (0, _utils.calculateResponseValue)([parseInt(buf[3]), parseInt(buf[2])]);
        break;
      case "4":
      case 4:
        // 字符串
        var bytes = buf.splice(3, buf[2]);
        result = (0, _utils.bytesToString)(bytes);
        break;
      case "2":
      case "5":
      case "6":
      case 2:
      case 5:
      case 6:
        // long型或者float型的4byte处理
        result = (0, _utils.calculateResponseValue)([parseInt(buf[5]), parseInt(buf[4]), parseInt(buf[3]), parseInt(buf[2])]);
        break;
      default:
        break;
    }
    return result;
  }
};

/***/ }),

/***/ "./src/core/read.js":
/*!**************************!*\
  !*** ./src/core/read.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//最大记录数
var MAX_RECORD = 256;

/**
 * @private
 */
/**
 * @fileOverview Read 对象，所有'读'请求的处理器
 * @author Jeremy
 */
var Read = {
  timer: null,
  readRecord: {},
  index: 0,

  /**
   * create a safty index between 0~255
   * @return {Number|Null} return index
   */
  createSafeIndex: function createSafeIndex() {
    // “找坑法”
    if (this.index >= MAX_RECORD) {
      for (var i = 0; i < MAX_RECORD; i++) {
        if (!this.readRecord[i]) {
          return i;
        }
      }
      //没有索引
      return null;
    }
    return this.index++;
  },

  /**
   * @return {Boolean}
   */
  isOverflow: function isOverflow() {
    var keys = (0, _keys2.default)(this.readRecord);
    return keys.length == MAX_RECORD;
  },

  /**
   * add a record of time and callback
   * @param  {Number}   index
   * @param  {Function} callback [description]
   */
  addRecord: function addRecord(index, callback) {
    this.readRecord[index] = {
      time: new Date().getTime(),
      callback: callback
    };
  },

  /**
   * remove a record with index
   * @param  {Number} index record index
   */
  removeRecord: function removeRecord(index) {
    delete this.readRecord[index];
  },

  /**
   * This function is called by Control
   * @param {Function}   send  addRequest send function as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(send, buf, callback) {
    var isFull = this.isOverflow();
    if (!isFull) {
      //创建流水号
      var index = this.createSafeIndex();
      //记录
      this.addRecord(index, callback);
      //看门狗处理超时请求
      this.watchdog(index);
      //执行发送
      this.exec(send, index, buf);
    } else {
      //清除超时
      var result = this.removeOvertimeRequest();
      if (!result) {
        // 忽略请求即可，若挂起请求则会阻塞回调
        console.warn('[' + buf.join(',') + '] request was ignored');
        callback(null);
      } else {
        this.addRequest.apply(this, arguments);
      }
    }
  },

  /**
   * watchdog to handle with exception request such as timeout request
   * @param  {Index} index the request index
   */
  watchdog: function watchdog(index) {
    var _this = this;

    this.readRecord[index].timer = setTimeout(function () {
      _this.emitCallback(index, null);
    }, _settings.AUTO_OVERTIME);
  },

  /**
   * 移除超时未回调的
   * @return {Number} 返回超时数目
   */
  removeOvertimeRequest: function removeOvertimeRequest() {
    var time = new Date().getTime();
    var count = 0;
    for (var index in this.readRecord) {
      if (time - this.readRecord[index].time > _settings.OVERTIME) {
        count++;
        this.emitCallback(index, null);
      }
    }
    return count;
  },

  /**
   * 一个执行器
   * @param  {Function} send
   * @param  {Number} index    [description]
   * @param  {[type]} buf      [description]
   * @return {[type]}          [description]
   */
  exec: function exec(send, index, buf) {
    //amand the index of the buf due to the rj25 protocol
    buf.splice(3, 1, index);
    send(buf);
  },

  /**
   * execute the callback of the request
   * @param  {Number} index request index
   * @param  {Number} value request result
   */
  emitCallback: function emitCallback(index, value) {
    if (this.readRecord[index]) {
      clearTimeout(this.readRecord[index].timer);
      this.readRecord[index].callback(value);
      this.removeRecord(index);
    }
  }
};

exports.default = Read;

/***/ }),

/***/ "./src/core/utils.js":
/*!***************************!*\
  !*** ./src/core/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToAsciiCode = exports.calculateResponseValue = exports.fiterWithBinaryStr = exports.getAllMethods = exports.emotionByteString2binaryByte = exports.composer = exports.hexToRgb = exports.bytesToString = exports.bytesToInt = exports.upperCaseFirstLetter = exports.longToBytes = exports.bigIntToBytes = exports.float32ToBytes = exports.hexStr2IntArray = exports.intStrToHexStr = exports.string2buffer = exports.buffer2string = exports.arrayFromArrayBuffer = exports.arrayBufferFromArray = exports.limitValue = undefined;

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-own-property-names.js");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * @param  {[type]} value [description]
 * @param  {[type]} range [description]
 * @return {[type]}       [description]
 */
function limitValue(value, range) {
  var newValue = value;
  range = range || [-255, 255];
  if (value < range[0]) {
    newValue = range[0];
  }

  if (value > range[1]) {
    newValue = range[1];
  }
  return newValue;
}

/**
 * Convert array of int to ArrayBuffer.
 * @private
 * @param  {[int]} data array of int
 * @return {ArrayBuffer}      result array buffer
 * @private
 */
function arrayBufferFromArray(data) {
  var buffer = new ArrayBuffer(data.length);
  var result = new Int8Array(buffer);
  for (var i = 0; i < data.length; i++) {
    result[i] = data[i];
  }
  return buffer;
}

/**
 * Convert ArrayBuffer from array of int
 * @private
 * @param  {ArrayBuffer} buffer the source arraybuffer
 * @return {[int]}        int array as the result;
 */
function arrayFromArrayBuffer(buffer) {
  var dataView = new Uint8Array(buffer);
  var result = [];
  for (var i = 0; i < dataView.length; i++) {
    result.push(dataView[i]);
  }
  return result;
}

/**
 * [buffer2string converts array buffer to string format]
 * @private
 * @param  {ArrayBuffer} buf [the input array buffer]
 * @return {String}     [the output string]
 */
function buffer2string(buf) {
  var buffer = new Uint8Array(buf);
  return Array.prototype.join.call(buffer, " ");
}

/**
 * [string2buffer converts string to array buffer format]
 * @private
 * @param  {String} str [the input string]
 * @return {Uint8Array}     [the output uint8 array buffer]
 */
function string2buffer(str) {
  var buffer = new Uint8Array(str.split(" "));
  return buffer;
}

/**
 * 将十进制字符串数组转为16进制
 * @private
 * @param  {Array}  data        to be transformed data, such as: ["01", "55", "12"]
 * @param  {Boolean} isUpperCase whether need output upperCase string.
 * @return {String} 16 进制字符串
 */
function intStrToHexStr(data, isUpperCase) {
  var temp = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] != null) {
      var item = parseInt(data[i]).toString(16);
      if (isUpperCase) {
        item = parseInt(data[i]).toString(16).toUpperCase();
      }
      if (item.length == 1) {
        item = "0" + item;
      }
      temp.push(item);
    }
  }
  return temp.join(" ");
}

/**
 * 十六进制字符串转成十进制
 * @private
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function hexStr2IntArray(str) {
  var a = str.split(" ");
  var arr = [];
  for (var i in a) {
    var num = parseInt(a[i], 16);
    arr.push(num);
  }
  arr.reverse();
  return arr;
}

/**
 * Float to int then to bytes.
 * @private
 * @param  {float} float number
 * @return {bytes}
 */
function float32ToBytes(value) {
  // TOFIX: hack
  if (value == 0) {
    return [0, 0, 0, 0];
  }
  var bytesInt = 0;
  switch (value) {
    case Number.POSITIVE_INFINITY:
      bytesInt = 0x7F800000;
      break;
    case Number.NEGATIVE_INFINITY:
      bytesInt = 0xFF800000;
      break;
    case +0.0:
      bytesInt = 0x40000000;
      break;
    case -0.0:
      bytesInt = 0xC0000000;
      break;
    default:
      // if (Number.isNaN(value)) { bytesInt = 0x7FC00000; break; }
      if (value <= -0.0) {
        bytesInt = 0x80000000;
        value = -value;
      }

      var exponent = Math.floor(Math.log(value) / Math.log(2));
      var significand = value / Math.pow(2, exponent) * 0x00800000 | 0;

      exponent += 127;
      if (exponent >= 0xFF) {
        exponent = 0xFF;
        significand = 0;
      } else if (exponent < 0) exponent = 0;

      bytesInt = bytesInt | exponent << 23;
      bytesInt = bytesInt | significand & ~(-1 << 23);
      break;
  }
  var bytesArray = bigIntToBytes(bytesInt);
  return bytesArray;
}

/**
 * 整形转换成字节数组
 * @private
 * @param  {number} value 整形
 * @return {array}  array数组
 */
function bigIntToBytes(value) {
  var bytesArray = [];
  var b1 = value & 0xff;
  var b2 = value >> 8 & 0xff;
  var b3 = value >> 16 & 0xff;
  var b4 = value >> 24 & 0xff;
  bytesArray.push(b1);
  bytesArray.push(b2);
  bytesArray.push(b3);
  bytesArray.push(b4);
  return bytesArray;
}

/**
 * 32位整数转成字节，js最多只支持32位有符号整数，不支持64位，因此最多只能转成4byte
 * @private
 * @param  {Number} float number
 * @return {Array} bytes array
 */
function longToBytes(value) {
  var bytes = [];
  var i = 4;
  do {
    bytes[--i] = value & 255;
    value = value >> 8;
  } while (i);
  return bytes;
}

/**
 * 将单词的第一个字母转成大写
 * @private
 * @param  {string} str string.
 * @return {string}     target string.
 */
function upperCaseFirstLetter(str) {
  var reg = /\b(\w)|\s(\w)/g;
  // str = str.toLowerCase();
  return str.replace(reg, function (m) {
    return m.toUpperCase();
  });
}

/**
 * n个byte转成int值
 * @private
 * @param  {Array} bytes 传入的bytes数组
 * @return {Number}          返回的int数值
 */
function bytesToInt(bytes) {
  var val = 0;
  for (var i = bytes.length - 1; i >= 0; i--) {
    val += bytes[bytes.length - i - 1] << i * 8;
  }
  return val;
}

/**
 * transform int to ascii
 * @private
 * @param  {Array} bytes int array
 * @return {String} str string
 */
function bytesToString(bytes) {
  var str = "";
  for (var i = 0; i < bytes.length; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return str;
}

function hexToRgb(hex) {
  var validHexColorReg = /^#(?:[0-9a-f]{3}){1,2}$/i;
  if (!validHexColorReg.test(hex)) {
    throw Error(hex + " is not a valid hex color");
  }
  var r = parseInt(hex.substr(1, 2), 16),
      g = parseInt(hex.substr(3, 2), 16),
      b = parseInt(hex.substr(5, 2), 16);
  return [r, g, b];
}
/**
 * commpose to call func(args)
 * @private
 * @param  {!Function} func 方法
 * @param  {Array} args 方法的参数数组
 * @return {*}      返回结果由方法决定
 */
function composer(func, args) {
  if (!args) {
    args = [];
  }
  return func.apply(undefined, (0, _toConsumableArray3.default)(args));
}

/**
 * Continuous byte string to binary byte
 * 单元测试可参看以下:
 * 标准笑脸输入: "000000000000000000010000001000000100000000100000000100100000001
 *           00000001000010010001000000100000000100000000100000000000000000000"
 * 最终发送协议: [255, 85, 23, 0, 2, 41, 1, 2, 0, 0, 0, 0, 16, 32, 64, 32, 18, 2, 2, 18, 32, 64, 32, 16, 0, 0]
 * @private
 * @param  {String} byteStrs
 * @return {Array}
 */
function emotionByteString2binaryByte(byteStrs) {
  var byteResult = [];
  var len = byteStrs.length + 1;
  for (var i = 1; i < len; i++) {
    if (i % 8 === 0) {
      var byteStr = byteStrs.slice(i - 8, i);
      byteResult.push(parseInt(byteStr, 2));
    }
  }
  return byteResult;
}

function getAllMethods(obj) {
  var props = [];
  do {
    var all = (0, _getOwnPropertyNames2.default)(obj).concat((0, _getOwnPropertySymbols2.default)(obj).map(function (s) {
      return s.toString();
    })).sort().filter(function (p, i, arr) {
      if ((i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
      !props.includes(p)) {
        //not overridden in a child
        var desc = (0, _getOwnPropertyDescriptor2.default)(obj, p);
        if (desc.get || desc.set) {
          //getter or setter
          return true;
        } else {
          return typeof obj[p] === 'function' && //only the methods
          p !== 'constructor'; //not the constructor
        }
      }
    });
    props = props.concat(all);
  } while ((obj = (0, _getPrototypeOf2.default)(obj)) && //walk-up the prototype chain
  (0, _getPrototypeOf2.default)(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
  );
  return props;
}

/**
 * filter array with a binaried string
 * @private
 * @param  {Array}  arr  an array like [1, 2, 3]
 * @param  {String} bstr a binaried string like '10101011'
 * @return {Array}      filtered array
 */
function fiterWithBinaryStr(arr, bstr) {
  var filter = function filter(val, index) {
    if (bstr[index] === '1') {
      return val;
    }
  };
  return arr.filter(filter);
}

/**
 * calculate value from data received: bytes -> int -> float
 * @private
 * @param  {Array} intArray decimal array
 * @return {Number}  result.
 */
function calculateResponseValue(intArray) {
  var result = null;
  // FIXME: int字节转浮点型
  var intBitsToFloat = function intBitsToFloat(num) {
    /* s 为符号（sign）；e 为指数（exponent）；m 为有效位数（mantissa）*/
    var s = num >> 31 == 0 ? 1 : -1,
        e = num >> 23 & 0xff,
        m = e == 0 ? (num & 0x7fffff) << 1 : num & 0x7fffff | 0x800000;
    return s * m * Math.pow(2, e - 150);
  };
  var intValue = bytesToInt(intArray);
  // TOFIX
  if (intValue < 100000 && intValue > 0) {
    result = intValue;
  } else {
    result = parseFloat(intBitsToFloat(intValue).toFixed(2));
  }
  return result;
}

function stringToAsciiCode(string) {
  var result = [];
  var list = string.split('');
  for (var i in list) {
    result.push(list[i].charCodeAt());
  }
  return result;
}
/**
 * @fileOverview 工具类函数
 */
exports.limitValue = limitValue;
exports.arrayBufferFromArray = arrayBufferFromArray;
exports.arrayFromArrayBuffer = arrayFromArrayBuffer;
exports.buffer2string = buffer2string;
exports.string2buffer = string2buffer;
exports.intStrToHexStr = intStrToHexStr;
exports.hexStr2IntArray = hexStr2IntArray;
exports.float32ToBytes = float32ToBytes;
exports.bigIntToBytes = bigIntToBytes;
exports.longToBytes = longToBytes;
exports.upperCaseFirstLetter = upperCaseFirstLetter;
exports.bytesToInt = bytesToInt;
exports.bytesToString = bytesToString;
exports.hexToRgb = hexToRgb;
exports.composer = composer;
exports.emotionByteString2binaryByte = emotionByteString2binaryByte;
exports.getAllMethods = getAllMethods;
exports.fiterWithBinaryStr = fiterWithBinaryStr;
exports.calculateResponseValue = calculateResponseValue;
exports.stringToAsciiCode = stringToAsciiCode;

/***/ }),

/***/ "./src/core/validate.js":
/*!******************************!*\
  !*** ./src/core/validate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnParamNotDateFormat = exports.validateObject = exports.validateBoolean = exports.validateArray = exports.validateString = exports.validateNumber = exports.warnParamNotInList = exports.warnNotSupport = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/.6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateType(type) {
  return function (param, defaultValue) {
    // 当 param 存在时 --> 判断类型 --->不合乎类型就用用默认值返回，合乎类型就返回自己
    // 当 param 不存在时 --> 直接返回默认值
    // （默认值必须符合类型，否则报错！）
    if ((typeof param === 'undefined' ? 'undefined' : (0, _typeof3.default)(param)) === type) {
      return param;
    } else {
      console.warn('param \'' + param + '\' should be a ' + type + '!');
      // 默认值
      if ((typeof defaultValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultValue)) === type) {
        return defaultValue;
      }
      //未传值
      else if (typeof defaultValue === 'undefined') {
          switch (type) {
            case 'number':
              defaultValue = 0;
              break;
            case 'string':
              defaultValue = '';
              break;
            case 'array':
              defaultValue = [];
              break;
            case 'boolean':
              defaultValue = false;
              break;
            case 'object':
              defaultValue = {};
              break;
            default:
              defaultValue = null;
          }
          return defaultValue;
        }
        //其他类型
        else {
            throw 'param ${defaultValue} should be a ${type} if passed in';
          }
    }
  };
}

var validateNumber = validateType('number'),
    validateString = validateType('string'),
    validateArray = validateType('array'),
    validateBoolean = validateType('boolean'),
    validateObject = validateType('object');

/**
 * 警告主控板不被支持
 * @private
 * @param  {String} name 主控板名称
 */
function warnNotSupport(name) {
  if (_settings.SUPPORTLIST.indexOf(name) === -1) {
    console.warn('the mainboard "' + name + '" expected to be one of ' + _settings.SUPPORTLIST.join(','));
    return false;
  }
  return name;
}

/**
 * 警告参数不在列表中
 * @private
 * @param  {String} param 参数值
 * @param  {Array} list 列表
 */
function warnParamNotInList(param, list) {
  if (Array.isArray(list) && list.indexOf(param) === -1) {
    console.warn('Param ' + param + ' should be one of ' + list.join(','));
    return false;
  }
  return param;
}

function warnParamNotDateFormat(timeStr) {
  var reg = /\d{1,2}[:|\s]\d{1,2}/g;
  if (reg.test(timeStr)) {
    var timeArr = timeStr.split(/:|\s/);
    var separator = timeStr.replace(/\d/g, '');
    timeArr.splice(1, 0, separator);
    return timeArr;
  } else {
    console.warn('Param ' + timeStr + ' should be \'HH:MM\' or \'HH MM\' or \'H:M\'}');
    return false;
  }
}

exports.warnNotSupport = warnNotSupport;
exports.warnParamNotInList = warnParamNotInList;
exports.validateNumber = validateNumber;
exports.validateString = validateString;
exports.validateArray = validateArray;
exports.validateBoolean = validateBoolean;
exports.validateObject = validateObject;
exports.warnParamNotDateFormat = warnParamNotDateFormat;

/***/ }),

/***/ "./src/core/write.js":
/*!***************************!*\
  !*** ./src/core/write.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview Write 对象，所有'写'请求的处理器
 * @author Jeremy
 */
var TIME_INTERVAL = 50;
/**
 * @private
 */
var Write = {
  writeRecord: {},
  /**
   * This function is called by Control
   * @param {Function}   send  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function addRequest(send, buf) {
    var time = new Date().getTime();
    var bufStr = buf.join('_');
    if (this.writeRecord.buf != bufStr || time - this.writeRecord.time > TIME_INTERVAL) {
      this.writeRecord.buf = bufStr;
      this.writeRecord.time = time;
      send(buf);
    }
  }
};

exports.default = Write;

/***/ }),

/***/ "./src/electronic/BaseEncoderMotor.js":
/*!********************************************!*\
  !*** ./src/electronic/BaseEncoderMotor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _BaseMotor2 = __webpack_require__(/*! ./BaseMotor */ "./src/electronic/BaseMotor.js");

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of EncoderMotor
 * @extends BaseMotor
 */
var BaseEncoderMotor = function (_BaseMotor) {
  (0, _inherits3.default)(BaseEncoderMotor, _BaseMotor);

  /**
   * create a baseEncoderMotor
   * @param {number} port
   * @param {number} slot
   */
  function BaseEncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, BaseEncoderMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseEncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseEncoderMotor)).call(this, port));

    (0, _assign2.default)(_this.args, {
      slot: (0, _validate.validateNumber)(slot),
      angle: 0
    });
    _this.isReadType = false;
    return _this;
  }

  /**
   * set angle offset to last angle position
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(BaseEncoderMotor, [{
    key: 'offsetAngle',
    value: function offsetAngle(angle) {
      this.isReadType = false;
      this.args.angle = (0, _validate.validateNumber)(angle, this.args.angle);
      return this;
    }

    /**
     * Set speed to the motor
     * @param  {Number} speed
     * @return {Instance} the motor instance
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.isReadType = false;
      this.args.speed = (0, _validate.validateNumber)(_speed, 0);
      return this;
    }

    /**
     * getter of protocol
     * only encoder motor on board has read value type
     */

  }, {
    key: 'run',


    /**
     * EncoderMotor run
     * @return {Object} the instance
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * EncoderMotor run reversely
     * @return {Object} the instance
     */

  }, {
    key: 'setReverse',
    value: function setReverse() {
      this.offsetAngle(-1 * this.args.angle);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      var buf = void 0;
      if (this.isReadType) {
        buf = (0, _utils.composer)(_cmd2.default.readEncoderMotorOnBoard, [this.args.slot, this.args.type]);
      } else {
        if (this.args.port == 0) {
          buf = (0, _utils.composer)(_cmd2.default.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
        } else {
          buf = (0, _utils.composer)(_cmd2.default.setEncoderMotor, [this.args.slot, this.args.speed, this.args.angle]);
        }
      }
      return buf;
    }
  }]);
  return BaseEncoderMotor;
}(_BaseMotor3.default);

exports.default = BaseEncoderMotor;

/***/ }),

/***/ "./src/electronic/BaseGyro.js":
/*!************************************!*\
  !*** ./src/electronic/BaseGyro.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of Gyro
 * @extends Electronic
 */
var BaseGyro = function (_Electronic) {
  (0, _inherits3.default)(BaseGyro, _Electronic);

  /**
   * Create a gyro.
   */
  function BaseGyro(port) {
    (0, _classCallCheck3.default)(this, BaseGyro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseGyro.__proto__ || (0, _getPrototypeOf2.default)(BaseGyro)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      axis: 0
    };
    return _this;
  }

  /**
   * Set axis in order to get the coordinates by getData
   * @param  {Number} axis X轴(01)  Y轴(02)  Z轴(03)
   * @return {Instance}      return instance
   */


  (0, _createClass3.default)(BaseGyro, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _validate.validateNumber)(_axis, this.args.axis);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'getData',


    /**
     * Get data of Gyro sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      var buf = (0, _utils.composer)(_cmd2.default.readGyro, [this.args.port, this.args.axis]);
      return buf;
    }
  }]);
  return BaseGyro;
}(_electronic2.default);

exports.default = BaseGyro;

/***/ }),

/***/ "./src/electronic/BaseLedMatrix.js":
/*!*****************************************!*\
  !*** ./src/electronic/BaseLedMatrix.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of LedMatrix
 * @extends Electronic
 */
var BaseLedMatrix = function (_Electronic) {
  (0, _inherits3.default)(BaseLedMatrix, _Electronic);

  /**
   * Create a ledMatrix.
   */
  function BaseLedMatrix(port) {
    (0, _classCallCheck3.default)(this, BaseLedMatrix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseLedMatrix.__proto__ || (0, _getPrototypeOf2.default)(BaseLedMatrix)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      type: null
    };

    _this.isClearType = false;
    return _this;
  }

  /**
   * clear Matrix panel content
   * TOIMPROVE: 甚至可以提供接口清除某个区域
   */


  (0, _createClass3.default)(BaseLedMatrix, [{
    key: 'clear',
    value: function clear() {
      this.isClearType = true;
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      // bufArray [port, type, x, y, ...byteArray]
      var bufArray = [];
      var byteResult = void 0,
          charCodeArray = void 0;
      if (this.isClearType) {
        // if clear
        byteResult = (0, _utils.emotionByteString2binaryByte)('0'.repeat(128));
        bufArray = [this.args.port, BaseLedMatrix.EMOTION_TYPE, 0, 0].concat((0, _toConsumableArray3.default)(byteResult));
        this.isClearType = false;
      } else {
        switch (this.args.type) {
          case BaseLedMatrix.CHAR_TYPE:
            charCodeArray = this.args.char.split('').map(function (char) {
              return char.charCodeAt();
            });
            bufArray = [this.args.port, this.args.type, this.args.x, this.args.y, this.args.char.length].concat((0, _toConsumableArray3.default)(charCodeArray));
            break;
          case BaseLedMatrix.EMOTION_TYPE:
            byteResult = (0, _utils.emotionByteString2binaryByte)(this.args.emotion);
            bufArray = [this.args.port, this.args.type, this.args.x, this.args.y].concat((0, _toConsumableArray3.default)(byteResult));
            break;
          case BaseLedMatrix.NUMBER_TYPE:
            bufArray = [this.args.port, this.args.type].concat((0, _toConsumableArray3.default)((0, _utils.float32ToBytes)(this.args.number)));
            break;
          case BaseLedMatrix.TIME_TYPE:
            bufArray = [this.args.port, this.args.type, this.args.separator, this.args.hour, this.args.minute];
            break;
          default:
            break;
        }
      }
      // console.log('bufArray', this.args.type, '['+ bufArray.join(','))
      return (0, _utils.composer)(_cmd2.default.setLedMatrix, bufArray);
    }
  }], [{
    key: 'CHAR_TYPE',
    get: function get() {
      return 0x01;
    }
  }, {
    key: 'EMOTION_TYPE',
    get: function get() {
      return 0x02;
    }
  }, {
    key: 'TIME_TYPE',
    get: function get() {
      return 0x03;
    }
  }, {
    key: 'NUMBER_TYPE',
    get: function get() {
      return 0x04;
    }
  }]);
  return BaseLedMatrix;
}(_electronic2.default);

exports.default = BaseLedMatrix;

/***/ }),

/***/ "./src/electronic/BaseLight.js":
/*!*************************************!*\
  !*** ./src/electronic/BaseLight.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of Light
 * @extends Electronic
 */
var BaseLight = function (_Electronic) {
  (0, _inherits3.default)(BaseLight, _Electronic);

  /**
   * Create a light sensor
   * @param {Number} port
   */
  function BaseLight(port) {
    (0, _classCallCheck3.default)(this, BaseLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseLight.__proto__ || (0, _getPrototypeOf2.default)(BaseLight)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  (0, _createClass3.default)(BaseLight, [{
    key: 'getData',


    /**
     * Get data of the Light sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readLight, [this.args.port]);
    }
  }]);
  return BaseLight;
}(_electronic2.default);

exports.default = BaseLight;

/***/ }),

/***/ "./src/electronic/BaseMotor.js":
/*!*************************************!*\
  !*** ./src/electronic/BaseMotor.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of Motor
 * @extends Electronic
 */
var BaseMotor = function (_Electronic) {
  (0, _inherits3.default)(BaseMotor, _Electronic);

  /**
   * Create a motor
   * @param {Number} port
   */
  function BaseMotor(port) {
    (0, _classCallCheck3.default)(this, BaseMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseMotor.__proto__ || (0, _getPrototypeOf2.default)(BaseMotor)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      speed: 0
    };
    return _this;
  }

  /**
   * Set speed to the motor
   * @param  {Number} speed
   * @return {Instance} the motor instance
   */


  (0, _createClass3.default)(BaseMotor, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, 0);
      return this;
    }

    /**
     * This interface should be overwrite by child class
     * @abstract
     */

  }, {
    key: 'run',
    value: function run() {
      return this;
    }

    /**
     * Stop motor
     * @return {Instance} the motor instance
     */

  }, {
    key: 'setStop',
    value: function setStop() {
      return this.speed(0);
    }
  }]);
  return BaseMotor;
}(_electronic2.default);

exports.default = BaseMotor;

/***/ }),

/***/ "./src/electronic/BaseRgbLed.js":
/*!**************************************!*\
  !*** ./src/electronic/BaseRgbLed.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of RgbLed
 * @extends Electronic
 */
var BaseRgbLed = function (_Electronic) {
  (0, _inherits3.default)(BaseRgbLed, _Electronic);

  /**
   * Create a rgbLed
   * @param {Number} port  led port
   * @param {Number} slot  led slot
   */
  function BaseRgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, BaseRgbLed);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseRgbLed.__proto__ || (0, _getPrototypeOf2.default)(BaseRgbLed)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot, 2),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
    return _this;
  }

  /**
   * Set led position
   * @param {Number} position
   */


  (0, _createClass3.default)(BaseRgbLed, [{
    key: 'position',
    value: function position(_position) {
      this.args.ledPosition = (0, _validate.validateNumber)(_position, this.args.ledPosition);
      return this;
    }

    /**
     * Set led red value
     * @param {Number} value  0 ~ 255
     */

  }, {
    key: 'r',
    value: function r(value) {
      this.args.rgb[0] = (0, _validate.validateNumber)(value, this.args.rgb[0]);
      return this;
    }

    /**
     * Set led green value
     * @param {Number} value 0 ~ 255
     */

  }, {
    key: 'g',
    value: function g(value) {
      this.args.rgb[1] = (0, _validate.validateNumber)(value, this.args.rgb[1]);
      return this;
    }

    /**
     * Set led blue value
     * @param {Number} value 0 ~ 255
     */

  }, {
    key: 'b',
    value: function b(value) {
      this.args.rgb[2] = (0, _validate.validateNumber)(value, this.args.rgb[2]);
      return this;
    }

    /**
     * Set led color with hex-color
     * @param  {String} hex  hex color like '#ff0088'
     */

  }, {
    key: 'rgb',
    value: function rgb() {
      var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ff0000';

      this.args.rgb = (0, _utils.hexToRgb)(hex);
      return this;
    }
  }, {
    key: 'run',


    /**
     * run led with colors set before
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * Turn on led
     */

  }, {
    key: 'turnOn',
    value: function turnOn() {
      return this.run();
    }

    /**
     * Turn off led
     */

  }, {
    key: 'turnOff',
    value: function turnOff() {
      this.args.rgb = [0, 0, 0];
      return this.run();
    }

    /**
     * Turn on all the leds
     */

  }, {
    key: 'turnOnAll',
    value: function turnOnAll() {
      this.position(0);
      return this.turnOn();
    }

    /**
     * Turn off all the leds
     */

  }, {
    key: 'turnOffAll',
    value: function turnOffAll() {
      this.position(0);
      return this.turnOff();
    }

    /**
     * Light on let with red color
     */

  }, {
    key: 'red',
    value: function red() {
      this.args.rgb = [255, 0, 0];
      return this.run();
    }

    /**
     * Light on let with green color
     */

  }, {
    key: 'green',
    value: function green() {
      this.args.rgb = [0, 255, 0];
      return this.run();
    }

    /**
     * Light on let with blue color
     */

  }, {
    key: 'blue',
    value: function blue() {
      this.args.rgb = [0, 0, 255];
      return this.run();
    }

    /**
     * Light on let with white color
     */

  }, {
    key: 'white',
    value: function white() {
      this.args.rgb = [255, 255, 255];
      return this.run();
    }
  }, {
    key: 'protocol',
    get: function get() {
      var args = [this.args.port, this.args.slot, this.args.ledPosition].concat((0, _toConsumableArray3.default)(this.args.rgb));
      return (0, _utils.composer)(_cmd2.default.setLed, args);
    }
  }]);
  return BaseRgbLed;
}(_electronic2.default);

exports.default = BaseRgbLed;

/***/ }),

/***/ "./src/electronic/BaseSound.js":
/*!*************************************!*\
  !*** ./src/electronic/BaseSound.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description It is a base Class of Sound
 * @extends Electronic
 */
var BaseSound = function (_Electronic) {
  (0, _inherits3.default)(BaseSound, _Electronic);

  /**
   * Create a sound sensor
   * @param {Number} port  led port
   */
  function BaseSound(port) {
    (0, _classCallCheck3.default)(this, BaseSound);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseSound.__proto__ || (0, _getPrototypeOf2.default)(BaseSound)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(BaseSound, [{
    key: 'getData',


    /**
     * Get data of Sound sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readSound, [this.args.port]);
    }
  }]);
  return BaseSound;
}(_electronic2.default);

exports.default = BaseSound;

/***/ }),

/***/ "./src/electronic/GPIO_continue.js":
/*!*****************************************!*\
  !*** ./src/electronic/GPIO_continue.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
var GPIOContinue = function (_Electronic) {
  (0, _inherits3.default)(GPIOContinue, _Electronic);

  function GPIOContinue(port, key) {
    (0, _classCallCheck3.default)(this, GPIOContinue);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GPIOContinue.__proto__ || (0, _getPrototypeOf2.default)(GPIOContinue)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port, 1),
      key: (0, _validate.validateNumber)(key, 1)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(GPIOContinue, [{
    key: 'getData',


    /**
     * Get data of GPIOContinue sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readGPIOContinue, [this.args.port, this.args.key]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '00001');
    }
  }]);
  return GPIOContinue;
}(_electronic2.default);

exports.default = GPIOContinue;

/***/ }),

/***/ "./src/electronic/Gyro_on_board.js":
/*!*****************************************!*\
  !*** ./src/electronic/Gyro_on_board.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseGyro2 = __webpack_require__(/*! ./BaseGyro */ "./src/electronic/BaseGyro.js");

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GyroOnBoard sensor module
 * @extends BaseGyro
 * @example
 * mcore.Gyro()
 *      .axis(1)
 *      .getData()
 *        .then((val) => {
 *          console.log(val)
 *        });
 */
var GyroOnBoard = function (_BaseGyro) {
  (0, _inherits3.default)(GyroOnBoard, _BaseGyro);

  function GyroOnBoard() {
    (0, _classCallCheck3.default)(this, GyroOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (GyroOnBoard.__proto__ || (0, _getPrototypeOf2.default)(GyroOnBoard)).call(this, 1));
  }

  (0, _createClass3.default)(GyroOnBoard, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '011001');
    }
  }]);
  return GyroOnBoard;
}(_BaseGyro3.default);

exports.default = GyroOnBoard;

/***/ }),

/***/ "./src/electronic/analog_GPIO.js":
/*!***************************************!*\
  !*** ./src/electronic/analog_GPIO.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Class AnalogGPIO
 * @extends Electronic Arduino
 *
 * @example
 * arduino.Compass()
 *      .getData()
 *      .then(val => console.log(val));
 */
var AnalogGPIO = function (_Electronic) {
  (0, _inherits3.default)(AnalogGPIO, _Electronic);

  /**
   * Create a analogGPIO.
   */
  function AnalogGPIO(port) {
    (0, _classCallCheck3.default)(this, AnalogGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AnalogGPIO.__proto__ || (0, _getPrototypeOf2.default)(AnalogGPIO)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(AnalogGPIO, [{
    key: 'getData',


    /**
     * Get data of AnalogGPIO
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    /**
     * a getter interface, which returns the mainboards the AnalogGPIO module supported
     */

  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readAnalogGPIO, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '00001');
    }
  }]);
  return AnalogGPIO;
}(_electronic2.default);

exports.default = AnalogGPIO;

/***/ }),

/***/ "./src/electronic/button_on_board.js":
/*!*******************************************!*\
  !*** ./src/electronic/button_on_board.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ButtonOnBoard sensor module
 * @extends Electronic
 *
 * @example
 * mcore.ButtonOnBoard()
 *      .checkPressed()
 *      .getData()
 *      .then(val => console.log(val));
 */
//暂未完成，待确认需求

var ButtonOnBoard = function (_Electronic) {
  (0, _inherits3.default)(ButtonOnBoard, _Electronic);

  function ButtonOnBoard() {
    (0, _classCallCheck3.default)(this, ButtonOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtonOnBoard.__proto__ || (0, _getPrototypeOf2.default)(ButtonOnBoard)).call(this));

    _this.args = {
      port: 0x07,
      action: 0x00 // default pressed
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(ButtonOnBoard, [{
    key: 'checkPressed',


    /**
     * check whether the button pressed
     * @return {Instance} this
     */
    value: function checkPressed() {
      this.args.action = 0x00;
      return this;
    }

    /**
     * check whether the button released
     * @return {Instance} this
     */

  }, {
    key: 'checkReleased',
    value: function checkReleased() {
      this.args.action = 0x01;
      return this;
    }

    /**
     * Get data of whether button on board was pressed
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.ButtonOnBoard, [this.args.port, this.args.action]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1000');
    }
  }]);
  return ButtonOnBoard;
}(_electronic2.default);

exports.default = ButtonOnBoard;

/***/ }),

/***/ "./src/electronic/buzzer.js":
/*!**********************************!*\
  !*** ./src/electronic/buzzer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MCORE_ = _settings.SUPPORTLIST[0].toLowerCase();

/**
 * Buzzer sensor module
 * @extends Electronic
 *
 * @example
 * mcore.Buzzer()
 *      .hz(1000)
 *      .beat(1000)
 *      .run();
 */

var Buzzer = function (_Electronic) {
  (0, _inherits3.default)(Buzzer, _Electronic);

  function Buzzer() {
    (0, _classCallCheck3.default)(this, Buzzer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Buzzer.__proto__ || (0, _getPrototypeOf2.default)(Buzzer)).call(this));

    _this.args = {
      hz: 880,
      beat: 250
    };
    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    //宿主
    _this.hostname = host.toLowerCase();
    return _this;
  }

  /**
   * Set tone
   * @param  {String} tone tone value such as "C5", "D5"
   */


  (0, _createClass3.default)(Buzzer, [{
    key: 'tone',
    value: function tone() {
      var _tone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "C5";

      _tone = (0, _validate.validateString)(_tone.toUpperCase());
      var hz = _settings.TONE_TO_HZ[_tone] || 880;
      return this.hz(hz);
    }

    /**
     * Set hz
     * @param  {Number} hz hz value such as 200
     */

  }, {
    key: 'hz',
    value: function hz(_hz) {
      this.args.hz = (0, _validate.validateNumber)(_hz);
      return this;
    }

    /**
     * Set beat
     * @param  {Number} beat beat value such as 250, 1000
     */

  }, {
    key: 'beat',
    value: function beat(_beat) {
      this.args.beat = (0, _validate.validateNumber)(_beat);
      return this;
    }

    /**
     * a getter interface, which returns the protocol
     */

  }, {
    key: 'run',


    /**
     * run Buzzer sensor
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * a getter interface, which returns the mainboards the Buzzer module supported
     */

  }, {
    key: 'protocol',
    get: function get() {
      var buf = [];
      switch (this.hostname) {
        case MCORE_:
          buf = (0, _utils.composer)(_cmd2.default.setBuzzerForMcore, [this.args.hz, this.args.beat]);
          break;
        default:
          buf = (0, _utils.composer)(_cmd2.default.setBuzzer, [this.args.hz, this.args.beat]);
      }
      return buf;
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '11111');
    }
  }]);
  return Buzzer;
}(_electronic2.default);

exports.default = Buzzer;

/***/ }),

/***/ "./src/electronic/compass.js":
/*!***********************************!*\
  !*** ./src/electronic/compass.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compass sensor module
 * @extends Electronic
 *
 * @example
 * mcore.Compass()
 *      .getData()
 *      .then(val => console.log(val));
 */
var Compass = function (_Electronic) {
  (0, _inherits3.default)(Compass, _Electronic);

  function Compass(port) {
    (0, _classCallCheck3.default)(this, Compass);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Compass.__proto__ || (0, _getPrototypeOf2.default)(Compass)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Compass, [{
    key: 'getData',


    /**
     * Get data of Compass sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    /**
     * a getter interface, which returns the mainboards the Compass module supported
     */

  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readCompass, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1110');
    }
  }]);
  return Compass;
}(_electronic2.default);

exports.default = Compass;

/***/ }),

/***/ "./src/electronic/dc_motor.js":
/*!************************************!*\
  !*** ./src/electronic/dc_motor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _BaseMotor2 = __webpack_require__(/*! ./BaseMotor */ "./src/electronic/BaseMotor.js");

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DcMotor sensor module
 * @extends BaseMotor
 *
 * @example
 * mcore.DcMotor()
 *      .speed(100)
 *      .reverse()  // run with speed -100
 *      .run();
 */
var DcMotor = function (_BaseMotor) {
  (0, _inherits3.default)(DcMotor, _BaseMotor);

  function DcMotor(port) {
    (0, _classCallCheck3.default)(this, DcMotor);
    return (0, _possibleConstructorReturn3.default)(this, (DcMotor.__proto__ || (0, _getPrototypeOf2.default)(DcMotor)).call(this, port));
  }
  /**
   * run reversely
   */


  (0, _createClass3.default)(DcMotor, [{
    key: 'setReverse',
    value: function setReverse() {
      this.speed(-1 * this.args.speed);
      return this;
    }

    /**
     * a getter interface, which returns the protocol
     */

  }, {
    key: 'run',


    /**
     * run with previously parameters setting
     * @example
     * mcore.DcMotor().speed(255).run();
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * a getter interface, which returns the mainboards the DcMotor module supported
     */

  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setDcMotor, [this.args.port, this.args.speed]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return DcMotor;
}(_BaseMotor3.default);

exports.default = DcMotor;

/***/ }),

/***/ "./src/electronic/dig_GPIO.js":
/*!************************************!*\
  !*** ./src/electronic/dig_GPIO.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DigGPIO sensor module
 * @extends Electronic
 */
var DigGPIO = function (_Electronic) {
  (0, _inherits3.default)(DigGPIO, _Electronic);

  function DigGPIO(port) {
    (0, _classCallCheck3.default)(this, DigGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DigGPIO.__proto__ || (0, _getPrototypeOf2.default)(DigGPIO)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(DigGPIO, [{
    key: 'getData',


    /**
     * Get data of DigGPIO sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readDigGPIO, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '00001');
    }
  }]);
  return DigGPIO;
}(_electronic2.default);

exports.default = DigGPIO;

/***/ }),

/***/ "./src/electronic/double_GPIO.js":
/*!***************************************!*\
  !*** ./src/electronic/double_GPIO.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DoubleGPIO sensor module
 * @extends Electronic
 */
var DoubleGPIO = function (_Electronic) {
  (0, _inherits3.default)(DoubleGPIO, _Electronic);

  function DoubleGPIO(port1, port2) {
    (0, _classCallCheck3.default)(this, DoubleGPIO);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DoubleGPIO.__proto__ || (0, _getPrototypeOf2.default)(DoubleGPIO)).call(this));

    _this.args = {
      port1: (0, _validate.validateNumber)(port1),
      port2: (0, _validate.validateNumber)(port2)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(DoubleGPIO, [{
    key: 'getData',


    /**
     * Get data of DoubleGPIO sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readDoubleGPIO, [this.args.port1, this.args.port2]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '00001');
    }
  }]);
  return DoubleGPIO;
}(_electronic2.default);

exports.default = DoubleGPIO;

/***/ }),

/***/ "./src/electronic/electronic.js":
/*!**************************************!*\
  !*** ./src/electronic/electronic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 所有电子模块的抽象类
 * @private
 */
var Electronic =
/**
 * @param {number} port - 电子模块port口
 * @param {number} slot - 电子模块slot口
 */
function Electronic() {
  (0, _classCallCheck3.default)(this, Electronic);
};

exports.default = Electronic;

/***/ }),

/***/ "./src/electronic/encoder_motor.js":
/*!*****************************************!*\
  !*** ./src/electronic/encoder_motor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseEncoderMotor2 = __webpack_require__(/*! ./BaseEncoderMotor */ "./src/electronic/BaseEncoderMotor.js");

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EncoderMotor sensor module
 * @extends BaseEncoderMotor
 */
var EncoderMotor = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotor, _BaseEncoderMotor);

  function EncoderMotor(port, slot) {
    (0, _classCallCheck3.default)(this, EncoderMotor);
    return (0, _possibleConstructorReturn3.default)(this, (EncoderMotor.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotor)).call(this, port, slot));
  }

  (0, _createClass3.default)(EncoderMotor, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0101');
    }
  }]);
  return EncoderMotor;
}(_BaseEncoderMotor3.default);

exports.default = EncoderMotor;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board.js":
/*!**************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _BaseEncoderMotor2 = __webpack_require__(/*! ./BaseEncoderMotor */ "./src/electronic/BaseEncoderMotor.js");

var _BaseEncoderMotor3 = _interopRequireDefault(_BaseEncoderMotor2);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EncoderMotorOnBoard sensor module
 * @extends BaseEncoderMotor
 */
var EncoderMotorOnBoard = function (_BaseEncoderMotor) {
  (0, _inherits3.default)(EncoderMotorOnBoard, _BaseEncoderMotor);

  function EncoderMotorOnBoard(slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoard.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoard)).call(this, 0, slot));

    (0, _assign2.default)(_this.args, {
      type: 0x02
    });
    return _this;
  }

  /**
   * Get Speed of the encoder motor runs
   * @return  {Promise} return promise
   */


  (0, _createClass3.default)(EncoderMotorOnBoard, [{
    key: 'readSpeed',
    value: function readSpeed() {
      this.isReadType = true;
      this.args.type = 0x02;
      return this;
    }

    /**
     * get angle offset to the start position
     * @return  {Promise} return promise
     */

  }, {
    key: 'readAngle',
    value: function readAngle() {
      this.isReadType = true;
      this.args.type = 0x01;
      return this;
    }
  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0110');
    }
  }]);
  return EncoderMotorOnBoard;
}(_BaseEncoderMotor3.default);

exports.default = EncoderMotorOnBoard;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board_pid.js":
/*!******************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board_pid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _encoder_motor_on_board_pid_for_distance = __webpack_require__(/*! ./encoder_motor_on_board_pid_for_distance */ "./src/electronic/encoder_motor_on_board_pid_for_distance.js");

var _encoder_motor_on_board_pid_for_distance2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_distance);

var _encoder_motor_on_board_pid_for_speed = __webpack_require__(/*! ./encoder_motor_on_board_pid_for_speed */ "./src/electronic/encoder_motor_on_board_pid_for_speed.js");

var _encoder_motor_on_board_pid_for_speed2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_speed);

var _encoder_motor_on_board_pid_for_pwm = __webpack_require__(/*! ./encoder_motor_on_board_pid_for_pwm */ "./src/electronic/encoder_motor_on_board_pid_for_pwm.js");

var _encoder_motor_on_board_pid_for_pwm2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_pwm);

var _encoder_motor_on_board_pid_for_doubleMotor = __webpack_require__(/*! ./encoder_motor_on_board_pid_for_doubleMotor */ "./src/electronic/encoder_motor_on_board_pid_for_doubleMotor.js");

var _encoder_motor_on_board_pid_for_doubleMotor2 = _interopRequireDefault(_encoder_motor_on_board_pid_for_doubleMotor);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auriga = _settings.SUPPORTLIST[1].toLowerCase();
var megapipro = _settings.SUPPORTLIST[5].toLowerCase();

/**
 * EncoderMotorOnBoardPID 的速度模式经常被直接作为板载编码电机的设置速度来使用
 * 插头可选 slot1 slot2
 */

var EncoderMotorOnBoardPID = function (_Electronic) {
  (0, _inherits3.default)(EncoderMotorOnBoardPID, _Electronic);

  function EncoderMotorOnBoardPID(slot) {
    (0, _classCallCheck3.default)(this, EncoderMotorOnBoardPID);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EncoderMotorOnBoardPID.__proto__ || (0, _getPrototypeOf2.default)(EncoderMotorOnBoardPID)).call(this));

    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || megapipro;
    //宿主
    _this.hostname = host.toLowerCase();
    //位置模式
    _this.distanceMode = function () {
      return new _encoder_motor_on_board_pid_for_distance2.default(slot);
    };
    //速度模式
    _this.speedMode = function () {
      return new _encoder_motor_on_board_pid_for_speed2.default(slot);
    };
    //auriga 会多出两个 API
    if (_this.hostname === auriga) {
      //pwm 模式
      _this.pwmMode = function () {
        return new _encoder_motor_on_board_pid_for_pwm2.default(slot);
      };
      //双电机模式, 即平衡车模式
      _this.doubleMotorMode = function () {
        return new _encoder_motor_on_board_pid_for_doubleMotor2.default(slot);
      };
    }
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(EncoderMotorOnBoardPID, [{
    key: 'setZeroPoint',


    /**
     * 设置零点
     * @example
     * let pid = new EncoderMotorOnBoardPID()
     * pid.setZeroPoint()
     */
    value: function setZeroPoint() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      var subCmd = [];
      if (this.hostname == auriga) {
        subCmd = [0x04];
      } else if (this.hostname == megapipro) {
        subCmd = [0x03];
      }
      return (0, _utils.composer)(_cmd2.default.setEncoderMotorPIDZeroPoint, subCmd);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '010001');
    }
  }]);
  return EncoderMotorOnBoardPID;
}(_electronic2.default);

exports.default = EncoderMotorOnBoardPID;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board_pid_for_distance.js":
/*!*******************************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board_pid_for_distance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForDistance = function () {
  function PIDForDistance(slot) {
    (0, _classCallCheck3.default)(this, PIDForDistance);

    this.args = {
      distance: 0,
      speed: 0,
      slot: (0, _validate.validateNumber)(slot, 1)
    };
  }

  /**
   * setDirection clockwise or anticlockwise
   * slot defines the direction
   * @param {Number} dir 1: clockwise,  -1: anticlockwise
   */


  (0, _createClass3.default)(PIDForDistance, [{
    key: 'setDirection',
    value: function setDirection(dir) {
      this.args.slot = dir === -1 ? 2 : 1; //slot 1 defines clockwise
      return this;
    }

    /**
     * set distance
     * @param  {Number} distance 位移
     */

  }, {
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, this.args.distance);
      return this;
    }

    /**
     * set speed
     * @param  {Number} speed 速度
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setEncoderMotorPIDDistance, [this.args.slot, this.args.distance, this.args.speed]);
    }
  }]);
  return PIDForDistance;
}();

exports.default = PIDForDistance;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board_pid_for_doubleMotor.js":
/*!**********************************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board_pid_for_doubleMotor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForDoubleMotor = function () {
  function PIDForDoubleMotor() {
    (0, _classCallCheck3.default)(this, PIDForDoubleMotor);

    this.args = {
      distance: 0,
      direction: 1, // 实际是 slot
      speed: 0
    };
  }
  /**
   * set direction with a string argument
   * @param  {String} dir dir should be uppercase or lowercase of 'FORWARD'、'BACKWARD'、'TURNLEF'、'TURNRIGHT'
   */


  (0, _createClass3.default)(PIDForDoubleMotor, [{
    key: 'direction',
    value: function direction(dir) {
      dir = (0, _validate.warnParamNotInList)((dir || '').toUpperCase(), _settings.MOVE_DIRECTION);
      switch (dir) {
        case _settings.MOVE_DIRECTION[0]:
          this.args.direction = 1;
          break;
        case _settings.MOVE_DIRECTION[1]:
          this.args.direction = 2;
          break;
        case _settings.MOVE_DIRECTION[2]:
          this.args.direction = 3;
          break;
        case _settings.MOVE_DIRECTION[3]:
          this.args.direction = 4;
          break;
        default:
          this.args.direction = 1;
      }
      return this;
    }

    /**
     * direction + run
     * @return {[type]} [description]
     */

  }, {
    key: 'forward',
    value: function forward() {
      this.args.direction = 1;
      return this;
    }

    /**
     * direction + run
     * @return {[type]} [description]
     */

  }, {
    key: 'backward',
    value: function backward() {
      this.args.direction = 2;
      return this;
    }

    /**
     * direction + run
     * @return {[type]} [description]
     */

  }, {
    key: 'turnleft',
    value: function turnleft() {
      this.args.direction = 3;
      return this;
    }

    /**
     * direction + run
     * @return {[type]} [description]
     */

  }, {
    key: 'turnright',
    value: function turnright() {
      this.args.direction = 4;
      return this;
    }

    /**
     * set distance
     * @param  {Number} distance 位移
     */

  }, {
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, this.args.distance);
      return this;
    }

    /**
     * set speed
     * @param  {Number} speed [description]
     * @return {[type]}       [description]
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setEncoderMotorPIDDoubleMotor, [this.args.direction, this.args.distance, this.args.speed]);
    }
  }]);
  return PIDForDoubleMotor;
}();

exports.default = PIDForDoubleMotor;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board_pid_for_pwm.js":
/*!**************************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board_pid_for_pwm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForPwm = function () {
  function PIDForPwm(slot) {
    (0, _classCallCheck3.default)(this, PIDForPwm);

    this.args = {
      speed: 0,
      slot: (0, _validate.validateNumber)(slot, 1)
    };
  }

  /**
   * set speed
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(PIDForPwm, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setEncoderMotorPIDPwm, [this.args.slot, this.args.speed]);
    }
  }]);
  return PIDForPwm;
}();

exports.default = PIDForPwm;

/***/ }),

/***/ "./src/electronic/encoder_motor_on_board_pid_for_speed.js":
/*!****************************************************************!*\
  !*** ./src/electronic/encoder_motor_on_board_pid_for_speed.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIDForSpeed = function () {
  function PIDForSpeed(slot) {
    (0, _classCallCheck3.default)(this, PIDForSpeed);

    this.args = {
      speed: 0,
      slot: (0, _validate.validateNumber)(slot, 1)
    };
  }

  /**
   * set speed
   * @param  {Number} speed 速度
   * @return {[type]}       [description]
   */


  (0, _createClass3.default)(PIDForSpeed, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed, this.args.speed);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setEncoderMotorPIDSpeed, [this.args.slot, this.args.speed]);
    }
  }]);
  return PIDForSpeed;
}();

exports.default = PIDForSpeed;

/***/ }),

/***/ "./src/electronic/firmware.js":
/*!************************************!*\
  !*** ./src/electronic/firmware.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auriga = _settings.SUPPORTLIST[1].toLowerCase();

/**
 * @private
 */

var Firmware = function (_Electronic) {
  (0, _inherits3.default)(Firmware, _Electronic);

  function Firmware() {
    (0, _classCallCheck3.default)(this, Firmware);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Firmware.__proto__ || (0, _getPrototypeOf2.default)(Firmware)).call(this));

    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || auriga;
    //宿主
    _this.hostname = host.toLowerCase();
    _this.args = {
      subCmd: 0x11,
      mode: 0
    };
    _this.isRead_ = false;
    return _this;
  }

  /**
   * set firmware mode
   * @param {Number} mode
   * 0: ble
   * 1: 自动避障
   * 2: 平衡车
   * 3: 红外
   * 4: 巡线
   */


  (0, _createClass3.default)(Firmware, [{
    key: 'setMode',
    value: function setMode(mode) {
      this.isRead_ = false;
      this.args.mode = mode;
      if (this.hostname === auriga) {
        this.args.subCmd = 0x11;
      } else {
        // megapi, megapipro
        this.args.subCmd = 0x12;
      }
      return this;
    }

    /**
     * run
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * 当前模式
     */

  }, {
    key: 'currentMode',
    value: function currentMode() {
      this.isRead_ = true;
      if (this.hostname === auriga) {
        this.args.subCmd = 0x71;
      } else {
        this.args.subCmd = 0x72;
      }
      return this;
    }

    /**
     * Get data of current mode
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isRead_ = true;
                _context.next = 3;
                return _control2.default.read(this.protocol);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    /**
     * getter of protocol
     */

  }, {
    key: 'protocol',
    get: function get() {
      if (this.isRead_) {
        return (0, _utils.composer)(_cmd2.default.readFirmwareMode, [this.args.subCmd]);
      } else {
        return (0, _utils.composer)(_cmd2.default.setFirmwareMode, [this.args.subCmd, this.args.mode]);
      }
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0101');
    }
  }]);
  return Firmware;
}(_electronic2.default);

exports.default = Firmware;

/***/ }),

/***/ "./src/electronic/flame.js":
/*!*********************************!*\
  !*** ./src/electronic/flame.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flame sensor module
 * @extends Electronic
 */
var Flame = function (_Electronic) {
  (0, _inherits3.default)(Flame, _Electronic);

  function Flame(port) {
    (0, _classCallCheck3.default)(this, Flame);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Flame.__proto__ || (0, _getPrototypeOf2.default)(Flame)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Flame, [{
    key: 'getData',


    /**
     * Get data of Flame sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readFlame, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Flame;
}(_electronic2.default);

exports.default = Flame;

/***/ }),

/***/ "./src/electronic/four_keys.js":
/*!*************************************!*\
  !*** ./src/electronic/four_keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FourKeys sensor module
 * @extends Electronic
 */
var FourKeys = function (_Electronic) {
  (0, _inherits3.default)(FourKeys, _Electronic);

  function FourKeys(port) {
    (0, _classCallCheck3.default)(this, FourKeys);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FourKeys.__proto__ || (0, _getPrototypeOf2.default)(FourKeys)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      key: 1
    };
    return _this;
  }

  /**
   * 键位
   * @param  {Number} index 键位：1、2、3、4
   */


  (0, _createClass3.default)(FourKeys, [{
    key: 'key',
    value: function key(index) {
      this.args.key = (0, _validate.validateNumber)(index, this.args.key);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'getData',


    /**
     * Get data of FourKeys sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readFourKeys, [this.args.port, this.args.key]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return FourKeys;
}(_electronic2.default);

exports.default = FourKeys;

/***/ }),

/***/ "./src/electronic/four_leds.js":
/*!*************************************!*\
  !*** ./src/electronic/four_leds.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(/*! ./BaseRgbLed */ "./src/electronic/BaseRgbLed.js");

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FourLed sensor module
 * @extends BaseRgbLed
 */
var FourLeds = function (_BaseRgbLed) {
  (0, _inherits3.default)(FourLeds, _BaseRgbLed);

  function FourLeds(port) {
    (0, _classCallCheck3.default)(this, FourLeds);
    return (0, _possibleConstructorReturn3.default)(this, (FourLeds.__proto__ || (0, _getPrototypeOf2.default)(FourLeds)).call(this, port, 2));
    //接Adapter模块可以选择SLOT1(01) 和SLOT2(02)
  }

  (0, _createClass3.default)(FourLeds, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return FourLeds;
}(_BaseRgbLed3.default);

exports.default = FourLeds;

/***/ }),

/***/ "./src/electronic/gas.js":
/*!*******************************!*\
  !*** ./src/electronic/gas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gas sensor module
 * @extends Electronic
 */
var Gas = function (_Electronic) {
  (0, _inherits3.default)(Gas, _Electronic);

  function Gas(port) {
    (0, _classCallCheck3.default)(this, Gas);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gas.__proto__ || (0, _getPrototypeOf2.default)(Gas)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Gas, [{
    key: 'getData',


    /**
     * Get data of Gas sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readGas, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Gas;
}(_electronic2.default);

exports.default = Gas;

/***/ }),

/***/ "./src/electronic/gyro.js":
/*!********************************!*\
  !*** ./src/electronic/gyro.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseGyro2 = __webpack_require__(/*! ./BaseGyro */ "./src/electronic/BaseGyro.js");

var _BaseGyro3 = _interopRequireDefault(_BaseGyro2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gyro sensor module
 * @extends BaseGyro
 * @example
 * mcore.Gyro()
 *      .axis(1)
 *      .getData()
 *        .then((val) => {
 *          console.log(val)
 *        });
 */
var Gyro = function (_BaseGyro) {
  (0, _inherits3.default)(Gyro, _BaseGyro);

  function Gyro() {
    (0, _classCallCheck3.default)(this, Gyro);

    //外接陀螺仪 port 始终传参为 0
    return (0, _possibleConstructorReturn3.default)(this, (Gyro.__proto__ || (0, _getPrototypeOf2.default)(Gyro)).call(this, 0));
  }

  (0, _createClass3.default)(Gyro, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Gyro;
}(_BaseGyro3.default);

exports.default = Gyro;

/***/ }),

/***/ "./src/electronic/humiture.js":
/*!************************************!*\
  !*** ./src/electronic/humiture.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Humiture sensor module
 * @extends Electronic
 */
var Humiture = function (_Electronic) {
  (0, _inherits3.default)(Humiture, _Electronic);

  function Humiture(port) {
    (0, _classCallCheck3.default)(this, Humiture);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Humiture.__proto__ || (0, _getPrototypeOf2.default)(Humiture)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      type: 0
    };
    return _this;
  }

  /**
   * Get Humidity of Humiture sensor
   * @example
   * mcore.Humiture(1)
   *      .readHumidity()
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *       });
   * @return {Instance} @this
   */


  (0, _createClass3.default)(Humiture, [{
    key: 'readHumidity',
    value: function readHumidity() {
      this.args.type = 0;
      return this;
    }

    /**
     * Get Temperature of Humiture sensor
     * @example
     * mcore.Humiture(1)
     *      .readTemperature()
     *      .getData()
     *      .then((val) => {
     *        console.log(val)
     *      });
     * @return {Instance} @this
     */

  }, {
    key: 'readTemperature',
    value: function readTemperature() {
      this.args.type = 1;
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'getData',


    /**
     * 获取数据
     * @example
     * mcore.Humiture(1)
     *      .readTemperature()
     *      .getData()
     *      .then((val) => {
     *        console.log(val)
     *      });
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readHumiture, [this.args.port, this.args.type]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Humiture;
}(_electronic2.default);

exports.default = Humiture;

/***/ }),

/***/ "./src/electronic/index.js":
/*!*********************************!*\
  !*** ./src/electronic/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dc_motor = __webpack_require__(/*! ./dc_motor */ "./src/electronic/dc_motor.js");

var _dc_motor2 = _interopRequireDefault(_dc_motor);

var _virtual_joystick = __webpack_require__(/*! ./virtual_joystick */ "./src/electronic/virtual_joystick.js");

var _virtual_joystick2 = _interopRequireDefault(_virtual_joystick);

var _virtual_joystick_for_balance = __webpack_require__(/*! ./virtual_joystick_for_balance */ "./src/electronic/virtual_joystick_for_balance.js");

var _virtual_joystick_for_balance2 = _interopRequireDefault(_virtual_joystick_for_balance);

var _stepper_motor = __webpack_require__(/*! ./stepper_motor */ "./src/electronic/stepper_motor.js");

var _stepper_motor2 = _interopRequireDefault(_stepper_motor);

var _encoder_motor = __webpack_require__(/*! ./encoder_motor */ "./src/electronic/encoder_motor.js");

var _encoder_motor2 = _interopRequireDefault(_encoder_motor);

var _encoder_motor_on_board = __webpack_require__(/*! ./encoder_motor_on_board */ "./src/electronic/encoder_motor_on_board.js");

var _encoder_motor_on_board2 = _interopRequireDefault(_encoder_motor_on_board);

var _servo_motor = __webpack_require__(/*! ./servo_motor */ "./src/electronic/servo_motor.js");

var _servo_motor2 = _interopRequireDefault(_servo_motor);

var _four_leds = __webpack_require__(/*! ./four_leds */ "./src/electronic/four_leds.js");

var _four_leds2 = _interopRequireDefault(_four_leds);

var _rgb_led = __webpack_require__(/*! ./rgb_led */ "./src/electronic/rgb_led.js");

var _rgb_led2 = _interopRequireDefault(_rgb_led);

var _rgb_led_on_board = __webpack_require__(/*! ./rgb_led_on_board */ "./src/electronic/rgb_led_on_board.js");

var _rgb_led_on_board2 = _interopRequireDefault(_rgb_led_on_board);

var _led_matrix = __webpack_require__(/*! ./led_matrix */ "./src/electronic/led_matrix.js");

var _led_matrix2 = _interopRequireDefault(_led_matrix);

var _buzzer = __webpack_require__(/*! ./buzzer */ "./src/electronic/buzzer.js");

var _buzzer2 = _interopRequireDefault(_buzzer);

var _seven_segment = __webpack_require__(/*! ./seven_segment */ "./src/electronic/seven_segment.js");

var _seven_segment2 = _interopRequireDefault(_seven_segment);

var _shutter = __webpack_require__(/*! ./shutter */ "./src/electronic/shutter.js");

var _shutter2 = _interopRequireDefault(_shutter);

var _smart_servo = __webpack_require__(/*! ./smart_servo */ "./src/electronic/smart_servo.js");

var _smart_servo2 = _interopRequireDefault(_smart_servo);

var _encoder_motor_on_board_pid = __webpack_require__(/*! ./encoder_motor_on_board_pid */ "./src/electronic/encoder_motor_on_board_pid.js");

var _encoder_motor_on_board_pid2 = _interopRequireDefault(_encoder_motor_on_board_pid);

var _reset = __webpack_require__(/*! ./reset */ "./src/electronic/reset.js");

var _reset2 = _interopRequireDefault(_reset);

var _button_on_board = __webpack_require__(/*! ./button_on_board */ "./src/electronic/button_on_board.js");

var _button_on_board2 = _interopRequireDefault(_button_on_board);

var _ultrasonic = __webpack_require__(/*! ./ultrasonic */ "./src/electronic/ultrasonic.js");

var _ultrasonic2 = _interopRequireDefault(_ultrasonic);

var _temperature = __webpack_require__(/*! ./temperature */ "./src/electronic/temperature.js");

var _temperature2 = _interopRequireDefault(_temperature);

var _temperature_on_board = __webpack_require__(/*! ./temperature_on_board */ "./src/electronic/temperature_on_board.js");

var _temperature_on_board2 = _interopRequireDefault(_temperature_on_board);

var _light = __webpack_require__(/*! ./light */ "./src/electronic/light.js");

var _light2 = _interopRequireDefault(_light);

var _light_on_board = __webpack_require__(/*! ./light_on_board */ "./src/electronic/light_on_board.js");

var _light_on_board2 = _interopRequireDefault(_light_on_board);

var _potentionmeter = __webpack_require__(/*! ./potentionmeter */ "./src/electronic/potentionmeter.js");

var _potentionmeter2 = _interopRequireDefault(_potentionmeter);

var _joystick = __webpack_require__(/*! ./joystick */ "./src/electronic/joystick.js");

var _joystick2 = _interopRequireDefault(_joystick);

var _gyro = __webpack_require__(/*! ./gyro */ "./src/electronic/gyro.js");

var _gyro2 = _interopRequireDefault(_gyro);

var _Gyro_on_board = __webpack_require__(/*! ./Gyro_on_board */ "./src/electronic/Gyro_on_board.js");

var _Gyro_on_board2 = _interopRequireDefault(_Gyro_on_board);

var _sound = __webpack_require__(/*! ./sound */ "./src/electronic/sound.js");

var _sound2 = _interopRequireDefault(_sound);

var _sound_on_board = __webpack_require__(/*! ./sound_on_board */ "./src/electronic/sound_on_board.js");

var _sound_on_board2 = _interopRequireDefault(_sound_on_board);

var _pirmotion = __webpack_require__(/*! ./pirmotion */ "./src/electronic/pirmotion.js");

var _pirmotion2 = _interopRequireDefault(_pirmotion);

var _infrared = __webpack_require__(/*! ./infrared */ "./src/electronic/infrared.js");

var _infrared2 = _interopRequireDefault(_infrared);

var _infrared_on_board = __webpack_require__(/*! ./infrared_on_board */ "./src/electronic/infrared_on_board.js");

var _infrared_on_board2 = _interopRequireDefault(_infrared_on_board);

var _limit_switch = __webpack_require__(/*! ./limit_switch */ "./src/electronic/limit_switch.js");

var _limit_switch2 = _interopRequireDefault(_limit_switch);

var _line_follower = __webpack_require__(/*! ./line_follower */ "./src/electronic/line_follower.js");

var _line_follower2 = _interopRequireDefault(_line_follower);

var _compass = __webpack_require__(/*! ./compass */ "./src/electronic/compass.js");

var _compass2 = _interopRequireDefault(_compass);

var _humiture = __webpack_require__(/*! ./humiture */ "./src/electronic/humiture.js");

var _humiture2 = _interopRequireDefault(_humiture);

var _flame = __webpack_require__(/*! ./flame */ "./src/electronic/flame.js");

var _flame2 = _interopRequireDefault(_flame);

var _gas = __webpack_require__(/*! ./gas */ "./src/electronic/gas.js");

var _gas2 = _interopRequireDefault(_gas);

var _touch = __webpack_require__(/*! ./touch */ "./src/electronic/touch.js");

var _touch2 = _interopRequireDefault(_touch);

var _four_keys = __webpack_require__(/*! ./four_keys */ "./src/electronic/four_keys.js");

var _four_keys2 = _interopRequireDefault(_four_keys);

var _dig_GPIO = __webpack_require__(/*! ./dig_GPIO */ "./src/electronic/dig_GPIO.js");

var _dig_GPIO2 = _interopRequireDefault(_dig_GPIO);

var _analog_GPIO = __webpack_require__(/*! ./analog_GPIO */ "./src/electronic/analog_GPIO.js");

var _analog_GPIO2 = _interopRequireDefault(_analog_GPIO);

var _GPIO_continue = __webpack_require__(/*! ./GPIO_continue */ "./src/electronic/GPIO_continue.js");

var _GPIO_continue2 = _interopRequireDefault(_GPIO_continue);

var _double_GPIO = __webpack_require__(/*! ./double_GPIO */ "./src/electronic/double_GPIO.js");

var _double_GPIO2 = _interopRequireDefault(_double_GPIO);

var _runtime = __webpack_require__(/*! ./runtime */ "./src/electronic/runtime.js");

var _runtime2 = _interopRequireDefault(_runtime);

var _voltage = __webpack_require__(/*! ./voltage */ "./src/electronic/voltage.js");

var _voltage2 = _interopRequireDefault(_voltage);

var _firmware = __webpack_require__(/*! ./firmware */ "./src/electronic/firmware.js");

var _firmware2 = _interopRequireDefault(_firmware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//读值
exports.default = {
  DcMotor: _dc_motor2.default,
  VirtualJoystick: _virtual_joystick2.default,
  VirtualJoystickForBalance: _virtual_joystick_for_balance2.default,
  StepperMotor: _stepper_motor2.default,
  EncoderMotor: _encoder_motor2.default,
  EncoderMotorOnBoard: _encoder_motor_on_board2.default,
  ServoMotor: _servo_motor2.default,
  FourLeds: _four_leds2.default,
  RgbLed: _rgb_led2.default,
  RgbLedOnBoard: _rgb_led_on_board2.default,
  LedMatrix: _led_matrix2.default,
  Buzzer: _buzzer2.default,
  SevenSegment: _seven_segment2.default,
  Shutter: _shutter2.default,
  SmartServo: _smart_servo2.default,
  EncoderMotorOnBoardPID: _encoder_motor_on_board_pid2.default,

  Reset: _reset2.default, //TODO: 实现待验证
  ButtonOnBoard: _button_on_board2.default,
  Ultrasonic: _ultrasonic2.default,
  Temperature: _temperature2.default,
  TemperatureOnBoard: _temperature_on_board2.default,
  Light: _light2.default,
  LightOnBoard: _light_on_board2.default,
  Potentionmeter: _potentionmeter2.default,
  Joystick: _joystick2.default,
  Gyro: _gyro2.default,
  GyroOnBoard: _Gyro_on_board2.default,
  Sound: _sound2.default,
  SoundOnBoard: _sound_on_board2.default,
  Pirmotion: _pirmotion2.default,
  Infrared: _infrared2.default,
  InfraredOnBoard: _infrared_on_board2.default,
  LineFollower: _line_follower2.default,
  LimitSwitch: _limit_switch2.default,
  Compass: _compass2.default,
  Humiture: _humiture2.default,
  Flame: _flame2.default,
  Gas: _gas2.default,
  Touch: _touch2.default,
  FourKeys: _four_keys2.default,
  DigGPIO: _dig_GPIO2.default,
  AnalogGPIO: _analog_GPIO2.default,
  GPIOContinue: _GPIO_continue2.default,
  DoubleGPIO: _double_GPIO2.default,
  Runtime: _runtime2.default,
  Voltage: _voltage2.default,
  Firmware: _firmware2.default
}; //略不同的实现方式

//包含读值和写的接口

/***/ }),

/***/ "./src/electronic/infrared.js":
/*!************************************!*\
  !*** ./src/electronic/infrared.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MCORE_NAME = _settings.SUPPORTLIST[0].toLowerCase();
/**
 * Infrared sensor module
 * @describe external infrared sensor and can't connect 2 this infrared sensor to a mainboard at the same time
 * @extends Electronic
 */

var Infrared = function (_Electronic) {
  (0, _inherits3.default)(Infrared, _Electronic);

  function Infrared(port) {
    (0, _classCallCheck3.default)(this, Infrared);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Infrared.__proto__ || (0, _getPrototypeOf2.default)(Infrared)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    //宿主
    _this.hostname = host.toLowerCase();
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Infrared, [{
    key: 'getData',


    /**
     * Get data of Infrared sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      var deviceId = void 0,
          aKey = void 0;
      //如果是 mcore，外接的红外传感器 id = 0x0e
      //如果非 mcore，外接的红外传感器 id = 0x10
      switch (this.hostname) {
        case MCORE_NAME:
          deviceId = 0x0e;
          aKey = 0x45;
          break;
        default:
          deviceId = 0x10;
      }
      var argsArr = [deviceId, this.args.port];
      aKey ? argsArr.push(aKey) : null;
      return (0, _utils.composer)(_cmd2.default.readInfrared, argsArr);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Infrared;
}(_electronic2.default);

exports.default = Infrared;

/***/ }),

/***/ "./src/electronic/infrared_on_board.js":
/*!*********************************************!*\
  !*** ./src/electronic/infrared_on_board.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODE = ['read', 'write', 'read2'];
/**
 * 所有主控板（包括MegaPiPro）都有 2 种类型：外接的红外传感器，外接的被动式红外探测器
 * mcore 一共有 4 种红外相关的传感器，即除了上述 2 种，还有板载的红外传感器，且板载的分别是“发射端”、“接收端” 2 种

 * mcore 红外线接收端（读） id 0x0e
 * mcore 红外线发射端（写）id 0x0d
 * 其他主控板，红外传感器统一为接收端 (读) - id 0x10
 * 其他主控板，被动式红外传感器统一为接收端 (读) - id 0x0f
 */

/**
 * InfraredOnBoard sensor module
 * @describe this interface is only for mcore and mcore has two kind of InfraredOnBoard sensor
 * @extends Electronic
 */

var InfraredOnBoard = function (_Electronic) {
  (0, _inherits3.default)(InfraredOnBoard, _Electronic);

  function InfraredOnBoard() {
    (0, _classCallCheck3.default)(this, InfraredOnBoard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfraredOnBoard.__proto__ || (0, _getPrototypeOf2.default)(InfraredOnBoard)).call(this));

    _this.args = {
      port: 0x00,
      key: 0x45, // A
      emitMsg: []
    };
    _this.mode_ = MODE[0];
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(InfraredOnBoard, [{
    key: 'checkKeyPressed',


    /**
     * [checkKeyPressed description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    value: function checkKeyPressed(key) {
      this.mode_ = MODE[0];
      var keyCode = _settings.INFRARED_BUTTON[key]; // to validate
      if (typeof keyCode === 'undefined') {
        console.warn('key code is not match');
      }
      this.args.key = keyCode;
      return this;
    }

    /**
     * set the message of the Infrared emitting to another mcore
     * @param {String} msg the message
     */

  }, {
    key: 'setEmitMessage',
    value: function setEmitMessage(msg) {
      var assicMsg = [];
      if (typeof msg !== 'undefined' || msg !== null) {
        assicMsg = (0, _utils.stringToAsciiCode)(String(msg));
      }
      this.mode_ = MODE[1];
      this.args.emitMsg = assicMsg;
      return this;
    }

    /**
     * set the message of the Infrared emitting to another mcore
     * @param {String} msg the message receiveEmitInfraredOnboard
     */

  }, {
    key: 'getEmitMessage',
    value: function getEmitMessage() {
      this.mode_ = MODE[2];
      return this;
    }

    /**
     * run to emit message
     * @return {[type]} [description]
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * Get data of Infrared sensor received from telecontroller
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    /**
     * a getter interface, which returns the mainboards the InfraredOnBoard module supported
     */

  }, {
    key: 'protocol',
    get: function get() {
      if (this.mode_ === MODE[0]) {
        return (0, _utils.composer)(_cmd2.default.readInfraredOnboard, [this.args.port, this.args.key]);
      } else if (this.mode_ === MODE[1]) {
        return (0, _utils.composer)(_cmd2.default.emitInfraredOnboard, [this.args.emitMsg]);
      } else {
        return (0, _utils.composer)(_cmd2.default.receiveEmitInfraredOnboard, []);
      }
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '10000');
    }
  }]);
  return InfraredOnBoard;
}(_electronic2.default);

exports.default = InfraredOnBoard;

/***/ }),

/***/ "./src/electronic/joystick.js":
/*!************************************!*\
  !*** ./src/electronic/joystick.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Joystick sensor module
 * @extends Electronic
 */
var Joystick = function (_Electronic) {
  (0, _inherits3.default)(Joystick, _Electronic);

  function Joystick(port) {
    (0, _classCallCheck3.default)(this, Joystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Joystick.__proto__ || (0, _getPrototypeOf2.default)(Joystick)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      axis: 1
    };
    return _this;
  }
  //x y z 轴映射应当在此完成


  (0, _createClass3.default)(Joystick, [{
    key: 'axis',
    value: function axis(_axis) {
      this.args.axis = (0, _validate.validateNumber)(_axis, this.args.axis);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'getData',


    /**
     * Get data of Joystick sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readJoystick, [this.args.port, this.args.axis]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Joystick;
}(_electronic2.default);

exports.default = Joystick;

/***/ }),

/***/ "./src/electronic/led_matrix.js":
/*!**************************************!*\
  !*** ./src/electronic/led_matrix.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _led_matrix_char = __webpack_require__(/*! ./led_matrix_char */ "./src/electronic/led_matrix_char.js");

var _led_matrix_char2 = _interopRequireDefault(_led_matrix_char);

var _led_matrix_emotion = __webpack_require__(/*! ./led_matrix_emotion */ "./src/electronic/led_matrix_emotion.js");

var _led_matrix_emotion2 = _interopRequireDefault(_led_matrix_emotion);

var _led_matrix_number = __webpack_require__(/*! ./led_matrix_number */ "./src/electronic/led_matrix_number.js");

var _led_matrix_number2 = _interopRequireDefault(_led_matrix_number);

var _led_matrix_time = __webpack_require__(/*! ./led_matrix_time */ "./src/electronic/led_matrix_time.js");

var _led_matrix_time2 = _interopRequireDefault(_led_matrix_time);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module, who can be play as 'charMode','emotionMode','numberMode','timeMode'
 * @extends Electronic
 *
 * @example
 * // char mode
 * mcore.LedMatrix(1).charMode().x(10).y(12).char('hello').run()
 *
 * // char mode
 * mcore.LedMatrix(1).charMode().content('hello', 10, 12).run()
 *
 * // emotion mode
 * mcore.LedMatrix(1).emotionMode().x(10).y(12).emotion('0010011101010101001010').run()
 *
 * // emotion mode
 * mcore.LedMatrix(1).timeMode().separator(':').hour(12).minute(12).run()
 *
 * // number mode
 * mcore.LedMatrix(1).numberMode().number('9999).run()
 */
var LedMatrix = function (_Electronic) {
  (0, _inherits3.default)(LedMatrix, _Electronic);

  function LedMatrix(port) {
    (0, _classCallCheck3.default)(this, LedMatrix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrix.__proto__ || (0, _getPrototypeOf2.default)(LedMatrix)).call(this));

    var host = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    port = (0, _validate.validateNumber)(port);
    //宿主
    _this.hostname = host.toLowerCase();
    //字符模式
    _this.charMode = function () {
      return new _led_matrix_char2.default(port);
    };

    //表情模式
    _this.emotionMode = function () {
      return new _led_matrix_emotion2.default(port);
    };

    //数字模式
    _this.numberMode = function () {
      return new _led_matrix_number2.default(port);
    };

    //时间模式
    _this.timeMode = function () {
      return new _led_matrix_time2.default(port);
    };
    return _this;
  }

  (0, _createClass3.default)(LedMatrix, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1110');
    }
  }]);
  return LedMatrix;
}(_electronic2.default);

exports.default = LedMatrix;

/***/ }),

/***/ "./src/electronic/led_matrix_char.js":
/*!*******************************************!*\
  !*** ./src/electronic/led_matrix_char.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _BaseLedMatrix2 = __webpack_require__(/*! ./BaseLedMatrix */ "./src/electronic/BaseLedMatrix.js");

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Char Mode'
 * @extends BaseLedMatrix
 */
var LedMatrixChar = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixChar, _BaseLedMatrix);

  function LedMatrixChar(port) {
    (0, _classCallCheck3.default)(this, LedMatrixChar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixChar.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixChar)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: 0,
      y: 7, //默认将字体垂直居中，输入的 y 值时将在 y=7 上做偏移
      char: '',
      type: _BaseLedMatrix3.default.CHAR_TYPE
    });
    return _this;
  }

  /**
   * set the X axis coordinate of the char
   * @param  {Number} x
   * @return {Instance}     @this
   */


  (0, _createClass3.default)(LedMatrixChar, [{
    key: 'x',
    value: function x(_x) {
      this.args.x = (0, _validate.validateNumber)(Math.floor(_x), this.args.x);
      return this;
    }

    /**
     * set the Y axis coordinate of the char
     * @param  {Number} y
     * @return {Instance}     @this
     */

  }, {
    key: 'y',
    value: function y(_y) {
      this.args.y = (0, _validate.validateNumber)(Math.floor(_y) + 7, this.args.y);
      return this;
    }

    /**
     * set char as the content shown on the led maxtrix
     * @param  {String} str the content string
     * @return {Instance}     @this
     */

  }, {
    key: 'char',
    value: function char(str) {
      this.args.char = (0, _validate.validateString)(str);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} str
     * @param  {Number} coordinate contains [x, y]
     */

  }, {
    key: 'content',
    value: function content(str, coordinate) {
      if (!Array.isArray(coordinate)) {
        coordinate = [0, 0];
      }
      //设定坐标
      this.x(coordinate[0]);
      this.y(coordinate[1]);
      return this.char(str);
    }
  }]);
  return LedMatrixChar;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixChar;

/***/ }),

/***/ "./src/electronic/led_matrix_emotion.js":
/*!**********************************************!*\
  !*** ./src/electronic/led_matrix_emotion.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _BaseLedMatrix2 = __webpack_require__(/*! ./BaseLedMatrix */ "./src/electronic/BaseLedMatrix.js");

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Emotion Mode'
 * @extends BaseLedMatrix
 */
var LedMatrixEmotion = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixEmotion, _BaseLedMatrix);

  function LedMatrixEmotion(port) {
    (0, _classCallCheck3.default)(this, LedMatrixEmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixEmotion.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixEmotion)).call(this, port));

    (0, _assign2.default)(_this.args, {
      x: 0,
      y: 0,
      emotion: 0,
      type: _BaseLedMatrix3.default.EMOTION_TYPE
    });
    return _this;
  }

  /**
   * set the X axis coordinate of the emotion
   * @param  {Number} x
   */


  (0, _createClass3.default)(LedMatrixEmotion, [{
    key: 'x',
    value: function x(_x) {
      this.args.x = (0, _validate.validateNumber)(Math.floor(_x), this.args.x);
      return this;
    }

    /**
     * set the Y axis coordinate of the emotion
     * @param  {Number} y
     */

  }, {
    key: 'y',
    value: function y(_y) {
      this.args.y = (0, _validate.validateNumber)(Math.floor(_y), this.args.y);
      return this;
    }

    /**
     * use lattice to describe the emotion
     * @param  {String} emotion lattice '000000100000100001110001001'
     */

  }, {
    key: 'emotion',
    value: function emotion(_emotion) {
      // TODO: validate the param
      this.args.emotion = (0, _validate.validateString)(_emotion);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} emotionStr
     * @param  {Number} coordinate contains [x, y]
     */

  }, {
    key: 'content',
    value: function content(emotionStr, coordinate) {
      if (!Array.isArray(coordinate)) {
        coordinate = [0, 0];
      }
      //设定坐标
      this.x(coordinate[0]);
      this.y(coordinate[1]);
      return this.emotion(emotionStr);
    }
  }]);
  return LedMatrixEmotion;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixEmotion;

/***/ }),

/***/ "./src/electronic/led_matrix_number.js":
/*!*********************************************!*\
  !*** ./src/electronic/led_matrix_number.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _BaseLedMatrix2 = __webpack_require__(/*! ./BaseLedMatrix */ "./src/electronic/BaseLedMatrix.js");

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Number Mode'
 * @extends BaseLedMatrix
 */
var LedMatrixNumber = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixNumber, _BaseLedMatrix);

  function LedMatrixNumber(port) {
    (0, _classCallCheck3.default)(this, LedMatrixNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixNumber.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixNumber)).call(this, port));

    (0, _assign2.default)(_this.args, {
      number: 0,
      type: _BaseLedMatrix3.default.NUMBER_TYPE
    });
    return _this;
  }

  /**
   * set number
   * @param  {Number} number the number you want show on the led matrix
   */


  (0, _createClass3.default)(LedMatrixNumber, [{
    key: 'number',
    value: function number(_number) {
      this.args.number = (0, _validate.validateNumber)(_number);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {Number} number
     */

  }, {
    key: 'content',
    value: function content(number) {
      return this.number(number);
    }
  }]);
  return LedMatrixNumber;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixNumber;

/***/ }),

/***/ "./src/electronic/led_matrix_time.js":
/*!*******************************************!*\
  !*** ./src/electronic/led_matrix_time.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _BaseLedMatrix2 = __webpack_require__(/*! ./BaseLedMatrix */ "./src/electronic/BaseLedMatrix.js");

var _BaseLedMatrix3 = _interopRequireDefault(_BaseLedMatrix2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LedMatrix sensor module run as 'Time Mode'
 * @extends BaseLedMatrix
 */
var LedMatrixTime = function (_BaseLedMatrix) {
  (0, _inherits3.default)(LedMatrixTime, _BaseLedMatrix);

  function LedMatrixTime(port) {
    (0, _classCallCheck3.default)(this, LedMatrixTime);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LedMatrixTime.__proto__ || (0, _getPrototypeOf2.default)(LedMatrixTime)).call(this, port));

    (0, _assign2.default)(_this.args, {
      separator: 0x01,
      hour: 0,
      minute: 0,
      type: _BaseLedMatrix3.default.TIME_TYPE
    });
    return _this;
  }

  /**
   * set separator between hour and minute
   * @param  {String} separator  01 signify `:`, 02 signify ` `
   */


  (0, _createClass3.default)(LedMatrixTime, [{
    key: 'separator',
    value: function separator(_separator) {
      _separator = (0, _validate.warnParamNotInList)(_separator, [':', ' ']) || ':';
      _separator = _separator === ':' ? 0x01 : 0x00;
      this.args.separator = _separator;
      return this;
    }

    /**
     * set hour
     * @param  {Number} h hour
     */

  }, {
    key: 'hour',
    value: function hour(h) {
      h = (0, _utils.limitValue)(h, [0, 23]);
      this.args.hour = (0, _validate.validateNumber)(h, 0);
      return this;
    }

    /**
     * set minute
     * @param  {Number} m minute
     */

  }, {
    key: 'minute',
    value: function minute(m) {
      m = (0, _utils.limitValue)(m, [0, 59]);
      this.args.minute = (0, _validate.validateNumber)(m, 0);
      return this;
    }

    /**
     * set content for Matrix panel
     * @param  {String} timeStr time string format should be 'HH:MM' or 'HH MM' or 'H:M'
     */

  }, {
    key: 'content',
    value: function content(timeStr) {
      var timeArr = (0, _validate.warnParamNotDateFormat)(timeStr || '') || [0, ':', 0];
      //利用参数的校验接口
      this.separator(timeArr[1]);
      this.hour(Number(timeArr[0]));
      this.minute(Number(timeArr[2]));
      return this;
    }
  }]);
  return LedMatrixTime;
}(_BaseLedMatrix3.default);

exports.default = LedMatrixTime;

/***/ }),

/***/ "./src/electronic/light.js":
/*!*********************************!*\
  !*** ./src/electronic/light.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseLight2 = __webpack_require__(/*! ./BaseLight */ "./src/electronic/BaseLight.js");

var _BaseLight3 = _interopRequireDefault(_BaseLight2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Light sensor module
 * @extends BaseLight
 */
var Light = function (_BaseLight) {
  (0, _inherits3.default)(Light, _BaseLight);

  function Light(port) {
    (0, _classCallCheck3.default)(this, Light);
    return (0, _possibleConstructorReturn3.default)(this, (Light.__proto__ || (0, _getPrototypeOf2.default)(Light)).call(this, port));
  }

  (0, _createClass3.default)(Light, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '111111');
    }
  }]);
  return Light;
}(_BaseLight3.default);

exports.default = Light;

/***/ }),

/***/ "./src/electronic/light_on_board.js":
/*!******************************************!*\
  !*** ./src/electronic/light_on_board.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _BaseLight2 = __webpack_require__(/*! ./BaseLight */ "./src/electronic/BaseLight.js");

var _BaseLight3 = _interopRequireDefault(_BaseLight2);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LightOnBoard sensor module
 * @extends BaseLight
 */
var LightOnBoard = function (_BaseLight) {
  (0, _inherits3.default)(LightOnBoard, _BaseLight);

  function LightOnBoard() {
    (0, _classCallCheck3.default)(this, LightOnBoard);

    //mcore
    //宿主主控
    var _this = (0, _possibleConstructorReturn3.default)(this, (LightOnBoard.__proto__ || (0, _getPrototypeOf2.default)(LightOnBoard)).call(this, 6));

    _this.hostname = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    switch (_this.hostname) {
      case _settings.SUPPORTLIST[1]:
        //TO IMPROVE: auriga 板载 port 只能为 0x0c，0x0b
        _this.args.port = (0, _validate.validateNumber)(arguments[0], 1);
        break;
      //megapi
      case _settings.SUPPORTLIST[2]:
        _this.args.port = 0x0c;
        break;
      default:
        _this.args.port = 6; //mcore
    }
    return _this;
  }

  (0, _createClass3.default)(LightOnBoard, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '111111');
    }
  }]);
  return LightOnBoard;
}(_BaseLight3.default);

exports.default = LightOnBoard;

/***/ }),

/***/ "./src/electronic/limit_switch.js":
/*!****************************************!*\
  !*** ./src/electronic/limit_switch.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LimitSwitch sensor module
 * @extends Electronic
 */
var LimitSwitch = function (_Electronic) {
  (0, _inherits3.default)(LimitSwitch, _Electronic);

  function LimitSwitch(port, slot) {
    (0, _classCallCheck3.default)(this, LimitSwitch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LimitSwitch.__proto__ || (0, _getPrototypeOf2.default)(LimitSwitch)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(LimitSwitch, [{
    key: 'getData',


    /**
     * Get data of Joystick sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readLimitSwitch, [this.args.port, this.args.slot]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return LimitSwitch;
}(_electronic2.default);

exports.default = LimitSwitch;

/***/ }),

/***/ "./src/electronic/line_follower.js":
/*!*****************************************!*\
  !*** ./src/electronic/line_follower.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LineFollower sensor module
 * @extends Electronic
 */
var LineFollower = function (_Electronic) {
  (0, _inherits3.default)(LineFollower, _Electronic);

  function LineFollower(port) {
    (0, _classCallCheck3.default)(this, LineFollower);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LineFollower.__proto__ || (0, _getPrototypeOf2.default)(LineFollower)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(LineFollower, [{
    key: 'getData',


    /**
     * Get data of LineFollower sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readLineFollower, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return LineFollower;
}(_electronic2.default);

exports.default = LineFollower;

/***/ }),

/***/ "./src/electronic/pirmotion.js":
/*!*************************************!*\
  !*** ./src/electronic/pirmotion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pirmotion sensor module
 * @describe passive infrared ( PIR) sensor
 * @extends Electronic
 */
var Pirmotion = function (_Electronic) {
  (0, _inherits3.default)(Pirmotion, _Electronic);

  function Pirmotion(port) {
    (0, _classCallCheck3.default)(this, Pirmotion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pirmotion.__proto__ || (0, _getPrototypeOf2.default)(Pirmotion)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Pirmotion, [{
    key: 'getData',


    /**
     * Get data of Pirmotion sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readPirmotion, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Pirmotion;
}(_electronic2.default);

exports.default = Pirmotion;

/***/ }),

/***/ "./src/electronic/potentionmeter.js":
/*!******************************************!*\
  !*** ./src/electronic/potentionmeter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Potentionmeter sensor module
 * @extends Electronic
 */
var Potentionmeter = function (_Electronic) {
  (0, _inherits3.default)(Potentionmeter, _Electronic);

  function Potentionmeter(port) {
    (0, _classCallCheck3.default)(this, Potentionmeter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Potentionmeter.__proto__ || (0, _getPrototypeOf2.default)(Potentionmeter)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Potentionmeter, [{
    key: 'getData',


    /**
     * Get data of Potentionmeter sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readPotentionmeter, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Potentionmeter;
}(_electronic2.default);

exports.default = Potentionmeter;

/***/ }),

/***/ "./src/electronic/reset.js":
/*!*********************************!*\
  !*** ./src/electronic/reset.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reset module
 * @extends Electronic
 */
var Reset = function (_Electronic) {
  (0, _inherits3.default)(Reset, _Electronic);

  function Reset() {
    (0, _classCallCheck3.default)(this, Reset);
    return (0, _possibleConstructorReturn3.default)(this, (Reset.__proto__ || (0, _getPrototypeOf2.default)(Reset)).call(this));
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Reset, [{
    key: 'reset',


    /**
     * reset后返回消息，表明重置成功
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reset() {
        return _ref.apply(this, arguments);
      }

      return reset;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.reset);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Reset;
}(_electronic2.default);

exports.default = Reset;

/***/ }),

/***/ "./src/electronic/rgb_led.js":
/*!***********************************!*\
  !*** ./src/electronic/rgb_led.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(/*! ./BaseRgbLed */ "./src/electronic/BaseRgbLed.js");

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RgbLed sensor module
 * @extends BaseRgbLed
 *  * @example
 * // turn on led attached to mcore
 * mcore.RgbLed(2).position(1).red()
 *
 * // turn on all led attached to auriga
 * auriga.RgbLed(2).white();
 */
var RgbLed = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLed, _BaseRgbLed);

  function RgbLed(port, slot) {
    (0, _classCallCheck3.default)(this, RgbLed);
    return (0, _possibleConstructorReturn3.default)(this, (RgbLed.__proto__ || (0, _getPrototypeOf2.default)(RgbLed)).call(this, port, slot));
  }

  // orion 不能 port8 slot1和port7 slot1不能用于灯条


  (0, _createClass3.default)(RgbLed, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '111111');
    }
  }]);
  return RgbLed;
}(_BaseRgbLed3.default);

exports.default = RgbLed;

/***/ }),

/***/ "./src/electronic/rgb_led_on_board.js":
/*!********************************************!*\
  !*** ./src/electronic/rgb_led_on_board.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRgbLed2 = __webpack_require__(/*! ./BaseRgbLed */ "./src/electronic/BaseRgbLed.js");

var _BaseRgbLed3 = _interopRequireDefault(_BaseRgbLed2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RgbLedOnBoard sensor module
 * @extends BaseRgbLed
 * @example
 * // turn on left led and right led on board of mcore
 * mcore.RgbLedOnBoard().position(1).red().position(2).blue()
 *
 * // turn on all led on board of auriga
 * auriga.RgbLedOnBoard().white();
 */
var RgbLedOnBoard = function (_BaseRgbLed) {
  (0, _inherits3.default)(RgbLedOnBoard, _BaseRgbLed);

  function RgbLedOnBoard() {
    (0, _classCallCheck3.default)(this, RgbLedOnBoard);

    //mcore
    //宿主主控
    var _this = (0, _possibleConstructorReturn3.default)(this, (RgbLedOnBoard.__proto__ || (0, _getPrototypeOf2.default)(RgbLedOnBoard)).call(this, 7, 2));

    _this.hostname = (0, _validate.warnNotSupport)(arguments[arguments.length - 1]) || '';
    switch (_this.hostname) {
      //auriga
      case _settings.SUPPORTLIST[1]:
        _this.args.port = 0;
        _this.args.slot = 2;
        break;
      //mcore
      default:
        _this.args.port = 7;
        _this.args.slot = 2;
    }
    return _this;
  }

  (0, _createClass3.default)(RgbLedOnBoard, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '110000');
    }
  }]);
  return RgbLedOnBoard;
}(_BaseRgbLed3.default);

exports.default = RgbLedOnBoard;

/***/ }),

/***/ "./src/electronic/runtime.js":
/*!***********************************!*\
  !*** ./src/electronic/runtime.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Runtime module which is a virtual module
 * @extends Electronic
 */
var Runtime = function (_Electronic) {
  (0, _inherits3.default)(Runtime, _Electronic);

  function Runtime() {
    (0, _classCallCheck3.default)(this, Runtime);
    return (0, _possibleConstructorReturn3.default)(this, (Runtime.__proto__ || (0, _getPrototypeOf2.default)(Runtime)).call(this));
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Runtime, [{
    key: 'getData',


    /**
     * Get data of Runtime sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readRuntime);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '000010');
    }
  }]);
  return Runtime;
}(_electronic2.default);

exports.default = Runtime;

/***/ }),

/***/ "./src/electronic/servo_motor.js":
/*!***************************************!*\
  !*** ./src/electronic/servo_motor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ServoMotor sensor module
 * @extends Electronic
 */
var ServoMotor = function (_Electronic) {
  (0, _inherits3.default)(ServoMotor, _Electronic);

  function ServoMotor(port, slot) {
    (0, _classCallCheck3.default)(this, ServoMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ServoMotor.__proto__ || (0, _getPrototypeOf2.default)(ServoMotor)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot),
      angle: 0
    };
    return _this;
  }

  /**
   * set angle of degree
   * @param  {Number} degree
   * @return {Object} the instance
   */


  (0, _createClass3.default)(ServoMotor, [{
    key: 'angle',
    value: function angle(degree) {
      this.args.angle = (0, _validate.validateNumber)(degree, 0);
      return this;
    }

    /**
     * go to the start
     * @return {[type]} [description]
     */

  }, {
    key: 'setToStart',
    value: function setToStart() {
      this.angle(0);
      return this;
    }

    /**
     * go to the end
     * @return {[type]} [description]
     */

  }, {
    key: 'setToEnd',
    value: function setToEnd() {
      this.angle(180);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setServoMotor, [this.args.port, this.args.slot, this.args.angle]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return ServoMotor;
}(_electronic2.default);

exports.default = ServoMotor;

/***/ }),

/***/ "./src/electronic/seven_segment.js":
/*!*****************************************!*\
  !*** ./src/electronic/seven_segment.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SevenSegment sensor module
 * @extends Electronic
 */
var SevenSegment = function (_Electronic) {
  (0, _inherits3.default)(SevenSegment, _Electronic);

  function SevenSegment(port) {
    (0, _classCallCheck3.default)(this, SevenSegment);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SevenSegment.__proto__ || (0, _getPrototypeOf2.default)(SevenSegment)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      number: 1
    };
    return _this;
  }
  /**
   * set the number you want show on the segment tube
   * @param  {Number} num
   * @return {Instance}     @this
   */


  (0, _createClass3.default)(SevenSegment, [{
    key: 'number',
    value: function number(num) {
      this.args.number = (0, _validate.validateNumber)(num, this.args.number);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run and show the number
     * @return {Instance}     @this
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setSevenSegment, [this.args.port, this.args.number]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return SevenSegment;
}(_electronic2.default);

exports.default = SevenSegment;

/***/ }),

/***/ "./src/electronic/shutter.js":
/*!***********************************!*\
  !*** ./src/electronic/shutter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shutter sensor module
 * @extends Electronic
 */
var Shutter = function (_Electronic) {
  (0, _inherits3.default)(Shutter, _Electronic);

  function Shutter(port) {
    (0, _classCallCheck3.default)(this, Shutter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shutter.__proto__ || (0, _getPrototypeOf2.default)(Shutter)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      action: null
    };
    return _this;
  }

  /**
   * set shutter mode
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  //TODO: 本API易用性还得改进


  (0, _createClass3.default)(Shutter, [{
    key: 'action',
    value: function action(actionId) {
      this.args.action = (0, _validate.validateNumber)(actionId);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run shutter with mode set before
     * @return {this}  模块实例
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setShutter, [this.args.port, this.args.action]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Shutter;
}(_electronic2.default);

exports.default = Shutter;

/***/ }),

/***/ "./src/electronic/smart_servo.js":
/*!***************************************!*\
  !*** ./src/electronic/smart_servo.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SmartServo sensor module
 * @extends Electronic
 */
var SmartServo = function (_Electronic) {
  (0, _inherits3.default)(SmartServo, _Electronic);

  function SmartServo(index) {
    (0, _classCallCheck3.default)(this, SmartServo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SmartServo.__proto__ || (0, _getPrototypeOf2.default)(SmartServo)).call(this));

    _this.args = {
      index: index,
      subCmd: null,
      speed: 0,
      angle: null
    };
    _this.extraCmd = null;
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(SmartServo, [{
    key: 'lock',


    /**
     * 锁定
     * @return {[type]} [description]
     */
    value: function lock() {
      this.isReadMode = false;
      this.extraCmd = 0x00;
      this.args.subCmd = 0x01;
      return this;
    }
    /**
     * 解锁
     * @return {[type]} [description]
     */

  }, {
    key: 'unclock',
    value: function unclock() {
      this.isReadMode = false;
      this.extraCmd = 0x01;
      this.args.subCmd = 0x01;
      return this;
    }

    /**
     * set led color of the smart servo
     * @param {String|Array} hex_rgb #ff0064 or [255, 00, 100]
     */

  }, {
    key: 'ledColor',
    value: function ledColor() {
      var hex_rgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [255, 0, 0];

      this.extraCmd = Array.isArray(hex_rgb) ? hex_rgb : (0, _utils.hexToRgb)(hex_rgb);
      this.args.subCmd = 0x02;
      return this;
    }

    /**
     * handshake
     */

  }, {
    key: 'handshake',
    value: function handshake() {
      this.args.subCmd = 0x03;
      return this;
    }

    /**
     * Set speed for smart servo
     * @param  {Number} speed the speed
     */

  }, {
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = (0, _validate.validateNumber)(_speed);
      return this;
    }
    /**
     * Move to the absolute angle
     * @param  {Number} angle the absolute angle
     */

  }, {
    key: 'absoluteAngle',
    value: function absoluteAngle(angle) {
      this.args.subCmd = 0x04;
      this.args.angle = (0, _validate.validateNumber)(-angle, 0);
      return this;
    }
    /**
     * Move to the relative angle
     * @param  {Number} angle the relative angle
     */

  }, {
    key: 'relativeAngle',
    value: function relativeAngle(angle) {
      this.args.subCmd = 0x05;
      this.args.angle = (0, _validate.validateNumber)(-angle, 0);
      return this;
    }
    /**
     * set speed of smart servo as a DC motor
     * @param  {Number} speed (optional) speed of the smart servo
     */

  }, {
    key: 'setAsDCMotorSpeed',
    value: function setAsDCMotorSpeed(speed) {
      speed = (0, _validate.validateNumber)(speed, this.args.speed);
      //限制速度 -255~255
      this.args.speed = (0, _utils.limitValue)(-speed);
      this.args.subCmd = 0x06;
      return this;
    }

    /**
     * 设置零点
     */

  }, {
    key: 'setZeroPoint',
    value: function setZeroPoint() {
      this.args.subCmd = 0x07;
      return this;
    }

    /**
     * 回到起点
     * @return {[type]} [description]
     */

  }, {
    key: 'backToStart',
    value: function backToStart() {
      this.args.subCmd = 0x08;
      return this;
    }

    /**
     * 读速度
     */

  }, {
    key: 'readSpeed',
    value: function readSpeed() {
      this.args.subCmd = 0x09;
      return this;
    }
    /**
     * 读温度
     */

  }, {
    key: 'readTemperature',
    value: function readTemperature() {
      this.args.subCmd = 0x0a;
      return this;
    }

    /**
     * 读电流
     */

  }, {
    key: 'readCurrent',
    value: function readCurrent() {
      this.args.subCmd = 0x0b;
      return this;
    }

    /**
     * 读电压
     */

  }, {
    key: 'readVoltage',
    value: function readVoltage() {
      this.args.subCmd = 0x0c;
      return this;
    }

    /**
     * 读角度
     */

  }, {
    key: 'readAngle',
    value: function readAngle() {
      this.args.subCmd = 0x0d;
      return this;
    }

    /**
     * run of write API such as speed, runAsDcMotor, setZeroPoint and so on
     * @example
     * mcore.SmartServo(1)
     *      .speed()
     *      .run()
     * @return {Instance} @this
     */

  }, {
    key: 'run',
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * Get data of read API such as readSpeed, readVoltage, readAngle and so on
     * @example
     * mcore.SmartServo(1)
     *      .readSpeed()
     *      .getData()
     *      .then((val) => {
     *        console.log(val)
     *       });
     * @return {Promise}
     */

  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      if (this.args.subCmd < 4 || this.args.subCmd === 7 || this.args.subCmd === 8) {
        var baseCmd = [this.args.index, this.args.subCmd];
        if (Array.isArray(this.extraCmd)) {
          baseCmd.push(this.extraCmd);
        } else {
          baseCmd.push(this.extraCmd !== null ? [this.extraCmd] : []);
        }
        this.extraCmd = null;
        return (0, _utils.composer)(_cmd2.default.setSmartServo, baseCmd);
      } else if (this.args.subCmd === 4) {
        return (0, _utils.composer)(_cmd2.default.setSmartServoForAbsoluteAngle, [this.args.index, this.args.subCmd, this.args.angle, this.args.speed]);
      } else if (this.args.subCmd === 5) {
        return (0, _utils.composer)(_cmd2.default.setSmartServoForRelativeAngle, [this.args.index, this.args.subCmd, this.args.angle, this.args.speed]);
      } else if (this.args.subCmd === 6) {
        return (0, _utils.composer)(_cmd2.default.setSmartServoForDcMotor, [this.args.index, this.args.subCmd, this.args.speed]);
      } else {
        return (0, _utils.composer)(_cmd2.default.readSmartServoParam, [this.args.index, this.args.subCmd]);
      }
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0100');
    }
  }]);
  return SmartServo;
}(_electronic2.default);

exports.default = SmartServo;

/***/ }),

/***/ "./src/electronic/sound.js":
/*!*********************************!*\
  !*** ./src/electronic/sound.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseSound2 = __webpack_require__(/*! ./BaseSound */ "./src/electronic/BaseSound.js");

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sound sensor module
 * @extends BaseSound
 */
var Sound = function (_BaseSound) {
  (0, _inherits3.default)(Sound, _BaseSound);

  function Sound(port) {
    (0, _classCallCheck3.default)(this, Sound);
    return (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this, port));
  }

  (0, _createClass3.default)(Sound, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '111111');
    }
  }]);
  return Sound;
}(_BaseSound3.default);

exports.default = Sound;

/***/ }),

/***/ "./src/electronic/sound_on_board.js":
/*!******************************************!*\
  !*** ./src/electronic/sound_on_board.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseSound2 = __webpack_require__(/*! ./BaseSound */ "./src/electronic/BaseSound.js");

var _BaseSound3 = _interopRequireDefault(_BaseSound2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SoundOnBoard sensor module
 * @extends BaseSound
 */
var SoundOnBoard = function (_BaseSound) {
  (0, _inherits3.default)(SoundOnBoard, _BaseSound);

  function SoundOnBoard() {
    (0, _classCallCheck3.default)(this, SoundOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (SoundOnBoard.__proto__ || (0, _getPrototypeOf2.default)(SoundOnBoard)).call(this, 14));
  }

  (0, _createClass3.default)(SoundOnBoard, null, [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '010000');
    }
  }]);
  return SoundOnBoard;
}(_BaseSound3.default);

exports.default = SoundOnBoard;

/***/ }),

/***/ "./src/electronic/stepper_motor.js":
/*!*****************************************!*\
  !*** ./src/electronic/stepper_motor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/.6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _BaseMotor2 = __webpack_require__(/*! ./BaseMotor */ "./src/electronic/BaseMotor.js");

var _BaseMotor3 = _interopRequireDefault(_BaseMotor2);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * StepperMotor sensor module
 * @extends BaseMotor
 */
var StepperMotor = function (_BaseMotor) {
  (0, _inherits3.default)(StepperMotor, _BaseMotor);

  function StepperMotor(port) {
    (0, _classCallCheck3.default)(this, StepperMotor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StepperMotor.__proto__ || (0, _getPrototypeOf2.default)(StepperMotor)).call(this, port));

    (0, _assign2.default)(_this.args, {
      distance: 0,
      direction: 1
    });
    return _this;
  }

  /**
   * set distance
   * @param  {Number} speed
   * @return {Instance} @this
   */


  (0, _createClass3.default)(StepperMotor, [{
    key: 'distance',
    value: function distance(_distance) {
      this.args.distance = (0, _validate.validateNumber)(_distance, 0);
      return this;
    }

    /**
     * set direction of stepper motor rotate
     * @param  {Number} type  type is 1 or -1. 1 means rotate clockwise, and -1 means anticlockwise
     * @return {Instance} @this
     */

  }, {
    key: 'direction',
    value: function direction(type) {
      if (type !== -1) {
        type = 1;
      }
      this.args.direction = type;
      return this;
    }

    /**
     * run reversely
     * @return {Instance} @this
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this.speed(-1 * this.args.distance);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }
  }, {
    key: 'protocol',
    get: function get() {
      var buf = (0, _utils.composer)(_cmd2.default.setStepperMotor, [this.args.port, this.args.speed, this.args.distance * this.args.direction]);
      return buf;
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0111');
    }
  }]);
  return StepperMotor;
}(_BaseMotor3.default);

exports.default = StepperMotor;

/***/ }),

/***/ "./src/electronic/temperature.js":
/*!***************************************!*\
  !*** ./src/electronic/temperature.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Temperature sensor module
 * @extends Electronic
 */
var Temperature = function (_Electronic) {
  (0, _inherits3.default)(Temperature, _Electronic);

  function Temperature(port, slot) {
    (0, _classCallCheck3.default)(this, Temperature);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Temperature.__proto__ || (0, _getPrototypeOf2.default)(Temperature)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port),
      slot: (0, _validate.validateNumber)(slot)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Temperature, [{
    key: 'getData',


    /**
     * Get data of Temperature sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readTemperature, [this.args.port, this.args.slot]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Temperature;
}(_electronic2.default);

exports.default = Temperature;

/***/ }),

/***/ "./src/electronic/temperature_on_board.js":
/*!************************************************!*\
  !*** ./src/electronic/temperature_on_board.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TemperatureOnBoard sensor module
 * @extends Electronic
 */
var TemperatureOnBoard = function (_Electronic) {
  (0, _inherits3.default)(TemperatureOnBoard, _Electronic);

  function TemperatureOnBoard() {
    (0, _classCallCheck3.default)(this, TemperatureOnBoard);
    return (0, _possibleConstructorReturn3.default)(this, (TemperatureOnBoard.__proto__ || (0, _getPrototypeOf2.default)(TemperatureOnBoard)).call(this, 0x0d));
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(TemperatureOnBoard, [{
    key: 'getData',


    /**
     * Get data of TemperatureOnBoard sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readTemperatureOnBoard);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0100');
    }
  }]);
  return TemperatureOnBoard;
}(_electronic2.default);

exports.default = TemperatureOnBoard;

/***/ }),

/***/ "./src/electronic/touch.js":
/*!*********************************!*\
  !*** ./src/electronic/touch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Touch sensor module
 * @extends Electronic
 */
var Touch = function (_Electronic) {
  (0, _inherits3.default)(Touch, _Electronic);

  function Touch(port) {
    (0, _classCallCheck3.default)(this, Touch);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Touch.__proto__ || (0, _getPrototypeOf2.default)(Touch)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Touch, [{
    key: 'getData',


    /**
     * Get data of Touch sensor
     * @example
     * mcore.Touch(1)
     *      .getData()
     *      .then((val) => {
     *        console.log(val)
     *       });
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readTouch, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Touch;
}(_electronic2.default);

exports.default = Touch;

/***/ }),

/***/ "./src/electronic/ultrasonic.js":
/*!**************************************!*\
  !*** ./src/electronic/ultrasonic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ultrasonic sensor module
 * @extends Electronic
 */
var Ultrasonic = function (_Electronic) {
  (0, _inherits3.default)(Ultrasonic, _Electronic);

  function Ultrasonic(port) {
    (0, _classCallCheck3.default)(this, Ultrasonic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Ultrasonic.__proto__ || (0, _getPrototypeOf2.default)(Ultrasonic)).call(this));

    _this.args = {
      port: (0, _validate.validateNumber)(port)
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Ultrasonic, [{
    key: 'getData',


    /**
     * Get data of Ultrasonic sensor
     * @example
     * mcore.Ultrasonic(1)
     *      .getData()
     *      .then((val) => {
     *        console.log(val)
     *       });
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readUltrasonic, [this.args.port]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return Ultrasonic;
}(_electronic2.default);

exports.default = Ultrasonic;

/***/ }),

/***/ "./src/electronic/version.js":
/*!***********************************!*\
  !*** ./src/electronic/version.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
var Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Version, [{
    key: 'getData',


    /**
     * Get data of Gas sensor
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readVersion);
    }
  }]);
  return Version;
}();

exports.default = new Version();

/***/ }),

/***/ "./src/electronic/virtual_joystick.js":
/*!********************************************!*\
  !*** ./src/electronic/virtual_joystick.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _validate = __webpack_require__(/*! ../core/validate */ "./src/core/validate.js");

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VirtualJoystick, actually it's a motor module
 * @extends Electronic
 */
var VirtualJoystick = function (_Electronic) {
  (0, _inherits3.default)(VirtualJoystick, _Electronic);

  function VirtualJoystick() {
    (0, _classCallCheck3.default)(this, VirtualJoystick);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VirtualJoystick.__proto__ || (0, _getPrototypeOf2.default)(VirtualJoystick)).call(this));

    _this.args = {
      leftSpeed: 0,
      rightSpeed: 0
    };
    return _this;
  }

  /**
   * set both left speed and right speed
   * @param  {Number} leftSpeed  the left speed
   * @param  {Number} rightSpeed  the right speed
   * @return {Instance} @this
   */


  (0, _createClass3.default)(VirtualJoystick, [{
    key: 'speed',
    value: function speed(leftSpeed, rightSpeed) {
      this.args.leftSpeed = (0, _validate.validateNumber)(leftSpeed, this.args.leftSpeed);
      this.args.rightSpeed = (0, _validate.validateNumber)(rightSpeed, this.args.rightSpeed);
      return this;
    }

    /**
     * set left speed
     * @param  {Number} speed  the left speed
     * @return {Instance} @this
     */

  }, {
    key: 'leftSpeed',
    value: function leftSpeed(speed) {
      this.args.leftSpeed = (0, _validate.validateNumber)(speed, 0);
      return this;
    }

    /**
     * set right speed
     * @param  {Number} speed  the right speed
     * @return {Instance} @this
     */

  }, {
    key: 'rightSpeed',
    value: function rightSpeed(speed) {
      this.args.rightSpeed = (0, _validate.validateNumber)(speed, 0);
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run
     * @param  {Number} speed  the balance speed
     * @return {Instance} @this
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * stop, that is run with 0 speed
     * @return {Instance} @this
     */

  }, {
    key: 'setStop',
    value: function setStop() {
      return this.speed(0, 0);
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '1111');
    }
  }]);
  return VirtualJoystick;
}(_electronic2.default);

exports.default = VirtualJoystick;

/***/ }),

/***/ "./src/electronic/virtual_joystick_for_balance.js":
/*!********************************************************!*\
  !*** ./src/electronic/virtual_joystick_for_balance.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * VirtualJoystick for Balance car, actually it's a motor module
 * @extends Electronic
 */
var VirtualJoystickForBalance = function (_Electronic) {
  (0, _inherits3.default)(VirtualJoystickForBalance, _Electronic);

  function VirtualJoystickForBalance() {
    (0, _classCallCheck3.default)(this, VirtualJoystickForBalance);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VirtualJoystickForBalance.__proto__ || (0, _getPrototypeOf2.default)(VirtualJoystickForBalance)).call(this));

    _this.args = {
      speed: 0,
      turnRange: 0
    };
    return _this;
  }
  /**
   * set speed
   * @param  {Number} speed  the balance speed
   * @return {Instance} @this
   */


  (0, _createClass3.default)(VirtualJoystickForBalance, [{
    key: 'speed',
    value: function speed(_speed) {
      this.args.speed = _speed || 0;
      return this;
    }

    /**
     * set range
     * @param  {Number} range  the balance rotate angle
     * @return {Instance} @this
     */

  }, {
    key: 'turnRange',
    value: function turnRange(range) {
      this.args.turnRange = range || 0;
      return this;
    }

    /**
     * getter of protocol
     */

  }, {
    key: 'run',


    /**
     * run with range and speed set before
     * @return {Instance} @this
     */
    value: function run() {
      _control2.default.write(this.protocol);
      return this;
    }

    /**
     * Run reversely
     * @return {Instance} @this
     */

  }, {
    key: 'setReverse',
    value: function setReverse() {
      this.speed(-1 * this.args.speed);
      return this;
    }

    /**
     * Stop run
     * @return {Instance} @this
     */

  }, {
    key: 'setStop',
    value: function setStop() {
      return this.turnRange(0).speed(0);
    }
  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.setVirtualJoystickForBalance, [this.args.turnRange, this.args.speed]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '0110');
    }
  }]);
  return VirtualJoystickForBalance;
}(_electronic2.default);

exports.default = VirtualJoystickForBalance;

/***/ }),

/***/ "./src/electronic/voltage.js":
/*!***********************************!*\
  !*** ./src/electronic/voltage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

var _electronic = __webpack_require__(/*! ./electronic */ "./src/electronic/electronic.js");

var _electronic2 = _interopRequireDefault(_electronic);

var _cmd = __webpack_require__(/*! ../protocol/cmd */ "./src/protocol/cmd.js");

var _cmd2 = _interopRequireDefault(_cmd);

var _control = __webpack_require__(/*! ../core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _settings = __webpack_require__(/*! ../settings */ "./src/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 */
var Voltage = function (_Electronic) {
  (0, _inherits3.default)(Voltage, _Electronic);

  function Voltage() {
    (0, _classCallCheck3.default)(this, Voltage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Voltage.__proto__ || (0, _getPrototypeOf2.default)(Voltage)).call(this));

    _this.args = {
      subCmd: 0x70
    };
    return _this;
  }

  /**
   * getter of protocol
   */


  (0, _createClass3.default)(Voltage, [{
    key: 'getData',


    /**
     * Get data of Voltage
     * @return {Promise}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _control2.default.read(this.protocol);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()

    /**
     * 目前只有 auriga 支持
     */

  }, {
    key: 'protocol',
    get: function get() {
      return (0, _utils.composer)(_cmd2.default.readFirmwareMode, [this.args.subCmd]);
    }
  }], [{
    key: 'SUPPORT',
    get: function get() {
      return (0, _utils.fiterWithBinaryStr)(_settings.SUPPORTLIST, '01000');
    }
  }]);
  return Voltage;
}(_electronic2.default);

exports.default = Voltage;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/.6.26.0@babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/.6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/.6.26.0@babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/.6.26.0@babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/.6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _transport = __webpack_require__(/*! ./communicate/transport */ "./src/communicate/transport.js");

var _transport2 = _interopRequireDefault(_transport);

var _control = __webpack_require__(/*! ./core/control */ "./src/core/control.js");

var _control2 = _interopRequireDefault(_control);

var _version = __webpack_require__(/*! ./electronic/version */ "./src/electronic/version.js");

var _version2 = _interopRequireDefault(_version);

var _settings = __webpack_require__(/*! ./settings */ "./src/settings.js");

var _index = __webpack_require__(/*! ./mainboard/index */ "./src/mainboard/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sensorium
 * @description  Sensorium is the only namespace of this repository
 * @namespace
 */
var Sensorium = function () {
  /**
   * Create a sensorium.
   * @example
   * let sensorium = new Sensorium();
   * // creat the mcore mainboard instance
   * let mcore = sensorium.createMcore();
   * // create the auriga mainboard instance
   * let auriga = sensorium.createAuriga();
   */
  function Sensorium() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Sensorium);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var name = _step.value;

        _this['create' + name] = function (opts) {
          return _this.create(name, opts);
        };
      };

      for (var _iterator = (0, _getIterator3.default)(_settings.SUPPORTLIST), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /**
   * Create a mainboard instance
   * @param {String} mainboardName  both upperCase and lowerCase are allowed: 'mcore', 'mCore'
   * @param {Object} opts     (optional)
   * @example
   * // create a mcore with a given mainboardName
   * let mcore1 = sensorium.create('mcore');
   * let mcore2 = sensorium.create('mCore');
   * console.log(mcore1 === mcore2) // true
   */


  (0, _createClass3.default)(Sensorium, [{
    key: 'create',
    value: function create(mainboardName, opts) {
      var board = _index2.default[mainboardName.toLowerCase()];
      if (typeof board == 'undefined') {
        throw new Error('sorry, the board ' + mainboardName + ' could not be supported!\n        You need pass in one of ' + this.getSupported().join(',') + ' as the first argument}');
      }
      return new board(opts);
    }

    /**
     * Set the sender from bluetooth、serialport、wifi
     * @param {Function} sender the send method
     * @example
     * // supposed the `socket.io.js` have been used as the communication method
     * let sender = (buf) => {
     *   socket.emit('send', { buf });
     * }
     * sensorium.setSender(sender);
     */

  }, {
    key: 'setSender',
    value: function setSender(sender) {
      _transport2.default.sender = sender;
    }

    /**
     * Receive data from bluetooth、serialport、wifi
     * @param  {Buffer|Array} buff
     * @example
     * // supposed the `socket.io.js` have been used as the communication method
     * socket.on('received', function (data) {
     *   // the format of the data should be adjusted to fit the interface
     *   sensorium.doReceived(JSON.parse(data));
     * });
     */

  }, {
    key: 'doReceived',
    value: function doReceived(buff) {
      _control2.default.pipe(buff);
    }

    /**
     * Read firmware info，which contains the version and the name.
     * Usually we use this interface to get the hardware information,
     * and decide to switch current device or update current hardware to the latest one.
     * @return {Promise} a promise
     * @example
     * sensorium.readFirmwareInfo()
     *             .then(val => console.log(val));
     */

  }, {
    key: 'readFirmwareInfo',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _version2.default.getData().then(function (val) {
                  var id = void 0,
                      name = void 0;
                  if (val) {
                    id = val.split('.')[0];
                    name = _settings.FIRMWARE_ID[parseInt(id)];
                  }
                  return { name: name, val: val };
                });

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function readFirmwareInfo() {
        return _ref.apply(this, arguments);
      }

      return readFirmwareInfo;
    }()

    /**
     * Write protocol buffer.
     * This interface is just for debug the protocol
     * @param  {Array} buf
     * @example
     * sensorium.send([0xff, 0x55, 0x01...]);
     */

  }, {
    key: 'send',
    value: function send(buf) {
      _control2.default.write(buf);
    }

    /**
     * Read protocol buffer
     * This interface is just for debug the protocol
     * @param  {Array} buf
     * @example
     * sensorium.send([0xff, 0x55, 0x01...]);
     */

  }, {
    key: 'read',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(buf) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _control2.default.read(buf);

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read(_x) {
        return _ref2.apply(this, arguments);
      }

      return read;
    }()

    /**
     * Get supported mainboard
     * @return {Array}  the support list
     * @example
     * let sopport = sensorium.SUPPORT;
     * conosole.log(sopport); // ['auriga', 'mcore', 'megapi', 'orion', 'megapipro', 'arduino']
     */

  }, {
    key: 'SUPPORT',
    get: function get() {
      return (0, _keys2.default)(_index2.default);
    }
  }]);
  return Sensorium;
}();

//webpack umd
/**
 * @fileOverview Sensorium Class
 * @author Jeremy
 */


module.exports = Sensorium;

/***/ }),

/***/ "./src/mainboard/arduino.js":
/*!**********************************!*\
  !*** ./src/mainboard/arduino.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Arduino Class for 'Arduino' mainboard.
 * @private
 * @extends Board
 */
var Arduino = function (_Board) {
  (0, _inherits3.default)(Arduino, _Board);

  /**
   * Create a orion mainboard
   * @param  {Object} conf configure
   */
  function Arduino(conf) {
    (0, _classCallCheck3.default)(this, Arduino);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Arduino.__proto__ || (0, _getPrototypeOf2.default)(Arduino)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Arduino';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Arduino;
}(_board2.default);

exports.default = Arduino;

/***/ }),

/***/ "./src/mainboard/auriga.js":
/*!*********************************!*\
  !*** ./src/mainboard/auriga.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

var _version = __webpack_require__(/*! ../electronic/version */ "./src/electronic/version.js");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIRMWAREMODE = (0, _symbol2.default)('firmware');
/**
 * Auriga Class for 'Auriga' mainboard.
 * @private
 * @extends Board
 */

var Auriga = function (_Board) {
  (0, _inherits3.default)(Auriga, _Board);

  /**
   * Create a auriga mainboard
   * @param  {Object} conf configure
   */
  function Auriga(conf) {
    (0, _classCallCheck3.default)(this, Auriga);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auriga.__proto__ || (0, _getPrototypeOf2.default)(Auriga)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Auriga';
    // @member {Object} modules is connecting to the mainboard
    // @override
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Auriga;
}(_board2.default);

exports.default = Auriga;

/***/ }),

/***/ "./src/mainboard/index.js":
/*!********************************!*\
  !*** ./src/mainboard/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mcore = __webpack_require__(/*! ./mcore */ "./src/mainboard/mcore.js");

var _mcore2 = _interopRequireDefault(_mcore);

var _orion = __webpack_require__(/*! ./orion */ "./src/mainboard/orion.js");

var _orion2 = _interopRequireDefault(_orion);

var _auriga = __webpack_require__(/*! ./auriga */ "./src/mainboard/auriga.js");

var _auriga2 = _interopRequireDefault(_auriga);

var _megaPi = __webpack_require__(/*! ./megaPi */ "./src/mainboard/megaPi.js");

var _megaPi2 = _interopRequireDefault(_megaPi);

var _megaPiPro = __webpack_require__(/*! ./megaPiPro */ "./src/mainboard/megaPiPro.js");

var _megaPiPro2 = _interopRequireDefault(_megaPiPro);

var _arduino = __webpack_require__(/*! ./arduino */ "./src/mainboard/arduino.js");

var _arduino2 = _interopRequireDefault(_arduino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'mcore': _mcore2.default,
  'orion': _orion2.default,
  'auriga': _auriga2.default,
  'megapi': _megaPi2.default,
  'megapipro': _megaPiPro2.default,
  'arduino': _arduino2.default
};

/***/ }),

/***/ "./src/mainboard/mcore.js":
/*!********************************!*\
  !*** ./src/mainboard/mcore.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mcore Class for 'Mcore' mainboard.
 * @private
 * @extends Board
 */
var Mcore = function (_Board) {
  (0, _inherits3.default)(Mcore, _Board);

  /**
   * Create a mcore mainboard
   * @param  {Object} conf configure
   */
  function Mcore(conf) {
    (0, _classCallCheck3.default)(this, Mcore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Mcore.__proto__ || (0, _getPrototypeOf2.default)(Mcore)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Mcore';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Mcore;
}(_board2.default);

exports.default = Mcore;

/***/ }),

/***/ "./src/mainboard/megaPi.js":
/*!*********************************!*\
  !*** ./src/mainboard/megaPi.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIRMWAREMODE = (0, _symbol2.default)('firmware');
/**
 * MegaPi Class for 'MegaPi' mainboard.
 * @private
 * @extends Board
 */

var MegaPi = function (_Board) {
  (0, _inherits3.default)(MegaPi, _Board);

  /**
   * Create a megaPi mainboard
   * @param  {Object} conf configure
   */
  function MegaPi(conf) {
    (0, _classCallCheck3.default)(this, MegaPi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MegaPi.__proto__ || (0, _getPrototypeOf2.default)(MegaPi)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'MegaPi';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return MegaPi;
}(_board2.default);

exports.default = MegaPi;

/***/ }),

/***/ "./src/mainboard/megaPiPro.js":
/*!************************************!*\
  !*** ./src/mainboard/megaPiPro.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MegaPiPro Class for 'MegaPiPro' mainboard.
 * @private
 * @extends Board
 */
var MegaPiPro = function (_Board) {
  (0, _inherits3.default)(MegaPiPro, _Board);

  /**
   * Create a megaPiPro mainboard
   * @param  {Object} conf configure
   */
  function MegaPiPro(conf) {
    (0, _classCallCheck3.default)(this, MegaPiPro);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MegaPiPro.__proto__ || (0, _getPrototypeOf2.default)(MegaPiPro)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'MegaPiPro';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return MegaPiPro;
}(_board2.default);

exports.default = MegaPiPro;

/***/ }),

/***/ "./src/mainboard/orion.js":
/*!********************************!*\
  !*** ./src/mainboard/orion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/.6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/.6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/.6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/.6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _board = __webpack_require__(/*! ../core/board */ "./src/core/board.js");

var _board2 = _interopRequireDefault(_board);

var _index = __webpack_require__(/*! ../electronic/index */ "./src/electronic/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Orion Class for 'Orion' mainboard.
 * @private
 * @extends Board
 */
var Orion = function (_Board) {
  (0, _inherits3.default)(Orion, _Board);

  /**
   * Create a orion mainboard
   * @param  {Object} conf configure
   */
  function Orion(conf) {
    (0, _classCallCheck3.default)(this, Orion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Orion.__proto__ || (0, _getPrototypeOf2.default)(Orion)).call(this, conf));

    var this_ = _this;
    //@member {String} {maiboard name}
    _this.name = 'Orion';
    // 置空已连接块
    _this.connecting = {};
    // 挂载电子模块

    var _loop = function _loop(name) {
      var eModule = _index2.default[name];
      if (eModule.SUPPORT.includes(_this.name)) {
        _this[name] = function () {
          return this_.eModuleFactory({ eModule: eModule, name: name }, arguments, this.name);
        };
      }
    };

    for (var name in _index2.default) {
      _loop(name);
    }
    return _this;
  }

  return Orion;
}(_board2.default);

exports.default = Orion;

/***/ }),

/***/ "./src/protocol/cmd.js":
/*!*****************************!*\
  !*** ./src/protocol/cmd.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/.6.26.0@babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _of = __webpack_require__(/*! babel-runtime/core-js/array/of */ "./node_modules/.6.26.0@babel-runtime/core-js/array/of.js");

var _of2 = _interopRequireDefault(_of);

var _utils = __webpack_require__(/*! ../core/utils */ "./src/core/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * buf 协议组装器
 * @private
 * @param  {Object} obj  对象
 * @param  {Number} obj.index  由上位机赋值
 * @param  {Number} obj.mode  查询、执行
 * @param  {Number} obj.id  指令ID
 * @param  {Arguments} args 其他参数
 * @return {Array}      返回数组
 */
function bufAssembler(obj) {
  var modes = [0x01, 0x02, 0x04];
  var bufHead = [0xff, 0x55];
  var bufLength = 0;
  var bufAttr = void 0;
  //todo：完善抛错提示
  if (obj.mode == 0x04) {
    bufAttr = (0, _of2.default)(obj.index || 0, obj.mode);
  } else {
    if (!modes.includes(obj.mode)) {
      throw new Error("mode should be one of " + modes);
    } else if (typeof obj.id === 'undefined') {
      throw new Error("id should not be empty");
    }
    bufAttr = (0, _of2.default)(obj.index || 0, obj.mode, obj.id);
  }

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  bufLength = bufAttr.length + args.length;
  return bufHead.concat([bufLength], bufAttr, args);
}

/**
 * @private
 */
/**
 * @fileOverview  protocol API list
 */
function protocolAssembler() {
  /**
   * Set dc motor speed.
   * @private
   * @param {number} port  port number, vailable is: 1,2,3,4
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 06 00 02 0a 01 ff 00
   */
  this.setDcMotor = function (port, speed) {
    speed = (0, _utils.limitValue)(speed);
    return bufAssembler({
      mode: 0x02,
      id: 0x0a
    }, port, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * Set encoder motor speed.
   * @private
   * @param {number} slot  slot number, vailable is: 1,2
   * @param {number} speed speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 3d 00 01 64 00
   */
  this.setEncoderMotorOnBoard = function (slot, speed) {
    speed = (0, _utils.limitValue)(speed);
    var port = 0x00; //板载
    return bufAssembler({
      mode: 0x02,
      id: 0x3d
    }, port, slot, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * set encoder motor.
   * @private
   * @param  {Number} index [description]
   * @param  {Number} slot  vailable: 1，2
   * @param  {Number} speed  0 ~ 300, 单位：rpm（每分钟转多少圈）
   * @param  {Float} angle  相对位移, -2147483648 ~ 2147483647
   * @example
   * ff 55 0b 00 02 0c 08 01 96 00 00 00 34 44
   */
  this.setEncoderMotor = function (slot, speed, angle) {
    // 编码电机的协议中不使用 port
    var i2c = 0x08; //I2C地址，目前无意义(软件稳定后可能会重新设计)，用来占位
    speed = (0, _utils.limitValue)(speed, [0, 300]);
    var byte4Array = (0, _utils.float32ToBytes)(angle);
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x0c
    }, i2c, slot, speed & 0xff, speed >> 8 & 0xff].concat((0, _toConsumableArray3.default)(byte4Array)));
  };

  /**
   * Set both left speed and right speed with one command.
   * @private
   * @param {number} leftSpeed  left speed, the range is -255 ~ 255
   * @param {number} rightSpeed right speed, the range is -255 ~ 255
   * @example
   *     ff 55 07 00 02 05 64 00 64 00
   */
  this.setJoystick = function (leftSpeed, rightSpeed) {
    leftSpeed = (0, _utils.limitValue)(leftSpeed);
    rightSpeed = (0, _utils.limitValue)(rightSpeed);
    return bufAssembler({
      mode: 0x02,
      id: 0x05
    }, leftSpeed & 0xff, leftSpeed >> 8 & 0xff, rightSpeed & 0xff, rightSpeed >> 8 & 0xff);
  };

  /**
   * Set speed for balance mode, the port is on transport, value is 0.
   * @private
   * @param {number} turnRange turn extend, -255 ~ 255
   * @param {number} speed      speed, -255 ~ 255
   * @example
   *     ff 55 08 00 02 34 00 64 00 64 00
   */
  this.setVirtualJoystickForBalance = function (turnRange, speed) {
    var turnExtent = (0, _utils.limitValue)(turnRange);
    var port = 0x00; //板载虚拟摇杆 port = 00
    speed = (0, _utils.limitValue)(speed);
    return bufAssembler({
      mode: 0x02,
      id: 0x34
    }, port, turnExtent & 0xff, turnExtent >> 8 & 0xff, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * Set stepper motor speed.
   * @private
   * @param {Number} port     port number, vailable is: 1,2,3,4
   * @param {Number} speed    speed, the range is 0 ~ 3000
   * @param {Long} distance distance, the range is -2147483648 ~ 2147483647
   * @example
   *     ff 55 0a 00 02 28 01 b8 0b e8 03 00 00
   */
  this.setStepperMotor = function (port, speed, distance) {
    speed = (0, _utils.limitValue)(speed, [0, 3000]);
    var distanceBytes = (0, _utils.longToBytes)(distance);
    return bufAssembler({
      mode: 0x02,
      id: 0x28
    }, port, speed & 0xff, speed >> 8 & 0xff, distanceBytes[3], distanceBytes[2], distanceBytes[1], distanceBytes[0]);
  };

  /**
   * Set RgbFourLed electronic module color.
   * @private
   * @param {number} port     port number, vailable is: 0(on transport), 6,7,8,9,10
   * @param {number} slot     slot number, vailable is: 1,2
   * @param {number} position led position, 0 signify all leds.
   * @param {number} r        red, the range is 0 ~ 255
   * @param {number} g        green, the range is 0 ~ 255
   * @param {number} b        blue, the range is 0 ~ 255
   * @example
   *     ff 55 09 00 02 08 06 02 00 ff 00 00
   */
  this.setLed = function (port, slot, position, r, g, b) {
    r = (0, _utils.limitValue)(r, [0, 255]);
    g = (0, _utils.limitValue)(g, [0, 255]);
    b = (0, _utils.limitValue)(b, [0, 255]);
    position = (0, _utils.limitValue)(position, [0]);
    return bufAssembler({
      mode: 0x02,
      id: 0x08
    }, port, slot, position, r, g, b);
  };

  /**
   * Set Firmware mode.
   * @private
   * @param {number} subCmd
   * @param {number} mode
   * @example
   *     ff 55 05 00 02 3c 11 00
   */
  this.setFirmwareMode = function (subCmd, mode) {
    var sub = subCmd || 0x11; //Auriga是 0x11, megapi是 0x12
    return bufAssembler({
      mode: 0x02,
      id: 0x3c
    }, sub, mode);
  };

  /**
   * Set Servo speed.
   * @private
   * @param {[type]} port   port number, vailable is 6,7,8,9,10
   * @param {[type]} slot   slot number, vailable is 1,2
   * @param {[type]} degree servo degree, the range is 0 ~ 180
   */
  this.setServoMotor = function (port, slot, degree) {
    degree = (0, _utils.limitValue)(degree, [0, 180]);
    return bufAssembler({
      mode: 0x02,
      id: 0x0b
    }, port, slot, degree);
  };

  /**
   * Set Seven-segment digital tube number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number  the number to be displayed, -999 ~ 9999
   * @exmpa
   *     ff 55 08 00 02 09 06 00 00 c8 42
   */
  this.setSevenSegment = function (port, number) {
    number = (0, _utils.limitValue)(number, [-999, 9999]);
    var byte4Array = (0, _utils.float32ToBytes)(number);
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x09
    }, port].concat((0, _toConsumableArray3.default)(byte4Array)));
  };

  /**
   * Set led matrix char.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis  x position
   * @param {number} yAxis  y position
   * @param {string} char  char, 例如 Hi 转换成ASCII的值 48 69
   * @exmaple
   * ff 55 0a 00 02 29 06 01 00 01 02 48 69
   */

  /**
   * Set led matrix emotion.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} xAxis      x position
   * @param {number} yAxis      y position
   * @param {Array} emotionData emotion data to be displayed, such as
   *  [00, 00, 40, 48, 44, 42, 02, 02, 02, 02, 42, 44, 48, 40, 00, 00]
   * @example
   * ff 55 17 00 02 29 06 02 00 00 00 00 40 48 44 42 02 02 02 02 42 44 48 40 00 00
   */

  /**
   * Set led matrix time.
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} separator time separator, 01 signify `:`, 02 signify ` `
   * @param {number} hour      hour number, 0 ~ 23
   * @param {number} minute    minute number, 0 ~ 59
   * @example
   *     ff 55 08 00 02 29 06 03 01 0a 14
   */

  /**
   * Set led matrix number.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {float} number the number to be displayed
   * @exmaple
      ff 55 09 00 02 29 06 04 00 00 00 00
   */
  this.setLedMatrix = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args[2] = args[2] & 0xff;
    args[3] = args[3] & 0xff;
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x29
    }].concat(args));
  };

  /**
   * Set shutter.
   * @private
   * @param {number} port   port number, vailable is 6,7,8,9,10
   * @param {number} action 0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   * @exmaple
      ff 55 05 00 02 14 06 02
   */
  this.setShutter = function (port, action) {
    return bufAssembler({
      mode: 0x02,
      id: 0x14
    }, port, action);
  };

  /**
   * reset all sensors and motors on transport.
   * @private
   * @exmaple
      ff 55 02 00 04
   */
  this.reset = function () {
    return bufAssembler({
      mode: 0x04
    });
  };

  /**
   * button on board of mcore.
   * @private
   * @param {string} port
   * @param {string} action 0:表示查询按下的状态，1:表示查询松开的状态
   * @exmaple
      ff 55 05 00 01 23 07 00
   */
  this.ButtonOnBoard = function (port, action) {
    return bufAssembler({
      mode: 0x01,
      id: 0x23
    }, port, action);
  };

  /**
   * set buzzer only for mcore.
   * @private
   * @param {string} hz , "A2" ~ "D8" 对应的 hz
   * @param {number} beat , 125: eight; 250: quater; 500: half; 1000: one; 2000: double
   * @example
   * C2，quater beat: ff 55 08 00 02 22 09 41 00 f4 01
   */
  this.setBuzzerForMcore = function (hz, beat) {
    return bufAssembler({
      mode: 0x02,
      id: 0x22
    }, hz & 0xff, hz >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff);
  };

  /**
   * set buzzer for mainboard except mcore
   * @private
   * @example
   * 播放引脚为 0x2d，音调为B2，节拍为四分之一：ff 55 08 00 02 22 2d 7b 00 fa 00
   */
  this.setBuzzer = function (hz, beat) {
    beat = beat ? beat : 250;
    return bufAssembler({
      mode: 0x02,
      id: 0x22
    }, 0x2d, hz & 0xff, hz >> 8 & 0xff, beat & 0xff, beat >> 8 & 0xff);
  };

  /**
   * read verion of transport
   * @private
   */
  this.readVersion = function () {
    return bufAssembler({
      mode: 0x01,
      id: 0x00
    });
  };

  /**
   * mainly used for distance measurement, the measurement range is 0 to 500 cm,
   * the execution of the command will have more than 100 milliseconds latency.
   * So the frequency of the host to send this instruction shoulds not be too high.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 01 03
   */
  this.readUltrasonic = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x01
    }, port);
  };

  /**
   * read temperature, Each port can connect two road temperature sensor.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} slot  vailable: slot1(1), slot2(2)
   * @example
   * ff 55 05 00 01 02 01 02
   */
  this.readTemperature = function (port, slot) {
    return bufAssembler({
      mode: 0x01,
      id: 0x02
    }, port, slot);
  };

  /**
   * The light sensor module or ontransport (lamp) light sensors numerical reading.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10, onbord(0c),onbord(0b)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 03 07
   */
  this.readLight = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x03
    }, port);
  };

  /**
   * read Potentionmeter
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 04 06
   */
  this.readPotentionmeter = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x04
    }, port);
  };

  /**
   * read josystic value
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  1: x-axis; 2: y-axis;
   * @example
   * ff 55 05 00 01 05 06 01
   */
  this.readJoystick = function (port, axis) {
    return bufAssembler({
      mode: 0x01,
      id: 0x05
    }, port, axis);
  };

  /**
   * read gyro value in different axis.
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} axis  vailable: X-axis(01)  Y-axis(02)  Z-axis(03)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 06 00 01
   */
  this.readGyro = function (port, axis) {
    return bufAssembler({
      mode: 0x01,
      id: 0x06
    }, port, axis);
  };

  /**
   * read volume testing MIC module parameters
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10，ontransport(0x0e)
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 07 06
   */
  this.readSound = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x07
    }, port);
  };

  /**
   * read temperature on transport
   * @private
   * @example
   * ff 55 04 00 01 1b 0d
   */
  this.readTemperatureOnBoard = function () {
    var port = 0x0d;
    return bufAssembler({
      mode: 0x01,
      id: 0x1b
    }, port);
  };

  /**
   * read external or board infrared sensor, and the board one is only for mcore
   * @private
   * @param  {Number} id    sensor device id，such as: 0x0e, 0x0d, 0x10
   * @param  {Number} port  mcore port: 3, 4, auriga port: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.readInfrared = function (id, port, akey) {
    if (akey) {
      return bufAssembler({
        mode: 0x01,
        id: id
      }, port, akey);
    } else {
      return bufAssembler({
        mode: 0x01,
        id: id
      }, port);
    }
  };

  /**
   * read external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.readInfraredOnboard = function (port, akey) {
    return bufAssembler({
      mode: 0x01,
      id: 0x0e
    }, port, akey);
  };

  /**
   * emit message from external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @param  {Array.Number} msg  infrared msg list, the number is assic code
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.emitInfraredOnboard = function (msg) {
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x0d
    }].concat((0, _toConsumableArray3.default)(msg)));
  };

  /**
   * emit message from external or board infrared sensor, and is only for mcore
   * @private
   * @param  {Number} port  mcore port: 3, 4
   * @param  {Array.Number} msg  infrared msg list, the number is assic code
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 0e 00
   */
  this.receiveEmitInfraredOnboard = function () {
    return bufAssembler({
      mode: 0x01,
      id: 0x0d
    });
  };

  /**
   * read pyroelectric infrared sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 0f 06
   */
  this.readPirmotion = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x0f
    }, port);
  };

  /**
   * read LineFollower sensor
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @return {Number} number,
   *  00   0
      01   1
      10   2
      11   3
      when 0 said has a black line
    * @example
    * ff 55 04 00 01 11 02
   */
  this.readLineFollower = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x11
    }, port);
  };

  /**
   * read limitSwitch
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} slot  vailable: SLOT1(01)   SLOT2(02)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 15 06 02
   */
  this.readLimitSwitch = function (port, slot) {
    return bufAssembler({
      mode: 0x01,
      id: 0x15
    }, port, slot);
  };

  /**
   * read compass.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1a 06
   */
  this.readCompass = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1a
    }, port);
  };

  /**
   * read humiture
   * @private
   * @param  {Number} port  vailable: 6，7，8，9，10
   * @param  {Number} temperature(01) humidity (00)
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 17 06 00
   */
  this.readHumiture = function (port, type) {
    return bufAssembler({
      mode: 0x01,
      id: 0x17
    }, port, type);
  };

  /**
   * read flame
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 18 03
   */
  this.readFlame = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x18
    }, port);
  };

  /**
   * Used to get the harmful gas density
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 19 06
   */
  this.readGas = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x19
    }, port);
  };

  /**
   * read touch sensor
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 33 06
   */
  this.readTouch = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x33
    }, port);
  };

  /**
   * To determine whether the corresponding button is pressed.
   * @private
   * @param  {Number} port  vailable: 6,7,8,9,10
   * @param  {Number} key   vailable:1,2,3,4
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 16 03 01
   */
  this.readFourKeys = function (port, key) {
    return bufAssembler({
      mode: 0x01,
      id: 0x16
    }, port, key);
  };

  /**
   * read encoder motor position or speed on transport.
   * @private
   * @param  {Number} slot vailable:1,2
   * @param  {Number} type  1: position; 2: speed
   * @example
   * ff 55 06 00 01 3d 00 01 02
   */
  this.readEncoderMotorOnBoard = function (slot, type) {
    var port = 0x00; //板载 port
    return bufAssembler({
      mode: 0x01,
      id: 0x3d
    }, port, slot, type);
  };

  /**
   * 板载编码电机 PID 运动 01模式位置模式
   * @private
   * @param {Number} distance  位移
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 0b 00 02 3e 01 01 00 00 00 00 00 00
   */
  this.setEncoderMotorPIDDistance = function (slot, distance, speed) {
    var distanceArr = (0, _utils.longToBytes)(distance);
    var subCmd = 0x05;
    // let slot = 0x01;
    speed = (0, _utils.limitValue)(speed, [0]);
    return bufAssembler({
      mode: 0x02,
      id: 0x3e
    }, subCmd, slot, distanceArr[3], distanceArr[2], distanceArr[1], distanceArr[0], speed & 0xff, 0);
  };

  /**
   * 板载编码电机 PID 运动 02模式速度模式
   * @private
   * @param {Number} speed    速度
   * @example
   * buf: ff 55 07 00 02 3e 02 01 00 00
   */
  this.setEncoderMotorPIDSpeed = function (slot, speed) {
    var subCmd = 0x02;
    // let slot = 0x01;
    speed = (0, _utils.limitValue)(speed);
    return bufAssembler({
      mode: 0x02,
      id: 0x3e
    }, subCmd, slot, speed & 0xff, speed >> 8 & 0xff);
  },
  /**
   * 板载编码电机 PID 运动 03模式 pwm 模式
   * buf: ff 55 07 00 02 3e 03 01 00 00
   * @param {Number} speed    速度
   * @private
   */
  this.setEncoderMotorPIDPwm = function (slot, speed) {
    var subCmd = 0x03;
    // let slot = 0x01;
    speed = (0, _utils.limitValue)(speed);
    return bufAssembler({
      mode: 0x02,
      id: 0x3e
    }, subCmd, slot, speed & 0xff, speed >> 8 & 0xff);
  },

  /**
   * 板载编码电机PID运动，设置当前位置为零点:
   * buf: ff 55 05 00 02 3e 04 01
   * (megaPiPro buf: ff 55 05 00 02 3e 03 01)
   * @param {Number} subCmd    二级命令
   * @private
   */
  this.setEncoderMotorPIDZeroPoint = function (slot, subCmd) {
    // let slot = 0x01;
    return bufAssembler({
      mode: 0x01,
      id: 0x3e
    }, subCmd, slot);
  };

  /**
   * 板载编码电机 PID 运动 05模式双电机模式:
   * buf: ff 55 0b 00 02 3e 05 01 e8 03 00 00 64 00
   * @private
   * @param {Number} subCmd      0x05
   * @param {Number} direction      前进1，后退2，左转3，右转4
   * @param {Number} distance  位移
   * @param {Number} speed     速度
   */
  this.setEncoderMotorPIDDoubleMotor = function (direction, distance, speed) {
    var distanceArr = (0, _utils.longToBytes)(distance);
    var subCmd = 0x05;
    speed = (0, _utils.limitValue)(speed, [0]);
    return bufAssembler({
      mode: 0x02,
      id: 0x3e
    }, subCmd, direction, distanceArr[3], distanceArr[2], distanceArr[1], distanceArr[0], speed & 0xff, 0);
  };

  /**
   * set smart servo
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @param  {Array} extraCmd  the extra command
   * @example
   * lock:    ff 55 07 00 02 40 01 05 01 00
   * unlock:  ff 55 07 00 02 40 01 05 01 01
   * LED:     ff 55 09 00 02 40 02 05 01 ff 00 00
   * handshake:           ff 55 06 00 02 40 03 05 01
   * runToAbsoluteAngle:  ff 55 0e 00 02 40 04 05 01 68 01 00 00 00 00 48 42
   * runToRelativeAngle:  ff 55 0e 00 02 40 05 05 01 68 01 00 00 00 00 48 42
   * runAsDcMotor:        ff 55 08 00 02 40 06 05 01 96 00
   * setAsZeroPoint:      ff 55 06 00 02 40 07 05 01
   * backToStart:         ff 55 06 00 02 40 08 05 01
   */
  this.setSmartServo = function (index, subCmd, extraCmd) {
    var port = 0x05; //defualt port
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x40
    }, subCmd, port, index].concat((0, _toConsumableArray3.default)(extraCmd)));
  };

  /**
   * @private
   */
  this.setSmartServoForAbsoluteAngle = function (index, subCmd, angle, speed) {
    var port = 0x05; //defualt port
    var angleBytes = (0, _utils.longToBytes)(angle);
    var speedBytes = (0, _utils.float32ToBytes)(speed);
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x40
    }, subCmd, port, index].concat((0, _toConsumableArray3.default)(angleBytes.reverse()), (0, _toConsumableArray3.default)(speedBytes)));
  };

  /**
   * @private
   */
  this.setSmartServoForRelativeAngle = function (index, subCmd, angle, speed) {
    var port = 0x05; //defualt port
    var angleBytes = (0, _utils.longToBytes)(angle);
    var speedBytes = (0, _utils.float32ToBytes)(speed);
    return bufAssembler.apply(undefined, [{
      mode: 0x02,
      id: 0x40
    }, subCmd, port, index].concat((0, _toConsumableArray3.default)(angleBytes.reverse()), (0, _toConsumableArray3.default)(speedBytes)));
  };

  /**
   * @private
   */
  this.setSmartServoForDcMotor = function (index, subCmd, speed) {
    var port = 0x05; //defualt port
    return bufAssembler({
      mode: 0x02,
      id: 0x40
    }, subCmd, port, index, speed & 0xff, speed >> 8 & 0xff);
  };

  /**
   * read smart servo operating parameters
   * @private
   * @param  {Number} index  the index code of current servo
   * @param  {Number} subCmd  the sub command that the servo run on
   * @example
   * readSpeed:         ff 55 06 00 01 40 09 05 01
   * readTemperature:   ff 55 06 00 01 40 0a 05 01
   * readCurrent:       ff 55 06 00 01 40 0b 05 01
   * readVoltage:       ff 55 06 00 01 40 0c 05 01
   * readAngle:         ff 55 06 00 01 40 0d 05 01
   */
  this.readSmartServoParam = function (index, subCmd) {
    var port = 0x05; //defualt port
    return bufAssembler({
      mode: 0x01,
      id: 0x3d
    }, subCmd, port, index);
  };

  /**
   * read firmware mode or voltage.
   * @private
   * @param  {Number} type  0x70: 电压; 0x71: 模式
   * @example
   * ff 55 04 00 01 3c 70
   */
  this.readFirmwareMode = function (subCmd) {
    //auriga 电压(0x70) 模式(0x71), megapi模式(0x72) 比赛模式(0x75)
    return bufAssembler({
      mode: 0x01,
      id: 0x3c
    }, subCmd);
  };

  /**
   * @private
   * @param  {Number} port  vailable: digit GPOI port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1e 09
   */
  this.readDigGPIO = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1e
    }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @return {Number}       [description]
   * @example
   * ff 55 04 00 01 1f 02
   */
  this.readAnalogGPIO = function (port) {
    return bufAssembler({
      mode: 0x01,
      id: 0x1f
    }, port);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 25 0d 20 4e
   */
  this.readGPIOContinue = function (port, key) {
    return bufAssembler({
      mode: 0x01,
      id: 0x25
    }, port, key);
  };

  /**
   * @private
   * @param  {Number} port  vailable: GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 05 00 01 24 45 40
   */
  this.readDoubleGPIO = function (port1, port2) {
    return bufAssembler({
      mode: 0x01,
      id: 0x24
    }, port1, port2);
  };

  /**
   * @private
   * @param  {Number} port  vailable: analog GPIO port
   * @param  {Number} key   vailable: 0,1
   * @return {Number}       [description]
   * @example
   * ff 55 03 00 01 32
   */
  this.readRuntime = function () {
    return bufAssembler({
      mode: 0x01,
      id: 0x32
    });
  };
}

/**
 * @private
 */
exports.default = new protocolAssembler();

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INFRARED_BUTTON = exports.VERSION = exports.MOVE_DIRECTION = exports.TONE_TO_HZ = exports.FIRMWARE_ID = exports.SUPPORTLIST = exports.FIRM_MODES = exports.AUTO_OVERTIME = exports.OVERTIME = undefined;

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/.6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var
//超时时间
OVERTIME = 1000,

//自动超时
AUTO_OVERTIME = 1200,
    FIRM_MODES = [0x00, 0x01, 0x02, 0x03, 0x04],
    SUPPORTLIST = ['Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino', 'MegaPiPro'],
    FIRMWARE_ID = {
  0x06: 'Mcore',
  0x09: 'Auriga',
  0x0a: 'Orion',
  0x0e: 'MegaPi',
  0x0f: 'MegaPiPro'
},

//音符到赫兹
TONE_TO_HZ = {
  "B0": 31,
  "C1": 33,
  "D1": 37,
  "E1": 41,
  "F1": 44,
  "G1": 49,
  "A1": 55,
  "B1": 62,
  "C2": 65,
  "D2": 73,
  "E2": 82,
  "F2": 87,
  "G2": 98,
  "A2": 110,
  "B2": 123,
  "C3": 131,
  "D3": 147,
  "E3": 165,
  "F3": 175,
  "G3": 196,
  "A3": 220,
  "B3": 247,
  "C4": 262,
  "D4": 294,
  "E4": 330,
  "F4": 349,
  "G4": 392,
  "A4": 440,
  "B4": 494,
  "C5": 523,
  "D5": 587,
  "E5": 659,
  "F5": 698,
  "G5": 784,
  "A5": 880,
  "B5": 988,
  "C6": 1047,
  "D6": 1175,
  "E6": 1319,
  "F6": 1397,
  "G6": 1568,
  "A6": 1760,
  "B6": 1976,
  "C7": 2093,
  "D7": 2349,
  "E7": 2637,
  "F7": 2794,
  "G7": 3136,
  "A7": 3520,
  "B7": 3951,
  "C8": 4186,
  "D8": 4699
},
    VERSION = (0, _symbol2.default)(),
    MOVE_DIRECTION = ['FORWARD', 'BACKWARD', 'TURNLEFT', 'TURNRIGHT'],
    INFRARED_BUTTON = {
  'A': 69,
  'B': 70,
  'C': 71,
  'D': 68,
  'E': 67,
  'F': 13,
  '0': 22,
  '1': 12,
  '2': 24,
  '3': 94,
  '4': 8,
  '5': 28,
  '6': 90,
  '7': 66,
  '8': 82,
  '9': 74,
  'up': 64,
  'down': 25,
  'left': 7,
  'right': 9,
  'set': 21
};

exports.OVERTIME = OVERTIME;
exports.AUTO_OVERTIME = AUTO_OVERTIME;
exports.FIRM_MODES = FIRM_MODES;
exports.SUPPORTLIST = SUPPORTLIST;
exports.FIRMWARE_ID = FIRMWARE_ID;
exports.TONE_TO_HZ = TONE_TO_HZ;
exports.MOVE_DIRECTION = MOVE_DIRECTION;
exports.VERSION = VERSION;
exports.INFRARED_BUTTON = INFRARED_BUTTON;

/***/ })

/******/ });
//# sourceMappingURL=sensorium.js.map