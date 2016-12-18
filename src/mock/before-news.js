/**
 * Created by haibozheng on 2016/12/17.
 */
// http://news-at.zhihu.com/api/4/news/before/20161216
// http://news-at.zhihu.com/api/4/news/before/{yyyy-mm-dd}
var beforeNews = {
    "date": "20161215",
    "stories": [{
        "images": ["http:\/\/pic4.zhimg.com\/462cb9472bfb68b9d3e3d2496c2587bf.jpg"],
        "type": 0,
        "id": 9057103,
        "ga_prefix": "121522",
        "title": "小事 · 有文化也挺可怕"
    }, {
        "images": ["http:\/\/pic1.zhimg.com\/99cff80b2bcfc37bc6d6ebbafb44c7f8.jpg"],
        "type": 0,
        "id": 9061761,
        "ga_prefix": "121521",
        "title": "我跑步的目标不是终点，是为了追上另一种人生"
    }, {
        "images": ["http:\/\/pic1.zhimg.com\/ed29ee8e27750f364d90d42d6d6c013c.jpg"],
        "type": 0,
        "id": 9068762,
        "ga_prefix": "121520",
        "title": "「技术进步人们会失业」，这可能是个错觉"
    }, {
        "images": ["http:\/\/pic2.zhimg.com\/a58a516bff6fd21825655d8fe2617585.jpg"],
        "type": 0,
        "id": 9069008,
        "ga_prefix": "121519",
        "title": "给大脑拍张照，能看得出一个人的能力吗？"
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/9a8b2c1f90c8a53d753a3bb65f0a7197.jpg"],
        "type": 0,
        "id": 9068334,
        "ga_prefix": "121518",
        "title": "诺奖得主托马斯 · 谢林辞世，来了解下他卓越的学术贡献"
    }, {
        "images": ["http:\/\/pic2.zhimg.com\/2ebc046cbc63a4d0fad670c06d568829.jpg"],
        "type": 0,
        "id": 9068646,
        "ga_prefix": "121517",
        "title": "知乎好问题 · 新婚可能会遇到哪些恋爱时不会遇到的问题？"
    }, {
        "images": ["http:\/\/pic2.zhimg.com\/5fa27fadc664cd004d287c9a10a3e401.jpg"],
        "type": 0,
        "id": 9068318,
        "ga_prefix": "121516",
        "title": "既然债券的价格就是现值，债券交易为什么能赚钱？"
    }, {
        "title": "谷歌想要做的「老司机」，原来是汽车世界里的安卓啊",
        "ga_prefix": "121515",
        "images": ["http:\/\/pic4.zhimg.com\/ad9c9eaad967db1a1744f36e83b00eb3.jpg"],
        "multipic": true,
        "type": 0,
        "id": 9068247
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/6c1d7339916365b195b25b8e26a37d77.jpg"],
        "type": 0,
        "id": 9068170,
        "ga_prefix": "121514",
        "title": "所谓「母乳过稀、质量不好」的问题，根本不存在"
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/ab67d1d402db1b04f28e5847ee8d8c27.jpg"],
        "type": 0,
        "id": 9066682,
        "ga_prefix": "121513",
        "title": "担心果蔬有农药残留，有必要买「超声波清洗机」吗？"
    }, {
        "images": ["http:\/\/pic1.zhimg.com\/ab3d2c2ccf4e027a126d3dc114f30694.jpg"],
        "type": 0,
        "id": 9064955,
        "ga_prefix": "121512",
        "title": "大误 · ki 米喏哪麦伊哇——"
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/f2675ddd64a0fc8214e73896ffa60363.jpg"],
        "type": 0,
        "id": 9065438,
        "ga_prefix": "121511",
        "title": "国漫逐渐发展，漫画网站的知识产权界定也不容易"
    }, {
        "images": ["http:\/\/pic2.zhimg.com\/c30e19cbb3db6a1092fdc75a20ef064d.jpg"],
        "type": 0,
        "id": 9066705,
        "ga_prefix": "121510",
        "title": "手机没联网，支付宝也支付成功了，这……靠谱吗？"
    }, {
        "images": ["http:\/\/pic2.zhimg.com\/a24a36f561824dbbb49d8aac6845f3fd.jpg"],
        "type": 0,
        "id": 9066687,
        "ga_prefix": "121509",
        "title": "现实就在眼前，为什么经济学家非得「建个模型」？"
    }, {
        "images": ["http:\/\/pic3.zhimg.com\/bddc2f0abed2654ef21d491d833a0f96.jpg"],
        "type": 0,
        "id": 9063425,
        "ga_prefix": "121508",
        "title": "冬天去日本，这些都是不可错过的特选「限定美食」"
    }, {
        "images": ["http:\/\/pic3.zhimg.com\/0c231a66280279647c89f28ba7801fce.jpg"],
        "type": 0,
        "id": 9065973,
        "ga_prefix": "121507",
        "title": "害怕感染 HIV，口交会比较安全吗？"
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/9a92f631a47ff78754d0367cd6d8d323.jpg"],
        "type": 0,
        "id": 9066732,
        "ga_prefix": "121507",
        "title": "发明了全美国最火的一道中国菜，他的人生简直就是近代史"
    }, {
        "images": ["http:\/\/pic1.zhimg.com\/1112e59ec512b9779eef44f29f1c5118.jpg"],
        "type": 0,
        "id": 9065677,
        "ga_prefix": "121507",
        "title": "银联推出二维码支付，一纸文件引发蝴蝶效应"
    }, {
        "images": ["http:\/\/pic3.zhimg.com\/b74d64d96b15834a15b21d088880e186.jpg"],
        "type": 0,
        "id": 9066423,
        "ga_prefix": "121507",
        "title": "读读日报 24 小时热门 TOP 5 · 朴槿惠被弹劾因一条狗"
    }, {
        "images": ["http:\/\/pic4.zhimg.com\/aab6bb210bca7811be94d6cd01f84def.jpg"],
        "type": 0,
        "id": 9066765,
        "ga_prefix": "121506",
        "title": "瞎扯 · 如何正确地吐槽"
    }]
};
module.exports.beforeNews = beforeNews;