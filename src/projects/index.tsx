import stnNetwork from './stn/stn_network.svg';
import consumerDermsGrid from './derms/consumer-derms-grid.jpg';
import homeExperienceManagement from './homex/home-experience-management.jpg';
import cameraMonochrome from './lumix/camera-monochrome.jpg';
import homeEnergySystem from './hems/home-energy-system.jpg';
import uttzs0 from './uttzs/uttzs_0.jpg';
import medicalArt from './medicalart/medicalart.jpg';
import onduApp from './ondu/ondu_app.jpg';
import unkai from './unkai/unkai.jpg';

export type Project = {
    title: string,
    /** One line under the title: what it is, for whom. */
    subtitle: string,
    /** What I did and why it mattered. Two or three sentences. */
    description: string,
    /** Years the work spanned, e.g. "2018–2019" or "2025–". */
    period: string,
    /** Company, programme or "Independent". */
    org: string,
    /** My role on the project, in a few words. */
    role: string,
    /** Domain and craft tags, three or four at most. */
    tags: string[],
    /** Canonical link for the project. Omitted when nothing public survives. */
    url?: string,
    /** Press coverage and related writing. */
    articles: {
        url: string,
        title: string,
    }[],
    image: {
        src: string,
        alt: string,
        /** "cover" (default) crops to fill the card; "contain" shows the whole image. */
        fit?: 'cover' | 'contain',
    },
    featured?: boolean,
};

