import Slide from "../Slide";
import SlideWrapper from "../SlideWrapper";

export default function Page() {
  return (
    <main>
      <SlideWrapper>
        {["sec1", "sec2", "sec3"].map((sec, i) => (
          <Slide key={i} />
        ))}
      </SlideWrapper>
    </main>
  );
}
