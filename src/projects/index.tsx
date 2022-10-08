import lumixGh5 from './lumix/lumix-gh5.png';
import lumixA100 from './lumix/lumix-a100.png';
import lumixGM from './lumix/lumix-gm.jpeg';

import onduApp from './ondu/ondu_app.png';

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
        subtitle: '',
        description: '',
        url: 'https://tech.panasonic.com/jp/ondu/',
        articles: [
        ],
        images: [
            onduApp,
        ]
    },
];
