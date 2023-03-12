/* eslint-disable react/display-name */
import { classNames } from "shared/lib/classNames/classNames";
import {InputHTMLAttributes, memo} from "react";
import cls from "./Input.module.scss";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export const Input = memo((props: InputProps) => {
	const {
		className,
		type = "text",
		...otherProps
	} = props;

	return (
		<div className={classNames(cls["input-wrapper"], {}, [className])}>
			<input
				type={type}
				className={cls.input}
				{...otherProps}
			/>
		</div>
	);
});