import { Theme, useTheme } from "App/providers/ThemeProvider";
import { classNames } from "shared/lib/classnames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className? : string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps ) => {
	const {theme, toggleTheme} = useTheme();
	
	return (
		<Button 
			theme={ThemeButton.CLEAR}
			className ={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/> }
		</Button>
	);
};