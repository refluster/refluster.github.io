import lumixGh5 from './lumix/lumix-gh5.png';
import lumixA100 from './lumix/lumix-a100.png';
import lumixGM from './lumix/lumix-gm.jpeg';

import onduApp from './ondu/ondu_app.png';

import unkai from './unkai/unkai.jpg';
import unkaiSunset from './unkai/unkai_sunset.jpg';
import unkaiTablet from './unkai/unkai_tablet.jpg';

export type Project = {
    title: string,
    subtitle: string,
    description: string,
    url: string,
    articles: string[],
    images: string[],
};

export const Projects: Project[] = [
    {
        title: 'Lumix',
        subtitle: 'Digital still camera',
        description: 'World first 4K movie suported camera.',
        url: 'https://na.panasonic.com/us/lumix',
        articles: [
            'https://news.panasonic.com/global/press/en160920-5',
            'https://www.digitalcameraworld.com/news/camera-rumors/6',
        ],
        images: [
            lumixGh5,
            lumixA100,
            lumixGM,
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
            'https://kyoto.theterminal.jp/events/schememonox%EF%BD%8B%EF%BD%99%EF%BD%8F%EF%BD%94%EF%BD%8F/'
        ],
        images: [
            unkai,
            unkaiSunset,
            unkaiTablet,
        ]
    },
];
