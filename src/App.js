import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Places from "./Places";
import data from "./data";
import Footer from "./Footer";

function App() {

  // using the map function to access each individual piece of data and pass them to the component
  const place = data.map(elem => {
    return <Places 
      id = {elem.id}
      coverImg = {elem.coverImg}
      country = {elem.country}
      location = {elem.location}
      date = {elem.date}
      description = {elem.description}
    />
  })
  console.log(place);
  return (
    <div>
      <Header />

    {/* Displaying the properties as individual pieces in the Place component */}
      {place}
      <Footer />
    </div>
  );
}

export default App;
