import { useDispatch, useSelector } from "react-redux";
import { Icon, IconWrapper, Switch, Text, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
	const isDarkTheme = useSelector(selectIsDarkTheme);
	const dispatch = useDispatch();
	return (
		<Wrapper
			onClick={() => {
				dispatch(toggleTheme());
			}}
		>
			<Text>dark mode {isDarkTheme ? "on" : "off"}</Text>
			<Switch>
				<IconWrapper $moveToRight={isDarkTheme}>
					<Icon />
				</IconWrapper>
			</Switch>
		</Wrapper>
	);
};
