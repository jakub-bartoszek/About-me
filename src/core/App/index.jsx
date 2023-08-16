import { ThemeProvider } from "styled-components";
import { AboutMe } from "../../features/aboutMe";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/ThemeSwitch/themeSlice";

const App = () => {
	const isDarkTheme = useSelector(selectIsDarkTheme);
	return (
		<ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
			<Normalize />
			<GlobalStyle />
			<AboutMe />
		</ThemeProvider>
	);
};

export default App;
