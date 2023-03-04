import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.navbar)}>
			<div className={cls.links}>
				<AppLink to={"/"} className={cls["main-link"]}>
					{t("Главная")}
				</AppLink>
				<AppLink to={"/about"}>
					{t("О сайте")}
				</AppLink>
			</div>
		</div>
	);
};

