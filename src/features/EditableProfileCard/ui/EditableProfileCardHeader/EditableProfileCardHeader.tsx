import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useCallback } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./EditableProfileCardHeader.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "features/EditableProfileCard/model/services/updateProfileData/updateProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getUserAuthData } from "entities/User";

interface EditableProfileCardHeaderProps {
	className? : string,
}

export const EditableProfileCardHeader = ({className}: EditableProfileCardHeaderProps ) => {
	const {t} = useTranslation("profile");

	const readOnly = useSelector(getProfileReadonly);
	const profileData = useSelector(getProfileData);
	const authData = useSelector(getUserAuthData);
	// const canEdit = profileData?.id === authData?.id;

	const dispatch = useAppDispatch();


	const onEdit = useCallback(() =>{
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]); 

	const onCancelEdit = useCallback(() =>{
		dispatch(profileActions.cancelEdit());
	}, [dispatch]); 

	const onSave = useCallback(() =>{
		dispatch(updateProfileData());
	}, [dispatch]); 

	return (
		<div className = {classNames(cls.header, {}, [className])}>
			<Text title={t("Профиль")}/>
			<div>
				{readOnly ? (
					<Button 
						theme={ButtonTheme.OUTLINE}
						className={cls["edit-button"]}
						onClick={onEdit}
					>
						{t("Редактировать")}
					</Button>
				)
					: (
						<>
							<Button
								className={cls["edit-btn"]}
								theme={ButtonTheme.OUTLINE_RED}
								onClick={onCancelEdit}
							>
								{t("Отменить")}
							</Button>
							<Button
								className={cls["save-btn"]}
								theme={ButtonTheme.OUTLINE}
								onClick={onSave}
							>
								{t("Сохранить")}
							</Button>
						</>
					)
				}
			</div>
		</div>
	);
};