import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className? : string;
}

export const Sidebar = ({className}: SidebarProps ) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div 
			data-testid = "sidebarid"
			className = {classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<Button onClick={onToggle}
			// eslint-disable-next-line i18next/no-literal-string
			>
				toggle
			</Button>
			<div className={cls.switchers}>	
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	);
};