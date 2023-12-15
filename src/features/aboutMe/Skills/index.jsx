import { SubHeader } from "../../../common/SubHeader/styled";
import { List, ListItem, Wrapper } from "./styled";

export const Skills = ({ title, skills }) => {
 return (
  <Wrapper>
   <SubHeader>{title}</SubHeader>
   <List>
    {skills.map((skill) => (
     <ListItem key={skill}>{skill}</ListItem>
    ))}
   </List>
  </Wrapper>
 );
};
