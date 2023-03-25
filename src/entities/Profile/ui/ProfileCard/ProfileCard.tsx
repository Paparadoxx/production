import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsloading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
	className? : string,
}

export const ProfileCard = ({className}: ProfileCardProps ) => {
	const {t} = useTranslation("profile");
	
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	return (
		<div className = {classNames(cls["profile-card"], {}, [className])}>
			<div className={cls.header}>
				<Text title={t("Профиль")}/>
				<Button 
					theme={ButtonTheme.OUTLINE}
					className={cls["edit-button"]}
				>
					{t("Редактировать")}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t("Ваше имя")}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={cls.input}
				/>
			</div>
		</div>
	);
};