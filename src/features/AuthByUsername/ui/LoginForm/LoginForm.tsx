/* eslint-disable react/display-name */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { memo, useCallback } from "react";

import { loginByUsername } from "../../model/services/LoginByUsername/loginByUsername";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	

	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback((event) => {
		dispatch(loginActions.setUsername(event.target.value));
	},[dispatch]);

	const onChangePassword = useCallback((event) => {
		dispatch(loginActions.setPassword(event.target.value));
	},[dispatch]);

	const onLoginClick = useCallback (() => {
		dispatch(loginByUsername({username, password}));
	}, [dispatch, username, password]);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount={true}
		>
			<div className={classNames(cls["login-form"], {}, [className])}>
				<Text title={t("?????????? ??????????????????????")} />
				{error && <Text text={t("???? ?????????? ???????????????? ?????????? ?????? ????????????")} theme={TextTheme.ERROR} />}
				<Input
					autoFocus
					type="text"
					className={cls.input}
					placeholder="?????????????? ??????"
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder="?????????????? ????????????"
					onChange={onChangePassword}	
					value={password}
				/>
				<Button
					theme={ButtonTheme.BACKGROUND_INVERTED}
					className={cls["login-btn"]}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t("??????????")}
				</Button>
			</div>
		</DynamicModuleLoader>
		
	);
});

export default LoginForm;