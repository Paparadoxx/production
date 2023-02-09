import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className? : string,
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar)}>
			<ThemeSwitcher/>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	)
};

