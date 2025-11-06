import React from 'react'

export default async function UsersProfile() {

  interface Users{
    id : number,
    name : string
  }

  const rest = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache : 'no-store'
  })

  const users: Users[] = await rest.json();

  return (
    < div className='bg-midnight'>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>name {user.name}</li>)}
      </ul>
    </div >
  )
}
