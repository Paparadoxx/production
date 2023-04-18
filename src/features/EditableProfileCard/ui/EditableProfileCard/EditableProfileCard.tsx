import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsloading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { ProfileCard } from "entities/Profile";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Country } from "entities/Country";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { classNames } from "shared/lib/classNames/classNames";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "../../model/consts/consts";

interface EditableProfileCardProps {
	className?: string,
	id?: string
}

const reducers: ReducersList = {
	profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
	const { className } = props;
	const { t } = useTranslation("profile");

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readOnly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
		[ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
		[ValidateProfileError.NO_DATA]: t("Данные не указаны"),
		[ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
		[ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
	};

	const dispatch = useAppDispatch();

	useEffect(() => {
		if(__PROJECT__ !== "storybook") {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || "" }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || "" }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || "" }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || "" }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || "" }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames("", {}, [className])}>
				<EditableProfileCardHeader/>
				{validateErrors?.length && validateErrors.map((err) => (
					<Text
						key={err}
						theme={TextTheme.ERROR}
						text={validateErrorTranslates[err]}
					/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readOnly={readOnly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCountry={onChangeCountry}
				/>
			</div>
		</DynamicModuleLoader>
	);
};