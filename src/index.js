/* @flow strict */

function hashString(data: string): number {
  let hash = 0, i, chr;
  if (data.length === 0) return hash;
  for (i = 0; i < data.length; i++) {
    chr = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash = 0xffff & hash; // Convert to 32bit integer
  }

  return hash;
}

export default hashString;
