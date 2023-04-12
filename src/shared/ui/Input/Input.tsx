/* eslint-disable react/display-name */
import { classNames } from "shared/lib/classNames/classNames";
import {InputHTMLAttributes, memo} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string;
		value?: string | number;
		onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
	const {
		className,
		placeholder,
		type = "text",
		value,
		onChange,
		...otherProps
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls["input-wrapper"], {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>
					{`${placeholder}>`}
				</div>
			)}
			<input
				type={type}
				className={cls.input}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});