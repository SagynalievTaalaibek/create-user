import {User, UserFormData} from '../../types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserFormData>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked
    }));
  };


  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    });

    setUser({
      name: '',
      email: '',
      active: false,
      role: '',
    });
  };


  return (
    <form onSubmit={onFormSubmit}>
      <h3>Add new User</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Put email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="active"
          name="active"
          checked={user.active}
          onChange={changeCheckbox}
        />
        <label className="form-check-label" htmlFor="active">
          Active Yes/No
        </label>
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          name="role"
          value={user.role}
          onChange={changeUser}
        >
          <option value="">Choose one</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create new User</button>
    </form>
  );
};

export default UserForm;