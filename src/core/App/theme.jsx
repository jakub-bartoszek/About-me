const colorNames = {
	White: "#FFFFFF",
	Mercury: "#E6E6E6",
	Trout: "#505B68",
	Tundora: "#2B2B2B",
	MineShaft: "#252525",
	CodGray: "#1C1C1C",
	ScienceBlue: "#0366D6",
	WildStrawberry: "#FF38A7"
};

const common = {
	breakpoints: {
		mobileMax: 767,
		tabletVerticalMax: 991,
		tabletHorizontalMax: 1199
	}
};

export const themeLight = {
	...common,
	colors: {
		tileHoverBackground: colorNames.White,
		tileBackground: colorNames.White,
		primary: colorNames.ScienceBlue,
		textPrimary: colorNames.MineShaft,
		site: {
			background: colorNames.Mercury,
			text: colorNames.Trout
		},
		themeSwitch: {
			background: colorNames.Trout,
			icon: colorNames.White
		}
	}
};
export const themeDark = {
	...common,
	colors: {
		tileHoverBackground: colorNames.Tundora,
		tileBackground: colorNames.MineShaft,
		primary: colorNames.WildStrawberry,
		textPrimary: colorNames.White,
		site: {
			background: colorNames.CodGray,
			text: colorNames.White
		},
		themeSwitch: {
			background: colorNames.White,
			icon: colorNames.CodGray
		}
	}
};
