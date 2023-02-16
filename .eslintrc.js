module.exports = {
  "root": true,
  "env": {
    "browser": true,
  },
  "extends": "airbnb-base",
  "rules": {
    "max-len": [
      "warn",
      {
        "code": 80,
        "comments": 100,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    'no-unused-vars': 'warn',
  }
}
