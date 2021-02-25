import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'
//import users from './UserList'


const users = [
    { id: '1', username: 'user123' },
    { id: '2', username: 'user456' },
    { id: '3', username: 'user789' }
  ];

let selectedUsers = []
var selectedUser = {}
let toggleFilteredUsers = false
let toggleSelectedUsers= false
  

const filterUsers = (users, query) => {
    if (!query) {
        toggleFilteredUsers=false;
        return users;
    }
    else toggleFilteredUsers = true;

    return users.filter((user) => {
        const result = user.username.toLowerCase();
        return result.includes(query);
    });
};

const addSelectedUser = (filteredUsers, selectedUsers) => {
    if(filteredUsers.length == 1){ //since we wanna add 1 user at a time, check that only 1 user is being displayed
        //also check if said user is already in the list      
        selectedUser=filteredUsers[0]
        if( !selectedUsers.includes(selectedUser)){
            selectedUsers.push(selectedUser)
            console.log("selected users: ", selectedUsers)
        }
        else console.log("cannot add duplicate user")
    }
    else console.log("cannot select multiple users")

    toggleSelectedUsers = true
    console.log("toggleSelectedUsers is ", toggleSelectedUsers)
    return(toggleSelectedUsers); 
}

const removeSelectedUser = (selectedUsers, user) => {
    console.log("removing user ", user)
    const targetIndex = selectedUsers.indexOf(user)
    if(targetIndex > -1){
        selectedUsers.splice(targetIndex, 1)
    }
    console.log("new selected users: ", selectedUsers)
}

const SearchBar = () => {
    //useState(users) //redundant
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    //const [filteredUsers, filterUsers] = useState(query || '');
    const filteredUsers = filterUsers(users, searchQuery);
    //toggleSelectedUsers = displaySelectedUsers(filteredUsers, selectedUsers, true)
    
    //const [selectedUsers, setSelectedUsers] = useState(filteredUsers);  

    return (       
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            
            <input
                value={searchQuery}
                onInput={
                    (e) => setSearchQuery(e.target.value)                    
                }
                type="text"
                id="header-search"
                placeholder="Search for users"
                name="Search Users"
            />
            <button type="button" onClick={(e)=> addSelectedUser(filteredUsers, selectedUsers)}>Add</button>
            
            {/* Display suggestions only when the user types */}
            {toggleFilteredUsers
                ? <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                  </ul>  
                : ''
            }
       
            <h2 className="sub-title" >User List</h2>    
            {toggleSelectedUsers
                ?  <ul>
                        {selectedUsers.map((user) => (
                            <button type="button" onClick={(e)=> removeSelectedUser(selectedUsers, user)}>
                                <li key={user.id}>{user.username}</li>
                            </button>
                            
                        ))}
                        
                    </ul>
                : ''
            }           
        </form>
    );

}

export default SearchBar;