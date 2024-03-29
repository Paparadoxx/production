import { Country } from "../../model/types/country";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

interface CountrySelectProps {
	className? : string;
	value?: Country;
	onChange?: (value: Country) => void;
	readOnly?: boolean;
}

const options = [
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Armenia, content: Country.Armenia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = (
	{className, value, onChange, readOnly}: CountrySelectProps ) => {

	const { t } = useTranslation();

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country);
	}, [onChange]);
			
	return (
		<Select
			className={classNames("", {}, [className])}
			label={t("Укажите страну")}
			options={options}
			value={value}
			readOnly={readOnly}
			onChange={onChangeHandler}
		/>
	);
};