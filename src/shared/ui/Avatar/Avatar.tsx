import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
	className? : string;
	src?: string;
	alt?: string;
	size?: number;
}

export const Avatar = ({className, src, alt, size}: AvatarProps ) => {
	const mods: Mods = {};
	const styles = useMemo<CSSProperties>(() => ({
		width: size || 100,
		height: size || 100
	}), [size]);

	return (
		<img 
			src={src}
			alt={alt}
			style={styles}
			className = {classNames(cls.avatar, mods, [className])}
		/>
	);
};