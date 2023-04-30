import nltk from "../resources/nltk.jpeg"
import movies from "../resources/netflix.png"
import curd from "../resources/curd.jpeg"
import website from "../resources/website.jpeg"
import market from "../resources/market.jpeg"
import {FaReact} from "react-icons/fa"
import {BsBootstrap} from "react-icons/bs"
import {AiOutlineHtml5} from "react-icons/ai"
import {IoLogoCss3} from "react-icons/io"
import {DiJavascript} from "react-icons/di"
import {TbBrandPython} from "react-icons/tb"
import {GrMysql} from "react-icons/gr"
import {SiFlask,SiPostman,SiNetlify,SiSqlite} from "react-icons/si"




const Projectsdict = [
    {
      name: "Text Recognition",
      description:
        "Text summarization is the process of automatically creating a shorter version of a text document while retaining its most important information. This process involves using natural language processing (NLP) techniques and machine learning algorithms to analyze the content of the document and identify the most relevant sentences and phrases.",
      
        dl:{
          d1:"Text summarization is an essential task in the field of natural language processing (NLP) that involves creating a shorter version of a text document while preserving the most critical information. This process is carried out using machine learning algorithms and NLP techniques that analyze the document's content and identify the most relevant sentences and phrases.",
          d2:"In a college project, a team of four friends worked together to develop a text summarization tool. The team utilized several technologies such as Python's Natural Language Toolkit (NLTK) for NLP tasks, Flask for web development, Postman for API testing, ReactJS for building the user interface, and Axios for handling HTTP requests. They also used SQL for database management.",
          d3:"The project's goal was to help users summarize lengthy documents quickly and efficiently, making it ideal for students, researchers, and professionals who need to read and process vast amounts of information in a short time. By leveraging machine learning algorithms and NLP techniques, the tool can analyze and summarize text documents, allowing users to obtain a condensed version that highlights the most important information."
        },
        image: nltk,
      links: {
        GitHub: "https://github.com/AkshatPatel15/textrecognition",
        "More Info": "https://example.com/project1",
      },
      tools:{
        "React" : <FaReact/>,
        "Bootstrap" : <BsBootstrap/>,
        "Html" : <AiOutlineHtml5/>,
        "CSS" : <IoLogoCss3/>,
        "JS" : <DiJavascript/>,
        "Python" : <TbBrandPython/>,
        "SQL" : <GrMysql/>,
        "Flask" : <SiFlask/>,
        "Postman":<SiPostman/>,
        // "Axios" : <SiAxios/>,
      }
    },
    {
      name: "Movies",
      description:
        '"Movies" is a web-based project developed using React, Flask, and API fetching from IMDb. The project aims to provide users with a comprehensive platform to search and explore movies, TV shows, and other cinematic content. The application integrates with IMDbs extensive database, allowing users to access information on thousands of movies and TV shows.',
      dl:{
        d1:'"Movies" is a web-based application that enables users to search and explore movies and TV shows through an intuitive and user-friendly interface. The project is built using React, Flask, and API fetching from IMDb. The main objective of this project is to provide users with a platform that offers a wide range of cinematic content and an easy-to-use interface to search and access the desired information.',
        d2:"The application integrates with IMDb's extensive database, which contains detailed information about thousands of movies and TV shows. Users can access this data through the application's intuitive search functionality, allowing them to find specific movies or TV shows and view related information such as trailers, ratings, and reviews.",
        d3:"The application is built using Flask, a popular Python web framework, which provides a flexible and scalable back-end for the application. The data is fetched from IMDb's API using Axios, a popular JavaScript library for making API requests. The data is then presented to the user using React, a JavaScript library for building user interfaces.",
        d4:"In addition to the project's core functionality, the application also provides users with a list of top 100 movies from IMDb's open-source API, giving users access to some of the most popular and highly-rated movies of all time. Overall, 'Movies' is a comprehensive application that provides users with an excellent platform to explore and enjoy their favorite movies and TV shows.",
      },
        image: movies,
      links: {
        GitHub: "https://github.com/AkshatPatel15/movies",
        "More Info": "https://example.com/project2",
      },
      tools:{
        "React" : <FaReact/>,
        "Bootstrap" : <BsBootstrap/>,
        "Html" : <AiOutlineHtml5/>,
        "CSS" : <IoLogoCss3/>,
        "JS" : <DiJavascript/>,
        "Python" : <TbBrandPython/>,
        "SQL" : <GrMysql/>,
        "Flask" : <SiFlask/>,
        "Postman":<SiPostman/>,
        // "Axios" : <SiAxios/>,
      }
    },
    {
      name: "CRUD",
      description:
        "The CRUD operation that you have built is a software module that provides the user with the capability to perform these four functions on a specific data model. This operation is designed to work with a specific database schema and provides a simplified interface for the user to manipulate data.",
      dl:{
        d1:"The CRUD operation is a vital component of modern software development, allowing users to perform basic functions on data models. In this project, SQLite has been used as the database, and React has been utilized to develop the user interface. The project provides a simple and intuitive interface for users to manage data in the database. With the CRUD operation, users can create new data, retrieve existing data, update data, and delete data, all in a streamlined manner. The use of React provides the project with a modern and responsive front-end, while SQLite offers a lightweight and reliable database solution. Together, they form a powerful and efficient platform for managing data. Overall, this project demonstrates the power and flexibility of combining different technologies to build an effective solution."
      },
        image: curd,
      links: {
        GitHub: "https://github.com/AkshatPatel15/crud",
        "More Info": "https://example.com/project3",
      },
      tools:{
        "React" : <FaReact/>,
        "Bootstrap" : <BsBootstrap/>,
        "Html" : <AiOutlineHtml5/>,
        "CSS" : <IoLogoCss3/>,
        "JS" : <DiJavascript/>,
        "Python" : <TbBrandPython/>,
        "SQL" : <GrMysql/>,
        "Flask" : <SiFlask/>,
        "Postman":<SiPostman/>,
        // "Axios" : <SiAxios/>,
      }
    },
    {
      name: "Personal Website",
      description:
        "The website has a clean and modern design that is visually appealing and easy to navigate. It features a responsive design that adapts to different screen sizes, making it accessible to users on desktops, laptops, tablets, and smartphones.",
      dl:{
        d1:"The website that I have created is a testament to the power of modern web development technologies. Using React, I was able to create a dynamic and interactive user interface that is both visually appealing and intuitive to navigate. The responsive design ensures that the website is accessible to users on all devices, regardless of their screen size or resolution.",
        d2:"One of the standout features of the website is its use of Netlify for hosting and GoDaddy for domain registration. Netlify provides a fast and reliable hosting solution that allows for easy deployment and scaling of web applications, while GoDaddy provides a convenient and affordable domain registration service.",
        d3:"In addition to its sleek design and powerful technology stack, the website also features robust functionality that allows users to engage with the content in meaningful ways. Whether it's browsing through product listings, submitting a contact form, or exploring a variety of resources and articles, the website offers a range of options for users to interact with the content and engage with the brand.",
        d4:"Overall, the website represents a cutting-edge example of modern web development, demonstrating the power of React and other technologies to create fast, reliable, and highly functional web applications that can meet the needs of users on all devices."
      },
        image: website,
      links: {
        GitHub: "https://github.com/AkshatPatel15/portfolio",
        "More Info": "https://example.com/project4",
      },
      tools:{
        "React" : <FaReact/>,
        "Bootstrap" : <BsBootstrap/>,
        "Html" : <AiOutlineHtml5/>,
        "CSS" : <IoLogoCss3/>,
        "JS" : <DiJavascript/>,
        "Python" : <TbBrandPython/>,
        "Sqlite" : <SiSqlite/>,
        "Flask" : <SiFlask/>,
        "Postman":<SiPostman/>,
        "Netlify":<SiNetlify/>,
        // "Axios" : <SiAxios/>,
      }
    },
    {
      name: "Market Analysis",
      description:
        "Using React, Flask, and the yfinance API, I created a web-based application for real-time stock market analysis. The UI is intuitive and responsive, and users can search for stocks by ticker symbol. The backend handles API calls to yfinance, which provides real-time data on stock prices and trends. The project is a powerful tool for making informed investment decisions.",
      dl:{
        d1:"The real-time stock market analysis application that I built using React, Flask, and the yfinance API is a powerful tool that enables users to make informed investment decisions. The application features an intuitive and responsive UI that allows users to search for stocks by ticker symbol, and the backend handles API calls to yfinance to provide real-time data on stock prices and trends.",
        d2:"One of the key features of the project is the implementation of the golden cross trading strategy. This strategy involves the use of two moving averages, the 50-day and 200-day moving averages, to identify buy and sell signals. When the 50-day moving average crosses above the 200-day moving average, this is known as a golden cross, which is a bullish signal indicating that the stock is likely to rise in price. Conversely, when the 50-day moving average crosses below the 200-day moving average, this is known as a death cross, which is a bearish signal indicating that the stock is likely to fall in price.",
        d3:"By implementing the golden cross trading strategy in the application, users can gain valuable insights into the stock market and make more informed investment decisions. The real-time data provided by the yfinance API combined with the intuitive UI make this application a valuable tool for investors looking to stay ahead of the game."
      },
        image: market,
      links: {
        GitHub: "https://github.com/AkshatPatel15/marketanalysis",
        "More Info": "https://example.com/project5",
      },
      tools:{
        "React" : <FaReact/>,
        "Bootstrap" : <BsBootstrap/>,
        "Html" : <AiOutlineHtml5/>,
        "CSS" : <IoLogoCss3/>,
        "JS" : <DiJavascript/>,
        "Python" : <TbBrandPython/>,
        "SQL" : <GrMysql/>,
        "Flask" : <SiFlask/>,
        "Postman":<SiPostman/>,
        // "Axios" : <SiAxios/>,
      }
    },
    
  ];
  
  export default Projectsdict;
  