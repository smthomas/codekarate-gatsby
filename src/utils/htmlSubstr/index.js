// Look for a heading tag, if there is one, figure out it's position
// Strip the tags and see if there is a way to determine the position of where that header was
// if it less than the substring size, then we stop at the first header
// if it's more than the substring size, we cut at the substring size (keeping all closing tags)
//

const htmlSubstr = (str, start, count) => {
  //return str.substr(0, 600);
  var div = document.createElement('div');
  div.innerHTML = str;

  walk(div, track);

  function track(el) {
    if (count > 0) {
      var len = el.data.length;
      if (start <= len) {
        el.data = el.substringData(start, len);
        start = 0;
      } else {
        start -= len;
        el.data = '';
      }
      len = el.data.length;
      count -= len;
      if (count <= 0) {
        el.data = el.substringData(0, el.data.length + count);
      }

    } else {
      el.data = '';
    }
  }

  function walk(el, fn) {
    var node = el.firstChild;
    do {
      if (node.nodeType === 3) {
        fn(node);
      } else if (node.nodeType === 1 && node.childNodes && node.childNodes[0]) {
        walk(node, fn);
      }
    } while (node = node.nextSibling);
  }

  return div.innerHTML;
};

export default htmlSubstr;
