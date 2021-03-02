import fetch from "node-fetch";
export default function handler(req, res) {
  fetch(`https://api.spacexdata.com/v4/launches/${req.body.endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => console.log(error));
}
