import {BlogPostType, HandmadeItemType, HandMadeOpinionType, HandMadeTabType, ProjectType} from "../types/MyTypes";

import jFarm from '../../../public/img/josehpFarm.png';
import lTaco from '../../../public/img/logans.png';
import pList from '../../../public/img/ProductList.png';
import mShop from '../../../public/img/MacrameShop.png';
import cDocs from '../../../public/img/DocsCreator.png';
import sSant from '../../../public/img/SimonSanta.png';

import item1 from '../../../public/img/handmade/2.png'
import item2 from '../../../public/img/handmade/3.png'
import item3 from '../../../public/img/handmade/4.png'
import item4 from '../../../public/img/handmade/5.png'
import dayjs from "dayjs";

export const staticData: ProjectType[] = [
    {
        id: '1',
        name: "Simon Santa Claus",
        line1: "The Simon Santa Claus website is a website for conducting the St. Nicholas Day draw. But not only.",
        line2: "On Simon Santa's website you can register and use it as a messenger. Invite friends, create groups and chat with your friends on the fly, just like in popular messengers.",
        img: sSant,
        link: 'https://simon-santa-claus.vercel.app/',
    },
    {
        id: '2',
        name: "Logan's Taco",
        line1: "Restaurant website. Order food, receive a confirmation email and manage the restaurant from the dashboard.",
        line2: 'Frontend and backend restaurant website written in TypeScript with Next.js.The application uses the function of sending e-mails, databases, registration and logging in Next-Auth, data analysis and many others.',
        img: lTaco,
        link: 'https://logans-taco.vercel.app/',
    },
    {
        id: '3',
        name: "Josep's Farm",
        line1: "A fully functional game that's tons of fun! ",
        line2: 'Joseph\'s Farm is written in Python using the PyGame library and several others. The game has many features, including saving and loading game state.',
        img: jFarm,
        link: 'https://github.com/SzymonLubinski/Josephs-Farm',
    },
    {
        id: '4',
        name: "Macrame Shop",
        line1: "Shop and blog of a person who owns a shop with handmade products.",
        line2: "An example of a purely styling website I created. There is no contact form support or backend functionality.. Written with Bootstrap",
        img: mShop,
        link: 'https://szymonlubinski.github.io/macrame_shop/',
    },
    {
        id: '5',
        name: "Product List",
        line1: "Page for adding and removing products",
        line2: "Simple website with backend in PHP. App has options like add and delete product from list. I used MySQL to kept product items",
        img: pList,
        link: 'https://productlistbyszymon.000webhostapp.com',
    },
    {
        id: '6',
        name: "Document Creator",
        line1: 'creating documents and reports using python',
        line2: "An application written in Python that prepares a document based on Eurostat data and saves it in pdf format.The program is not written based on OOP principles. It was just an exercise in the skills learned in the course.",
        img: cDocs,
        link: 'https://github.com/SzymonLubinski/document-creator',
    },
];

