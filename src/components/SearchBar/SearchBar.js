import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'

const users = [
    { id: '1', username: 'user123' },
    { id: '2', username: 'user456' },
    { id: '3', username: 'user789' }
  ];

const SearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);  

    const filterUsers = (users) => {
        if (!searchQuery) {
            return users;
        }
    
        return users.filter((user) => {
            const result = user.username.toLowerCase();
            return result.includes(searchQuery);
        });
    };
    
    const toggleFilteredUsers = (event) => {
        setSearchQuery(event.target.value);
        setFilteredUsers(filterUsers(users));
    }

    const addSelectedUser = () => {
        if (filteredUsers.length == 1) { //since we wanna add 1 user at a time, check that only 1 user is being displayed
            //also check if said user is already in the list      
            const selectedUser=filteredUsers[0]
            console.log(searchQuery);
            console.log(`SelectedUser = ${selectedUser}`)
            if( !selectedUsers.includes(selectedUser)){
                console.log("selected users: ", selectedUsers)
                console.log("new user being selected: ", selectedUser)
                setSelectedUsers(selectedUsers.concat(selectedUser));
                console.log("filtered users: ", filteredUsers);
            }
            else console.log("cannot add duplicate user");
        }
        else console.log("cannot select multiple users or no users")
    }
    
    const removeSelectedUser = (selectedUsers, user) => {
        console.log("removing user ", user);
        let newSelectedUsers = selectedUsers.filter(aUser => !(user == aUser));
        setSelectedUsers(newSelectedUsers);
        console.log("new selected users: ", selectedUsers)
    }

    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (       
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            
            <input
                value={searchQuery}
                onInput={toggleFilteredUsers}
                type="text"
                id="header-search"
                placeholder="Search for users"
                name="Search Users"
            />
            <button type="button" onClick={(e)=> addSelectedUser()}>Add</button>
            
            {/* Display suggestions only when the user types */}
            {!(searchQuery == '')
                ? <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                  </ul>  
                : ''
            }
       

            {/* Display users as they get added*/}
            <h2 className="sub-title" >User List</h2>    
            {selectedUsers.length > 0
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