import { useState } from "react";
import { classNames } from "shared/lib/classnames/classNames";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className? : string,
}

export const Sidebar = ({className}: SidebarProps ) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div className = {classNames(cls.sidebar, {[cls.collapsed]: collapsed})}>
			<Button onClick={onToggle}>
				--
			</Button>
			<div className={cls.switchers}>	
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	);
};