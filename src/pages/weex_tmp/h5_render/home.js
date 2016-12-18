/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/32c504b8c3aba8177e68595fba6a5afe', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/32c504b8c3aba8177e68595fba6a5afe',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refreshDisplay}
	          },
	          "events": {
	            "refresh": "loadFirstData"
	          },
	          "children": [
	            {
	              "type": "text",
	              "shown": function () {return (this.refreshDisplay==='hide')},
	              "attr": {
	                "value": "下拉刷新"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.storyList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "wxc-item-date",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='date'}
	            },
	            {
	              "type": "wxc-top-story-banner",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='banner'}
	            },
	            {
	              "type": "wxc-item-story",
	              "attr": {
	                "scope": function () {return this.item.type},
	                "item": function () {return this.item.data}
	              },
	              "shown": function () {return this.item.type==='story'}
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "loading-view"
	          ],
	          "attr": {
	            "display": function () {return this.loadingDisplay}
	          },
	          "events": {
	            "loading": "onLoadingMore"
	          },
	          "children": [
	            {
	              "type": "text",
	              "shown": function () {return (this.loadingDisplay==='hide')},
	              "attr": {
	                "value": "↑ Loadmore"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "width": 750,
	    "height": 120,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "height": 60,
	    "width": 60,
	    "padding": 10,
	    "color": "#889967"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": 100,
	    "alignItems": "center"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(4);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(7);
	__webpack_require__(11);
	__webpack_require__(15);

	var mockLatestNews = __webpack_require__(19);
	var modal = __weex_require__('@weex-module/modal');
	var stream = __weex_require__('@weex-module/stream');
	var env;
	var platform;

	module.exports = {

	    computed: {},
	    data: function () {return {
	        loadMoreOffset: 2,
	        refreshDisplay: 'hide',
	        loadingDisplay: 'hide',
	        loadMoreDateOffset: 1,
	        storyList: []
	    }},
	    methods: {
	        loadFirstData: function loadFirstData() {
	            this.loadMoreDateOffset = 1;
	            this.refreshDisplay = 'show';
	            var that = this;
	            stream.fetch({
	                method: 'GET',
	                url: "http://news-at.zhihu.com/api/4/news/latest",
	                type: 'json'
	            }, function (response) {
	                if (response && response.data) {
	                    that.processServerData(response.data);
	                } else {
	                    modal.toast({
	                        message: '网络请求失败,使用mock数据',
	                        duration: 1
	                    });
	                    var latestNews = mockLatestNews.latestNews;
	                    that.processServerData(latestNews);
	                }
	            }, function (response) {
	                console.log("###response2 = " + (0, _stringify2.default)(response));
	            });
	        },
	        onLoadingMore: function onLoadingMore() {
	            this.loadingDisplay = 'show';
	            var paramDate = this.getParamDate(false);
	            console.log("###paramDate = " + paramDate);
	            var that = this;
	            stream.fetch({
	                method: 'GET',
	                url: "http://news-at.zhihu.com/api/4/news/before/" + paramDate,
	                type: 'json'
	            }, function (response) {
	                if (response && response.data) {
	                    that.processLoadMore(response.data);
	                    that.loadMoreDateOffset = that.loadMoreDateOffset + 1;
	                    that.loadingDisplay = 'hide';
	                } else {
	                    modal.toast({
	                        message: '网络请求失败,使用mock数据',
	                        duration: 1
	                    });
	                }
	            }, function (response) {
	                console.log("###response2 = " + (0, _stringify2.default)(response));
	            });
	        },
	        processServerData: function processServerData(latestNews) {
	            var tempStoryList = [];
	            if (latestNews && latestNews.stories && latestNews.top_stories) {
	                var storyItem = { type: '', data: {} };
	                storyItem.type = 'banner';
	                storyItem.data = latestNews.top_stories;
	                tempStoryList.push(storyItem);
	                var currentDate = this.getCurrentDate();
	                var dateItem = { type: 'date', data: { date: currentDate } };
	                tempStoryList.push(dateItem);
	                for (var i = 0; i < latestNews.stories.length; i++) {
	                    var item = { type: '', data: {} };
	                    item.type = 'story';
	                    item.data = latestNews.stories[i];
	                    tempStoryList.push(item);
	                }
	                this.storyList = tempStoryList;
	                this.refreshDisplay = 'hide';
	            }
	        },
	        processLoadMore: function processLoadMore(beforeNews) {
	            var tempStoryList = [];
	            tempStoryList = tempStoryList.concat(this.storyList);
	            if (beforeNews && beforeNews.stories) {
	                var currentDate = this.getParamDate(true);
	                var dateItem = { type: 'date', data: { date: currentDate } };
	                tempStoryList.push(dateItem);
	                for (var i = 0; i < beforeNews.stories.length; i++) {
	                    var item = { type: '', data: {} };
	                    item.type = 'story';
	                    item.data = beforeNews.stories[i];
	                    tempStoryList.push(item);
	                }
	                this.storyList = tempStoryList;
	            }
	        },
	        getCurrentDate: function getCurrentDate() {
	            var nowDate = new Date();
	            return nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
	        },
	        getParamDate: function getParamDate(isShow) {
	            var nowDate = new Date();
	            var paramTime = nowDate.getTime() - 1000 * 60 * 60 * 24 * this.loadMoreDateOffset;
	            var paramDate = new Date(paramTime);
	            if (isShow) {
	                return paramDate.getFullYear() + '-' + (paramDate.getMonth() + 1) + '-' + paramDate.getDate();
	            }
	            return paramDate.getFullYear() + '' + (paramDate.getMonth() + 1) + '' + paramDate.getDate();
	        }
	    },
	    init: function init() {
	        var cfg = this.$getConfig();
	        env = cfg.env;
	        platform = env.platform.toLowerCase();
	    },
	    created: function created() {
	        this.loadFirstData();
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(6)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(8)
	var __weex_style__ = __webpack_require__(9)
	var __weex_script__ = __webpack_require__(10)

	__weex_define__('@weex-component/wxc-top-story-banner', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "append": "tree",
	      "attr": {
	        "interval": "2000",
	        "autoPlay": "true"
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.stories},
	            "value": "story"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "image"
	              ],
	              "attr": {
	                "src": function () {return this.story.image},
	                "resize": "cover"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text"
	              ],
	              "attr": {
	                "value": function () {return this.story.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 750,
	    "height": 400
	  },
	  "indicator": {
	    "position": "absolute",
	    "width": 750,
	    "height": 30,
	    "bottom": 0,
	    "left": 1,
	    "itemColor": "#ffffff",
	    "itemSelectedColor": "#a5a5a5"
	  },
	  "image": {
	    "width": 750,
	    "height": 400
	  },
	  "text": {
	    "position": "absolute",
	    "width": 600,
	    "top": 300,
	    "left": 20,
	    "fontSize": 30,
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {

	    computed: {
	        stories: {
	            get: function get() {
	                if (!this.item) {
	                    return [];
	                }
	                return this.item;
	            }
	        }
	    },
	    data: function () {return {
	        item: [{
	            "image": "http:\/\/pic4.zhimg.com\/053078356044ae121ee133edeae751a7.jpg",
	            "type": 0,
	            "id": 9073905,
	            "ga_prefix": "121717",
	            "title": "知乎好问题 · 哪些电影拥有最美丽的风景？"
	        }, {
	            "image": "http:\/\/pic3.zhimg.com\/4ede28618c583990f72c02f84bb8173a.jpg",
	            "type": 0,
	            "id": 9064596,
	            "ga_prefix": "121718",
	            "title": "什么技术可以体验交换身体的感觉？"
	        }, {
	            "image": "http:\/\/pic2.zhimg.com\/0189a453c2f19c8351b8c99810ba5ddd.jpg",
	            "type": 0,
	            "id": 9058548,
	            "ga_prefix": "121714",
	            "title": "职场新人，别忙着规划人生，先来认识你自己"
	        }, {
	            "image": "http:\/\/pic1.zhimg.com\/db5e3bd9e41a198199ec8669e7ff3598.jpg",
	            "type": 0,
	            "id": 9061099,
	            "ga_prefix": "121707",
	            "title": "口臭是会呼吸的痛，除了不出气还有别的办法吗？"
	        }, {
	            "image": "http:\/\/pic4.zhimg.com\/7dec966aa0be9aee830f2b6dd6de5b1b.jpg",
	            "type": 0,
	            "id": 9072337,
	            "ga_prefix": "121707",
	            "title": "读读日报 24 小时热门 TOP 5 · 「饭替」和「挨耳光替」"
	        }]
	    }},
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(12)
	var __weex_style__ = __webpack_require__(13)
	var __weex_script__ = __webpack_require__(14)

	__weex_define__('@weex-component/wxc-item-story', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "width": 750,
	    "height": 240,
	    "backgroundColor": "#e0e0e0",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "image"
	          ],
	          "attr": {
	            "resize": "cover",
	            "src": function () {return this.image}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "width": 720,
	    "height": 220,
	    "marginLeft": 15,
	    "marginRight": 15,
	    "borderRadius": 5,
	    "backgroundColor": "#ffffff"
	  },
	  "image": {
	    "marginTop": 30,
	    "width": 180,
	    "height": 160,
	    "marginRight": 30
	  },
	  "text": {
	    "flex": 1,
	    "fontSize": 30,
	    "marginTop": 30,
	    "marginLeft": 30,
	    "marginRight": 10,
	    "color": "#333333"
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {

	    computed: {
	        title: {
	            get: function get() {
	                if (this.item && this.item.title) {
	                    return this.item.title;
	                }
	                return '';
	            }
	        },
	        image: {
	            get: function get() {
	                if (this.item && this.item.images && this.item.images.length > 0) {
	                    return this.item.images[0];
	                }
	                return '';
	            }
	        }
	    },
	    data: function () {return {
	        item: {
	            "images": ["http:\/\/pic3.zhimg.com\/f632efba140aed5cc8b1a7ebd65db716.jpg"],
	            "type": 0,
	            "id": 9064596,
	            "ga_prefix": "121718",
	            "title": "什么技术可以体验交换身体的感觉？"
	        }
	    }},
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(16)
	var __weex_style__ = __webpack_require__(17)
	var __weex_script__ = __webpack_require__(18)

	__weex_define__('@weex-component/wxc-item-date', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "width": 750,
	    "height": 40,
	    "backgroundColor": "#e0e0e0",
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 25,
	    "marginLeft": 30,
	    "marginRight": 10,
	    "color": "#a5a5a5"
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {

	    computed: {
	        title: {
	            get: function get() {
	                if (this.item && this.item.date) {
	                    return this.item.date;
	                }
	                return '';
	            }
	        }
	    },
	    data: function () {return {
	        item: {
	            date: '2016-12-10'
	        }
	    }},
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Created by haibozheng on 2016/12/17.
	 */
	// URL http://news-at.zhihu.com/api/4/news/latest
	var latestNews = {
	    "date": "20161217",
	    "stories": [{
	        "images": ["http:\/\/pic3.zhimg.com\/f632efba140aed5cc8b1a7ebd65db716.jpg"],
	        "type": 0,
	        "id": 9064596,
	        "ga_prefix": "121718",
	        "title": "什么技术可以体验交换身体的感觉？"
	    }, {
	        "images": ["http:\/\/pic2.zhimg.com\/c5b9c33e5913d021e5faa1c1d32e9681.jpg"],
	        "type": 0,
	        "id": 9073905,
	        "ga_prefix": "121717",
	        "title": "知乎好问题 · 哪些电影拥有最美丽的风景？"
	    }, {
	        "images": ["http:\/\/pic4.zhimg.com\/02e3189a111181fad077215b370763ff.jpg"],
	        "type": 0,
	        "id": 9065364,
	        "ga_prefix": "121716",
	        "title": "官司不能随便打，有时候败诉了还得帮对方付律师费"
	    }, {
	        "images": ["http:\/\/pic4.zhimg.com\/7dca948c738970a1633c2644adfe243b.jpg"],
	        "type": 0,
	        "id": 9055881,
	        "ga_prefix": "121715",
	        "title": "在看脸这事儿上，男女有别"
	    }, {
	        "images": ["http:\/\/pic2.zhimg.com\/f7fc7c6c35d2e4dd66bb16135a3f3c19.jpg"],
	        "type": 0,
	        "id": 9058548,
	        "ga_prefix": "121714",
	        "title": "职场新人，别忙着规划人生，先来认识你自己"
	    }, {
	        "images": ["http:\/\/pic3.zhimg.com\/d3c9f98bd6ff533612f28d18f6f8135e.jpg"],
	        "type": 0,
	        "id": 9058810,
	        "ga_prefix": "121713",
	        "title": "《权力的游戏》里荡气回肠的配乐，都是他写的"
	    }, {
	        "images": ["http:\/\/pic3.zhimg.com\/be0998ad8f4d5c0896159487ef38d1fa.jpg"],
	        "type": 0,
	        "id": 9058647,
	        "ga_prefix": "121712",
	        "title": "大误 · 你知道煎熬的滋味吗？"
	    }, {
	        "images": ["http:\/\/pic3.zhimg.com\/3838691216d2541bd2ec57e1fbb50bb6.jpg"],
	        "type": 0,
	        "id": 9067847,
	        "ga_prefix": "121711",
	        "title": "20 分钟，搞定四款美味的火锅汤底"
	    }, {
	        "images": ["http:\/\/pic3.zhimg.com\/88433488a5159a71fbd5a4bc6f6990de.jpg"],
	        "type": 0,
	        "id": 9071790,
	        "ga_prefix": "121710",
	        "title": "有些很难察觉的校园暴力，也在悄悄地伤害着孩子"
	    }, {
	        "images": ["http:\/\/pic1.zhimg.com\/6a36ce154cf5c134d0c1e4db920c1e7c.jpg"],
	        "type": 0,
	        "id": 9061189,
	        "ga_prefix": "121709",
	        "title": "十个创业九个死，剩下的那个还在被我们吐槽着"
	    }, {
	        "images": ["http:\/\/pic4.zhimg.com\/d6839a3f0c82ece706120b341005b797.jpg"],
	        "type": 0,
	        "id": 9057974,
	        "ga_prefix": "121708",
	        "title": "新能源车发展得如火如荼，电池回收却还没做好"
	    }, {
	        "images": ["http:\/\/pic4.zhimg.com\/9d2a5f5dc723704c9b21a7a2b31825cf.jpg"],
	        "type": 0,
	        "id": 9061099,
	        "ga_prefix": "121707",
	        "title": "口臭是会呼吸的痛，除了不出气还有别的办法吗？"
	    }, {
	        "images": ["http:\/\/pic2.zhimg.com\/b8aa25c52f5d953fbe0811208b4dc52d.jpg"],
	        "type": 0,
	        "id": 9057916,
	        "ga_prefix": "121707",
	        "title": "做了一样的工作，女性不应该遭受工资歧视"
	    }, {
	        "images": ["http:\/\/pic2.zhimg.com\/1311737edaaf7834ba0a5fdacaaecba1.jpg"],
	        "type": 0,
	        "id": 9071572,
	        "ga_prefix": "121707",
	        "title": "为什么打开白炽灯的一瞬间，灯丝最容易熔断？"
	    }, {
	        "images": ["http:\/\/pic4.zhimg.com\/207aacad8fbec108c6b455d2fdebf1f3.jpg"],
	        "type": 0,
	        "id": 9072337,
	        "ga_prefix": "121707",
	        "title": "读读日报 24 小时热门 TOP 5 · 「饭替」和「挨耳光替」"
	    }, {
	        "images": ["http:\/\/pic1.zhimg.com\/36c6043ef82dc42e5b1777347f02e314.jpg"],
	        "type": 0,
	        "id": 9072726,
	        "ga_prefix": "121706",
	        "title": "瞎扯 · 如何正确地吐槽"
	    }],
	    "top_stories": [{
	        "image": "http:\/\/pic4.zhimg.com\/053078356044ae121ee133edeae751a7.jpg",
	        "type": 0,
	        "id": 9073905,
	        "ga_prefix": "121717",
	        "title": "知乎好问题 · 哪些电影拥有最美丽的风景？"
	    }, {
	        "image": "http:\/\/pic3.zhimg.com\/4ede28618c583990f72c02f84bb8173a.jpg",
	        "type": 0,
	        "id": 9064596,
	        "ga_prefix": "121718",
	        "title": "什么技术可以体验交换身体的感觉？"
	    }, {
	        "image": "http:\/\/pic2.zhimg.com\/0189a453c2f19c8351b8c99810ba5ddd.jpg",
	        "type": 0,
	        "id": 9058548,
	        "ga_prefix": "121714",
	        "title": "职场新人，别忙着规划人生，先来认识你自己"
	    }, {
	        "image": "http:\/\/pic1.zhimg.com\/db5e3bd9e41a198199ec8669e7ff3598.jpg",
	        "type": 0,
	        "id": 9061099,
	        "ga_prefix": "121707",
	        "title": "口臭是会呼吸的痛，除了不出气还有别的办法吗？"
	    }, {
	        "image": "http:\/\/pic4.zhimg.com\/7dec966aa0be9aee830f2b6dd6de5b1b.jpg",
	        "type": 0,
	        "id": 9072337,
	        "ga_prefix": "121707",
	        "title": "读读日报 24 小时热门 TOP 5 · 「饭替」和「挨耳光替」"
	    }]
	};
	module.exports.latestNews = latestNews;

/***/ }
/******/ ]);