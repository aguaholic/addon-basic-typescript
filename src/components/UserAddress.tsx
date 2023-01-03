import { UserData } from '../UserData';

interface UserAddressComponentProps {
  user: UserData,
}

const UserAddress = ({ user: { address } }: UserAddressComponentProps) => {
  return (
    <h3>{address}</h3>
  );
}

export default UserAddress;
