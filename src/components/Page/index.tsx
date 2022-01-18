import { Slide } from "../Slide/Generic";
import { Header } from "../Slide/Header";
import { Middle } from "../Slide/Middle";
import { Bottom } from "../Slide/Bottom";
import { EmailInput } from "../EmailInput";
import { SlideWrapper } from "../SlideWrapper";
import texts from "./texts.json";
import test from "../../assets/img/slides/slide-1.png";

export default function Page() {
  const sec2 = texts.sections[0];
  const sec3 = texts.sections[1];

  return (
    <main>
      <SlideWrapper>
        <Header />
        <Slide
          title={sec2.title}
          paragraph={sec2.paragraph}
          background={test}
        />
        <Middle />
        <Slide
          title={sec3.title}
          paragraph={sec3.paragraph}
          background={test}
        />
        <Bottom>
          <EmailInput />
        </Bottom>
      </SlideWrapper>
    </main>
  );
}
