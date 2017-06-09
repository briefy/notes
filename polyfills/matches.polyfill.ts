/**
 *  browser support: ie >= 9;
 *  usage: just import to use the side effect
 *
 */

interface Matches {
  (selector: string): boolean;
}

(function polyfill(w: Window) {
  if (!w) {
    return;
  }

  const EleProto = Element.prototype;

  if (typeof EleProto.matches !== 'function') {
    const prefixs = ['', 'ms', 'moz', 'o', 'webkit'];
    let polyfill: Matches = null;

    for (let i = 0; i < prefixs.length; i++) {
      const prefix = prefixs[i];
      const func: Matches = EleProto[`${prefix}matchesSelector`];
      if (typeof func === 'function') {
        polyfill = func;
        break;
      }
    }

    EleProto.matches = polyfill || function (this: Element, selector) {
      const doc = this.ownerDocument;
      const selected: NodeListOf<Element> = [].slice.call(doc.querySelectorAll(selector), 0);
      const len = selected.length;
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