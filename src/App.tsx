import Navbar from './components/Navbar/Navbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App = () => {
  return (
    <>
      <header className="bg-success">
        <Navbar/>
      </header>
      <main className="container">
        <div className="row mt-3">
          <div className="col-6">
            <UserForm/>
          </div>
          <div className="col-6">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;