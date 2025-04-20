import Image from "next/image";

import HomePage from "./Components/HomePage";
import SecondSection from "./Components/SecondSection";
import SectionThird from "./Components/SectionThird";
import FourthSection from "./Components/FourthSection";

export default function Home() {
  return (
    <div>
      <HomePage/>
      {/* <SecondSection/> */}
      <SectionThird/>
      <FourthSection/>
    </div>
  );
}
