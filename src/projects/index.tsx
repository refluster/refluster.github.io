import lumixGh5 from './lumix/lumix-gh5.png';
//import lumixA100 from './lumix/lumix-a100.png';
//import lumixGM from './lumix/lumix-gm.jpeg';

import onduApp from './ondu/ondu_app.jpg';
//import onduEnterprise from './ondu/ondu_enterprise.png';

import medicalArt from './medicalart/medicalart.jpg';

import unkai from './unkai/unkai.jpg';
//import unkaiSunset from './unkai/unkai_sunset.jpg';
//import unkaiTablet from './unkai/unkai_tablet.jpg';

import hems from './hems/hems.png';

import homexLayer from './homex/homex_layer.png';
//import homexXp from './homex/homex_xp.jpeg';

import dermsGi from './derms/derms_gi.jpg';

import uttzs0 from './uttzs/uttzs_0.png';
//import uttzs1 from './uttzs/uttzs_1.png';

export type Project = {
    title: string,
    subtitle: string,
    description: string,
    url: string,
    articles: {
        url: string,
        title: string,
    }[],
    images: {
        src: string,
        backgroundSize?: string,
    }[],
};

export const Projects: Project[] = [
    {
        title: 'Climate Solution with Consumer DERMS',
        subtitle: '',
        description: 'Software architecting for balancing the quick launch and long term roadmap. Designed the essential structure for being driven by consumerization and network effects.',
        url: 'https://na.panasonic.com/explore/smart-mobility',
        articles: [
            {
                title: 'Panasonic GREEN IMPACT envisions environmental sustainability, net-zero climate impact',
                url: 'https://www.zawya.com/en/press-release/companies-news/panasonic-green-impact-envisions-environmental-sustainability-net-zero-climate-impact-kwhp5md7',
            }
        ],
        images: [
            {
                src: dermsGi,
            }
        ]
    }, {
        title: 'Home experience management software',
        subtitle: '',
        description: 'As a initial member, contributed the concept making, software design, and launch. Introduced the essense of customer experience management software into home.',
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
            {
                src: homexLayer,
            //}, {
            //    src: homexXp,
            }
        ]
    }, {
        title: 'Tech driven market creation for digital camera',
        subtitle: '',
        description: 'Renewed the Codec to adjust the image quality reacting to the network for remote wearable streaming solution.',
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
            {
                src: lumixGh5,
            //}, {
            //    src: lumixA100,
            //}, {
            //    src: lumixGM,
            }
        ]
    }, {
        title: "Home energy management system",
        subtitle: '',
        description: 'Contributed to design the end to end system and mobile app for energy management service in the residential space .',
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
            {
                src: hems,
            }
        ]
    }, {
        title: 'Platform briding artists and collectors',
        subtitle: '',
        description: 'Digital platform for helping the communication between art producer and consumer. Software architecture and DevOps by one person.',
        url: 'https://www.uttzs.art',
        articles: [
            {
                title: 'Uttzs - Ideas - Game Changer Catapult - Panasonic',
                url: 'https://gccatapult.panasonic.com/ideas/uttzs.php',
            }, {
                title: 'Uttzsが変えるオンライン鑑賞体験。離れた場所でも豊かな時間を | CINRA',
                url: 'https://www.cinra.net/article/interview-202102-tanouemasahiko_myhrt',
            }
        ],
        images: [
            {
                src: uttzs0,
            //}, {
            //    src: uttzs1,
            }
        ]
    }, {
        title: 'MedicalArt',
        subtitle: '',
        description: 'A product for better wellness with behavioral change by merging the power of art and science. Exibitted at DESIGNART Tokyo 2022.',
        url: 'https://www.medicalart.gallery/about',
        articles: [
        ],
        images: [
            {
                src: medicalArt,
            }
        ]
    }, {
        title: "Health app for managing by group",
        subtitle: '',
        description: 'Launched the app for supporting companies and communities to manage the personnel health. Made the concept and delivered to the market within a few months from the spreading pandemic.',
        url: 'https://tech.panasonic.com/jp/ondu/',
        articles: [
        ],
        images: [
            {
                src: onduApp,
                backgroundSize: 'contain',
            //}, {
            //    src: onduEnterprise,
            //    backgroundSize: 'contain',
            }
        ]
    }, {
        title: 'Automated indoor green system',
        subtitle: '',
        description: 'Light and water control for maintaining the plant with RPi and GPIO control. Tablet app for showing emotional plant.',
        url: 'https://refluster.github.io/schememono/unkai.html',
        articles: [
            {
                url: 'https://kyoto.theterminal.jp/events/schememonox%EF%BD%8B%EF%BD%99%EF%BD%8F%EF%BD%94%EF%BD%8F/',
                title: 'Schememono×Kyoto｜展示・イベント｜The Terminal KYOTO / ザ ターミナル キョウト',
            }
        ],
        images: [
            {
                src: unkai,
            //}, {
            //    src: unkaiSunset,
            //}, {
            //    src: unkaiTablet,
            }
        ]
    },
];