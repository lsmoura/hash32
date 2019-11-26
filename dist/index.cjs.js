'use strict';

function hashString(data) {
  let hash = 0, i, chr;
  if (data.length === 0) return hash;
  for (i = 0; i < data.length; i++) {
    chr = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash = 0xffff & hash;
  }
  return hash;
}

module.exports = hashString;
