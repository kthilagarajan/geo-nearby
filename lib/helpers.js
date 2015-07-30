'use strict';

var rangeIndex = [
    0.6, //52
    1, //50
    2.19, //48
    4.57, //46
    9.34, //44
    14.4, //42
    33.18, //40
    62.1, //38
    128.55, //36
    252.9, //34
    510.02, //32
    1015.8, //30
    2236.5, //28
    3866.9, //26
    8749.7, //24
    15664, //22
    33163.5, //20
    72226.3, //18
    150350, //16
    306600, //14
    474640, //12
    1099600, //10
    2349600, //8
    4849600, //6
    10018863 //4
];

module.exports.rangeIndex = rangeIndex;

module.exports.isArray = function isArray(array) {
  return Array.isArray(array);
};

module.exports.get = function get(object, path) {
  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      object = object[path[i]];
    }

    return object;
  } else {
    return object[path];
  }
};

module.exports.flatten = function flatten(array, result) {
  result || (result = []);

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
};

module.exports.uniq = function uniq(array) {
  return array.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};

module.exports.rangeBetween = function rangeBetween(min, max) {
  var result = [];
  var length = rangeIndex.length;
  var last;

  for (var i = 0; i < length; i++) {
    var value = rangeIndex[i];
    if (value >= min && value < max) {
      result.push(value);
      last = i;
    }
  }

  (last + 1 == length) || result.push(rangeIndex[last + 1]);

  return result;
};