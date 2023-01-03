import { useEffect, useState } from 'react';
import { UserData } from './UserData';
import UserName from './components/UserName';
import UserAge from './components/UserAge';
import UserAddress from './components/UserAddress';
import UserNameChanger from './components/UserNameChanger';
import './App.css';

function App() {
  const [user, setuser] = useState<UserData>({
    name: '',
    age: 0,
    address: ''
  });

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      
      const firstUser = data.results[0];

      setuser((prev) => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        }
      })
    };

    getUserData();
  }, [])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.value;

    setuser({
      ...user,
      name: inputValue,
    })
  }

  return (
    <div className='App'>
      <UserName user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChanger user={user} onNameChange={handleChange}/>
    </div>
  );
}

export default App;
