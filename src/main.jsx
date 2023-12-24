import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import App from './App.jsx'
import './index.css'
import ErrorPage from './components/layout/ErrorPage.jsx';
import Work from './components/Work.jsx';
import BlogPost from './components/BlogPost.jsx';
import About from './components/About.jsx';

const CATEGORY = {
  ALL: 'ALL',
  SOFTWARE: 'SOFTWARE',
  WEB: 'WEB',
  WRITING: 'WRITING',
  INTERACTIVE: 'INTERACTIVE'
}

let categories = [
  { display: "All", value: CATEGORY.ALL },
  { display: "Software", value: CATEGORY.SOFTWARE },
  { display: "Interactive", value: CATEGORY.INTERACTIVE },
  { display: "Web", value: CATEGORY.WEB },
  { display: "Writing", value: CATEGORY.WRITING },
];

let content = new Map();
content.set('howIBuiltThisSite', {
  id: uuidv4(),
  key: 'howIBuiltThisSite',
  projectType: "article",
  title: "How I Built This Site",
  preview: "Vite, React, JS, CSS, HTML",
  subheading: "Finding balance between learning, creativity, and time management.",
  date: new Date('December 24, 2023 02:58:00'),
  bodyContent: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed turpis quis nibh tincidunt commodo. Duis vel diam eget nibh auctor pretium. Ut non tincidunt tellus, eu suscipit massa. Aenean in posuere urna. Mauris auctor lacus eget eleifend aliquet. Fusce ut viverra justo. Quisque a lacus ut orci malesuada volutpat ac id urna. Vivamus nisl nisi, ullamcorper in ligula consequat, luctus sollicitudin leo. Ut et tempus sapien.",
    <img key="1" src='/proj1/preview.gif' />,
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus nibh vitae tincidunt pharetra. Ut vitae porttitor mi. Praesent et fermentum metus. Donec mattis nunc quis aliquam egestas. Proin felis enim, accumsan auctor quam eget, volutpat porta neque. Nam eleifend dignissim dui, id condimentum lectus tincidunt ac.",
    "Sed congue sed ante elementum mattis. Ut ac lacinia lacus. Nullam eleifend lorem arcu, ac condimentum felis tempus sed. Vivamus id tellus nec dolor hendrerit semper vitae pharetra turpis. Pellentesque nec molestie risus. Suspendisse lacinia nulla ex, sit amet accumsan turpis pretium ac. Nunc semper finibus neque, id eleifend libero ultrices ac. Morbi vel ante odio.",
    "Nulla at nisl velit. Ut convallis feugiat dolor, at tincidunt nulla semper at. Sed vitae ligula tincidunt, vulputate urna eu, pulvinar mi. Quisque arcu est, viverra id luctus eget, laoreet ultricies ante. Proin vulputate non tellus ut aliquet. Nunc fermentum vel risus a ornare. Integer semper lacus in arcu pharetra iaculis. Nulla feugiat sem arcu, nec posuere libero lacinia ornare. Nunc in rhoncus augue, imperdiet blandit elit. Praesent eu neque libero. Integer fringilla nisi vel vestibulum eleifend.",
    "Praesent cursus libero lacus, a ultrices ipsum bibendum ac. Ut et egestas turpis. Nunc finibus tellus nec ante rutrum, quis viverra leo porttitor. Mauris bibendum congue ante quis venenatis. Quisque eu magna vel eros pharetra placerat. Praesent viverra pulvinar odio sit amet facilisis. Nulla condimentum eu dolor eu laoreet. Praesent tincidunt molestie ipsum vitae facilisis. Etiam sagittis risus ac quam tincidunt, eu rutrum tortor lobortis. Ut ullamcorper quis enim et cursus. Maecenas vitae massa eu sem tristique pellentesque."
  ],
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.WEB, CATEGORY.WRITING],
  link: "/work/howIBuiltThisSite"
});
content.set('renderer', { 
  id: uuidv4(),
  key: 'renderer',
  projectType: "external",
  title: "Real Time 3D Renderer",
  preview: "Rust, OpenGL",
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.SOFTWARE],
  link: "https://github.com/abbyeg"
});
content.set('shaders', { 
  id: uuidv4(),
  key: 'shaders',
  projectType: "external",
  title: "Custom Shaders",
  preview: "GLSL",
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.SOFTWARE]
});
content.set('procedural', { 
  id: uuidv4(),
  key: 'procedural',
  title: "Procedural Content Generation Tool",
  preview: "CSS",
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.SOFTWARE]
});
content.set('sanctuary', {
  id: uuidv4(),
  key: 'sanctuary',
  title: "Sanctuary - Interactive Experience",
  preview: "Unity, Illustration",
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.SOFTWARE, CATEGORY.INTERACTIVE]
});
content.set('animationToolkit', {
  id: uuidv4(),
  key: 'animationTookKit',
  title: "Rigging and Animation Toolkit",
  preview: "",
  previewImage: "/proj1/preview.gif",
  cats: [CATEGORY.SOFTWARE]
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "work",
        element: <Work content={content} categories={categories} />,
      },
      {
        path: "work/:title",
        element: <BlogPost content={content} />,
      },
      {
        path: "about",
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
