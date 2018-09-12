function isObject(value) {
  return value !== null && typeof value === 'object';
}
function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number';
}
function isDate(value) {
  return toString.call(value) === '[object Date]';
}
function isFunction(value) {
  return typeof value === 'function';
}
function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}
function isBlob(obj) {
  return toString.call(obj) === '[object Blob]';
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isElement(node) {
  return !!(node && (node.nodeName || (node.prop && node.attr && node.find))); // We have an on and find method part of jQuery API.
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function extend(dst) {
  return baseExtend(dst, [].slice.call(arguments, 1), true);
}

function baseExtend(dst, objs, deep) {
  for (var i = 0, ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    var keys = Object.keys(obj);
    for (var j = 0, jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];
      if (hasOwn(obj, key)) {
        if (deep && isObject(src)) {
          if (isDate(src)) {
            dst[key] = new Date(src.valueOf());
          } else if (isRegExp(src)) {
            dst[key] = new RegExp(src);
          } else if (src.nodeName) {
            dst[key] = src.cloneNode(true);
          } else if (isElement(src)) {
            dst[key] = src.clone();
          } else {
            if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
              baseExtend(dst[key], [src], true);
          }
        } else {
          dst[key] = src;
        }
      }
    }
  }
  return dst;
}

export default {
  extend: extend,
  isObject: isObject,
  isNumber: isNumber,
  isString: isString
};
