// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

'use strict';

const TEST_CONFIG = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: ['transform-class-properties'],
};

const CONFIG = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: ['transform-class-properties'],
  ignore: ['./src/__tests__'],
};

module.exports = api => {
  const isTest = api.env('test');
  return isTest ? TEST_CONFIG : CONFIG;
};
