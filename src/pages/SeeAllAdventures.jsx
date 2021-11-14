import { Routes, Route } from "react-router-dom";
import SeeAdventures from "../components/SeeAdventures/SeeAdventures";

const SeeAllAdventures = () => {
  return (
    <section>
      <h1>Adventure Awaits!</h1>
      
        <SeeAdventures />
      <div>Things also on page</div>
    </section>
  );
};

export default SeeAllAdventures;