export const Projects: Project[] = [
    {
        title: 'Software Talent Network',
        subtitle: 'An organisation of AI agents that researches, writes, reviews and ships every day',
        description: 'Designed the organisation model, the governance that keeps the agents’ output accountable, and the platform they run on. Dozens of agent personas, each with a role and a schedule, work alongside me; the live figures on this page come from that platform.',
        period: '2025–',
        org: 'Independent',
        role: 'Founder, architect and operator',
        tags: ['AI agents', 'Organisation design', 'Platform'],
        url: 'https://workforce.kohuehara.xyz/',
        articles: [
            {
                title: 'Insights — articles researched and written by the workforce',
                url: 'https://kohuehara.xyz/ai-native-article/',
            },
        ],
        image: { src: stnNetwork, alt: 'Network diagram of connected agent nodes' },
        featured: true,
    }, {
        title: 'Consumer DERMS for EV charging',
        subtitle: 'Climate solution built on distributed energy resources in homes and vehicles',
        description: 'Software architecture that balanced a quick first launch against a long-term roadmap. Designed the essential structure so the product could be driven by consumerisation and network effects rather than by one-off integrations.',
        period: '2022–',
        org: 'Panasonic',
        role: 'Software architect',
        tags: ['Energy', 'EV charging', 'DERMS', 'Architecture'],
        articles: [
            {
                title: 'Panasonic GREEN IMPACT envisions environmental sustainability, net-zero climate impact',
                url: 'https://www.zawya.com/en/press-release/companies-news/panasonic-green-impact-envisions-environmental-sustainability-net-zero-climate-impact-kwhp5md7',
            },
        ],
        image: { src: consumerDermsGrid, alt: 'Illustration of homes, EV chargers and substations linked to a central control platform' },
    }, {
        title: 'MedicalArt',
        subtitle: 'Wellness through behavioural change, merging art and science',
        description: 'A product that uses the power of art to nudge everyday behaviour toward better wellness. Exhibited at DESIGNART Tokyo 2022.',
        period: '2022',
        org: 'Independent',
        role: 'Concept and software',
        tags: ['Wellness', 'Art', 'Mobile app'],
        url: 'https://www.medicalart.gallery/about',
        articles: [],
        image: { src: medicalArt, alt: 'MedicalArt app screens next to a portrait' },
    }, {
        title: 'Uttzs',
        subtitle: 'Platform bridging artists and collectors',
        description: 'A digital platform that helps art producers and their audience talk to each other. Software architecture, implementation and DevOps by one person, inside Panasonic’s Game Changer Catapult programme.',
        period: '2020–2026',
        org: 'Panasonic Game Changer Catapult',
        role: 'Sole architect and DevOps',
        tags: ['Art', 'Marketplace', 'Full stack'],
        url: 'https://www.uttzs.art',
        articles: [
            {
                title: 'Uttzs - Ideas - Game Changer Catapult - Panasonic',
                url: 'https://gccatapult.panasonic.com/ideas/uttzs.php',
            }, {
                title: 'Uttzsが変えるオンライン鑑賞体験。離れた場所でも豊かな時間を | CINRA',
                url: 'https://www.cinra.net/article/interview-202102-tanouemasahiko_myhrt',
            },
        ],
        image: { src: uttzs0, alt: 'A glass sphere refracting an artwork' },
    }, {
        title: 'ondu',
        subtitle: 'Health management app for companies and communities',
        description: 'Shaped the concept and delivered the app to market within a few months of the pandemic spreading, so organisations could look after the health of their people as a group.',
        period: '2020',
        org: 'Panasonic',
        role: 'Concept and product lead',
        tags: ['Health', 'Mobile app', '0→1'],
        url: 'https://tech.panasonic.com/jp/ondu/',
        articles: [],
        image: { src: onduApp, alt: 'Screens of the ondu health management app', fit: 'contain' },
    }, {
        title: 'HomeX',
        subtitle: 'Home experience management software for the connected house',
        description: 'Joined as a founding member and contributed the concept, the software design and the launch. Brought the ideas of customer experience management software into the home, as a layer above individual appliances.',
        period: '2017–2020',
        org: 'Panasonic',
        role: 'Founding member — concept, software design, launch',
        tags: ['Smart home', 'Platform', 'Customer experience'],
        url: 'https://holdings.panasonic/jp/business/homex.html',
        articles: [
            {
                url: 'https://japan.cnet.com/article/35128109/',
                title: 'パナソニック、ついに姿を現した「HomeX」--馬場本部長が語る「毎日が昨日よりも良くなるくらし」',
            }, {
                url: 'https://av.watch.impress.co.jp/docs/news/1072558.html',
                title: 'パナソニックが取り組む「ヨコパナ」の強化とは？ 未来住空間創出プロジェクト「HomeX」開始',
            },
        ],
        image: { src: homeExperienceManagement, alt: 'Illustration of a glowing core connecting scenes of daily life at home' },
    }, {
        title: 'Smart HEMS service app',
        subtitle: 'Home energy management system and its companion mobile app',
        description: 'Contributed to the end-to-end system design and the mobile app for an energy management service in the residential space, turning household power data into everyday support for the family.',
        period: '2015–2017',
        org: 'Panasonic',
        role: 'System and app design',
        tags: ['Energy', 'IoT', 'Mobile app'],
        url: 'https://www2.panasonic.biz/jp/densetsu/aiseg/serviceapp/',
        articles: [
            {
                url: 'https://iotnews.jp/archives/82545',
                title: 'パナソニック、「スマートHEMS」につながる機器を14社27機種に拡充',
            }, {
                url: 'https://prtimes.jp/main/html/rd/p/000002042.000003442.html',
                title: '「スマートHEMSサービスアプリ」ダウンロード開始！～家庭の電力情報を活用し家事の支援や家族の安全をサポート',
            },
        ],
        image: { src: homeEnergySystem, alt: 'Cutaway house wired to a smart meter, solar roof, appliances and an EV charger' },
    }, {
        title: 'Video codec for LUMIX and wearable cameras',
        subtitle: 'Technology-driven market creation for digital cameras',
        description: 'Renewed the video codec so image quality adapts to network conditions, enabling remote streaming from a wearable camera, and contributed to the codec work behind the LUMIX line.',
        period: '2012–2015',
        org: 'Panasonic',
        role: 'Codec and network engineer',
        tags: ['Video codec', 'Embedded', 'Consumer electronics'],
        url: 'https://news.panasonic.com/global/press/en160920-5',
        articles: [
            {
                url: 'https://news.panasonic.com/global/press/en160920-5',
                title: 'Panasonic Develops the World’s First 4K 60p/50p Video Recording Digital Single Lens Mirrorless Camera LUMIX GH5 Featuring 6K PHOTO',
            }, {
                url: 'https://www.engadget.com/2013-01-08-panasonics-wearable-camera-heads-on.html',
                title: 'Panasonic’s wearable camera HX-A100 heads-on',
            },
        ],
        image: { src: cameraMonochrome, alt: 'Mirrorless camera with a large lens on a dark surface' },
    }, {
        title: 'Unkai',
        subtitle: 'Automated indoor green system',
        description: 'Light and water control that keeps the plant alive with a Raspberry Pi and GPIO, plus a tablet app that gives the plant an emotional presence. Exhibited at The Terminal KYOTO.',
        period: '2012–2014',
        org: 'schememono (side project)',
        role: 'Hardware, software and app',
        tags: ['IoT', 'Raspberry Pi', 'Product design'],
        url: 'https://refluster.github.io/schememono/unkai.html',
        articles: [
            {
                url: 'https://kyoto.theterminal.jp/events/schememonox%EF%BD%8B%EF%BD%99%EF%BD%8F%EF%BD%94%EF%BD%8F/',
                title: 'Schememono×Kyoto｜展示・イベント｜The Terminal KYOTO / ザ ターミナル キョウト',
            },
        ],
        image: { src: unkai, alt: 'Unkai planter glowing in a dark room' },
    },
];
