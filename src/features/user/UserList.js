import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, selectUsers } from './userSlice'

export default function UserList() {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const deleteMyUser = (id) => {
        let actionObj = deleteUser({ id });
        dispatch(actionObj);
    }

    return <>
        <h3>User List</h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {users.map(user => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteMyUser(user.id)}>
                                DELETE</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
