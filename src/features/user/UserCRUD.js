import React from 'react'
import UserList from './UserList'
import AddUser from './AddUser'

export default function UserCRUD() {
    return <>
        <h1 className='text-center'>This is User CRUD Example</h1>
        <hr />
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <UserList />
                </div>
                <div className='col-sm-4'>
                    <AddUser />
                </div>
            </div>
        </div>
    </>
}
