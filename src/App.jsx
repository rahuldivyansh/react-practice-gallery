import { useState } from "react";
import { Images } from "./Images";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  function nextClickHandler() {
    if (index == 4) setIndex(0);
    else setIndex(index + 1);
  }
  function prevClickHandler() {
    if (index == 0) setIndex(4);
    else setIndex(index - 1);
  }

  let imageUrl = Images[index].source;
  return (
    <>
      <div className="gallery">
        <div className="buttons">
          <button onClick={prevClickHandler}>Previous</button>
          <button onClick={nextClickHandler}>Next</button>
        </div>
        <div className="image">
          <h1>{index + 1}</h1>
          <img src={imageUrl} alt="" width="100px" height="100px" />
        </div>
      </div>
      <footer>
        <h3>Made with ❣️ by Divyansh.</h3>
      </footer>
    </>
  );
}



export default App;
