import vibrate from '../assets/projects/vibrate.png'
import trasnslucent from '../assets/projects/trasnslucent.png'
import youtube from '../assets/projects/youtube.png'
import theme from '../assets/projects/theme.png'
import taste from '../assets/projects/taste.png'
import notes from '../assets/projects/notes.png'

const p: {
    id: number
    code: string;
    url: string;
    title: string;
    des: string;
    lang: string[];
    img: {};
}[] = [
        {
            id: 0,
            code: "https://github.com/sumyat-aung/vibrate-music-player-PWA",
            url: "https://vbra.netlify.app/",
            title: "Vibrate Music Player (Progressive Web App)",
            des: "A music player application designed to make it easy for users to find and play the music they want to hear. It has a simple and intuitive interface that enables users to quickly search and listen to songs on their device. Vibrate supports a wide range of audio formats, and its convenience makes it perfect for listening to music on the go. Plus, it is a progressive web app and can be installed on all devices with ease",
            lang: ["React", " Redux-toolkit", "TailwindCSS", "Styled-components", "Rapid API"],
            img: { vibrate },
        },
        {
            id: 1,
            code: "https://github.com/sumyat-aung/translucent-food-eCommerce",
            url: "https://trlc.netlify.app/",
            title: "Translucent Food eCommerce",
            des: "Translucent (Food eCommerce) is an online platform that allows users to purchase food items from local restaurants. It features an easy-to-use interface that enables users to browse menus, add items to their cart, and complete their purchase through a secure checkout process. The platform supports a variety of payment methods and provides a convenient way to order food online.",
            lang: ["React", "TailwindCSS", "Styled-components", "CommereceJS"],
            img: { trasnslucent },

        },
        {
            id: 2,
            code: "https://github.com/sumyat-aung/youtube-clone",
            url: "https://ytbe.netlify.app/",
            title: "YouTube Clone",
            des: "Inspired by the popular video streaming website (YouTube). Follows a mockup that closely resembles the layout and aesthetics of the original YouTube platform. This includes a clean and modern look, with a prominent search bar at the top, a navigation menu on the left, and a grid of thumbnails representing the available videos.",
            lang: ["React", "Redux-toolkit", "Sass", "Rapid API"],
            img: { youtube },

        },
        {
            id: 3,
            code: "https://github.com/sumyat-aung/astral-midnight-vscode-theme",
            url: "https://astral-midnight.netlify.app/",
            title: "Astral Midnight Theme",
            des: "This VS-Code theme is a dark-ish theme that brings a modern and stylish look and feel to your code editor. It features an eye-catching color palette with subtle gradients and shades that make for a more immersive coding experience. The design is optimized for improved readability and contrast, making it easier to find and understand your code.",
            lang: ["Yo code", "JSON"],
            img: { theme },

        },
        {
            id: 4,
            code: "https://github.com/sumyat-aung/recipe-search-engine",
            url: "https://taste-explorer.netlify.app/",
            title: "TasteExplorer (Recipe Search Engine with Alan AI)",
            des: "TasteExplorer provides users with an easy and intuitive way to quickly find their desired recipes. It features a comprehensive database of recipes, which can be easily searched by ingredient, cuisine type and more. It also includes voice interactivity, powered by Alan AI, which allows users to ask questions and receive spoken responses. ",
            lang: ["TypeScript", "React", "React-toolkit", "TailwindCSS", "Alan AI"],
            img: { taste },

        },
        {
            id: 5,
            code: "https://github.com/sumyat-aung/markdown-supported-notes-app",
            url: "https://mindmapnotes.netlify.app/",
            title: "Mindmap (Markdown supported notes app)",
            des: "Note Taking Web App that provides users with an easy-to-use and intuitive way to store, organize and manage their notes. It features an intuitive interface that allows users to quickly create, read, update and delete their notes. It also includes powerful search and sorting capabilities to quickly find the notes they need. The app is built with robust CRUD capabilities and is markdown supported, allowing users to easily format their notes",
            lang: ["TypeScript", "React", "TailwindCSS"],
            img: { notes },

        }
    ]

export { p }

