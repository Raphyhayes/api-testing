import fetch from "node-fetch";
import { useState } from "react";
import Link from "next/link";
export default function MostRecentLaunchDisplay() {
  const [latestLaunchData, setLatestLaunchData] = useState([]);
  function handleButtonClick() {
    fetch("/api/launch-fetcher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint: "latest",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data = {
          reddit: data.links.reddit,
          pics: data.links.flickr.original,
          webcast: data.links.webcast,
          name: data.name,
          details: data.details,
        };
        setLatestLaunchData(data);
      });
  }
  console.log(latestLaunchData.reddit);
  return (
    <>
      <button onClick={handleButtonClick}>Fetch Most Recent Launch</button>
      {Object.keys(latestLaunchData).length > 0 && (
        <>
          <h3>{latestLaunchData.name}</h3>
          <p>{latestLaunchData.details}</p>
          <ul>
            <a href={latestLaunchData.webcast} target="_blank">
              Webcast
            </a>
          </ul>
          <ul>
            <strong>Pics</strong> :
            {latestLaunchData.pics.map((pic) => (
              <div width={50}>
                <img src={pic} height={100}></img>
              </div>
            ))}
          </ul>
          <ul>
            <strong>Reddit Threads</strong> :
            {Object.keys(latestLaunchData.reddit).map((key) => {
              return (
                <li>
                  <a target="_blank" href={latestLaunchData.reddit[key]}>
                    {key}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
