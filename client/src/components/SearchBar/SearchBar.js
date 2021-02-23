import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
//import users from './UserList'


const users = [
    { id: '1', username: 'user123' },
    { id: '2', username: 'user456' },
    { id: '3', username: 'user789' }
  ];

const selectedUsers =[]
var selectedUser={}
  

const filterUsers = (users, query) => {
    if (!query) {
        return users;
    }

    return users.filter((user) => {
        const result = user.username.toLowerCase();
        return result.includes(query);
    });
};

const displaySelectedUsers = (filteredUsers, selectedUsers) => {
    if(filteredUsers.length == 1){ //also check if already in array
        selectedUser=filteredUsers[0]
        selectedUsers.push(selectedUser)
        console.log(selectedUsers)
    }
    
    return(
        <>
            <h2 className="sub-title" >User List</h2>
            
            <ul>
                {selectedUsers.map((selectedUser) => (
                    <li key={selectedUser.id}>{selectedUser.username}</li>
                ))}
            </ul>
            
        </>        
    )
    
    
}

const SearchBar = () => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredUsers = filterUsers(users, searchQuery);

    

    return (       
        <form
            action="/"
            method="get"
            autoComplete="off"
            //onSubmit={onSubmit}
        >
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search for users"
                name="Search Users"
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            {/* maybe replace this search with an add button in user form */}
            <button type="button" onClick={(e)=> {displaySelectedUsers(filteredUsers, selectedUsers)}}>Add</button>
            
            
    
        </form>
    );

}

export default SearchBar;