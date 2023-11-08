import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <>
      <header className="bg-success">
        <Navbar/>
      </header>
      <main className="container">
        <div className="row mt-3">
          <div className="col-6">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-6">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;