// 使用 Mock
let Mock = require('mockjs');
const url = {
    getList: 'http://gw/getList/',
    getDetail: 'http://gw/getDetail/',
};
module.exports=[
    Mock.mock(url.getList,{
        'data|20':[
            {
                'id|1':1,
                'name|1':['测试1111','开发11111111','正式11111'],
            }
        ]
    }),
    Mock.mock(url.getDetail,{
        url:['https://res.hersjade.cn/1583908058577p4glgqwwcx.jpg',
        'https://res.hersjade.cn/1583908064437ctdfe4yldh.jpg',
        'https://res.hersjade.cn/158390817099618mb8wow8vo.jpg'],
        text:'文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文' +
            '、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一' +
            '字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在...'
    })
]

