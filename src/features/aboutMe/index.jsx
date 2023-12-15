import { Container, Main } from "./styled";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { skills } from "./Skills/skills";
import { nextSkills } from "./Skills/nextSkills";
import { ThemeSwitch } from "../../common/ThemeSwitch";

export const AboutMe = () => {
 return (
  <Container>
   <Introduction />
   <Main>
    <Skills
     title="My skills includes 🛠️"
     skills={skills}
    />
    <Skills
     title="What i want to learn next 🚀"
     skills={nextSkills}
    />
    <Portfolio />
   </Main>
   <Footer />
  </Container>
 );
};
