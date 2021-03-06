/**
 * Created by wushuyi on 2015/7/28.
 */
var rootPath = location.origin + '/test';
var lodashPath = rootPath + '/libs/lodash.js/3.10.0/lodash.js';
System.config({
    defaultJSExtensions: true,
    baseURL: './',
    transpiler: 'babel',
    paths: {
        'twitter-bootstrap:*': rootPath + '/libs/twitter-bootstrap/3.3.5*',
    },
    map: {
        backbone: rootPath + '/libs/backbone.js/1.2.1/backbone.js',
        'backbone.localStorage': rootPath + '/libs/backbone-localstorage.js/1.1.16/backbone.localStorage.js',
        lodash: lodashPath,
        underscore: lodashPath,
        jquery: rootPath + '/libs/jquery/2.1.4/jquery.js',
        txt: rootPath + '/libs/systemjs-plugin/txt.js',
        css: rootPath + '/libs/systemjs-plugin/css.js',
        babel: rootPath + '/libs/babel-core/5.6.15/browser.js',
        'babel-polyfill': rootPath + '/libs/babel-core/5.6.15/browser-polyfill.js',
    },
    meta: {
        'babel-polyfill': {
            format: 'global',
        }
    },
    depCache: {
        babel: ['babel-polyfill']
    }
});