import MostRecentLaunchDisplay from "../components/MostRecentLaunchDisplay";
import UpcomingLaunchDisplay from "../components/UpcomingLaunchDisplay";

export default function HomePage() {
  return (
    <>
      <h1>welcome to my api testing page</h1>
      <MostRecentLaunchDisplay></MostRecentLaunchDisplay>
      <UpcomingLaunchDisplay></UpcomingLaunchDisplay>
    </>
  );
}
