'use client'

type User={
  id: number;
  name: string;
  username: string;
}

import {useState} from 'react';

export default function FilterUsers({users}: {users: User[] }){

    const [searchTerm, setSearchTerm] = useState('');

    //we made an array of users and we are filtering them based on the search term. 
    //We are using the filter method to filter the users based on the search term.
    //We are using the toLocaleLowerCase method to make the search case insensitive.
    //We are using the includes method to check if the search term is included in the user's name.
    //Filter users based on the search term

    const filteredUsers = users.filter(User => {
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <ul>
                {filteredUsers.map((user: User)=>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )

}