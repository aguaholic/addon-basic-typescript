import { UserData } from '../UserData';

interface UserAgeComponentProps {
  user: UserData,
}

const UserAge = ({ user: { age } }: UserAgeComponentProps) => {
  return (
    <h2>{age}</h2>
  );
}

export default UserAge;
