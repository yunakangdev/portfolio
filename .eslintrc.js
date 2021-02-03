module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-console": 0,
      "indent": ["warning", 2],
      "no-unused-vars": 1,
      "no-use-before-define": 1,
      "no-redeclare": 1,
      "no-console": 0,
    }
};

