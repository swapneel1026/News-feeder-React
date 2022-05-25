import "./App.css";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./components/error404";
import Headlines from "./components/NewsCategory/Headlines";
import React from "react";
import { Allnews } from "./components/NewsCategory/NewsData/AllNews";
import { InternationalNews } from "./components/NewsCategory/NewsData/InternationalNews";
import { NationalNews } from "./components/NewsCategory/NewsData/NationalNews";
import { TechnologyNews } from "./components/NewsCategory/NewsData/TechnologyNews";
import { PoliticalNews } from "./components/NewsCategory/NewsData/PoliticalNews";
import { SportsNews } from "./components/NewsCategory/NewsData/SportsNews";
import { HealthcareNews } from "./components/NewsCategory/NewsData/HealthcareNews";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route
            index
            element={
              <Headlines Title="UptoDate" news={Allnews} keyword="all" />
            }
          />
          <Route
            path="/swapneel1026/News-App-React.git"
            element={
              <Headlines
                Title="UptoDate"
                news={Allnews}
                // keyword="all"
              />
            }
          />
          <Route
            path="/headlines"
            element={
              <Headlines
                Title="UptoDate"
                news={Allnews}
                // keyword="all"
              />
            }
          />
          <Route
            path="/national"
            element={
              <Headlines
                news={NationalNews}
                Title="National"

                // keyword="national"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Headlines
                Title="Technology"
                news={TechnologyNews}
                // keyword="technology "
              />
            }
          />
          <Route
            path="/politics"
            element={
              <Headlines
                Title="Politics"
                news={PoliticalNews}
                // keyword="politics "
              />
            }
          />
          <Route
            path="/international"
            element={
              <Headlines
                Title="International"
                news={InternationalNews}
                // keyword="world"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <Headlines
                Title="Sports"
                news={SportsNews}
                // keyword="sports"
              />
            }
          />
          <Route
            path="/startup"
            element={
              <Headlines
                Title="StartUp"
                news={HealthcareNews}
                // keyword="startup"
              />
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// extras

// useEffect(() => {
//   let API_KEY = "6a5153da7a214fc7a3119a91e5e6595e";
//   axios
//     .get(
//       `https://newsapi.org/v2/top-headlines?q=covid&apiKey=${API_KEY}&country=in`
//     )
//     .then((res) => setNews(res.data.articles))
//     .catch((err) => console.log(err.message));
// }, []);

//referesh news api button

// const refreshNews = () => {
//   axios
//     .get(
//       "https://newsapi.org/v2/top-headlines?apiKey=82cf17fc942147f0b6e41ba0bb2d3cdf&country=in"
//     )
//     .then((res) => setNews(res.data.articles))
//     .catch((err) => console.log(err.message));
// };
