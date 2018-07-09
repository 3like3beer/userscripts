// ==UserScript==
// @name        Search Source
// @description Search Source for the current selection on nexus.
// @version     4
// @icon        https://www.google.com/favicon.ico
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @grant       GM.openInTab
// ==/UserScript==

let title = 'Search source';

GM.registerMenuCommand(
    title,
    () => {
      let url = 'https://www.google.com/search?q=' + escape(getSelection().toString());
      GM.openInTab(url, false);
    },
    'G');

document.querySelectorAll('menuitem').forEach(el => {
  if (el.textContent == title) {
    el.setAttribute('icon', 'https://www.google.com/favicon.ico');
  }
});
