// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function (obj) {
  var handle = function(item) {
    if (typeof item === 'string') {
      result += '"' + item.toString() + '"';
    }
    else if (typeof item === 'boolean' || typeof item === 'number') {
      result += item.toString();
    }
    else if (item === null) {
      result += 'null';
    }
    else if (item === undefined) {
      result += 'undefined';
    }
    // handle arrays recursively
    else if (Array.isArray(item)) {
      result += '[';
      for (var i = 0; i < item.length; i++) {
        handle(item[i]);
        if (i !== item.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }

    else if (typeof item === 'object') {
      result += '{';
      var count = 0;
      var length = Object.keys(item).length;
      for (var prop in item) {
        count++;
        if (typeof prop !== 'function' && typeof item[prop] !== 'function' && item[prop] !== undefined) {
          result += '"' + prop.toString() + '":';
          handle(item[prop]);
          if (count !== length) {
            result += ',';
          }
        }
      }
      result += '}';
    }
  };

  var result = '';
  handle(obj);
  return result;
};
