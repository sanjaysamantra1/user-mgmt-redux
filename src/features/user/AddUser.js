import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

export default function AddUser() {
  const emptyUser = { id: '', name: '', gender: '' };
  const [user, setUser] = useState(emptyUser);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let actionObj = addUser(user);
    dispatch(actionObj);
    setUser(emptyUser);
  };

  return (
    <>
      <h3 className='text-center'>Add User</h3>
      <form onSubmit={submitHandler} className='border p-2'>
        <p>
          Id:
          <input
            name="id"
            value={user.id}
            onChange={(e) => setUser({ ...user, id: e.target.value })}
          />
        </p>

        <p>
          Name:
          <input
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          Gender:
          <input
            name="gender"
            value={user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
          />
        </p>

        <button>submit</button>
      </form>
    </>
  );
}