export const handmadeData: HandmadeItemType[] = [
    {
        id: '1',
        name: 'lorem-1',
        images: [item1, item2, item3],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt gravida sapien, sit amet accumsan ex pharetra vel. Fusce tempus ut metus quis tristique. Vestibulum venenatis mattis lorem, ac mollis nibh condimentum non. Phasellus hendrerit, eros eget pharetra pretium, sem diam elementum est, quis volutpat nulla tellus mattis nisl. Vivamus in diam a lorem fringilla bibendum. Cras eleifend quis sem sed volutpat. Mauris mauris purus, elementum ac tincidunt vitae,',
        price: 10.02,
    },
    {
        id: '2',
        name: 'lorem-2',
        images: [item2, item4, item3],
        description: 'Vestibulum id pretium odio. In hendrerit volutpat diam at vulputate. Vestibulum ex neque, commodo sodales mi et, ultricies vulputate lectus. Phasellus blandit felis at mauris fringilla, ac malesuada purus aliquam. Quisque mauris magna, accumsan a gravida ut, consequat rhoncus orci. ',
        price: 11.00,
    },
    {
        id: '3',
        name: 'lorem-3',
        images: [item4, item1, item3],
        description: 'Nulla tempor lorem at tristique accumsan. Vestibulum dignissim augue vel massa vehicula, ac tincidunt nulla gravida. Curabitur porttitor arcu nec tellus ornare vulputate. ',
        price: 20.00,
    },
    {
        id: '4',
        name: 'lorem-4',
        images: [item3, item2, item1],
        description: 'Vestibulum id arcu velit. ',
        price: 15.99,
    },
    {
        id: '5',
        name: 'lorem-5',
        images: [item1, item2, item3],
        description: 'Proin a hendrerit neque. Praesent semper, sem eget cursus mollis, orci nunc posuere dolor, id tristique erat lectus sit amet turpis. Sed ullamcorper iaculis leo, commodo iaculis massa dapibus tincidunt. Nam nec nulla vel orci condimentum volutpat et ut elit. Phasellus eget nibh nec est hendrerit pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porttitor sollicitudin urna.',
        price: 23.00,
    },
    {
        id: '6',
        name: 'lorem-6',
        images: [item4, item3, item2],
        description: '',
        price: 10.00,
    },
    {
        id: '7',
        name: 'lorem-7',
        images: [item1, item2, item3],
        description: '',
        price: 110.50,
    },

]

export const handmadeTabs: HandMadeTabType[] = [
    {link: '/handmade', plTitle: 'Tulipanowo'},
    {link: '/handmade/produkty', plTitle: 'Produkty'},
    {link: '/handmade/o-mnie', plTitle: 'O mnie'},
    {link: '/handmade/blog', plTitle: 'Blog'},
    {link: '/handmade/kontakt', plTitle: 'Kontakt'},
    {link: '/handmade/zamowienie', plTitle: 'Zamówienie'},
]

export const handmadeOpinions: HandMadeOpinionType[] = [
    {
        nick: 'John',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, scelerisque et condimentum non, interdum non dolor. Sed quis odio ultricies, hendrerit est quis.',
        rate: 5,
    },
    {
        nick: 'Anna',
        text: 'Nulla vel quam et velit hendrerit posuere. Proin eu arcu ac ipsum iaculis viverra. Nam facilisis porttitor justo non mollis. Phasellus molestie cursus dui, at malesuada risus ornare sed.',
        rate: 5,
    },
    {
        nick: 'Marie',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        rate: 5,
    },
    {
        nick: 'Mark',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, scelerisque et condimentum non, interdum non dolor. Sed quis odio ultricies, hendrerit est quis, vulputate nulla.',
        rate: 5,
    },
]

export const blogPosts: BlogPostType[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        date: dayjs('2024-02-13 19:18'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros ante, scelerisque et condimentum non, interdum non dolor. Sed quis odio ultricies, hendrerit est quis, vulputate nulla.',
        image: item1,
    },
    {
        id: 2,
        title: 'Sed imperdiet',
        date: dayjs('2024-02-14 19:18'),
        text: 'Sed imperdiet eget augue ac commodo. Ut vehicula tincidunt orci. Nulla tincidunt maximus velit, ac mattis odio tristique sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        image: item2,
    },
    {
        id: 3,
        title: 'Mauris nisi lorem',
        date: dayjs('2024-02-16 19:18'),
        text: 'Quisque id libero ut tellus convallis sollicitudin. Quisque suscipit in quam commodo accumsan. Suspendisse vitae augue iaculis, volutpat augue eu, faucibus quam. Vestibulum justo lacus, venenatis non ex eget, aliquam vehicula velit. Proin diam dolor, gravida nec blandit vitae, tempor volutpat nisi. Vestibulum leo metus, aliquam at sollicitudin gravida, consequat eu mi. Ut vel pretium est.',
        image: item3,
    },
]