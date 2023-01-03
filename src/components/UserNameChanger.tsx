import { UserData } from '../UserData'

interface UserAddressComponentProps {
  user: UserData,
  onNameChange(e: React.ChangeEvent<HTMLInputElement>): void,
}

const UserNameChanger = ({ user: { name }, onNameChange }: UserAddressComponentProps) => {
  return (
    <input type='text' value={name} onChange={onNameChange} />
  )
}

export default UserNameChanger