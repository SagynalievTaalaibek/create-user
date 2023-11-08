import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="cart-text"><b>Name: </b>{user.name}</p>
        <p className="cart-text"><b>Email: </b>{user.email}</p>
        <p className="cart-text"><b>Active: </b>{user.active.toString()}</p>
        <p className="cart-text"><b>Role: </b>{user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;