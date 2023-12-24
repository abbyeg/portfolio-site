import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import BlogPost from './components/BlogPost';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer); // This will clear the timer if the component unmounts before the timer finishes
  // }, []);

  let blogPostContent = {
    portfolio: {
      title: "How I Built This Site",
      subheading: "Finding balance between learning, creativity, and time management.",
      date: new Date('December 24, 2023 02:58:00'),
      bodyContent: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed turpis quis nibh tincidunt commodo. Duis vel diam eget nibh auctor pretium. Ut non tincidunt tellus, eu suscipit massa. Aenean in posuere urna. Mauris auctor lacus eget eleifend aliquet. Fusce ut viverra justo. Quisque a lacus ut orci malesuada volutpat ac id urna. Vivamus nisl nisi, ullamcorper in ligula consequat, luctus sollicitudin leo. Ut et tempus sapien.",
        <img key="1" src='/proj1/preview.gif' />,
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus nibh vitae tincidunt pharetra. Ut vitae porttitor mi. Praesent et fermentum metus. Donec mattis nunc quis aliquam egestas. Proin felis enim, accumsan auctor quam eget, volutpat porta neque. Nam eleifend dignissim dui, id condimentum lectus tincidunt ac.",
        "Sed congue sed ante elementum mattis. Ut ac lacinia lacus. Nullam eleifend lorem arcu, ac condimentum felis tempus sed. Vivamus id tellus nec dolor hendrerit semper vitae pharetra turpis. Pellentesque nec molestie risus. Suspendisse lacinia nulla ex, sit amet accumsan turpis pretium ac. Nunc semper finibus neque, id eleifend libero ultrices ac. Morbi vel ante odio.",
        "Nulla at nisl velit. Ut convallis feugiat dolor, at tincidunt nulla semper at. Sed vitae ligula tincidunt, vulputate urna eu, pulvinar mi. Quisque arcu est, viverra id luctus eget, laoreet ultricies ante. Proin vulputate non tellus ut aliquet. Nunc fermentum vel risus a ornare. Integer semper lacus in arcu pharetra iaculis. Nulla feugiat sem arcu, nec posuere libero lacinia ornare. Nunc in rhoncus augue, imperdiet blandit elit. Praesent eu neque libero. Integer fringilla nisi vel vestibulum eleifend.",
        "Praesent cursus libero lacus, a ultrices ipsum bibendum ac. Ut et egestas turpis. Nunc finibus tellus nec ante rutrum, quis viverra leo porttitor. Mauris bibendum congue ante quis venenatis. Quisque eu magna vel eros pharetra placerat. Praesent viverra pulvinar odio sit amet facilisis. Nulla condimentum eu dolor eu laoreet. Praesent tincidunt molestie ipsum vitae facilisis. Etiam sagittis risus ac quam tincidunt, eu rutrum tortor lobortis. Ut ullamcorper quis enim et cursus. Maecenas vitae massa eu sem tristique pellentesque."
      ]
    }
  };

  return (
    <Router>
      {/*{ isLoading && (
        <div className="overlay">
          <div className="content-between">LOADING</div>
        </div>
      )} */}
      <div className="App flex flex-col min-h-screen">
        <div className="bg border-2 border-white"></div>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/portfolio-project" element={
              <BlogPost 
                post={blogPostContent.portfolio}
              />
            }
            />
            <Route path="about" element={<About />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
