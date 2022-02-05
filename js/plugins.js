// Avoid `console` errors in browsers that lack a console.
;(function plugins() {
  let method
  const noop = function noop() {}
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn',
  ]
  let { length } = methods
  // eslint-disable-next-line no-multi-assign
  const console = (window.console = window.console || {})

  while (length) {
    length -= 1
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()

// Place any jQuery/helper plugins in here.
