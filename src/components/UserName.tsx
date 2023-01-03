import { UserData } from '../UserData';

interface UserNameComponentProps {
  user: UserData,
}

const UserName = ({ user: { name } }: UserNameComponentProps) => {
  return (
    <h1>{name}</h1>
  );
}

export default UserName;
