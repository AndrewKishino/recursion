// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }
  if (typeof(obj) === 'function' || typeof(obj) === 'undefined') {
    return null;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof(obj) === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(function(o) { return stringifyJSON(o) }).join(",") + ']';
    } else {
      var result = [];
      Object.keys(obj).forEach(function(key) {
        var val = stringifyJSON(obj[key]);
        if (val !== null) {
          result.push('"' + key + '":' + val);
        }
      });
    return "{" + result.join(",") + "}";
    }
  }
}