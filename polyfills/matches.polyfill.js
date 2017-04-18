/**
 *  browser support: ie >= 9;
 *  usage: just import to use the side effect
 *
 */

(function polyfill(w) {
  if (!w) {
    return;
  }

  const EleProto = Element.prototype;

  if (typeof EleProto.matches !== 'function') {
    const prefixs = ['', 'ms', 'moz', 'o', 'webkit'];
    let polyfill = null;

    for (let i = 0; i < prefixs.length; i++) {
      let prefix = prefixs[i];
      let func = EleProto[`${prefix}matchesSelector`];
      if (typeof func === 'function') {
        polyfill = func;
        break;
      }
    }

    EleProto.matches = polyfill || function (selector) {
      let selected = (this.document || this.ownerDocument).querySelectorAll(selector);
      let len = selected.length;
      let ifMatch = false;

      for (let i = 0; i < len; i++) {
        if (selected[i] === this) {
          ifMatch = true;
          break;
        }
      }

      return ifMatch;
    }
  }

})(window)