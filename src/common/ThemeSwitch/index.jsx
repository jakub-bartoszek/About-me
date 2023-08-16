import { useDispatch, useSelector } from "react-redux";
import { Icon, IconWrapper, Switch, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
	const isDarkTheme = useSelector(selectIsDarkTheme);
	const dispatch = useDispatch();
	return (
		<Wrapper>
			dark mode {isDarkTheme ? "on" : "off"}
			<Switch
				onClick={() => {
					dispatch(toggleTheme());
				}}
			>
				<IconWrapper $moveToRight={isDarkTheme}>
					<Icon />
				</IconWrapper>
			</Switch>
		</Wrapper>
	);
};
