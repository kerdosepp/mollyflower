import "../App.css";

import SiteTitle from "../components/SiteTitle.jsx";
import ContentContainer from "../components/ContentContainer.jsx";
import AboutUs from "../components/AboutUs.jsx";

function App() {
  return (
    <>
      <SiteTitle title="GALLERY" />
      <ContentContainer contentName="SEASONAL ARRANGEMENTS" type="flowershop" />
      <ContentContainer contentName="SERVICES" type="services2" paddingTop="200px"/>
            <AboutUs
              headText="WORK WITH US"
              slogan="Discover how we can add a touch of natural beauty to your next event."
            />

    </>
  );
}

export default App;
