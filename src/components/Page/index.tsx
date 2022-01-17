import Slide from "../Slide/Generic";
import Bottom from "../Slide/Bottom";
import { Header } from "../Slide/Header";
import SlideWrapper from "../SlideWrapper";

export default function Page() {
  return (
    <main>
      <SlideWrapper>
        <Header />
        {["sec1", "sec2", "sec3", "sec4"].map((sec) => (
          <Slide
            key={sec}
            title={sec}
            paragraph={`This is the ${sec} of the page`}
          />
        ))}
        <Bottom />
      </SlideWrapper>
    </main>
  );
}
