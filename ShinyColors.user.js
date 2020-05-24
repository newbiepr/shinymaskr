// ==UserScript==
// @name         샤니마스 한글 패치 임시
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      1.0.13
// @description  샤니마스 한글 패치 스크립트입니다.
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu(https://github.com/biuuu/ShinyColors)
// @match        https://shinycolors.enza.fun/*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      api.interpreter.caiyunai.com
// @connect      translate.google.cn
// @connect      fanyi.baidu.com
// @updateURL    https://newbiepr.github.io/shinymaskr/ShinyColors.user.js
// @supportURL   https://github.com/newbiepr/shinymaskr/issues
// ==/UserScript==
(function () {
	'use strict';

	const ENVIRONMENT = "";
	    const DEV = false;
	    const SHOW_UPDATE_TEXT = false;
	    const COLLECT_IMAGE_INFO = false;
	    const COLLECT_CARD_RATE = false;
	    const RES_NAME = '';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
	}

	var isString_1 = isString;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
	}

	var isBoolean_1 = isBoolean;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	var version = "1.0.13";

	const PREVIEW_COUNT = 5;
	const config = {
	  origin: 'https://newbiepr.github.io/shinymaskr',
	  hash: '',
	  localHash: '',
	  version: version,
	  story: 'normal',
	  timeout: 30,
	  font1: 'yuanti',
	  font2: 'heiti',
	  auto: 'off',
	  bgm: 'off',
	  dev: false
	};
	const defaultConfig = Object.assign({}, config);
	const fontList = ['yuanti', 'heiti', 'yuanti2'];
	const FONT = {
	  HEITI_JA: 'UDKakugo_SmallPr6-B',
	  HEITI_TRANS: `sczh-heiti,UDKakugo_SmallPr6-B`,
	  YUAN_JA: 'HummingStd-E',
	  YUAN_TRANS: `sczh-yuanti,HummingStd-E`
	};
	const _keys = ['origin', 'font1', 'font2', 'timeout', 'story', 'auto', 'bgm', 'dev'];
	const keys = DEV ? _keys.slice(1, _keys.length) : _keys;

	const setFont = () => {
	  FONT.HEITI_TRANS = `${fontList.includes(config.font2) ? 'sczh-' : ''}${config.font2},${FONT.HEITI_JA}`;
	  FONT.YUAN_TRANS = `${fontList.includes(config.font1) ? 'sczh-' : ''}${config.font1},${FONT.YUAN_JA}`;
	};

	const getLocalConfig = () => {
	  const str = localStorage.getItem('sczh:setting');
	  let setting = JSON.parse(str);
	  if (!isPlainObject_1(setting)) setting = {};
	  const {
	    origin
	  } = setting;

	  if (/^https?:\/\//.test(origin)) {
	    config.origin = origin.trim();
	  }

	  keys.forEach(key => {
	    let value = setting[key];
	    if (isString_1(value)) value = value.trim();

	    if (isBoolean_1(value) || value) {
	      config[key] = value;
	    }
	  });
	  setFont();

	  if (DEV & ENVIRONMENT === 'development') {
	    config.origin = 'http://localhost:15944';
	  }

	  if (DEV) {
	    config.dev = true;
	  }
	};

	const saveConfig = () => {
	  const data = {};
	  keys.forEach(key => {
	    if (config[key] !== defaultConfig[key]) {
	      data[key] = config[key];
	    }
	  });
	  setFont();
	  localStorage.setItem('sczh:setting', JSON.stringify(data));
	};

	const getConfigFromHash = () => {
	  let str = location.hash;
	  str = str.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, '');
	  let arr = str.split(';');
	  arr.forEach(_str => {
	    let _arr = _str.split('=');

	    let k = decodeURIComponent(_arr[0].trim());
	    let v = _arr[1] ? decodeURIComponent(_arr[1].trim()) : '';

	    if (k && keys.includes(k)) {
	      if (v) {
	        config[k] = v;
	      } else {
	        config[k] = defaultConfig[k];
	      }

	      saveConfig();
	    }
	  });
	};

	const getLocalHash = () => {
	  try {
	    const str = sessionStorage.getItem('sczh:data');
	    const data = JSON.parse(str);
	    config.localHash = data.hash;
	  } catch (err) {// ignore
	  }
	};

	const menuCommand = {
	  story: {
	    normal: '커뮤 추출 열기',
	    edit: '커뮤 추출 닫기',
	    id: 0,
	    callback: () => {
	      if (config.story === 'normal') {
	        config.story = 'edit';
	      } else {
	        const btnClose = document.getElementById('btn-close-sczh');

	        if (btnClose) {
	          btnClose.click();
	        } else {
	          config.story = 'normal';
	        }
	      }
	    }
	  },
	  bgm: {
	    on: '백그라운드 BGM 끄기',
	    off: '백그라운드 BGM 켜기',
	    id: 0,
	    callback: () => {
	      config.bgm = config.bgm !== 'off' ? 'off' : 'on';
	    }
	  },
	  origin: {
	    id: 0,
	    title: '접속할 한패 서버 URL 수정(함부로 건들면 한패깨짐)',
	    callback: () => {
	      const origin = prompt('접속할 URL 입력，아무것도 입력하지 않으면 기본값 자동 설정', config.origin);

	      if (origin !== null) {
	        config.origin = origin.trim();
	      }
	    }
	  },
	  dev: {
	    id: 0,
	    titles: ['개발자 모드 열기(개발자 전용기능)', '개발자 모드 닫기(켜두면 겜만 느려지니 닫으세요)'],
	    callback: () => {
	      config.dev = !config.dev;
	    }
	  },
	  update: {
	    id: 0,
	    title: '업데이트',
	    callback: () => {
	      window.open(`${config.origin}/ShinyColors.user.js`);
	    }
	  }
	};

	const menuCommandCb = cb => {
	  cb();
	  saveConfig();
	  setAllGMMenuCommand();
	};

	const setGMMenuCommand = type => {
	  const value = config[type];
	  const data = menuCommand[type];
	  let text = '';

	  if (isBoolean_1(value)) {
	    let index = value ? 1 : 0;
	    text = data.titles[index];
	  } else {
	    text = data.title || data[value];
	  }

	  const id = data.id;

	  if (id) {
	    window.GM_unregisterMenuCommand(id);
	  }

	  data.id = window.GM_registerMenuCommand(text, () => {
	    menuCommandCb(data.callback);
	  });
	};

	const setAllGMMenuCommand = () => {
	  if (!window.GM_registerMenuCommand || !window.GM_unregisterMenuCommand) return;
	  const menuCommandList = ['update', 'bgm', 'story', 'origin', 'dev'];
	  menuCommandList.forEach(type => {
	    setGMMenuCommand(type);
	  });
	};

	getLocalConfig();
	getLocalHash();
	getConfigFromHash();
	setAllGMMenuCommand();
	window.addEventListener('hashchange', getConfigFromHash);

	const fixModule = (param = {}) => {
	  let source = ["var n=window.csobb3pncbpccs;", "Object.freeze({addHeader:"];
	  let result = ["var n=window.csobb3pncbpccs;window._require=t;", "({addHeader:"];
	  if (param.source) source = param.source;
	  if (param.result) result = param.result;
	  const win = window.unsafeWindow || window;
	  win.eval = new Proxy(win.eval, {
	    apply(target, context, args) {
	      for (let i = 0; i < source.length; i++) {
	        var _args$;

	        if ((_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.includes(source[i])) {
	          args[0] = args[0].replace(source[i], result[i]);
	        }
	      }

	      return Reflect.apply(target, context, args);
	    }

	  });

	  win.eval.toString = () => 'function eval() { [native code] }';
	};

	const tagText = text => {
	  return `\u200b${text}`;
	};

	const restoreConsole = () => {
	  const iframe = document.createElement('iframe');
	  iframe.style.display = 'none';
	  document.body.appendChild(iframe);
	  return iframe.contentWindow.console;
	};

	const sleep = time => {
	  return new Promise(rev => {
	    setTimeout(rev, time);
	  });
	};

	const trim = str => {
	  if (!str) return '';

	  let _str = str.replace(/[\u0020]+$/g, '');

	  return _str.replace(/^[\u0020]+/g, '');
	};

	const trimWrap = (str, trans = false) => {
	  let _str = trim(str).replace(/(\\r)?\\n/g, '\n').replace(/\\r/g, '\n');

	  return trans ? _str : _str.replace(/\n{2,}/g, '\n');
	};

	const fixWrap = str => {
	  return trim(str).replace(/\r/g, '\n').replace(/\n{2,}/g, '\n');
	};

	const pureRE = str => {
	  return str.replace(/\?/g, '\\?').replace(/\./g, '\\.').replace(/\*/g, '\\*').replace(/\+/g, '\\+').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
	};

	let _console = restoreConsole();

	const log = (...args) => {
	  if (config.dev) {
	    _console.log(...args);
	  }
	};

	const tryDownload = (content, filename) => {
	  const eleLink = document.createElement('a');
	  eleLink.download = filename;
	  eleLink.style.display = 'none';
	  const blob = new Blob([content], {
	    type: 'text/csv'
	  });
	  eleLink.href = URL.createObjectURL(blob);
	  document.body.appendChild(eleLink);
	  eleLink.click();
	  document.body.removeChild(eleLink);
	};

	const replaceWrap = text => {
	  if (isString_1(text)) {
	    return text.replace(/\r?\n/g, '\\n').replace(/\r/g, '\\n');
	  }

	  return text;
	};

	const isNewVersion = (newVer = '0.0.0', oldVer = '0.0.0') => {
	  let isNew = false;
	  const arr1 = newVer.split('.').map(str => parseInt(str, 10));
	  const arr2 = oldVer.split('.').map(str => parseInt(str, 10));

	  for (let i = 0; i < arr1.length; i++) {
	    let newNum = arr1[i] || 0;
	    let oldNum = arr2[i] || 0;
	    if (newNum > oldNum) isNew = true;
	  }

	  return isNew;
	};


	const transSpeaker = (item, nameMap) => {
	  // 원 개발자는 이 기능 사용하지 않음
	  if (item.speaker) {
	    const speaker = trim(item.speaker); //    if (speakerList.includes(speaker) && nameMap.has(speaker)) {

	    if (nameMap.has(speaker)) {
	      item.speaker = tagText(nameMap.get(speaker));
	    }
	  }
	};

	const uniqueStoryId = () => {
	  const idMap = new Map();
	  return id => {
	    if (id && !/^0+$/.test(id) && id !== 'select') {
	      if (idMap.has(id)) {
	        const count = idMap.get(id);
	        idMap.set(id, count + 1);
	        return `${id}-${count}`;
	      } else {
	        idMap.set(id, 0);
	      }
	    }

	    return id;
	  };
	};

	const {
	  origin,
	  version: version$1
	} = config;

	const saveManifest = async () => {
	  const t = Math.floor(Date.now() / 1000 / 60 / 60 / 6);
	  const res = await fetch(`${origin}/manifest.json?t=${t}`);

	  if (res.ok) {
	    const data = await res.json();
	    data.time = Date.now();
	    localStorage.setItem('sczh:manifest', JSON.stringify(data));
	    return data;
	  } else {
	    throw new Error(`${res.status} ${res.url}`);
	  }
	};

	const getManifest = async () => {
	  let data;

	  try {
	    let str = localStorage.getItem('sczh:manifest');
	    if (str) data = JSON.parse(str);
	    if (Date.now() - data.time > config.cacheTime * 60 * 1000) data = false;
	  } catch (e) {}

	  if (!data) {
	    data = await saveManifest();
	  } else {
	    if (isNewVersion(version$1, data.version)) {
	      data = await saveManifest();
	    } else {
	      setTimeout(saveManifest, 5 * 1000);
	    }
	  }

	  return data;
	};

	const request = async pathname => {
	  return new Promise((rev, rej) => {
	    let timer = setTimeout(() => {
	      rej(`불러오기${pathname}시간초과`);
	    }, config.timeout * 1000);
	    fetch(`${origin}${pathname}`).then(res => {
	      clearTimeout(timer);

	      if (!res.ok) {
	        rej(`${res.status} ${res.url}`);
	        return '';
	      }

	      const type = res.headers.get('content-type');

	      if (type === null || type === void 0 ? void 0 : type.includes('json')) {
	        return res.json();
	      }

	      return res.text();
	    }).then(rev).catch(rej);
	  });
	};

	const getHash = new Promise((rev, rej) => {
	  getManifest().then(data => {
	    config.newVersion = data.version;
	    config.hashes = data.hashes;
	    fixModule(data.moduleId.INJECT);
	    rev(data);
	  }).catch(rej);
	});

	const fetchWithHash = async (pathname, hash) => {
	  if (!hash) {
	    const {
	      hashes
	    } = await getHash;
	    const key = pathname.replace(/^\/(data\/)?/, '');
	    hash = hashes[key];
	  }

	  const data = await request(`${pathname}${hash ? `?v=${hash}` : ''}`);
	  return data;
	};

	var papaparse_min = createCommonjsModule(function (module, exports) {
	/* @license
	Papa Parse
	v4.6.3
	https://github.com/mholt/PapaParse
	License: MIT
	*/
	Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),function(e,t){module.exports=t();}(commonjsGlobal,function(){var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return !1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header);}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return "string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw "exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return [];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y);}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c]);}u=""===d.join("").trim();}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p);}o<t.length-1&&(!r||0<h&&!f)&&(i+=y);}}return i}function v(e,t){if(null==e)return "";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return !0;return !1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return !0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)});}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config));}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u();},k.parse(n.file,n.instanceConfig);}else z(o.complete)&&o.complete();}function u(){h.splice(0,1),e();}};}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t;}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r);}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0;}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1});};}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded();}:function(){this._readChunk();},this.stream=function(e){this._input=e,this._nextChunk();},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t]);}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache");}try{i.send();}catch(e){this._chunkError(e.message);}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize;}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return -1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)));},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t));};}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk();},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk();},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t);}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}});},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result);},this._chunkError=function(){this._sendError(i.error);};}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}};}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause();},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume();},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError);},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0);},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0;},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()));}catch(e){this._streamError(e);}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e);},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("");},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError);},this);}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t);}};}function m(e){return "greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r);}d.data.splice(0,1);}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n;}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e));}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r;}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i});}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return "\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0;}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u);}return {successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter;}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex());},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0);},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a="";};}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw "Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw "Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P);}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++;}}else p++;}return E();function k(e){h.push(e),d=P;}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length);}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P);}function C(e){return {data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[];}},this.abort=function(){F=!0;},this.getCharIndex=function(){return P};}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}});},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results;}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results);}t.finished&&!i&&y(t.workerId,t.results);}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e];}function b(){throw "Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments);}}function z(e){return "function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0});}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0;},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});
	});

	const parseCsv = str => {
	  try {
	    return papaparse_min.parse(str.replace(/^\ufeff/, ''), {
	      header: true
	    }).data;
	  } catch (err) {
	    console.log(err);
	    return {};
	  }
	};

	const phraseMap = new Map();
	let loaded = false;

	const getPhrase = async (full = false) => {
	  if (!loaded) {
	    let csv = await fetchWithHash('/data/phrase.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.id) {
	        const id = trimWrap(item.id);
	        const trans = trimWrap(item.trans, true);

	        if (id) {
	          if (full) {
	            phraseMap.set(id, item.trans);
	          } else if (trans) {
	            phraseMap.set(id, tagText(trans));
	          }
	        }
	      }
	    });
	    loaded = true;
	  }

	  return phraseMap;
	};

	let OFFSET = 10;

	const setIdList = (id, offset) => {
	  let start = id - offset;
	  let end = id + offset;
	  let list = [];

	  for (let i = start; i <= end; i++) {
	    if (i >= 0 && i !== id) {
	      list.push(i);
	    }
	  }

	  list.unshift(id);
	  return list;
	};

	const findModule = (id, conditionFunc) => {
	  let idList = setIdList(id, OFFSET);
	  let module;

	  for (let i = 0; i < idList.length; i++) {
	    let cid = idList[i];

	    let _module = _require(cid);

	    if (conditionFunc(_module)) {
	      module = _module;
	      break;
	    }
	  }

	  return module;
	};

	const getModule = async (name, condition) => {
	  let md;

	  try {
	    const {
	      moduleId
	    } = await getHash;
	    md = findModule(moduleId[name], condition);
	  } catch (e) {
	    log(e);
	  }

	  if (!md) {
	    throw new Error(`${name} NOT FOUND.`);
	  }

	  return md;
	};

	const getAoba = async () => {
	  let aoba = await getModule('AOBA', module => {
	    return module.loaders && module.Text && module.BLEND_MODES;
	  });
	  return aoba;
	};

	const getScMd = async () => {
	  let scMd = await getModule('SCENARIO', module => {
	    return module.default && module.default['load'] && module.default['_errorEvent'] && module.default['_handleError'];
	  });
	  return scMd.default;
	};

	const getRequest = async () => {
	  let md = await getModule('REQUEST', module => {
	    return module.get && module.post && module.put && module.patch;
	  });
	  return md;
	};

	const getPhraseMd = async () => {
	  let md = await getModule('PHRASE', module => {
	    return module.default && module.default._polyglot && module.default._polyglot.phrases;
	  });
	  return md.default._polyglot.phrases;
	};

	let phraseMap$1 = null;

	async function transPhrase() {
	  const obj = await getPhraseMd();
	  if (!obj) return; // if (ENVIRONMENT === 'development') {
	  //   phraseMap = await getPhrase(true)
	  //   collectPhrases(obj)
	  // }

	  phraseMap$1 = await getPhrase();

	  for (let [key, value] of phraseMap$1) {
	    obj[key] = value;
	  }
	}

	const itemMap = new Map();
	const itemLimitMap = new Map();
	const itemNoteMap = new Map();
	let loaded$1 = false;

	const getItem = async () => {
	  if (!loaded$1) {
	    let csv = await fetchWithHash('/data/item.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type) || 'normal';

	        if (text && trans && text !== trans) {
	          if (type === 'limit') {
	            itemLimitMap.set(text, trans);
	          } else if (type === 'note') {
	            itemNoteMap.set(text, trans);
	          } else {
	            itemMap.set(text, trans);
	          }
	        }
	      }
	    });
	    loaded$1 = true;
	  }

	  return {
	    itemMap,
	    itemLimitMap,
	    itemNoteMap
	  };
	};

	const nameMap = new Map();
	let loaded$2 = false;

	const getName = async () => {
	  if (!loaded$2) {
	    let csv = await fetchWithHash('/data/name.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      const name = trim(item.name);
	      const trans = trim(item.trans);

	      if (name && trans && name !== trans) {
	        nameMap.set(name, trans);
	      }
	    });
	    loaded$2 = true;
	  }

	  return nameMap;
	};

	let commonMap = new Map();
	let loaded$3 = false;

	const getCommMap = async () => {
	  if (!loaded$3) {
	    let csv = await fetchWithHash('/data/common.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);

	        if (text && trans && text !== trans) {
	          commonMap.set(text, trans);
	        }
	      }
	    }); //    const { itemMap } = await getItem()
	    //    const nameMap = await getName()
	    //    commonMap = new Map([...itemMap, ...nameMap, ...commonMap])

	    commonMap = new Map([...commonMap]);
	    loaded$3 = true;
	  }

	  return commonMap;
	};

	const storyTemp = new Map();
	const commStoryMap = new Map();
	let commStoryLoaded = false;
	let storyIndex = null;

	const getStoryMap = csv => {
	  const list = parseCsv(csv);
	  const storyMap = new Map();
	  const getId = uniqueStoryId();
	  list.forEach(item => {
	    const id = getId(trim(item.id));
	    const text = trimWrap(item.text);
	    const trans = trimWrap(item.trans, true);
	    const name = trim(item.name);

	    if (text && trans) {
	      if (id && !/^0+$/.test(id) && id !== 'select') {
	        storyMap.set(id, tagText(trans));
	      } else {
	        if (id === 'select') {
	          storyMap.set(`${text}-select`, tagText(trans));
	        } else {
	          storyMap.set(text, tagText(trans));
	        }
	      }
	    }

	    if (id && name && id === 'info') {
	      storyMap.set('name', name);
	    }
	  });
	  return storyMap;
	};

	const getStory = async name => {
	  if (!storyIndex) {
	    const storyIndexData = await fetchWithHash('/story.json');
	    storyIndex = new Map(storyIndexData);
	  }

	  if (storyIndex.has(name)) {
	    if (storyTemp.has(name)) {
	      return storyTemp.get(name);
	    } else {
	      const fileName = storyIndex.get(name);
	      const csvStr = await fetchWithHash(`/data/story/${fileName}.csv`);
	      const storyMap = getStoryMap(csvStr);
	      storyTemp.set(name, storyMap);
	      return storyMap;
	    }
	  }

	  return false;
	};

	const getCommStory = async () => {
	  if (!commStoryLoaded) {
	    let csv = await fetchWithHash('/data/comm-story.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);

	        if (text && trans && text !== trans) {
	          commStoryMap.set(text, trans);
	        }
	      }
	    });
	    commStoryLoaded = true;
	  }

	  return commStoryMap;
	};

	let typeTextMap = new Map();
	let loaded$4 = false;

	const getTypeTextMap = async () => {
	  if (!loaded$4) {
	    let csv = await fetchWithHash('/data/type-text.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);

	        if (text && trans && text !== trans) {
	          typeTextMap.set(text, trans);
	        }
	      }
	    });
	    typeTextMap = new Map([...typeTextMap]);
	    loaded$4 = true;
	  }

	  return typeTextMap;
	};

	let commMap = new Map();
	let typeTextMap$1 = new Map();
	const typeTextStack = [];

	const setTypeText = text => {
	  typeTextStack.push(text);
	  if (config.dev && SHOW_UPDATE_TEXT) log(typeTextStack);
	  setTimeout(() => typeTextStack.shift(), 10000);
	};

	const isTyping = text => {
	  let typing = false;
	  typeTextStack.forEach(txt => {
	    if (txt.startsWith(text)) {
	      typing = true;
	    }
	  });
	  return typing;
	};

	const replaceFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_JA) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_TRANS);
	    } else if (style.fontFamily === FONT.YUAN_JA) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_TRANS);
	    }
	  }
	};

	const restoreFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_JA);
	    } else if (style.fontFamily === FONT.YUAN_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_JA);
	    }
	  }
	};

	const textInMap = (text, map, style) => {
	  let _text = text;
	  let key = fixWrap(text);

	  if (map.has(key)) {
	    _text = '\u200b' + map.get(key);
	    replaceFont(style);
	  } else if (!text.startsWith('\u200b')) {
	    restoreFont(style);
	  }

	  return _text;
	};

	const speakerList = ['めぐる', '凛世', '千雪', '咲耶', '夏葉', '恋鐘', '摩美々', '智代子', '果穂', '樹里', '灯織', '甘奈', '甜花', '真乃', '結華', '霧子', '愛依', '冬優子', 'あさひ', '雛菜', '透', '小糸', '円香'];

	const fontCheck = (text, style, isType = false) => {
	  if (!isString_1(text)) return text;
	  let _text = text;

	  if (text.startsWith('\u200b')) {
	    replaceFont(style);
	  } else if (text.trim()) {
	    if (isType) {
	      _text = textInMap(text, typeTextMap$1, style);
	      setTypeText(text);
	    } else if (!isTyping(text) && !text.startsWith('\u200c')) {
	      _text = textInMap(text, commMap, style);
	    } else if (speakerList.includes(text)) {
	      _text = textInMap(text, commMap, style);
	    }
	  }

	  return _text;
	};

	async function watchText() {
	  let aoba = await getAoba();
	  if (!aoba) return;

	  try {
	    commMap = await getCommMap();
	    typeTextMap$1 = await getTypeTextMap();
	  } catch (e) {} // watch typeText


	  const originTypeText = aoba.Text.prototype.typeText;

	  aoba.Text.prototype.typeText = function (...args) {
	    const text = args[0];
	    if (SHOW_UPDATE_TEXT) log('type text', ...args);
	    args[0] = fontCheck(text, this.style, true);
	    return originTypeText.apply(this, args);
	  };

	  const originUpdateText = aoba.Text.prototype.updateText;

	  aoba.Text.prototype.updateText = function (t) {
	    if (this.localStyleID !== this._style.styleID && (this.dirty = !0, this._style.styleID), this.dirty || !t) {
	      if (config.dev && SHOW_UPDATE_TEXT) log(replaceWrap(this._text));
	      const value = fontCheck(this._text, this._style);
	      Reflect.set(this, '_text', value);
	      return originUpdateText.call(this, t);
	    }
	  };
	}

	const autoTransCache = new Map();

	const replaceText = (text, expMap, wordMaps = []) => {
	  if (autoTransCache.has(text)) return autoTransCache.get(text);
	  let result = text;

	  for (let [re, trans] of expMap) {
	    result = result.replace(re, (...arr) => {
	      let _trans = trans;

	      for (let i = 1; i < arr.length - 2; i++) {
	        let eleKey = arr[i];
	        let replaced = false;
	        wordMaps.forEach(map => {
	          if (map.has(eleKey)) {
	            _trans = _trans.replace(`$${i}`, map.get(eleKey));
	            replaced = true;
	          }
	        });

	        if (!replaced) {
	          _trans = _trans.replace(`$${i}`, arr[i]);
	        }
	      }

	      return _trans;
	    });
	    re.lastIndex = 0;
	  }

	  autoTransCache.set(text, result);
	  return result;
	};

	const replaceItem = (item, key, data) => {
	  if (!item || !isString_1(item[key])) return;
	  const {
	    expMap,
	    wordMaps,
	    textMap
	  } = data;
	  const text = fixWrap(item[key]);
	  let _text = text;
	  if (!text) return;

	  if (textMap === null || textMap === void 0 ? void 0 : textMap.has(text)) {
	    item[key] = tagText(textMap.get(text));
	  } else {
	    _text = replaceText(text, expMap, wordMaps);

	    if (text !== _text) {
	      item[key] = tagText(_text);
	    }
	  }
	};

	const sortWords = (list, key = 'EMPTY') => {
	  return list.sort((prev, next) => {
	    let valPrev = prev;
	    let valNext = next;

	    if (key !== 'EMPTY') {
	      valPrev = prev[key];
	      valNext = next[key];
	    }

	    if (!valNext) valNext = '';
	    if (!valPrev) valPrev = '';

	    if (valNext.length > valPrev.length) {
	      return 1;
	    } else if (valPrev.length > valNext.length) {
	      return -1;
	    } else {
	      return 0;
	    }
	  });
	};

	const numRE = '([+-＋－]?[0-9０-９\u2460-\u2500]{1,10}\\.?[0-9０-９\u2460-\u2500]{0,4}?)';
	const percentRE = '([+-＋－]?[0-9０-９]{1,10}\\.?[0-9０-９]{0,4}?[%％])';
	const unknownRE = '(.+?)';

	const parseRegExp = (str, list = []) => {
	  let result = str.replace(/\$num/g, numRE).replace(/\$percent/g, percentRE).replace(/\$unknown/g, unknownRE).replace(/\$uk/g, unknownRE);
	  list.forEach(item => {
	    result = result.replace(item.re, item.exp);
	    item.re.lastIndex = 0;
	  });
	  return new RegExp(result, 'gi');
	};

	const supportSkillCache = {
	  expMap: new Map(),
	  nounMap: new Map(),
	  nounArr: [],
	  loaded: false
	};

	const brackets = str => {
	  return str.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
	};

	const getSupportSkill = async () => {
	  const {
	    expMap,
	    nounMap,
	    nounArr,
	    loaded
	  } = supportSkillCache;

	  if (!loaded) {
	    let csv = await fetchWithHash('/data/support-skill.csv');
	    const list = parseCsv(csv);
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else {
	            reMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$noun/g,
	      exp: `(${nounArr.join('|')})`
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    supportSkillCache.loaded = true;
	  }

	  return {
	    expMap,
	    wordMaps: [nounMap]
	  };
	};

	const skillCache = {
	  expMap: new Map(),
	  textMap: new Map(),
	  nounMap: new Map(),
	  nameMap: new Map(),
	  otherMap: new Map(),
	  nounArr: [],
	  nameArr: [],
	  otherArr: [],
	  loaded: false
	};

	const getSkill = async () => {
	  const {
	    expMap,
	    nounMap,
	    textMap,
	    nameMap,
	    otherMap,
	    nounArr,
	    nameArr,
	    otherArr,
	    loaded
	  } = skillCache;

	  if (!loaded) {
	    let csv = await fetchWithHash('/data/skill.csv');
	    const list = parseCsv(csv);
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else if (type === 'text') {
	            textMap.set(text, trans);
	          } else if (type === 'name') {
	            nameArr.push(pureRE(text));
	            nameMap.set(text, trans);
	          } else if (type === 'other') {
	            otherArr.push(pureRE(text));
	            otherMap.set(text, trans);
	          } else {
	            reMap.set(brackets(text), trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$noun/g,
	      exp: `(${nounArr.join('|')})`
	    }, {
	      re: /\$name/g,
	      exp: `(${nameArr.join('|')})`
	    }, {
	      re: /\$other/g,
	      exp: `(${otherArr.join('|')})`
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    skillCache.loaded = true;
	  }

	  const wordMaps = [nounMap, otherMap, nameMap];
	  return {
	    expMap,
	    wordMaps,
	    textMap
	  };
	};

	let skillDataPrms = null;
	let skillData = null;

	const ensureSkillData = async () => {
	  if (!skillDataPrms) {
	    skillDataPrms = getSkill();
	  }

	  if (!skillData) {
	    skillData = await skillDataPrms;
	  }
	};

	const nameWithPlus = (list, data) => {
	  if (data) {
	    list.forEach((str, index) => {
	      list[index] = str + data[index];
	    });
	  } else {
	    let arr = [];
	    list.forEach((str, index) => {
	      let rgs = str.match(/([＋+]+)$/);

	      if (rgs === null || rgs === void 0 ? void 0 : rgs[1]) {
	        arr.push(rgs[1]);
	        list[index] = str.replace(/[＋+]+$/, '');
	      } else {
	        arr.push('');
	      }
	    });
	    return arr;
	  }
	};

	const transSkill = (item, key, data = skillData) => {
	  if (item === null || item === void 0 ? void 0 : item[key]) {
	    let arr = item[key].split('/');
	    arr.forEach((txt, index) => {
	      let plusList = nameWithPlus(arr);
	      replaceItem(arr, index, data);
	      nameWithPlus(arr, plusList);
	    });
	    let text = arr.join('/');

	    if (text !== item[key]) {
	      item[key] = tagText(text);
	    }
	  }
	};

	const transSupportSkill = (list, sData) => {
	  list === null || list === void 0 ? void 0 : list.forEach(item => {
	    transSkill(item, 'description', sData);
	    transSkill(item, 'name', sData);
	  });
	};

	const supportSkill = async data => {
	  var _data$userSupportIdol, _supportIdol$supportI;

	  const sData = await getSupportSkill();
	  const supportIdol = (_data$userSupportIdol = data.userSupportIdol) !== null && _data$userSupportIdol !== void 0 ? _data$userSupportIdol : data;
	  transSupportSkill(supportIdol.acquiredSupportSkills, sData);
	  transSupportSkill(supportIdol.supportSkills, sData);
	  transSupportSkill((_supportIdol$supportI = supportIdol.supportIdol) === null || _supportIdol$supportI === void 0 ? void 0 : _supportIdol$supportI.supportSkills, sData);
	};

	const transEffects = data => {
	  var _data$skillEffects, _data$rivalMemoryAppe;

	  (_data$skillEffects = data.skillEffects) === null || _data$skillEffects === void 0 ? void 0 : _data$skillEffects.forEach(item => {
	    transSkill(item, 'effectName');
	    transSkill(item, 'effectDescription');
	  });
	  (_data$rivalMemoryAppe = data.rivalMemoryAppealEffects) === null || _data$rivalMemoryAppe === void 0 ? void 0 : _data$rivalMemoryAppe.forEach(item => {
	    transSkill(item, 'effectName');
	    transSkill(item, 'effectDescription');
	  });
	};

	const commSkill = (data, skillData, transEffect = false) => {
	  if (!data) return;
	  transSkill(data, 'comment');
	  transSkill(data, 'name');

	  if (transEffect) {
	    transEffects(data);
	  }

	  if (data.linkSkill) {
	    transSkill(data.linkSkill, 'comment');
	    transSkill(data.linkSkill, 'name');

	    if (transEffect) {
	      transEffects(data.linkSkill);
	    }
	  }
	};

	const exSkill = data => {
	  transSkill(data, 'name');
	  transSkill(data, 'description');
	};

	const skillPanel = data => {
	  if (!data) return;
	  data.forEach(item => {
	    transSkill(item, 'releaseConditions');
	    transSkill(item.passiveSkills, 'comment');
	    transSkill(item.passiveSkills, 'name');
	    commSkill(item.skill);
	    commSkill(item.concertActiveSkill);

	    if (item.activeSkills) {
	      item.activeSkills.forEach(skill => {
	        commSkill(skill);
	      });
	    }
	  });
	};

	const memoryAppeal = data => {
	  data.forEach(item => {
	    commSkill(item);
	  });
	};

	const shortProIdol = (data, skillData, panel = false) => {
	  var _proIdol$activeSkills, _proIdol$passiveSkill, _proIdol$limitBreaks;

	  let proIdol = data.userProduceIdol;
	  if (!proIdol) return;
	  (_proIdol$activeSkills = proIdol.activeSkills) === null || _proIdol$activeSkills === void 0 ? void 0 : _proIdol$activeSkills.forEach(item => {
	    commSkill(item);
	  });
	  (_proIdol$passiveSkill = proIdol.passiveSkills) === null || _proIdol$passiveSkill === void 0 ? void 0 : _proIdol$passiveSkill.forEach(item => {
	    commSkill(item);
	  });
	  (_proIdol$limitBreaks = proIdol.limitBreaks) === null || _proIdol$limitBreaks === void 0 ? void 0 : _proIdol$limitBreaks.forEach(item => {
	    commSkill(item);
	  });

	  if (panel) {
	    skillPanel(proIdol.skillPanels);
	  }
	};

	const judegsSkill = data => {
	  data.forEach(judge => {
	    commSkill(judge.skill, skillData, true);
	  });
	};

	const fesRivalsSkill = data => {
	  if (!data) return;
	  data.forEach(rival => {
	    var _rival$userFesDeck, _rival$userRaidDeck, _rival$rival;

	    (_rival$userFesDeck = rival.userFesDeck) === null || _rival$userFesDeck === void 0 ? void 0 : _rival$userFesDeck.userFesDeckMembers.forEach(member => {
	      member.userFesIdol.activeSkills.forEach(skill => {
	        transEffects(skill);
	      });
	    });
	    (_rival$userRaidDeck = rival.userRaidDeck) === null || _rival$userRaidDeck === void 0 ? void 0 : _rival$userRaidDeck.userRaidDeckMembers.forEach(member => {
	      member.userFesIdol.activeSkills.forEach(skill => {
	        commSkill(skill, skillData, true);
	      });
	    });
	    (_rival$rival = rival.rival) === null || _rival$rival === void 0 ? void 0 : _rival$rival.rivalSkills.forEach(skill => {
	      transEffects(skill);
	    });
	  });
	};

	const audRivalsSkill = data => {
	  data.forEach(rival => {
	    transEffects(rival.rivalMemoryAppeal);
	    rival.rivalSkills.forEach(skill => {
	      transEffects(skill);
	    });
	  });
	}; // ==================================================
	// request entry


	const userIdolsSkill = async data => {
	  await ensureSkillData();
	  skillPanel(data.idol.skillPanels);
	  memoryAppeal(data.idol.memoryAppeals);
	  data.userIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });
	};

	const userProIdolsSkill = async data => {
	  await ensureSkillData();
	  data.activeSkills.forEach(item => {
	    commSkill(item);
	  });
	  memoryAppeal(data.userIdol.idol.memoryAppeals);
	  data.userProduceIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });
	};

	const reserveUserIdolsSkill = async data => {
	  await ensureSkillData();
	  skillPanel(data.idol.skillPanels);
	  memoryAppeal(data.idol.memoryAppeals);
	};

	const userSptIdolsSkill = async data => {
	  await ensureSkillData();
	  skillPanel(data.supportIdol.skillPanels);
	  data.userSupportIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });

	  try {
	    data.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment');
	      transSkill(item, 'name');
	    });
	  } catch (e) {}
	};

	const userProSptIdolsSkill = async data => {
	  await ensureSkillData();
	  skillPanel(data.skillPanels);
	  data.userProduceSupportIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });

	  try {
	    data.userSupportIdol.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment');
	      transSkill(item, 'name');
	    });
	  } catch (e) {}
	};

	const reserveUserSptIdolsSkill = async data => {
	  await ensureSkillData();
	  skillPanel(data.supportIdol.skillPanels);

	  try {
	    data.supportIdol.supportIdolActiveSkill.activeSkills.forEach(item => {
	      transSkill(item, 'comment');
	      transSkill(item, 'name');
	    });
	  } catch (e) {}
	};

	const userFesIdolsSkill = async data => {
	  await ensureSkillData();
	  const fesIdol = data.userFesIdol;
	  fesIdol.activeSkills.forEach(item => {
	    commSkill(item);
	  });
	  commSkill(fesIdol.memoryAppeal);
	  fesIdol.passiveSkills.forEach(item => {
	    transSkill(item, 'comment');
	    transSkill(item, 'name');
	  });
	  fesIdol.userFesIdolProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });
	  fesIdol.userFesSupportIdols.forEach(sptIdol => {
	    sptIdol.userFesSupportIdolProduceExSkills.forEach(item => {
	      exSkill(item.produceExSkill);
	    });
	  });
	};

	const otherFesIdolSkill = userFesIdolsSkill;

	const produceExSkillTop = async data => {
	  await ensureSkillData();
	  data.userProduceExSkills.forEach(item => {
	    exSkill(item.produceExSkill);
	  });
	};

	const userFesDeck = async data => {
	  await ensureSkillData();
	  data.userFesDecks.forEach(deck => {
	    deck.userFesDeckMembers.forEach(member => {
	      var _member$userFesIdol;

	      (_member$userFesIdol = member.userFesIdol) === null || _member$userFesIdol === void 0 ? void 0 : _member$userFesIdol.activeSkills.forEach(item => {
	        commSkill(item);
	      });
	    });
	  });
	};

	const userRaidDeck = async data => {
	  await ensureSkillData();
	  data.userRaidDecks.forEach(deck => {
	    deck.userRaidDeckMembers.forEach(member => {
	      var _member$userFesIdol2;

	      (_member$userFesIdol2 = member.userFesIdol) === null || _member$userFesIdol2 === void 0 ? void 0 : _member$userFesIdol2.activeSkills.forEach(item => {
	        commSkill(item);
	      });
	    });
	  });
	};

	const proSkillPanels = async data => {
	  var _data$userProduceLimi;

	  await ensureSkillData();
	  data.userProduceSupportIdols.forEach(item => {
	    skillPanel(item.skillPanels);
	  });
	  shortProIdol(data, skillData, true);
	  (_data$userProduceLimi = data.userProduceLimitedSkills) === null || _data$userProduceLimi === void 0 ? void 0 : _data$userProduceLimi.forEach(item => {
	    commSkill(item.passiveSkills);
	    commSkill(item.skill);
	  });

	  try {
	    skillPanel(data.userProduceIdol.userIdol.idol.skillPanels);
	  } catch (e) {}
	};

	const produceFinish = async data => {
	  if (data.gameData) return;
	  await ensureSkillData();
	  shortProIdol(data);
	};

	const fesMatchConcertSkill = async data => {
	  var _data$userFesDeck, _data$userRaidDeck;

	  await ensureSkillData();

	  const transDeckMember = member => {
	    member.userFesIdol.activeSkills.forEach(item => {
	      commSkill(item, skillData, true);
	    });
	    commSkill(member.userFesIdol.memoryAppeal, skillData, true);
	    member.userFesIdol.passiveSkills.forEach(item => {
	      transSkill(item, 'comment');
	      transSkill(item, 'name');
	      transEffects(item);
	    });
	  };

	  (_data$userFesDeck = data.userFesDeck) === null || _data$userFesDeck === void 0 ? void 0 : _data$userFesDeck.userFesDeckMembers.forEach(transDeckMember);
	  (_data$userRaidDeck = data.userRaidDeck) === null || _data$userRaidDeck === void 0 ? void 0 : _data$userRaidDeck.userRaidDeckMembers.forEach(transDeckMember);
	  judegsSkill(data.judges);
	  fesRivalsSkill(data.userFesRivals);
	  fesRivalsSkill(data.userFesRaidRivals);
	};

	const auditionSkill = async data => {
	  await ensureSkillData();
	  data.userProduceSupportIdols.forEach(item => {
	    commSkill(item.activeSkill, skillData, true);
	  });
	  let proIdol = data.userProduceIdol;
	  proIdol.activeSkills.forEach(skill => {
	    commSkill(skill, skillData, true);
	  });
	  commSkill(proIdol.memoryAppeal, skillData, true);
	  proIdol.passiveSkills.forEach(skill => {
	    commSkill(skill, skillData, true);
	  });
	  let audition = data.produceAudition || data.produceConcert;
	  judegsSkill(audition.judges);
	  audRivalsSkill(audition.rivals);
	};

	const resumeGameSkill = async data => {
	  if (!data.gameData) return;

	  try {
	    let gData = JSON.parse(data.gameData);

	    if (gData.produceAudition || gData.produceConcert) {
	      await auditionSkill(gData);
	    } else if (gData.userFesDeck || gData.userRaidDeck) {
	      await fesMatchConcertSkill(gData);
	    }

	    data.gameData = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const resumeRaidGameSkill = async data => {
	  if (!data.gameState || !data.gameState.game_data) return;

	  try {
	    let gData = JSON.parse(data.gameState.game_data);

	    if (gData.userRaidDeck) {
	      await fesMatchConcertSkill(gData);
	    }

	    data.gameState.game_data = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const produceResultSkill = async data => {
	  await ensureSkillData();
	  data.produceExSkillRewards.forEach(reward => {
	    exSkill(reward.produceExSkill);
	  });
	};

	const ideaNotesSkill = async data => {
	  if (!data.userProduceIdeaNotes) return;
	  await ensureSkillData();
	  data.userProduceIdeaNotes.forEach(note => {
	    let bonus = note.produceIdeaNote.produceIdeaNoteCompleteBonus;
	    transSkill(bonus, 'title');
	    transSkill(bonus, 'comment');
	    note.produceIdeaNote.produceIdeaNoteExtraBonuses.forEach(item => {
	      transSkill(item, 'comment');
	      transSkill(item, 'condition');
	    });
	  });
	};

	const noteResultSkill = async data => {
	  await ensureSkillData();

	  try {
	    let item = data.lessonResult.userProduceIdeaNote.produceIdeaNote.produceIdeaNoteCompleteBonus;
	    commSkill(item);
	  } catch (e) {}
	};

	const producesDecksSkill = async data => {
	  var _data$userSupportIdol2;

	  const sData = await getSupportSkill();
	  (_data$userSupportIdol2 = data.userSupportIdols) === null || _data$userSupportIdol2 === void 0 ? void 0 : _data$userSupportIdol2.forEach(item => {
	    var _item$supportIdol;

	    transSupportSkill((_item$supportIdol = item.supportIdol) === null || _item$supportIdol === void 0 ? void 0 : _item$supportIdol.supportSkills, sData);
	  });
	};

	const producesActionReadySkill = async data => {
	  const sData = await getSupportSkill();
	  data.userDecks.forEach(deck => {
	    deck.userSupportIdols.forEach(item => {
	      var _item$supportIdol2;

	      transSupportSkill((_item$supportIdol2 = item.supportIdol) === null || _item$supportIdol2 === void 0 ? void 0 : _item$supportIdol2.supportSkills, sData);
	    });
	  });
	};

	let textMap = new Map();
	let expMap = new Map();
	let nounMap = new Map();
	let nameMap$1 = new Map();
	let noteMap = new Map();
	let loaded$5 = false;

	const getMission = async (full = false) => {
	  if (!loaded$5) {
	    let csv = await fetchWithHash('/data/mission-re.csv');
	    const list = parseCsv(csv);
	    const nounArr = [];
	    const nameArr = [];
	    const noteArr = [];
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else if (type === 'note') {
	            noteArr.push(pureRE(text));
	            noteMap.set(text, trans);
	            reMap.set(`【${text}】`, `【${trans}】`);
	          } else if (type === 'name') {
	            nameArr.push(pureRE(text));
	            nameMap$1.set(text, trans);
	          } else if (type === 'exp') {
	            reMap.set(text, trans);
	          }

	          if (type !== 'exp') {
	            textMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$name/g,
	      exp: `(${nameArr.join('|')})`
	    }, {
	      re: /\$noun/g,
	      exp: `(${nounArr.join('|')})`
	    }, {
	      re: /\$note/g,
	      exp: `(${noteArr.join('|')})`
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    loaded$5 = true;
	  }

	  const wordMaps = [nounMap, noteMap, nameMap$1];
	  let {
	    itemMap
	  } = await getItem();
	  textMap = new Map([...itemMap, ...textMap]);
	  return {
	    expMap,
	    wordMaps,
	    textMap
	  };
	};

	const userItemTypes = ['userRecoveryItems', 'userProduceItems', 'userExchangeItems', 'userLotteryTickets', 'userEvolutionItems', 'userGashaTickets', 'userScoutTickets', 'userEnhancementItems'];
	const itemTypes = ['produceItem', 'recoveryItem', 'exchangeItem', 'lotteryTicket', 'evolutionItem', 'gashaTicket', 'scoutTicket', 'enhancementItem'];
	let itemMaps;
	let itemPrms;

	const ensureItem = async () => {
	  if (!itemPrms) {
	    itemPrms = getItem();
	  }

	  if (!itemMaps) {
	    itemMaps = await itemPrms;
	  }
	};

	let unknownItems = [];

	const collectItems = text => {
	  if (!text) return;

	  let _text = replaceWrap(text);

	  if (!unknownItems.includes(_text)) {
	    unknownItems.push(_text);
	  }
	};

	let win = window.unsafeWindow || window;

	win.printUnknowItems = () => log(unknownItems.join('\n'));

	const transItem = (item, key) => {
	  if (!item || typeof item[key] !== 'string') return;
	  const {
	    itemMap,
	    itemLimitMap,
	    itemNoteMap
	  } = itemMaps;
	  let text = fixWrap(item[key]);
	  let limit = '';
	  let note = '';
	  let exp = '';

	  if (/[\s\S]+[\r\n]{0,2}\[[^\]]+\]$/.test(text)) {
	    let rgs = text.match(/([\s\S]+)([\r\n]{0,2}\[[^\]]+\])$/);
	    text = rgs[1].trim();
	    let txt = rgs[2];

	    if (itemLimitMap.has(txt)) {
	      limit = itemLimitMap.get(txt);
	    } else {
	      limit = txt;
	    }
	  }

	  if (/[\s\S]+[\r\n]{0,2}【Exp:\d+】$/.test(text)) {
	    let rgs = text.match(/([\s\S]+)([\r\n]{0,2}【Exp:\d+】)$/);
	    text = rgs[1].trim();
	    exp = rgs[2];
	  }

	  if (/[\s\S]+[\r\n]{0,2}[(（][^)）]+[）)]$/.test(text)) {
	    let rgs = text.match(/([\s\S]+)([\r\n]{0,2})[(（]([^)）]+)[）)]$/);
	    text = rgs[1].trim();
	    let txt = rgs[3];

	    if (itemNoteMap.has(txt)) {
	      note = `${rgs[2]}（${itemNoteMap.get(txt)}）`;
	    } else {
	      note = `${rgs[2]}（txt）`;
	    }
	  }

	  if (itemMap.has(text)) {
	    let trans = itemMap.get(text);
	    trans = `${trans}${note}${exp}${limit}`;
	    item[key] = tagText(trans);
	  } else if (config.dev) {
	    collectItems(item[key]);
	  }
	};

	const switchShop = shop => {
	  var _shop$shopMerchandise;

	  shop === null || shop === void 0 ? void 0 : (_shop$shopMerchandise = shop.shopMerchandises) === null || _shop$shopMerchandise === void 0 ? void 0 : _shop$shopMerchandise.forEach(item => {
	    transItem(item, 'title');
	    transItem(item, 'shopTitle');
	    transItem(item, 'comment');
	  });
	};

	const transShopItem = async data => {
	  await ensureItem();

	  if (data) {
	    if (Array.isArray(data.userShops)) {
	      data.userShops.forEach(shop => {
	        switchShop(shop);
	      });
	    }

	    if (Array.isArray(data.userEventShops)) {
	      data.userEventShops.forEach(item => {
	        switchShop(item.userShop);
	      });
	    }
	  }
	};

	const transUserItem = async data => {
	  let list = data;
	  if (data.userProduceItems) list = data.userProduceItems;
	  await ensureItem();

	  if (Array.isArray(list)) {
	    list.forEach(obj => {
	      const item = obj[itemTypes[0]] || obj[itemTypes[1]] || obj[itemTypes[2]] || obj[itemTypes[3]] || obj[itemTypes[4]] || obj[itemTypes[5]] || obj[itemTypes[6]] || obj[itemTypes[7]];
	      transItem(item, 'name');
	      transItem(item, 'comment');
	    });
	  }
	};

	const transShopPurchase = async data => {
	  await ensureItem();
	  transItem(data === null || data === void 0 ? void 0 : data.shopMerchandise, 'title');
	  transItem(data === null || data === void 0 ? void 0 : data.shopMerchandise, 'comment');
	};

	const transPresentItem = async data => {
	  await ensureItem();

	  if (Array.isArray(data)) {
	    data.forEach(obj => {
	      transItem(obj.content, 'name');
	    });
	  }
	};

	const transReceivePresent = async data => {
	  await ensureItem();
	  transItem(data.receivedPresent, 'Name');
	};

	const transReceiveMission = async data => {
	  await ensureItem();
	  transItem(data.userMission.mission.missionReward.content, 'name');
	};

	const transLoginBonus = async data => {
	  await ensureItem();
	  data.userLoginBonuses.forEach(item => {
	    item.loginBonus.sheets.forEach(sheet => {
	      sheet.rewards.forEach(reward => {
	        transItem(reward.content, 'name');
	      });
	    });
	  });
	  data.userTotalBonuses.forEach(item => {
	    item.rewards.forEach(reward => {
	      transItem(reward.content, 'name');
	    });
	  });
	};

	const transFesReward = async data => {
	  await ensureItem();

	  if (data.lastRankingResult) {
	    if (Array.isArray(data.lastRankingResult.fesMatchGradeRewards)) {
	      data.lastRankingResult.fesMatchGradeRewards.forEach(item => {
	        transItem(item.content, 'name');
	      });
	    }
	  }
	};

	const transAccumulatedPresent = async data => {
	  await ensureItem();
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    item.gameEventAccumulatedPresent.rewards.forEach(reward => {
	      transItem(reward.content, 'name');
	    });
	  });
	};

	const selectLoginBonus = async data => {
	  await ensureItem();
	  data.rewards.forEach(reward => {
	    transItem(reward.content, 'name');
	  });
	};

	const produceActiveItem = async data => {
	  var _data$activeProduceIt;

	  await ensureItem();
	  data === null || data === void 0 ? void 0 : (_data$activeProduceIt = data.activeProduceItems) === null || _data$activeProduceIt === void 0 ? void 0 : _data$activeProduceIt.forEach(item => {
	    transItem(item.produceItem, 'name');
	    transItem(item.produceItem, 'comment');
	  });
	};

	const homeProduceActiveItem = async data => {
	  await produceActiveItem(data.userProduce);
	};

	let missionMaps = null;
	let msPrms = null;

	const ensureMissionData = async () => {
	  if (!msPrms) {
	    msPrms = getMission();
	  }

	  await ensureItem();
	  missionMaps = await msPrms;
	};

	const replaceMission = (data, key) => {
	  let transed = false;
	  if (!data || typeof data[key] !== 'string') return transed;
	  const {
	    expMap,
	    wordMaps,
	    textMap
	  } = missionMaps;
	  const text = fixWrap(data[key]);
	  let _text = text;
	  if (!text) return transed;

	  if (textMap.has(text)) {
	    transed = true;
	    data[key] = tagText(textMap.get(text));
	  } else {
	    _text = replaceText(text, expMap, wordMaps);

	    if (text !== _text) {
	      transed = true;
	      data[key] = tagText(_text);
	    } else if (config.dev) {
	      saveUnknownMissions(data, key);
	    }
	  }

	  return transed;
	};

	const processReward = (data, key) => {
	  let transed = replaceMission(data, key);

	  if (!transed) {
	    transItem(data, key);
	  }
	};

	const processMission = list => {
	  list === null || list === void 0 ? void 0 : list.forEach(item => {
	    replaceMission(item.mission, 'title');
	    replaceMission(item.mission, 'comment');

	    if (item.mission.missionReward.content) {
	      processReward(item.mission.missionReward.content, 'name');
	      processReward(item.mission.missionReward.content, 'comment');
	    }
	  });
	};

	const processRaidMission = list => {
	  list.forEach(item => {
	    let mission = item.fesRaidAccumulatedReward;
	    replaceMission(mission, 'title');
	    replaceMission(mission, 'comment');
	    let content = mission.fesRaidAccumulatedRewardContent;

	    if (content === null || content === void 0 ? void 0 : content.content) {
	      processReward(content.content, 'name');
	      processReward(content.content, 'comment');
	    }
	  });
	};

	const fullMission = (list, hasReward = true) => {
	  list === null || list === void 0 ? void 0 : list.forEach(item => {
	    let mission = item.mission || item;
	    replaceMission(mission, 'title');
	    replaceMission(mission, 'comment');
	    replaceMission(mission, 'afterAchievedComment');
	    replaceMission(mission, 'beforeAchievedComment');

	    if (hasReward) {
	      let reward = mission.lectureMissionReward;

	      if (reward === null || reward === void 0 ? void 0 : reward.content) {
	        processReward(reward.content, 'name');
	        processReward(reward.content, 'comment');
	      }
	    }
	  });
	};

	const unknownMissions = [];

	const saveUnknownMissions = (data, key) => {
	  if (!data[key]) return;
	  const text = replaceWrap(data[key]);

	  if (!unknownMissions.includes(text)) {
	    unknownMissions.push(text);
	  }
	};

	let win$1 = window.unsafeWindow || window;

	win$1.printUnknownMission = () => log(unknownMissions.join('\n'));

	const transMission = async data => {
	  var _data$eventUserMissio;

	  await ensureMissionData();
	  processMission(data.dailyUserMissions);
	  processMission(data.weeklyUserMissions);
	  (_data$eventUserMissio = data.eventUserMissions) === null || _data$eventUserMissio === void 0 ? void 0 : _data$eventUserMissio.forEach(item => {
	    processMission(item === null || item === void 0 ? void 0 : item.userMissions);
	  });
	  processMission(data.normalUserMissions);
	  processMission(data.specialUserMissions);
	};

	const reportMission = async data => {
	  await ensureMissionData();
	  processMission(data.reportUserMissions);
	};

	const beginnerMissionComplete = async data => {
	  await ensureMissionData();
	  let mission = data.beginnerMission;

	  if (mission) {
	    if (mission.clearedLectureMission) {
	      fullMission([mission.clearedLectureMission]);
	    }

	    if (mission.progressLectureMission) {
	      fullMission([mission.progressLectureMission]);
	    }
	  }
	};

	const fesRecomMission = async data => {
	  await ensureMissionData();
	  replaceMission(data.userRecommendedMission.mission, 'comment');
	  replaceMission(data.userRecommendedMission.mission, 'title');
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    replaceMission(item.gameEventAccumulatedPresent, 'comment');
	    replaceMission(item.gameEventAccumulatedPresent, 'title');
	  });
	};

	const fesRaidMission = async data => {
	  await ensureMissionData();
	  processRaidMission(data.fesRaidBestScoreRewards);
	  processRaidMission(data.fesRaidLapRewards);
	  processRaidMission(data.fesRaidPointRewards);
	};

	const teachingMission = async data => {
	  var _data$teachingHints;

	  await ensureMissionData();
	  (_data$teachingHints = data.teachingHints) === null || _data$teachingHints === void 0 ? void 0 : _data$teachingHints.forEach(item => {
	    item.userProduceTeachingHints.forEach(hint => {
	      replaceMission(hint.produceTeachingHint, 'title');
	    });
	  });
	};

	const teachingMission2 = async data => {
	  var _data$teachingHints2;

	  await ensureMissionData();
	  (_data$teachingHints2 = data.teachingHints) === null || _data$teachingHints2 === void 0 ? void 0 : _data$teachingHints2.forEach(item => {
	    item.userProduceHints.forEach(hint => {
	      replaceMission(hint.produceTeachingHint, 'title');
	    });
	  });
	};

	const beginnerMission = async data => {
	  await ensureMissionData();
	  fullMission(data.lectureMissions);
	};

	const idolRoadRewards = idol => {
	  var _idol$userIdolRoad;

	  (_idol$userIdolRoad = idol.userIdolRoad) === null || _idol$userIdolRoad === void 0 ? void 0 : _idol$userIdolRoad.idolRoad.idolRoadRewards.forEach(reward => {
	    processReward(reward.content, 'name');
	    processReward(reward.content, 'comment');
	  });
	};

	const idolRoadMission = async data => {
	  var _data$userIdols;

	  await ensureMissionData();
	  fullMission(data.userMissions, false);
	  (_data$userIdols = data.userIdols) === null || _data$userIdols === void 0 ? void 0 : _data$userIdols.forEach(idolRoadRewards);
	};

	const idolRoadForward = async data => {
	  await ensureMissionData();
	  idolRoadRewards(data.userIdol);
	};

	const textMap$1 = new Map();
	const reMap = new Map();
	const expMap$1 = new Map();
	let loaded$6 = false;

	const getTitle = async () => {
	  if (!loaded$6) {
	    let csv = await fetchWithHash('/data/title.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.text) {
	        const text = trimWrap(item.text);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type) || 'text';

	        if (text && trans && text !== trans) {
	          if (type === 'exp') {
	            reMap.set(text, trans);
	          } else if (type === 'text') {
	            textMap$1.set(text, trans);
	          }
	        }
	      }
	    });

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key);
	      expMap$1.set(re, value);
	    }

	    loaded$6 = true;
	  }

	  return {
	    textMap: textMap$1,
	    expMap: expMap$1
	  };
	};

	let titleMaps;
	let nameMap$2;
	let titlePrms;
	let namePrms;

	const ensureTitle = async () => {
	  if (!titlePrms) {
	    titlePrms = getTitle();
	    namePrms = getName();
	  }

	  if (!titleMaps || !nameMap$2) {
	    titleMaps = await titlePrms;
	    nameMap$2 = await namePrms;
	    titleMaps.wordMaps = [nameMap$2];
	  }
	};

	let unknownTitles = [];

	const collectTitles = text => {
	  if (!text) return;

	  let _text = replaceWrap(text);

	  if (!unknownTitles.includes(_text)) {
	    unknownTitles.push(_text);
	  }
	};

	let win$2 = window.unsafeWindow || window;

	win$2.printUnknowTitles = () => log(unknownTitles.join('\n'));

	const storyTitle = new Map();

	const saveTitle = (id, text) => {
	  if (!id || !isString_1(text)) return;
	  if (!storyTitle.has(id)) storyTitle.set(id, text);
	};

	const transTitle = (item = {}, key) => {
	  let text = item[key];
	  replaceItem(item, key, titleMaps);

	  if (config.dev && text === item[key]) {
	    collectTitles(text);
	  }
	};

	const transEvents = events => {
	  events.forEach(event => {
	    transTitle(event, 'name');
	    event.communications.forEach(commu => {
	      transTitle(commu, 'name');
	      transTitle(commu, 'title');
	      saveTitle(commu.id, `${commu.name} ${commu.title}`);
	    });
	  });
	};

	const albumTopTitle = async data => {
	  await ensureTitle();
	  transEvents(data.gameEvents);
	  transEvents(data.specialEvents);
	};

	const characterAlbumTitle = async data => {
	  await ensureTitle();
	  data.albumCommunicationTitles.forEach(item => {
	    transTitle(item, 'title');
	  });
	  data.communications.forEach(item => {
	    transTitle(item, 'title');
	    saveTitle(item.communicationId, item.title);
	  });
	  data.voices.forEach(item => {
	    transTitle(item, 'title');
	    transTitle(item, 'releasedConditionComment');
	  });
	};

	const userIdolsTitle = async data => {
	  await ensureTitle();
	  data.idol.produceAfterEvents.forEach(item => {
	    transTitle(item, 'title');
	    saveTitle(item.id, item.title);
	  });
	  data.idol.produceIdolEvents.forEach(item => {
	    transTitle(item, 'title');
	    saveTitle(item.id, item.title);
	  });
	};

	const userSupportIdolsTitle = async data => {
	  await ensureTitle();
	  data.supportIdol.produceSupportIdolEvents.forEach(item => {
	    transTitle(item, 'title');
	    saveTitle(item.id, item.title);
	  });
	};

	const marathonTitle = async data => {
	  await ensureTitle();
	  data.releasedCommunications.forEach(item => {
	    transTitle(item, 'name');
	    transTitle(item, 'title');
	    saveTitle(item.id, `${item.name} ${item.title}`);
	  });
	  transTitle(data.gameEvent, 'name');
	};

	const profileMap = new Map();
	let profileLoaded = false;

	const getProfile = async () => {
	  if (!profileLoaded) {
	    let csv = await fetchWithHash('/data/profile.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      const name = trim(item.name);

	      if (name) {
	        profileMap.set(name, item);
	      }
	    });
	    profileLoaded = true;
	  }

	  return profileMap;
	};

	let profilePrms = null;

	const ensureProfile = async () => {
	  if (!profilePrms) {
	    profilePrms = getProfile();
	  }

	  return await profilePrms;
	};

	const transProfileProperty = (data, item, profile) => {
	  if (item == "unit_name" && profile[item]) {
	    data.unit.name = profile[item];
	    return;
	  }

	  if (profile[item]) {
	    data[item] = profile[item];
	  }
	};

	const transProfile = (data, idolProfile) => {
	  transProfileProperty(data, 'arm', idolProfile);
	  transProfileProperty(data, 'birthDay', idolProfile);
	  transProfileProperty(data, 'characterVoice', idolProfile);
	  transProfileProperty(data, 'firstName', idolProfile);
	  transProfileProperty(data, 'hobby', idolProfile);
	  transProfileProperty(data, 'nameKana', idolProfile);
	  transProfileProperty(data, 'place', idolProfile);
	  transProfileProperty(data, 'arm', idolProfile);
	  transProfileProperty(data, 'specialty', idolProfile);
	  transProfileProperty(data, 'starSign', idolProfile);
	  transProfileProperty(data, 'unit_name', idolProfile);
	};

	const idolProfiles = async data => {
	  const profiles = await ensureProfile();

	  if (data.name) {
	    const idolProfile = profiles.get(data.name);
	    transProfile(data, idolProfile);
	  }

	  if (data.beginnerMissionUnits) {
	    data.beginnerMissionUnits.forEach(unit => {
	      unit.idols.forEach(idol => {
	        const idolProfile = profiles.get(idol.idol.character.name);
	        transProfile(idol.idol.character, idolProfile);
	      });
	    });
	  }

	  if (data.units) {
	    data.units.forEach(unit => {
	      unit.idols.forEach(idol => {
	        const idolProfile = profiles.get(idol.character.name);
	        transProfile(idol.character, idolProfile);
	      });
	    });
	  }
	};

	var fingerprint2_min = createCommonjsModule(function (module) {
	// Fingerprintjs2 - Copyright (c) 2019 Valentin Vasilyev (valentin.vasilyev@outlook.com)
	// Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.

	!function(e,t,a){"undefined"!=typeof window&&"function"==typeof undefined&&undefined.amd?undefined(a):module.exports?module.exports=a():t.exports?t.exports=a():t.Fingerprint2=a();}(0,commonjsGlobal,function(){var d=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]+t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]+t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]+t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]+t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},g=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]*t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]*t[3],a[1]+=a[2]>>>16,a[2]&=65535,a[2]+=e[3]*t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]*t[3],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[2]*t[2],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[3]*t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},f=function(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},h=function(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},m=function(e,t){return [e[0]^t[0],e[1]^t[1]]},T=function(e){return e=m(e,[0,e[0]>>>1]),e=g(e,[4283543511,3981806797]),e=m(e,[0,e[0]>>>1]),e=g(e,[3301882366,444984403]),e=m(e,[0,e[0]>>>1])},l=function(e,t){t=t||0;for(var a=(e=e||"").length%16,n=e.length-a,r=[0,t],i=[0,t],o=[0,0],l=[0,0],s=[2277735313,289559509],c=[1291169091,658871167],u=0;u<n;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],l=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=g(o,s),o=f(o,31),o=g(o,c),r=m(r,o),r=f(r,27),r=d(r,i),r=d(g(r,[0,5]),[0,1390208809]),l=g(l,c),l=f(l,33),l=g(l,s),i=m(i,l),i=f(i,31),i=d(i,r),i=d(g(i,[0,5]),[0,944331445]);switch(o=[0,0],l=[0,0],a){case 15:l=m(l,h([0,e.charCodeAt(u+14)],48));case 14:l=m(l,h([0,e.charCodeAt(u+13)],40));case 13:l=m(l,h([0,e.charCodeAt(u+12)],32));case 12:l=m(l,h([0,e.charCodeAt(u+11)],24));case 11:l=m(l,h([0,e.charCodeAt(u+10)],16));case 10:l=m(l,h([0,e.charCodeAt(u+9)],8));case 9:l=m(l,[0,e.charCodeAt(u+8)]),l=g(l,c),l=f(l,33),l=g(l,s),i=m(i,l);case 8:o=m(o,h([0,e.charCodeAt(u+7)],56));case 7:o=m(o,h([0,e.charCodeAt(u+6)],48));case 6:o=m(o,h([0,e.charCodeAt(u+5)],40));case 5:o=m(o,h([0,e.charCodeAt(u+4)],32));case 4:o=m(o,h([0,e.charCodeAt(u+3)],24));case 3:o=m(o,h([0,e.charCodeAt(u+2)],16));case 2:o=m(o,h([0,e.charCodeAt(u+1)],8));case 1:o=m(o,[0,e.charCodeAt(u)]),o=g(o,s),o=f(o,31),o=g(o,c),r=m(r,o);}return r=m(r,[0,e.length]),i=m(i,[0,e.length]),r=d(r,i),i=d(i,r),r=T(r),i=T(i),r=d(r,i),i=d(i,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)},e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},c=function(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var a=0,n=e.length;a<n;a++)t(e[a],a,e);else for(var r in e)e.hasOwnProperty(r)&&t(e[r],r,e);},s=function(e,n){var r=[];return null==e?r:Array.prototype.map&&e.map===Array.prototype.map?e.map(n):(c(e,function(e,t,a){r.push(n(e,t,a));}),r)},a=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},n=function(e){var t=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&t.sort().reverse(),t},r=function(e){if(window.screen.availWidth&&window.screen.availHeight){var t=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}return e.NOT_AVAILABLE},i=function(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var t=[],a=0,n=navigator.plugins.length;a<n;a++)navigator.plugins[a]&&t.push(navigator.plugins[a]);return u(e)&&(t=t.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),s(t,function(e){var t=s(e,function(e){return [e.type,e.suffixes]});return [e.name,e.description,t]})},o=function(t){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){e=s(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],function(e){try{return new window.ActiveXObject(e),e}catch(e){return t.ERROR}});}else e.push(t.NOT_AVAILABLE);return navigator.plugins&&(e=e.concat(i(t))),e},u=function(e){for(var t=!1,a=0,n=e.plugins.sortPluginsFor.length;a<n;a++){var r=e.plugins.sortPluginsFor[a];if(navigator.userAgent.match(r)){t=!0;break}}return t},p=function(t){try{return !!window.sessionStorage}catch(e){return t.ERROR}},v=function(t){try{return !!window.localStorage}catch(e){return t.ERROR}},A=function(t){try{return !!window.indexedDB}catch(e){return t.ERROR}},S=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},C=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},B=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},w=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},t=function(){var t,e=0;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0;}catch(e){t=!1;}return [e,t,"ontouchstart"in window]},y=function(e){var t=[],a=document.createElement("canvas");a.width=2e3,a.height=200,a.style.display="inline";var n=a.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),t.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",e.dontUseFakeFontInCanvas?n.font="11pt Arial":n.font="11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),a.toDataURL&&t.push("canvas fp:"+a.toDataURL()),t},E=function(){var o,e=function(e){return o.clearColor(0,0,0,1),o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"};if(!(o=F()))return null;var l=[],t=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,t);var a=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW),t.itemSize=3,t.numItems=3;var n=o.createProgram(),r=o.createShader(o.VERTEX_SHADER);o.shaderSource(r,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),o.compileShader(r);var i=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(i,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),o.compileShader(i),o.attachShader(n,r),o.attachShader(n,i),o.linkProgram(n),o.useProgram(n),n.vertexPosAttrib=o.getAttribLocation(n,"attrVertex"),n.offsetUniform=o.getUniformLocation(n,"uniformOffset"),o.enableVertexAttribArray(n.vertexPosArray),o.vertexAttribPointer(n.vertexPosAttrib,t.itemSize,o.FLOAT,!1,0,0),o.uniform2f(n.offsetUniform,1,1),o.drawArrays(o.TRIANGLE_STRIP,0,t.numItems);try{l.push(o.canvas.toDataURL());}catch(e){}l.push("extensions:"+(o.getSupportedExtensions()||[]).join(";")),l.push("webgl aliased line width range:"+e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))),l.push("webgl aliased point size range:"+e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))),l.push("webgl alpha bits:"+o.getParameter(o.ALPHA_BITS)),l.push("webgl antialiasing:"+(o.getContextAttributes().antialias?"yes":"no")),l.push("webgl blue bits:"+o.getParameter(o.BLUE_BITS)),l.push("webgl depth bits:"+o.getParameter(o.DEPTH_BITS)),l.push("webgl green bits:"+o.getParameter(o.GREEN_BITS)),l.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var a=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===a&&(a=2),a}return null}(o)),l.push("webgl max combined texture image units:"+o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),l.push("webgl max cube map texture size:"+o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)),l.push("webgl max fragment uniform vectors:"+o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)),l.push("webgl max render buffer size:"+o.getParameter(o.MAX_RENDERBUFFER_SIZE)),l.push("webgl max texture image units:"+o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)),l.push("webgl max texture size:"+o.getParameter(o.MAX_TEXTURE_SIZE)),l.push("webgl max varying vectors:"+o.getParameter(o.MAX_VARYING_VECTORS)),l.push("webgl max vertex attribs:"+o.getParameter(o.MAX_VERTEX_ATTRIBS)),l.push("webgl max vertex texture image units:"+o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),l.push("webgl max vertex uniform vectors:"+o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)),l.push("webgl max viewport dims:"+e(o.getParameter(o.MAX_VIEWPORT_DIMS))),l.push("webgl red bits:"+o.getParameter(o.RED_BITS)),l.push("webgl renderer:"+o.getParameter(o.RENDERER)),l.push("webgl shading language version:"+o.getParameter(o.SHADING_LANGUAGE_VERSION)),l.push("webgl stencil bits:"+o.getParameter(o.STENCIL_BITS)),l.push("webgl vendor:"+o.getParameter(o.VENDOR)),l.push("webgl version:"+o.getParameter(o.VERSION));try{var s=o.getExtension("WEBGL_debug_renderer_info");s&&(l.push("webgl unmasked vendor:"+o.getParameter(s.UNMASKED_VENDOR_WEBGL)),l.push("webgl unmasked renderer:"+o.getParameter(s.UNMASKED_RENDERER_WEBGL)));}catch(e){}return o.getShaderPrecisionFormat&&c(["FLOAT","INT"],function(i){c(["VERTEX","FRAGMENT"],function(r){c(["HIGH","MEDIUM","LOW"],function(n){c(["precision","rangeMin","rangeMax"],function(e){var t=o.getShaderPrecisionFormat(o[r+"_SHADER"],o[n+"_"+i])[e];"precision"!==e&&(e="precision "+e);var a=["webgl ",r.toLowerCase()," shader ",n.toLowerCase()," ",i.toLowerCase()," ",e,":",t].join("");l.push(a);});});});}),l},M=function(){try{var e=F(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},x=function(){var e=document.createElement("div");e.innerHTML="&nbsp;";var t=!(e.className="adsbox");try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e);}catch(e){t=!1;}return t},O=function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return !0}catch(e){return !0}return !1},b=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},P=function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.oscpu,n=navigator.platform.toLowerCase();if(e=0<=t.indexOf("windows phone")?"Windows Phone":0<=t.indexOf("win")?"Windows":0<=t.indexOf("android")?"Android":0<=t.indexOf("linux")||0<=t.indexOf("cros")?"Linux":0<=t.indexOf("iphone")||0<=t.indexOf("ipad")?"iOS":0<=t.indexOf("mac")?"Mac":"Other",("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return !0;if(void 0!==a){if(0<=(a=a.toLowerCase()).indexOf("win")&&"Windows"!==e&&"Windows Phone"!==e)return !0;if(0<=a.indexOf("linux")&&"Linux"!==e&&"Android"!==e)return !0;if(0<=a.indexOf("mac")&&"Mac"!==e&&"iOS"!==e)return !0;if((-1===a.indexOf("win")&&-1===a.indexOf("linux")&&-1===a.indexOf("mac"))!=("Other"===e))return !0}return 0<=n.indexOf("win")&&"Windows"!==e&&"Windows Phone"!==e||((0<=n.indexOf("linux")||0<=n.indexOf("android")||0<=n.indexOf("pike"))&&"Linux"!==e&&"Android"!==e||((0<=n.indexOf("mac")||0<=n.indexOf("ipad")||0<=n.indexOf("ipod")||0<=n.indexOf("iphone"))&&"Mac"!==e&&"iOS"!==e||((n.indexOf("win")<0&&n.indexOf("linux")<0&&n.indexOf("mac")<0&&n.indexOf("iphone")<0&&n.indexOf("ipad")<0)!==("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},L=function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.productSub;if(("Chrome"===(e=0<=t.indexOf("firefox")?"Firefox":0<=t.indexOf("opera")||0<=t.indexOf("opr")?"Opera":0<=t.indexOf("chrome")?"Chrome":0<=t.indexOf("safari")?"Safari":0<=t.indexOf("trident")?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==a)return !0;var n,r=eval.toString().length;if(37===r&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return !0;if(39===r&&"Internet Explorer"!==e&&"Other"!==e)return !0;if(33===r&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return !0;try{throw "a"}catch(e){try{e.toSource(),n=!0;}catch(e){n=!1;}}return n&&"Firefox"!==e&&"Other"!==e},I=function(){var e=document.createElement("canvas");return !(!e.getContext||!e.getContext("2d"))},k=function(){if(!I())return !1;var e=F();return !!window.WebGLRenderingContext&&!!e},R=function(){return "Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},D=function(){return void 0!==window.swfobject},N=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},_=function(t,e){var a="___fp_swf_loaded";window[a]=function(e){t(e);};var n,r,i=e.fonts.swfContainerId;(r=document.createElement("div")).setAttribute("id",n.fonts.swfContainerId),document.body.appendChild(r);var o={onReady:a};window.swfobject.embedSWF(e.fonts.swfPath,i,"1","1","9.0.0",!1,o,{allowScriptAccess:"always",menu:"false"},{});},F=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl");}catch(e){}return t||(t=null),t},G=[{key:"userAgent",getData:function(e){e(navigator.userAgent);}},{key:"webdriver",getData:function(e,t){e(null==navigator.webdriver?t.NOT_AVAILABLE:navigator.webdriver);}},{key:"language",getData:function(e,t){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||t.NOT_AVAILABLE);}},{key:"colorDepth",getData:function(e,t){e(window.screen.colorDepth||t.NOT_AVAILABLE);}},{key:"deviceMemory",getData:function(e,t){e(navigator.deviceMemory||t.NOT_AVAILABLE);}},{key:"pixelRatio",getData:function(e,t){e(window.devicePixelRatio||t.NOT_AVAILABLE);}},{key:"hardwareConcurrency",getData:function(e,t){e(S(t));}},{key:"screenResolution",getData:function(e,t){e(n(t));}},{key:"availableScreenResolution",getData:function(e,t){e(r(t));}},{key:"timezoneOffset",getData:function(e){e((new Date).getTimezoneOffset());}},{key:"timezone",getData:function(e,t){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone):e(t.NOT_AVAILABLE);}},{key:"sessionStorage",getData:function(e,t){e(p(t));}},{key:"localStorage",getData:function(e,t){e(v(t));}},{key:"indexedDb",getData:function(e,t){e(A(t));}},{key:"addBehavior",getData:function(e){e(!(!document.body||!document.body.addBehavior));}},{key:"openDatabase",getData:function(e){e(!!window.openDatabase);}},{key:"cpuClass",getData:function(e,t){e(C(t));}},{key:"platform",getData:function(e,t){e(B(t));}},{key:"doNotTrack",getData:function(e,t){e(w(t));}},{key:"plugins",getData:function(e,t){R()?t.plugins.excludeIE?e(t.EXCLUDED):e(o(t)):e(i(t));}},{key:"canvas",getData:function(e,t){I()?e(y(t)):e(t.NOT_AVAILABLE);}},{key:"webgl",getData:function(e,t){k()?e(E()):e(t.NOT_AVAILABLE);}},{key:"webglVendorAndRenderer",getData:function(e){k()?e(M()):e();}},{key:"adBlock",getData:function(e){e(x());}},{key:"hasLiedLanguages",getData:function(e){e(O());}},{key:"hasLiedResolution",getData:function(e){e(b());}},{key:"hasLiedOs",getData:function(e){e(P());}},{key:"hasLiedBrowser",getData:function(e){e(L());}},{key:"touchSupport",getData:function(e){e(t());}},{key:"fonts",getData:function(e,t){var u=["monospace","sans-serif","serif"],d=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];t.fonts.extendedJsFonts&&(d=d.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"]));d=(d=d.concat(t.fonts.userDefinedFonts)).filter(function(e,t){return d.indexOf(e)===t});var a=document.getElementsByTagName("body")[0],r=document.createElement("div"),g=document.createElement("div"),n={},i={},f=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e},o=function(e){for(var t=!1,a=0;a<u.length;a++)if(t=e[a].offsetWidth!==n[u[a]]||e[a].offsetHeight!==i[u[a]])return t;return t},l=function(){for(var e=[],t=0,a=u.length;t<a;t++){var n=f();n.style.fontFamily=u[t],r.appendChild(n),e.push(n);}return e}();a.appendChild(r);for(var s=0,c=u.length;s<c;s++)n[u[s]]=l[s].offsetWidth,i[u[s]]=l[s].offsetHeight;var h=function(){for(var e,t,a,n={},r=0,i=d.length;r<i;r++){for(var o=[],l=0,s=u.length;l<s;l++){var c=(e=d[r],t=u[l],a=void 0,(a=f()).style.fontFamily="'"+e+"',"+t,a);g.appendChild(c),o.push(c);}n[d[r]]=o;}return n}();a.appendChild(g);for(var m=[],T=0,p=d.length;T<p;T++)o(h[d[T]])&&m.push(d[T]);a.removeChild(g),a.removeChild(r),e(m);},pauseBefore:!0},{key:"fontsFlash",getData:function(t,e){return D()?N()?e.fonts.swfPath?void _(function(e){t(e);},e):t("missing options.fonts.swfPath"):t("flash not installed"):t("swf object not loaded")},pauseBefore:!0},{key:"audio",getData:function(a,e){var t=e.audio;if(t.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return a(e.EXCLUDED);var n=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==n)return a(e.NOT_AVAILABLE);var r=new n(1,44100,44100),i=r.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1e4,r.currentTime);var o=r.createDynamicsCompressor();c([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){void 0!==o[e[0]]&&"function"==typeof o[e[0]].setValueAtTime&&o[e[0]].setValueAtTime(e[1],r.currentTime);}),i.connect(o),o.connect(r.destination),i.start(0),r.startRendering();var l=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".'),r.oncomplete=function(){},r=null,a("audioTimeout")},t.timeout);r.oncomplete=function(e){var t;try{clearTimeout(l),t=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,t){return e+Math.abs(t)},0).toString(),i.disconnect(),o.disconnect();}catch(e){return void a(e)}a(t);};}},{key:"enumerateDevices",getData:function(t,e){if(!a())return t(e.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(e){t(e.map(function(e){return "id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}));}).catch(function(e){t(e);});}}],U=function(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")};return U.get=function(a,n){n?a||(a={}):(n=a,a={}),function(e,t){if(null==t)return;var a,n;for(n in t)null==(a=t[n])||Object.prototype.hasOwnProperty.call(e,n)||(e[n]=a);}(a,e),a.components=a.extraComponents.concat(G);var r={data:[],addPreprocessedComponent:function(e,t){"function"==typeof a.preprocessor&&(t=a.preprocessor(e,t)),r.data.push({key:e,value:t});}},i=-1,o=function(e){if((i+=1)>=a.components.length)n(r.data);else{var t=a.components[i];if(a.excludes[t.key])o(!1);else{if(!e&&t.pauseBefore)return i-=1,void setTimeout(function(){o(!0);},1);try{t.getData(function(e){r.addPreprocessedComponent(t.key,e),o(!1);},a);}catch(e){r.addPreprocessedComponent(t.key,String(e)),o(!1);}}}};o(!1);},U.getPromise=function(a){return new Promise(function(e,t){U.get(a,e);})},U.getV18=function(i,o){return null==o&&(o=i,i={}),U.get(i,function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];if(n.value===(i.NOT_AVAILABLE||"not available"))t.push({key:n.key,value:"unknown"});else if("plugins"===n.key)t.push({key:"plugins",value:s(n.value,function(e){var t=s(e[2],function(e){return e.join?e.join("~"):e}).join(",");return [e[0],e[1],t].join("::")})});else if(-1!==["canvas","webgl"].indexOf(n.key))t.push({key:n.key,value:n.value.join("~")});else if(-1!==["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(n.key)){if(!n.value)continue;t.push({key:n.key,value:1});}else n.value?t.push(n.value.join?{key:n.key,value:n.value.join(";")}:n):t.push({key:n.key,value:n.value});}var r=l(s(t,function(e){return e.value}).join("~~~"),31);o(r,t);})},U.x64hash128=l,U.VERSION="2.1.0",U});
	});

	const request$1 = (url, option) => {
	  const {
	    method = 'GET',
	    headers,
	    data
	  } = option;
	  return fetch(url, {
	    body: data,
	    headers,
	    method,
	    mode: 'cors',
	    referrer: 'no-referrer'
	  }).then(res => res.json());
	};

	var has = Object.prototype.hasOwnProperty;
	var isArray$1 = Array.isArray;

	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }

	    return array;
	}());

	var compactQueue = function compactQueue(queue) {
	    while (queue.length > 1) {
	        var item = queue.pop();
	        var obj = item.obj[item.prop];

	        if (isArray$1(obj)) {
	            var compacted = [];

	            for (var j = 0; j < obj.length; ++j) {
	                if (typeof obj[j] !== 'undefined') {
	                    compacted.push(obj[j]);
	                }
	            }

	            item.obj[item.prop] = compacted;
	        }
	    }
	};

	var arrayToObject = function arrayToObject(source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	var merge = function merge(target, source, options) {
	    /* eslint no-param-reassign: 0 */
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (isArray$1(target)) {
	            target.push(source);
	        } else if (target && typeof target === 'object') {
	            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (!target || typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (isArray$1(target) && !isArray$1(source)) {
	        mergeTarget = arrayToObject(target, options);
	    }

	    if (isArray$1(target) && isArray$1(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                var targetItem = target[i];
	                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
	                    target[i] = merge(targetItem, item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (has.call(acc, key)) {
	            acc[key] = merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	var assign = function assignSingleSource(target, source) {
	    return Object.keys(source).reduce(function (acc, key) {
	        acc[key] = source[key];
	        return acc;
	    }, target);
	};

	var decode = function (str, decoder, charset) {
	    var strWithoutPlus = str.replace(/\+/g, ' ');
	    if (charset === 'iso-8859-1') {
	        // unescape never throws, no try...catch needed:
	        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
	    }
	    // utf-8
	    try {
	        return decodeURIComponent(strWithoutPlus);
	    } catch (e) {
	        return strWithoutPlus;
	    }
	};

	var encode = function encode(str, defaultEncoder, charset) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = str;
	    if (typeof str === 'symbol') {
	        string = Symbol.prototype.toString.call(str);
	    } else if (typeof str !== 'string') {
	        string = String(str);
	    }

	    if (charset === 'iso-8859-1') {
	        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
	            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
	        });
	    }

	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);

	        if (
	            c === 0x2D // -
	            || c === 0x2E // .
	            || c === 0x5F // _
	            || c === 0x7E // ~
	            || (c >= 0x30 && c <= 0x39) // 0-9
	            || (c >= 0x41 && c <= 0x5A) // a-z
	            || (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }

	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }

	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)]
	            + hexTable[0x80 | ((c >> 12) & 0x3F)]
	            + hexTable[0x80 | ((c >> 6) & 0x3F)]
	            + hexTable[0x80 | (c & 0x3F)];
	    }

	    return out;
	};

	var compact = function compact(value) {
	    var queue = [{ obj: { o: value }, prop: 'o' }];
	    var refs = [];

	    for (var i = 0; i < queue.length; ++i) {
	        var item = queue[i];
	        var obj = item.obj[item.prop];

	        var keys = Object.keys(obj);
	        for (var j = 0; j < keys.length; ++j) {
	            var key = keys[j];
	            var val = obj[key];
	            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
	                queue.push({ obj: obj, prop: key });
	                refs.push(val);
	            }
	        }
	    }

	    compactQueue(queue);

	    return value;
	};

	var isRegExp = function isRegExp(obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	var isBuffer = function isBuffer(obj) {
	    if (!obj || typeof obj !== 'object') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};

	var combine = function combine(a, b) {
	    return [].concat(a, b);
	};

	var utils = {
	    arrayToObject: arrayToObject,
	    assign: assign,
	    combine: combine,
	    compact: compact,
	    decode: decode,
	    encode: encode,
	    isBuffer: isBuffer,
	    isRegExp: isRegExp,
	    merge: merge
	};

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;



	var Format = {
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};

	var formats = utils.assign(
	    {
	        'default': Format.RFC3986,
	        formatters: {
	            RFC1738: function (value) {
	                return replace.call(value, percentTwenties, '+');
	            },
	            RFC3986: function (value) {
	                return String(value);
	            }
	        }
	    },
	    Format
	);

	var toISO = Date.prototype.toISOString;

	var defaultFormat = formats['default'];
	var defaults = {
	    addQueryPrefix: false,
	    allowDots: false,
	    charset: 'utf-8',
	    charsetSentinel: false,
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    encodeValuesOnly: false,
	    format: defaultFormat,
	    formatter: formats.formatters[defaultFormat],
	    // deprecated
	    indices: false,
	    serializeDate: function serializeDate(date) {
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};

	const caiyunTrans = async source => {
	  const data = {
	    text: source
	  };

	  try {
	    const slackhook1 = 'https://hooks.sla';
	    const slackhook2 = 'ck.com/services/TN6J76CUB/BNJ2';
	    const slackhook3 = 'YLNR3/baGxj31D5YxNhL2Q9FcbzaTA';
	    const slackhook = slackhook1 + slackhook2 + slackhook3;
	    const res = await request$1(slackhook, {
	      data: JSON.stringify(data),
	      method: 'POST',
	      headers: {
	        'accept': '*/*',
	        'referer': 'https://hooks.slack.com',
	        'origin': 'https://hooks.slack.com'
	      }
	    });
	    return '';
	  } catch (err) {
	    return '';
	  }
	};

	const textKeys = ['text', 'select', 'comment', 'title', 'actionComment', 'actionComment2', 'reactionComment', 'resultLoseComment', 'resultStartComment', 'resultWinComment', 'characterComment', 'producerComment', 'comment1', 'comment2'];

	const collectText = (data, commMap, typeTextMap) => {
	  const textInfo = [];
	  const textList = [];
	  data.forEach((item, index) => {
	    textKeys.forEach(key => {
	      let text = fixWrap(item[key]);

	      if (item[key]) {
	        if (commMap.has(text)) {
	          item[key] = tagText(commMap.get(text));
	        } else if (typeTextMap.has(text)) {
	          item[key] = tagText(typeTextMap.get(text));
	        } else {
	          textInfo.push({
	            key,
	            index
	          });
	          textList.push(text);
	        }
	      }
	    });
	  });
	  return {
	    textInfo,
	    textList
	  };
	};

	const autoTrans = async (data, name, printText) => {
	  if (!data.length) return;
	  const nameMap = await getName();
	  const typeTextMap = await getTypeTextMap();
	  const {
	    textInfo,
	    textList
	  } = collectText(data, nameMap, typeTextMap);
	  if (!textInfo.length || textList == "……" || textInfo.length > 15) return;

	  if ( (config.dev || !name || printText)) {
	    let mergedList = [];
	    textList.forEach((text, index) => {
	      mergedList.push(replaceWrap(text));
	    }); //	    let _log = log
	    //	    if (!name || printText) _log = log2
	    //	    _log(mergedList.join('\n'))

	    const dataparam = mergedList.join('\n');
	    const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	    const duplicatelist = ['プロデューサーさん\n見守っていてくれますか？', 'プロデューサーさま、\n凛世を、お導きください……', 'お疲れ様です、プロデューサーさん\n今日もいっぱい頑張りますね♡', 'プロデューサーさまに……\n見ていただける……\nそれだけで……', 'プロデューサー？\nどうしました？', 'お疲れ様です\n今日もよろしくお願いします', '……'];
	    const duplicatecheck = [];
	    duplicatelist.forEach(sentence => {
	      duplicatecheck.push(replaceWrap(sentence));
	    });
	    if (!korcheck.test(dataparam) && !typeTextMap.has(mergedList[0]) && !duplicatecheck.includes(mergedList[0])) await caiyunTrans(dataparam);
	  }

	  data.forEach(item => {
	    transSpeaker(item, nameMap);
	  });
	};

	const autoTransText = async (data, key = 'comment') => {
	  if (!data) return;
	  const name = data.map(item => item[key]).join('').trim();
	  await autoTrans(data, name, true);
	};

	const auditionKeys = ['actionComment', 'actionComment2', 'reactionComment', 'resultLoseComment', 'resultStartComment', 'resultWinComment'];

	const produceAudition = async data => {
	  try {
	    if (data.produceAudition) {
	      let name = data.produceAudition.judges.map(item => {
	        return auditionKeys.map(key => item[key] || '').join('');
	      }).join('').trim();
	      await autoTrans(data.produceAudition.judges, name, true);
	    }

	    if (data.produceConcert) {
	      let name = data.produceConcert.judges.map(item => {
	        return auditionKeys.map(key => item[key] || '').join('');
	      }).join('').trim();
	      await autoTrans(data.produceConcert.judges, name, true);
	    }
	  } catch (e) {
	    log(e);
	  }
	};

	const fesMatchConcert = async data => {
	  if (data.judges) {
	    let name = data.judges.map(item => {
	      return auditionKeys.map(key => item[key] || '').join('');
	    }).join('').trim();
	    await autoTrans(data.judges, name, true);
	  }
	};

	const mypageComments = async data => {
	  try {
	    let list = [];

	    if (data.userHomeDeck.userHomeDeckAnimationMember) {
	      list = [...data.userHomeDeck.userHomeDeckAnimationMember.mypageComments];
	    }

	    let animeMembers = data.userHomeDeck.userHomeAnimationDeck.userHomeAnimationDeckMembers;

	    if (animeMembers) {
	      animeMembers.forEach(member => {
	        member.mypageComments.forEach(comm => {
	          list.push(comm);
	        });
	      });
	    }

	    if (data.userHomeDeck.userHomeDeckMembers.length) {
	      data.userHomeDeck.userHomeDeckMembers.forEach(member => {
	        member.mypageComments.forEach(comm => {
	          list.push(comm);
	        });
	      });
	    }

	    await autoTransText(list);
	  } catch (e) {
	    log(e);
	  }
	};

	const fesDeckReactions = async data => {
	  if (!data.userFesDeck) return;

	  try {
	    let list = [];
	    let members = data.userFesDeck.userFesDeckMembers;

	    for (let member of members) {
	      member.fesTopCharacterReactions.forEach(item => {
	        list.push(item);
	      });
	    }

	    await autoTransText(list);
	  } catch (e) {
	    log(e);
	  }
	};

	const topCharacterReaction = async data => {
	  if (!data.topCharacterReaction) return;

	  try {
	    const list = [...data.topCharacterReaction.moveReactions, ...data.topCharacterReaction.skillReleasedReactions, ...data.topCharacterReaction.touchExReactions, ...data.topCharacterReaction.touchReactions, ...data.topCharacterReaction.waitReactions];
	    await autoTransText(list);
	  } catch (e) {
	    log(e);
	  }
	};

	const lessonResult = async data => {
	  if (!data.lessonResult) return;
	  let lr = data.lessonResult;

	  try {
	    let list = [];
	    if (lr.produceActCutinComment) list = list.concat(lr.produceActCutinComment); // if (lr.produceActIdolComment) list = list.concat(lr.produceActIdolComment)
	    // if (lr.produceActSupportIdolComments) list = list.concat(lr.produceActSupportIdolComments)

	    if (lr.produceRestBoostIdolComment) list = list.concat(lr.produceRestBoostIdolComment);
	    if (lr.produceRestBoostSupportIdolComment) list = list.concat(lr.produceRestBoostSupportIdolComment);
	    if (lr.produceRestComments) list = list.concat(lr.produceRestComments);
	    await autoTransText(list);
	  } catch (e) {
	    log(e);
	  }
	};

	const produceEndWeek = async data => {
	  let staff = data.produceStaffComments || [];
	  let concert = data.produceStaffConcertComments || [];
	  let fail = data.produceStaffFailComments || [];
	  let season = data.produceStaffSeasonComments || [];
	  let list = [...staff, ...concert, ...fail, ...season];
	  await autoTransText(list);
	};

	const resumeGamedata = async data => {
	  if (!data.gameData) return;

	  try {
	    let gData = JSON.parse(data.gameData);

	    if (gData.judges) {
	      await fesMatchConcert(gData);
	    } else {
	      await produceAudition(gData);
	    }

	    data.gameData = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const resumeRaidGamedata = async data => {
	  if (!data.gameState || !data.gameState.game_data) return;

	  try {
	    let gData = JSON.parse(data.gameState.game_data);

	    if (gData.judges) {
	      await fesMatchConcert(gData);
	    }

	    data.gameState.game_data = JSON.stringify(gData);
	  } catch (e) {
	    log(e);
	  }
	};

	const characterComment = async data => {
	  if (!data.characterComment) return;
	  let list = [];
	  list = list.concat(data.characterComment);
	  await autoTransText(list);
	};

	const helperSupportIdols = async data => {
	  try {
	    let name = data.characterComment + data.producerComment;
	    await autoTrans([data], name, true);
	  } catch (e) {
	    log(e);
	  }
	};

	const produceReporterAnswer = async data => {
	  try {
	    var _data$produceReporter;

	    await autoTransText((_data$produceReporter = data.produceReporterEvent) === null || _data$produceReporter === void 0 ? void 0 : _data$produceReporter.produceReporterEventAnswers, 'comment2');
	  } catch (e) {
	    log(e);
	  }
	};

	const trustLevelUp = async data => {
	  try {
	    let list = data.characterTrustLevelUpComments;
	    await autoTransText(list);
	  } catch (e) {
	    log(e);
	  }
	};

	const albumTrustLevel = async data => {
	  if (data.voices) {
	    const list = [];
	    data.voices.forEach(item => {
	      if (item.characterTrustLevelComment) {
	        list.push(item.characterTrustLevelComment);
	      }
	    });
	    await autoTransText(list);
	  }
	};

	const produceIdolName = async data => {
	  const nameMap = await getName();

	  if (data.userProduceIdol) {
	    const char = data.userProduceIdol.userIdol.idol.character;

	    if (nameMap.has(char.name)) {
	      char.name = nameMap.get(char.name);
	    }

	    if (nameMap.has(char.firstName)) {
	      char.firstName = tagText(nameMap.get(char.firstName));
	    }
	  }
	};

	const produceEventTitle = async data => {
	  var _data$produceEvents;

	  await ensureTitle();
	  (_data$produceEvents = data.produceEvents) === null || _data$produceEvents === void 0 ? void 0 : _data$produceEvents.forEach(event => {
	    transTitle(event, 'title');
	    saveTitle(event.id, event.title);
	  });
	};

	const homeProduceTitle = async data => {
	  var _data$userProduce;

	  await ensureTitle();
	  transTitle(data === null || data === void 0 ? void 0 : (_data$userProduce = data.userProduce) === null || _data$userProduce === void 0 ? void 0 : _data$userProduce.produce, 'title');
	};

	function collectCardName (data) {
	  if (!DEV || !COLLECT_CARD_RATE) return;
	  const normal = [];
	  const sr = [];
	  data.forEach(item => {
	    if (item.buttonImage === 'normal_gasha_button') {
	      item.contents.forEach(cont => {
	        normal.push({
	          name: cont.contentName,
	          rate: cont.rate,
	          id: cont.contentId
	        });
	      });
	    } else if (item.buttonImage === 'sr_up_button') {
	      item.contents.forEach(cont => {
	        sr.push({
	          name: cont.contentName,
	          rate: cont.rate,
	          id: cont.contentId
	        });
	      });
	    }
	  });
	  fetch('http://127.0.0.1:8032/imsccard', {
	    body: JSON.stringify({
	      type: 'normal',
	      text: JSON.stringify(normal)
	    }),
	    method: 'post',
	    mode: 'cors',
	    headers: {
	      'content-type': 'application/json'
	    }
	  });
	  fetch('http://127.0.0.1:8032/imsccard', {
	    body: JSON.stringify({
	      type: 'sr',
	      text: JSON.stringify(sr)
	    }),
	    method: 'post',
	    mode: 'cors',
	    headers: {
	      'content-type': 'application/json'
	    }
	  });
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$3 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys$1;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (_Map && getTag(new _Map) != mapTag$1) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$1) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor;

	    case numberTag$1:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor;

	    case symbolTag:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$3 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
	cloneableTags[boolTag$3] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
	cloneableTags[stringTag$3] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	/** `Object#toString` result references. */
	var regexpTag$3 = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == regexpTag$3;
	}

	var _baseIsRegExp = baseIsRegExp;

	/* Node.js helper references. */
	var nodeIsRegExp = _nodeUtil && _nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp$1 = nodeIsRegExp ? _baseUnary(nodeIsRegExp) : _baseIsRegExp;

	var isRegExp_1 = isRegExp$1;

	const logStyles = color => [`background-color:${color};color:#fff;padding:0 0.3em`, '', `color:${color};text-decoration:underline`];

	const requestLog = (method, color, args, data) => {
	  if (config.dev) {
	    let _data = data;

	    if (data) {
	      _data = cloneDeep_1(data);
	    }

	    log(`%c${method}%c %c${args[0]}`, ...logStyles(color), args[1] || '', '\n=>', _data);
	  }
	};

	const requestRouter = async (data, type, list) => {
	  try {
	    for (let [paths, handles] of list) {
	      if (!Array.isArray(paths)) paths = [paths];
	      let pass = false;

	      for (let path of paths) {
	        if (isString_1(path) && path === type) {
	          pass = true;
	        } else if (isRegExp_1(path) && path.test(type)) {
	          pass = true;
	        }
	      }

	      if (pass) {
	        if (!Array.isArray(handles)) handles = [handles];

	        for (let handle of handles) {
	          if (isString_1(handle)) {
	            if (handle === 'cardName') collectCardName(data);
	          } else {
	            await handle(data);
	          }
	        }
	      }
	    }
	  } catch (e) {
	    log(e);
	  }
	};

	const requestOfGet = [[[/^userSupportIdols\/\d+$/, /^userSupportIdols\/statusMax/, /^produceTeachingSupportIdols\/\d+$/], [supportSkill, userSptIdolsSkill, userSupportIdolsTitle]], [/^userProduce(Teaching)?SupportIdols\/\d+$/, [supportSkill, userProSptIdolsSkill]], [/^userReserveSupportIdols\/userSupportIdol\/\d+$/, [supportSkill, reserveUserSptIdolsSkill]], [/^userIdols\/\d+\/produceExSkillTop$/, produceExSkillTop], [/^userSupportIdols\/\d+\/produceExSkillTop$/, produceExSkillTop], [[/^userIdols\/\d+$/, /^userIdols\/statusMax$/, /^produceTeachingIdols\/\d+$/], [userIdolsSkill, userIdolsTitle]], [[/^userProduce(Teaching)?Idols\/\d+$/, 'userProduceTeachingIdol'], userProIdolsSkill], [/^userReserveIdols\/userIdol\/\d+$/, reserveUserIdolsSkill], [/^userFesIdols\/\d+$/, userFesIdolsSkill], [['userProduces/skillPanels', 'userProduceTeachings/skillPanels'], proSkillPanels], ['userMissions', transMission], ['userProduceTeachings', teachingMission2], [/^fesRaidEvents\/\d+\/rewards$/, fesRaidMission], [['characterAlbums', 'album/top'], albumTopTitle], [['userShops', 'userIdolPieceShops'], transShopItem], [userItemTypes, transUserItem], [[/^userPresents\?limit=/, /^userPresentHistories\?limit=/], transPresentItem], [/gashaGroups\/\d+\/rates/, 'cardName'], ['userProduces', [topCharacterReaction, produceActiveItem]], [/^fes(Match)?Concert\/actions\/resume$/, [resumeGamedata, resumeGameSkill]], [/earthUsers\/[^\/]+\/userFesIdols\/\d+$/, otherFesIdolSkill], ['userBeginnerMissions/top', [beginnerMission, idolProfiles]], ['tutorialIdols', idolProfiles], ['userRaidDecks', userRaidDeck], ['idolRoads/top', idolRoadMission], [/^produces\/\d+\/decks$/, producesDecksSkill]];
	const requestOfPost = [['myPage', [reportMission, mypageComments, beginnerMissionComplete, homeProduceActiveItem, homeProduceTitle]], [/^characterAlbums\/characters\/\d+$/, [characterAlbumTitle, idolProfiles, albumTrustLevel]], [/^(produceMarathons|fesMarathons|trainingEvents)\/\d+\/top$/, [fesRecomMission, transAccumulatedPresent]], [/userIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, userIdolsSkill], ['userShops/actions/purchase', transShopPurchase], [/produces\/\d+\/actions\/ready/, [transUserItem, producesActionReadySkill]], [/userPresents\/\d+\/actions\/receive/, transReceivePresent], [/userMissions\/\d+\/actions\/receive/, transReceiveMission], ['userLoginBonuses', transLoginBonus], ['fesTop', [transFesReward, fesDeckReactions]], [[/^userProduce(Teaching)?s\/skillPanels\/\d+$/, /^userProduces\/limitedSkills\/\d+$/], proSkillPanels], [/userSupportIdols\/\d+\/produceExSkills\/\d+\/actions\/set/, [userSptIdolsSkill, supportSkill]], [/^produces\/actions\/(resume|next)$/, [produceEventTitle, ideaNotesSkill, topCharacterReaction, produceEndWeek, resumeGamedata, characterComment, produceAudition, produceReporterAnswer, supportSkill, produceIdolName]], [['produces/actions/resume', 'produces/actions/finish', 'produceTeachings/resume'], [produceFinish, resumeGameSkill, produceEventTitle]], ['produces/actions/endWeek', produceEndWeek], ['produces/actions/act', [lessonResult, noteResultSkill, produceEventTitle]], [/^fes(Match|Raid)?Concert\/actions\/start$/, [fesMatchConcert, fesMatchConcertSkill]], [/^fes(Match)?Concert\/actions\/resume$/, [resumeGamedata, resumeGameSkill]], ['fesRaidConcert/actions/resume', [resumeRaidGamedata, resumeRaidGameSkill]], ['produces/actions/result', [trustLevelUp, produceResultSkill]], [[/^produce(Teaching)?s\/(\d+\/audition|concert)\/actions\/start$/, /^produceTeachings\/(auditions|concerts)\/start$/], [auditionSkill]], [/^produces\/(\d+\/audition|concert)\/actions\/(start|finish)$/, [produceAudition, characterComment, produceIdolName]], ['userProduceHelperSupportIdols', helperSupportIdols], [['produceTeachings/resume', 'produceTeachings/next'], [teachingMission, supportSkill]], [/^userSelectLoginBonuses\/\d+$/, selectLoginBonus], [/^userLectureMissions\/\d+\/actions\/receive$/, beginnerMission], [/^produceMarathons\/\d+\/top$/, marathonTitle]];
	const requestOfPatch = [[/^userSupportIdols\/\d+$/, supportSkill], ['userFesDecks', userFesDeck]];
	const requestOfPut = [['userIdolRoads', idolRoadForward]];
	async function requestHook() {
	  const request = await getRequest();
	  if (!request || !request.get) return; // GET

	  const originGet = request.get;

	  request.get = async function (...args) {
	    const type = args[0];
	    const res = await originGet.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('GET', '#009688', args, data);
	    await requestRouter(data, type, requestOfGet);
	    return res;
	  }; // PATCH


	  const originPatch = request.patch;

	  request.patch = async function (...args) {
	    const type = args[0];
	    const res = await originPatch.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('PATCH', '#8BC34A', args, data);
	    await requestRouter(data, type, requestOfPatch);
	    return res;
	  }; // POST


	  const originPost = request.post;

	  request.post = async function (...args) {
	    const type = args[0];
	    const res = await originPost.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('POST', '#3F51B5', args, data);
	    await requestRouter(data, type, requestOfPost);
	    return res;
	  }; // PUT


	  const originPut = request.put;

	  request.put = async function (...args) {
	    const type = args[0];
	    const res = await originPut.apply(this, args);
	    if (!type) return res;
	    let data = res.body;
	    requestLog('PUT', '#9C27B0', args, data);
	    await requestRouter(data, type, requestOfPut);
	    return res;
	  };
	}

	const imageMap = new Map();
	let loaded$7 = false;

	const getImage = async () => {
	  if (!loaded$7) {
	    let csv = await fetchWithHash('/data/image.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item === null || item === void 0 ? void 0 : item.name) {
	        const name = trim(item.name);
	        const url = trim(item.url);
	        const version = trim(item.version) || '1';

	        if (name && url) {
	          imageMap.set(name, {
	            url,
	            version
	          });
	        }
	      }
	    });
	    loaded$7 = true;
	  }

	  return imageMap;
	};

	const ignoreImageMap = new Map();
	let ignoreLoaded = false;

	const getIgnoreImage = async () => {
	  if (!ignoreLoaded) {
	    let csv = await fetchWithHash('/data/ignoreimage.csv');
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.name) {
	        const name = trim(item.name);
	        const version = trim(item.version) || '1';

	        if (name) {
	          ignoreImageMap.set(name, {
	            version
	          });
	        }
	      }
	    });
	    ignoreLoaded = true;
	  }

	  return ignoreImageMap;
	};

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return _root.Date.now();
	};

	var now_1 = now;

	/** `Object#toString` result references. */
	var symbolTag$2 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$2);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber_1(wait) || 0;
	  if (isObject_1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now_1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now_1());
	  }

	  function debounced() {
	    var time = now_1(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var debounce_1 = debounce;

	const getImageInfo = async () => {
	  let aoba = await getAoba();
	  let obj = JSON.parse(sessionStorage.getItem('sczh:image-info')) || {};
	  let res = aoba.loader.resources;

	  for (let name in res) {
	    let item = res[name];

	    if (item.type === 3 && item.name.endsWith('.json_image')) {
	      let data = {};
	      let jsonKey = item.name.replace(/_image$/, '');
	      data.name = item.name.replace(/\.json_image$/, '');
	      data.url = item.url;
	      data.frames = {};

	      for (let key in res[jsonKey].data.frames) {
	        let info = res[jsonKey].data.frames[key];
	        data.frames[key] = {
	          frame: info.frame,
	          rotated: info.rotated
	        };
	      }

	      obj[data.name] = data;
	    }
	  }

	  sessionStorage.setItem('sczh:image-info', JSON.stringify(obj));
	};

	let win$3 = window.unsafeWindow || window;

	win$3.dlImageInfo = () => tryDownload(sessionStorage.getItem('sczh:image-info'), 'image-info.json');

	const dbGetImageInfo = debounce_1(getImageInfo, 1000);

	const logStyles$1 = color => [`background-color:${color};color:#fff;padding:0 0.3em`, '', `color:${color};text-decoration:underline`];

	const imageLog = (method, color, path, url) => {
	  if (config.dev) {
	    log(`%c${method}%c %c${path}`, ...logStyles$1(color), '\n=>', url);
	  }
	};

	let imageDataPrms = null;

	const ensureImage = async () => {
	  if (!imageDataPrms) {
	    imageDataPrms = getImage();
	  }

	  return await imageDataPrms;
	};

	let ignoreImageDataPrms = null;

	const ensureIgnoreImage = async () => {
	  if (!ignoreImageDataPrms) {
	    ignoreImageDataPrms = getIgnoreImage();
	  }

	  return await ignoreImageDataPrms;
	};

	let replaced = false;
	async function resourceHook() {
	  let aoba = await getAoba();
	  if (!aoba || replaced) return;
	  const originLoadElement = aoba.loaders.Resource.prototype._loadElement;

	  const newLoadElement = async function (type) {
	    if (COLLECT_IMAGE_INFO) {
	      dbGetImageInfo();
	      return originLoadElement.call(this, type);
	    }

	    try {
	      const imageMap = await ensureImage();
	      var originalUrl = this.url;

	      if (type === 'image' && imageMap.has(this.name)) {
	        const data = imageMap.get(this.name);

	        if (this.url.endsWith(`v=${data.version}`)) {
	          const imagePath = `image/${data.url}`;
	          this.url = `${config.origin}/data/image/${data.url}?V=${config.hashes[imagePath]}`;
	          this.crossOrigin = true;

	          if (config.dev) {//            버전 안맞는 이미지 확인 용도 외 로그 출력 주석 처리함
	            //            imageLog('IMAGE','#ed9636', this.name, originalUrl)
	          }
	        } else {
	          if (config.dev) {
	            imageLog('IMAGE-MISMATCH', '#ff00ff', this.name, originalUrl);
	          }
	        }
	      } else {
	        if (config.dev) {
	          const ignoreImageMap = await ensureIgnoreImage();

	          if (ignoreImageMap.has(this.name)) {
	            const data = ignoreImageMap.get(this.name);

	            if (!this.url.endsWith(`v=${data.version}`)) {} //				  imageLog('IGNOREIMAGE-MISMATCH','#ff0000', this.name, originalUrl)
	            // else don't print because ignored

	          } else {//			imageLog('IMAGE-MISSING','#ff0000', this.name, originalUrl)
	            }
	        }
	      }
	    } catch (e) {}

	    return originLoadElement.call(this, type);
	  };

	  const Resource = new Proxy(aoba.loaders.Resource, {
	    construct(target, args, newtarget) {
	      var newObj = Reflect.construct(target, args, newtarget);
	      var overrodeObj = new Proxy(newObj, {
	        get(target, name, receiver) {
	          if (name == '_loadElement') return newLoadElement;
	          return Reflect.get(target, name, receiver);
	        }

	      });
	      return overrodeObj;
	    },

	    get(target, name, receiver) {
	      return Reflect.get(target, name, receiver);
	    }

	  });
	  Object.defineProperty(aoba.loaders, 'Resource', {
	    value: Resource
	  });
	  replaced = true;
	}

	const html = `
  <style>
  #sczh-story-tool {
    position: absolute;
    display: none;
    background: #ffffff;
    border-radius: 24px;
    box-sizing: border-box;
    font-family: sczh-yuanti;
    align-items: center;
    justify-content: center;
    color: #ff6499;
    text-shadow: 0 0 6px #fff;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 100px;
    font-size: 32px;
    border: 7px solid transparent;
    border-image: url(${config.origin}/data/image/border.png);
    border-image-slice: 7;
    transform-origin: top right;
  }
  .story-tool-btns {
    width: 100%;
    height: 100%;
    display: none;
  }
  .story-tool-btns .btn-download-sczh,
  .story-tool-btns label {
    flex: 1;
    height: 100%;
    background: #fff;
    display: flex;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #c0aade;
    text-shadow: 0 0 6px #fff;
  }
  .story-tool-btns .btn-download-sczh:hover {
    color: #9f66ec;
  }
  .story-tool-btns label {
    color: rgb(242, 156, 199);
    border-right: 1px solid #c9c9c9;
  }
  #sczh-story-tool .btn-close-sczh {
    height: 25px;
    width: 50px;
    background: rgba(0, 0, 0, 0.58);
    color: #fff;
    letter-spacing: 2px;
    position: absolute;
    right: -25px;
    top: -20px;
    border-radius: 4px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-family: sczh-heiti;
    font-size: 15px;
  }
  #sczh-story-tool:hover {
    width: 200px;
  }
  #sczh-story-tool:hover .story-tool-btns {
    display: flex;
  }
  #sczh-story-tool:hover .btn-close-sczh {
    display: flex;
  }
  #sczh-story-tool:hover > .text-sczh {
    display: none;
  }
  #sczh-story-tool .btn-close-sczh:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  .story-tool-btns label:hover {
    color: #f270b1;
  }
  .story-tool-btns .btn-download-sczh:hover,
  .story-tool-btns label:hover {
    background-color: #f7f7f7;
  }
  </style>
  <div id="sczh-story-tool"><span class="text-sczh">커뮤</span>
    <span id="btn-close-sczh" class="btn-close-sczh">닫기</span>
    <input type="file" style="display:none" id="ipt-preview-sczh" multiple accept=".csv">
    <div class="story-tool-btns">
      <label for="ipt-preview-sczh">실험</label>
      <div id="btn-download-sczh" class="btn-download-sczh">다운</div>
    </div>
  </div>
  `;

	const savePreview = map => {
	  const arr = [...map].slice(-PREVIEW_COUNT);
	  const newArr = arr.map(item => {
	    item[1] = [...item[1]];
	    return item;
	  });
	  sessionStorage.setItem('sczh:preview', JSON.stringify(newArr));
	};

	let showToolFlag = false;

	const showStoryTool = storyCache => {
	  if (showToolFlag) return;
	  showToolFlag = true;
	  document.body.insertAdjacentHTML('beforeend', html);
	  const cont = document.getElementById('sczh-story-tool');
	  const setToolPos = debounce_1(() => {
	    const pos = [0.017, 0.22];
	    const height = window.innerHeight;
	    const width = window.innerWidth;
	    const h_w = height / width;
	    let ch = height;
	    let cw = width;
	    let offsetTop = 0;
	    let offsetRight = 0;

	    if (h_w > 9 / 16) {
	      ch = width * 9 / 16;
	      offsetTop = (height - ch) / 2;
	    } else {
	      cw = height * 16 / 9;
	      offsetRight = (width - cw) / 2;
	    }

	    cont.style.right = Math.floor(offsetRight + pos[0] * cw) + 'px';
	    cont.style.top = Math.floor(offsetTop + pos[1] * ch) + 'px';
	    cont.style.transform = `scale(${(ch / 900).toFixed(3)})`; // cont.style.width = Math.floor(size[0] * cw) + 'px'
	    // cont.style.height = Math.floor(size[1] * cw) + 'px'
	    // cont.style.fontSize = Math.floor(size[1] * cw * 0.35) + 'px'

	    if (storyCache.name) {
	      cont.style.display = 'flex';
	    } else {
	      cont.style.display = 'none';
	    }
	  }, 300);
	  setToolPos();
	  window.addEventListener('resize', setToolPos);
	  const btnDl = document.getElementById('btn-download-sczh');
	  btnDl.addEventListener('click', function () {
	    if (storyCache.name) {
	      const str = papaparse_min.unparse(storyCache.list);
	      tryDownload(str, storyCache.filename);
	    }
	  });
	  const btnClose = document.getElementById('btn-close-sczh');
	  btnClose.addEventListener('click', function () {
	    cont.style.display = 'none';
	    config.story = 'normal';
	    saveConfig();
	  });
	  const iptPreview = document.getElementById('ipt-preview-sczh');
	  iptPreview.addEventListener('change', function () {
	    const files = this.files;
	    if (!files.length) return;
	    files.forEach(file => {
	      const reader = new FileReader();

	      reader.onload = e => {
	        const text = e.target.result;
	        const storyMap = getStoryMap(text);

	        if (storyMap.has('name')) {
	          const _name = storyMap.get('name');

	          storyCache.preview.set(_name, storyMap);
	          savePreview(storyCache.preview);
	          alert(`도입${_name}성공`);
	        }
	      };

	      reader.readAsText(file);
	    });
	  });
	};

	const storyCache = {
	  name: '',
	  filename: '',
	  list: '',
	  preview: new Map()
	};
	let previewLoaded = false;

	const getPreview = () => {
	  if (previewLoaded) return;
	  previewLoaded = true;
	  const str = sessionStorage.getItem('sczh:preview');
	  if (!str) return;

	  try {
	    const arr = JSON.parse(str);
	    const map = new Map(arr);

	    for (let [key, value] of map) {
	      map.set(key, new Map(value));
	    }

	    storyCache.preview = map;
	  } catch (e) {
	    log(e);
	  }
	};

	const getCid = name => {
	  var _res$;

	  const res = name.match(/\/(\d+)$/);
	  return (_res$ = res === null || res === void 0 ? void 0 : res[1]) !== null && _res$ !== void 0 ? _res$ : '';
	};

	const saveData = (data, name) => {
	  const _name = name.replace('.json', '');

	  const _cid = getCid(_name);

	  const filename = storyTitle.get(_cid) || _name.replace(/\//g, '_');

	  const list = [];
	  data.forEach(item => {
	    let text = trim(replaceWrap(item.text));

	    if (text === null || text === void 0 ? void 0 : text.trim()) {
	      list.push({
	        id: item.id || '0000000000000',
	        name: item.speaker || '',
	        text,
	        trans: ''
	      });
	    } else if (item.select) {
	      list.push({
	        id: 'select',
	        name: '',
	        text: trim(replaceWrap(item.select)),
	        trans: ''
	      });
	    }
	  });
	  list.push({
	    id: 'info',
	    name,
	    text: '',
	    trans: ''
	  });
	  list.push({
	    id: '번역자',
	    name: '',
	    text: '',
	    trans: ''
	  });
	  storyCache.name = name;
	  storyCache.filename = `${filename}.csv`;
	  storyCache.list = list;
	};

	const startTrans = (data, storyMap, nameMap) => {
	  if (!Array.isArray(data)) return;
	  const getId = uniqueStoryId();
	  data.forEach(item => {
	    transSpeaker(item, nameMap);

	    if (item.text) {
	      const id = getId(item.id);
	      const text = fixWrap(item.text);

	      if (storyMap.has(text)) {
	        item.text = storyMap.get(text);
	      } else if (id && storyMap.has(`${id}`)) {
	        item.text = storyMap.get(`${id}`);
	      }
	    }

	    if (item.select) {
	      const select = fixWrap(item.select);
	      const sKey = `${select}-select`;

	      if (storyMap.has(sKey)) {
	        item.select = storyMap.get(sKey);
	      }
	    }
	  });
	};

	const startTrans2 = (data, commMap, nameMap) => {
	  if (!Array.isArray(data)) return;
	  data.forEach(item => {
	    transSpeaker(item, nameMap);

	    if (item.text) {
	      const text = fixWrap(item.text);

	      if (commMap.has(text)) {
	        item.text = tagText(commMap.get(text));
	      }
	    }

	    if (item.select) {
	      const select = fixWrap(item.select);

	      if (commMap.has(select)) {
	        item.select = tagText(commMap.get(select));
	      }
	    }
	  });
	};

	const transStory = async () => {
	  const scnModule = await getScMd();
	  if (!scnModule) return;
	  const originLoad = scnModule.load;

	  scnModule.load = async function (...args) {
	    const res = await originLoad.apply(this, args);
	    const type = args[0];
	    if (!type) return res;
	    if (config.dev && type.includes('/assets/json/')) requestLog('STORY', '#ad37c2', args, res);

	    if (type.includes('/produce_events/') || type.includes('/produce_communications/') || type.includes('/produce_communications_promises/') || type.includes('/produce_communication_promise_results/') || type.includes('/support_skills/') || type.includes('/mypage_communications/') || type.includes('/game_event_communications/') || type.includes('/special_communications/') || type.includes('/produce_communication_cheers/') || type.includes('/produce_communication_auditions/') || type.includes('/produce_communication_televisions/')) {
	      try {
	        const name = type.replace(/^\/assets\/json\//, '');
	        let storyMap;

	        if (config.story === 'edit') {
	          saveData(res, name);
	          showStoryTool(storyCache);
	        }

	        getPreview();

	        if (storyCache.preview.has(name)) {
	          storyMap = storyCache.preview.get(name);
	        } else {
	          storyMap = await getStory(name);
	        }

	        if (storyMap) {
	          const nameMap = await getName();
	          startTrans(res, storyMap, nameMap);
	        } else {
	          const commMap = await getCommStory();
	          const nameMap = await getName();
	          startTrans2(res, commMap, nameMap);
	        }
	      } catch (e) {
	        log(e);
	      }
	    }

	    return res;
	  };
	};

	const preload = src => {
	  const link = document.createElement('link');
	  link.setAttribute('rel', 'preload');
	  link.setAttribute('href', src);
	  link.setAttribute('as', 'font');
	  link.setAttribute('type', 'font/woff2');
	  link.setAttribute('crossorigin', 'anonymous');
	  document.head.appendChild(link);
	};

	const getPath = (name, hashes) => `/data/font/${name}.woff2?v=${hashes[`font/${name}.woff2`]}`;

	const addFont = async () => {
	  const tag = document.createElement('style');
	  const {
	    hashes
	  } = await getHash;
	  tag.innerHTML = `
  @font-face {
    font-family: "sczh-heiti";
    src: url("${config.origin}${getPath('heiti', hashes)}");
  }
  @font-face {
    font-family: "sczh-yuanti";
    src: url("${config.origin}${getPath('heiti', hashes)}");
  }
  ::-webkit-scrollbar {
    display: none;
  }
  `;

	  if (config.font1 === 'yuanti') {
	    preload(`${config.origin}${getPath('heiti', hashes)}`);
	  }

	  if (config.font2 === 'heiti') {
	    preload(`${config.origin}${getPath('heiti', hashes)}`);
	  }

	  document.head.appendChild(tag);
	};

	const keepBgm = () => {
	  window.addEventListener('blur', function (e) {
	    if (config.bgm === 'on') e.stopImmediatePropagation();
	  }, false);
	  document.addEventListener('visibilitychange', function (e) {
	    if (config.bgm === 'on') e.stopImmediatePropagation();
	  });
	};

	keepBgm();

	const main = async () => {
	  try {
	    await Promise.all([resourceHook(), addFont(), transPhrase(), watchText(), requestHook(), transStory()]);
	  } catch (e) {
	    log(e);
	  }
	};

	let waitCount = 0;

	const start = async () => {
	  const win = window.unsafeWindow || window;

	  if (win._require || waitCount >= 300) {
	    main();
	  } else {
	    await sleep(100);
	    waitCount++;
	    if (waitCount % 10 === 0) log(`Waiting: ${waitCount / 10}s`);
	    await start();
	  }
	};

	if (document.readyState != 'loading') {
	  start();
	} else {
	  if (window.unsafeWindow) {
	    window.unsafeWindow.addEventListener('DOMContentLoaded', start);
	  } else {
	    window.addEventListener('DOMContentLoaded', start);
	  }
	}

}());
