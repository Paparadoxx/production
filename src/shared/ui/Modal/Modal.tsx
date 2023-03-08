import  { ReactNode, useCallback, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { useTheme } from "App/providers/ThemeProvider/lib/useTheme";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose
	} = props;

	const [closed, setClosed] = useState(false);
	const { theme } = useTheme();

	const closeHandler = useCallback(() => {
		if(onClose) {
			onClose();
		}
	},[onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			closeHandler();
		}
	}, [closeHandler]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.closed]: closed
	};

	return (
		<Portal>
			<div className={classNames(cls.modal, mods, [className, theme])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div 
						className={cls.content}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};