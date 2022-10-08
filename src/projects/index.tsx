import lumixGh5 from './lumix/lumix-gh5.png';
import lumixA100 from './lumix/lumix-a100.png';
import lumixGM from './lumix/lumix-gm.jpeg';

import onduApp from './ondu/ondu_app.jpg';

import unkai from './unkai/unkai.jpg';
import unkaiSunset from './unkai/unkai_sunset.jpg';
import unkaiTablet from './unkai/unkai_tablet.jpg';

import hems from './hems/hems.png';

import homexLayer from './homex/homex_layer.png';
import homexXp from './homex/homex_xp.jpeg';

import dermsGi from './derms/derms_gi.jpg';

export type Project = {
    title: string,
    subtitle: string,
    description: string,
    url: string,
    articles: {
        url: string,
        title: string,
    }[],
    images: string[],
};

export const Projects: Project[] = [
    {
        title: 'Software for sustainability',
        subtitle: 'Experience management software for natural energy circulation',
        description: 'Home experience management software.',
        url: 'https://na.panasonic.com/explore/smart-mobility',
        articles: [
            {
                title: 'Panasonic GREEN IMPACT envisions environmental sustainability, net-zero climate impact',
                url: 'https://www.zawya.com/en/press-release/companies-news/panasonic-green-impact-envisions-environmental-sustainability-net-zero-climate-impact-kwhp5md7',
            }
        ],
        images: [
            dermsGi,
        ]
    }, {
        title: 'HomeX',
        subtitle: 'Home experience platform',
        description: 'Home experience management software.',
        url: 'https://holdings.panasonic/jp/business/homex.html',
        articles: [
            {
                url: 'https://japan.cnet.com/article/35128109/',
                title: 'パナソニック、ついに姿を現した「HomeX」--馬場本部長が語る「毎日が昨日よりも良くなるくらし」',
            }, {
                url: 'https://av.watch.impress.co.jp/docs/news/1072558.html',
                title: "パナソニックが取り組む「ヨコパナ」の強化とは？ 未来住空間創出プロジェクト「HomeX」開始",
            }
        ],
        images: [
            homexLayer,
            homexXp,
        ]
    }, {
        title: 'Lumix',
        subtitle: 'Digital still camera',
        description: 'World first 4K movie suported camera.',
        url: 'https://na.panasonic.com/us/lumix',
        articles: [
            {
                url: 'https://news.panasonic.com/global/press/en160920-5',
                title: "Panasonic Develops the World's First 4K 60p/50p Video Recording Digital Single Lens Mirrorless Camera LUMIX GH5 Featuring 6K PHOTO",
            }, {
                url: 'https://www.engadget.com/2013-01-08-panasonics-wearable-camera-heads-on.html',
                title: "Panasonic's wearable camera HX-A100 heads-on",
            }
        ],
        images: [
            lumixGh5,
            lumixA100,
            lumixGM,
        ]
    }, {
        title: "Home IoT",
        subtitle: 'HEMS and home IoT system',
        description: 'Contributed to design the end to end system and mobile app for energy management service in the residential space.',
        url: 'https://www2.panasonic.biz/jp/densetsu/aiseg/serviceapp/',
        articles: [
            {
                url: 'https://iotnews.jp/archives/82545',
                title: 'パナソニック、「スマートHEMS」につながる機器を14社27機種に拡充',
            }, {
                url: 'https://prtimes.jp/main/html/rd/p/000002042.000003442.html',
                title: '「スマートHEMSサービスアプリ」ダウンロード開始！～家庭の電力情報を活用し家事の支援や家族の安全をサポート',
            }
        ],
        images: [
            hems,
        ]
   }, {
        title: "OND'U",
        subtitle: 'Health management software for compamnies, communities.',
        description: '',
        url: 'https://tech.panasonic.com/jp/ondu/',
        articles: [
        ],
        images: [
            onduApp,
        ]
    }, {
        title: "Unkai",
        subtitle: '',
        description: 'Indoor green system for healing by nature',
        url: 'https://refluster.github.io/schememono/unkai.html',
        articles: [
            {
                url: 'https://kyoto.theterminal.jp/events/schememonox%EF%BD%8B%EF%BD%99%EF%BD%8F%EF%BD%94%EF%BD%8F/',
                title: 'Schememono×Kyoto｜展示・イベント｜The Terminal KYOTO / ザ ターミナル キョウト',
            }
        ],
        images: [
            unkai,
            unkaiSunset,
            unkaiTablet,
        ]
    },
];
