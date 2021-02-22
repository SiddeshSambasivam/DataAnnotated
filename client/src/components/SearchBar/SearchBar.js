import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
//import users from './UserList'


const users = [
    { id: '1', username: 'user123' },
    { id: '2', username: 'user456' },
    { id: '3', username: 'user789' }
  ];
  

const filterUsers = (users, query) => {
    if (!query) {
        return users;
    }

    return users.filter((user) => {
        const result = user.username.toLowerCase();
        return result.includes(query);
    });
};

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
            onSubmit={onSubmit}
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
            <button type="submit">Search</button>
        </form>
    );

}

export default SearchBar;