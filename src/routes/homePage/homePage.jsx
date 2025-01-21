import SearchBar from "../../components/searchBar/searcBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title"> Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores
            corporis quae eum quasi recusandae voluptatem debitis consectetur
            odio illo, aspernatur iure officiis corrupti pariatur provident a.
            Velit, quo! Culpa.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
