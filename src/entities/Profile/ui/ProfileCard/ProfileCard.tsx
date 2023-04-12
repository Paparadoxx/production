import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Country, CountrySelect } from "entities/Country";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Loader } from "shared/ui/Loader/Loader";

interface ProfileCardProps {
	className? : string,
	data?: Profile,
	isLoading?: boolean;
	error?: string;
	readOnly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCountry?: (country: Country) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps ) => {
	const {
		className,
		data,
		isLoading,
		readOnly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCountry,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar
	} = props;

	const {t} = useTranslation("profile");

	if (isLoading) {
		return (
			<div className={classNames(cls["profile-card"], { [cls.loading]: true }, [className])} >
				<Loader />
			</div>
		);
	}
	
	const mods: Mods = {
		[cls.editing]: !readOnly,
	};
	return (
		<div className = {classNames(cls["profile-card"], mods, [className])}>
			<div className={cls.data}>
				{data?.avatar && (
					<div className={cls["avatar-wrapper"]}>
						<Avatar src={data?.avatar} />
					</div>
				)}
				<Input
					value={data?.first}
					placeholder={t("Ваше имя")}
					className={cls.input}
					onChange={onChangeFirstname}
					readOnly={readOnly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={cls.input}
					onChange={onChangeLastname}
					readOnly={readOnly}
				/>
				<Input
					value={data?.age}
					placeholder={t("Ваш возраст")}
					className={cls.input}
					onChange={onChangeAge}
					readOnly={readOnly}
				/>
				<Input
					value={data?.city}
					placeholder={t("Город")}
					className={cls.input}
					onChange={onChangeCity}
					readOnly={readOnly}
				/>
				<Input
					value={data?.username}
					placeholder={t("Введите имя пользователя")}
					className={cls.input}
					onChange={onChangeUsername}
					readOnly={readOnly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t("Введите ссылку на аватар")} 
					className={cls.input}
					onChange={onChangeAvatar}
					readOnly={readOnly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readOnly={readOnly}
				/>
			</div>
		</div>
	);
};