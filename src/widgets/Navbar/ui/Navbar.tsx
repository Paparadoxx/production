import { classNames } from "shared/lib/classnames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className? : string,
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar)}>
			<div className={cls.links}>
				<AppLink to={"/"} className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink to={"/about"}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};

