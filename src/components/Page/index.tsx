import { Slide } from "../Slide/Generic";
import { Bottom } from "../Slide/Bottom";
import { Header } from "../Slide/Header";
import { EmailInput } from "../EmailInput";
import { SlideWrapper } from "../SlideWrapper";
import texts from "./texts.json";
import test from "../../assets/img/slides/slide-1.png";

export default function Page() {
  return (
    <main>
      <SlideWrapper>
        <Header />
        {texts.sections.map((text, index) => (
          <Slide
            key={index}
            title={text.title}
            paragraph={text.paragraph}
            background={test}
          />
        ))}
        <Bottom>
          <EmailInput />
        </Bottom>
      </SlideWrapper>
    </main>
  );
}
