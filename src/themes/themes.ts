export interface ThemeType {
    themeId: number;
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
    headerBoxShadow: string;
    mainColor: string;
    textColor: string;
    boxShadowItem: string;
    selectItemArrow: string;
}

export const darkTheme: ThemeType = {
    themeId: 1,
    primaryColor: "#0B0B0B",
    secondaryColor: "#0F0F0F",
    tertiaryColor: "#1F1F1F",
    quaternaryColor: "#7E7E7E",
    headerBoxShadow: "0px 4px 4px rgba(61, 61, 61, 0.25)",
    mainColor: "#00AD6F",
    textColor: "#FFFFFF",
    boxShadowItem: "0px 4px 4px rgba(0, 173, 111, 0.58)",
    selectItemArrow: "#FFF",
};
