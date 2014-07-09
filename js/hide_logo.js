/**
 * Programmatically inject the stylesheet that hides the logo into the DOM
 * tree.
 *
 * TODO: there is a bug that prevents the CSS files declared in the manifest's
 * content_scripts to be loaded when matching part of the query string of the
 * URL: https://code.google.com/p/chromium/issues/detail?id=68561
 * After it is fixed, the CSS doesn't need to be programmatically injected.
 */
(function() {
  var link = document.createElement("link");
  link.href = chrome.extension.getURL("css/hide_logo.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.documentElement.appendChild(link);
})();
