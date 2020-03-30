import React, { useState, useEffect} from "react";
import "./styles.scss";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://lichess.org/api/user/Johanssc");
      res
        .json()
        .then(res => setData(res))
        .catch(() => {console.log("Kunne ikke hente spiller")})  
    }

    fetchData();
  }, []);

  const bulletRating = data?.perfs?.bullet.rating;

  console.log(bulletRating)

  return (
    <div className="App">
      <div className="tekst">{!bulletRating ? "" : bulletRating >= 2900 ? "JA" : "NEI"}</div>
    </div>
  );
}
