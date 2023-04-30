import nltk from "../resources/nltk.jpeg"
import movies from "../resources/netflix.png"
import curd from "../resources/curd.jpeg"
import website from "../resources/website.jpeg"
import market from "../resources/market.jpeg"

const Projectsdict = [
    {
      name: "Text Recognition",
      description:
        "Text summarization is the process of automatically creating a shorter version of a text document while retaining its most important information. This process involves using natural language processing (NLP) techniques and machine learning algorithms to analyze the content of the document and identify the most relevant sentences and phrases.",
      
        image: nltk,
      links: {
        GitHub: "https://github.com/AkshatPatel15/textrecognition",
        "More Info": "https://example.com/project1",
      },
    },
    {
      name: "Movies",
      description:
        '"Movies" is a web-based project developed using React, Flask, and API fetching from IMDb. The project aims to provide users with a comprehensive platform to search and explore movies, TV shows, and other cinematic content. The application integrates with IMDbs extensive database, allowing users to access information on thousands of movies and TV shows.',
      image: movies,
      links: {
        GitHub: "https://github.com/AkshatPatel15/movies",
        "More Info": "https://example.com/project2",
      },
    },
    {
      name: "CRUD",
      description:
        "The CRUD operation that you have built is a software module that provides the user with the capability to perform these four functions on a specific data model. This operation is designed to work with a specific database schema and provides a simplified interface for the user to manipulate data.",
      image: curd,
      links: {
        GitHub: "https://github.com/AkshatPatel15/crud",
        "More Info": "https://example.com/project3",
      },
    },
    {
      name: "Personal Website",
      description:
        "The website has a clean and modern design that is visually appealing and easy to navigate. It features a responsive design that adapts to different screen sizes, making it accessible to users on desktops, laptops, tablets, and smartphones.",
      image: website,
      links: {
        GitHub: "https://github.com/AkshatPatel15/portfolio",
        "More Info": "https://example.com/project4",
      },
    },
    {
      name: "Market Analysis",
      description:
        "Using React, Flask, and the yfinance API, I created a web-based application for real-time stock market analysis. The UI is intuitive and responsive, and users can search for stocks by ticker symbol. The backend handles API calls to yfinance, which provides real-time data on stock prices and trends. The project is a powerful tool for making informed investment decisions.",
      image: market,
      links: {
        GitHub: "https://github.com/AkshatPatel15/marketanalysis",
        "More Info": "https://example.com/project5",
      },
    },
    
  ];
  
  export default Projectsdict;
  