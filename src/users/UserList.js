import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserAdd from "./UserAdd";
import axiosAuth from "../utils/axiosAuth";

const UserList = props => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const handleClickAdd = () => {
    setAddMode(!addMode);
  };

  //USERS AXIOS CALL
  useEffect(() => {
    axiosAuth()
      .get(`/users`)
      .then(res => {
        console.log(res.data)
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);


  const addUser = newUser => {
    setLoading(true);
    console.log(newUser);
    axiosAuth()
      .post(`/users`, newUser)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => console.log(err));
  };

  const deleteUser = users => {
    setLoading(true);
    // console.log(users);
    axiosAuth()
      .delete(`/users/${users.id}`, users)
      .then(res => {
        console.log(res);
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const editUser = users => {
    console.log("Time to edit post");
    console.log(users.id);
    setLoading(true);
    axiosAuth()
      .put(`/users/${users.id}`, users)
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  /**
 TODO: Change hard coded name to auth user name
 */
  return (
    <div>
      {loading}
      <button onClick={handleClickAdd}>
        {!addMode ? `New User` : "Cancel"}
        {/* {console.log(user.id)} */}
      </button>
      {addMode ? (
        <UserAdd addUser={addUser} toggleAdd={handleClickAdd} />
      ) : (
        <div className="user-content">
          {user &&
            user.map(user=> {
              return (
                <UserCard
                  key={user.id}
                  name={user.name}
                  user={user}
                  deletePost={deleteUser}
                  editPost={editUser}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default UserList;
