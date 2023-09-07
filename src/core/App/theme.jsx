const colorNames = {
	White: "#FFFFFF",
	Mercury: "#E6E6E6",
	Trout: "#505B68",
	Tundora: "#2B2B2B",
	MineShaft: "#252525",
	CodGray: "#1C1C1C",
	ScienceBlue: "#0366D6",
	WildStrawberry: "#FF38A7",
	FacebookBlue: "#1278f3",
	LinkedinBlue: "#0a66c2",
	Black: "#000000",
	TransparentBlack: "#00000080"
};

const common = {
	breakpoints: {
		mobileMax: 767,
		tabletVerticalMax: 991,
		tabletHorizontalMax: 1199
	},
	iconShadow: colorNames.TransparentBlack
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
	},
	iconColors: {
		github: colorNames.Black,
		facebook: colorNames.FacebookBlue,
		linkedin: colorNames.LinkedinBlue,
		instagram: colorNames.Mercury
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
	},
	iconColors: {
		github: colorNames.White,
		facebook: colorNames.FacebookBlue,
		linkedin: colorNames.LinkedinBlue,
		instagram: colorNames.CodGray
	}
};
