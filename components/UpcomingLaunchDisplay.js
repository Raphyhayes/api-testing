import fetch from "node-fetch";
import { useState } from "react";

export default function UpcomingLaunchDisplay() {
  const [launchData, setLaunchData] = useState([]);
  function handleButtonClick(e) {
    e.preventDefault();
    fetch("/api/launch-fetcher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        endpoint: "upcoming",
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setLaunchData(
          data.map((entry) => {
            return {
              name: entry.name,
              rocket: entry.rocket,
              static_fire_date: entry.static_fire_date_utc,
              launch_date: entry.date_utc,
              details: entry.details,
              webcast: entry.links.webcast,
            };
          })
        );
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <button onClick={handleButtonClick}>Fetch Upcoming Launches</button>
      {launchData.length > 0 && (
        <p>
          {Object.keys(launchData[0]).map((key) => {
            console.log(key);
            return <li>{key}</li>;
          })}
        </p>
      )}
      {launchData.length > 0 && (
        <p>
          {launchData.map((event) => {
            return (
              <ul>
                {Object.keys(launchData[0]).map((key) => {
                  console.log(event, "this be the event");
                  return (
                    <li>
                      <strong>{key[0].toUpperCase() + key.substring(1)}</strong>
                      {`: ${event[key]}`}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </p>
      )}
    </>
  );
}
