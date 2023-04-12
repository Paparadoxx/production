import { classNames } from "shared/lib/classNames/classNames";
import { EditableProfileCard } from "features/EditableProfileCard";

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	// const {id} = useParams<{id: string}>();
	return (
		<div className={classNames("", {}, [className])}>
			<EditableProfileCard/>
		</div>
	);
};

export default ProfilePage;
