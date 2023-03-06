import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import cls from "./Sidebar.module.scss";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

interface SidebarProps {
	className? : string;
}

export const Sidebar = ({className}: SidebarProps ) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	const { t } = useTranslation();

	return (
		<div 
			data-testid = "sidebar"
			className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
		>
			<div className={cls.items}>
				<AppLink 
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath[AppRoutes.MAIN]}
					className={cls.item}
				>
					<MainIcon className={cls.icon}/>
					<span className={cls.link}>
						{t("Главная")}
					</span>
				</AppLink>
				<AppLink 
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath[AppRoutes.ABOUT]}
					className={cls.item}
				>
					<AboutIcon className={cls.icon}/>
					<span className={cls.link}>
						{t("О сайте")}
					</span>
				</AppLink>
			</div>
			<Button 
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>	
				<ThemeSwitcher/>
				<LangSwitcher 
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	);
};