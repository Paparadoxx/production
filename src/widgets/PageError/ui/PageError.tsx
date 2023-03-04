import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
	className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};
	return (
		<div className={classNames(cls["page-error"])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button
				onClick={reloadPage}
			>
				{t("Обновить страницу")}
			</Button>
		</div>
	);
};