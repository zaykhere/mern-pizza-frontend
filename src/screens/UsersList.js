import React, {useEffect} from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from "react-redux";
import { getAllUsers } from '../actions/userActions';

function UsersList() {
  const dispatch = useDispatch();

  const getAllUsersState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = getAllUsersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])
  


  return (
    <div>
      <h2 className='mt-2 mb-3 text-center' style={{fontSize: '28px'}}>
        Users List
      </h2>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <table className='table table-striped table-bordered'>
      <thead className="table-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user=> (
            <tr>
              <td>{user._id}</td>
              <td> {user.name} </td>
              <td> {user.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 

export default UsersList