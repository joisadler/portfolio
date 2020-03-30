module.exports = {
  "parser": "/usr/local/lib/node_modules/babel-eslint",
  "extends": "airbnb/base",
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jquery": true
  },
  "rules": {
    // "no-restricted-globals": 0,
    "linebreak-style": 0,
    "strict" : 0,
    "vars-on-top" : 0,
    "no-var": 0,
    "no-alert": 0,
    "no-plusplus": 0,
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreComments": true
      }
    ]
  }
}
