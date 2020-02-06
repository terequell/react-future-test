import React from 'react'

const Tableelement = ({user, setCurrentUser}) => {
   return (
      <tr onClick = {() => setCurrentUser(user)}>
         <td>{user.id}</td>
         <td>{user.firstName}</td>
         <td>{user.lastName}</td>
         <td>{user.email}</td>
         <td>{user.phone}</td>
      </tr>
   )
}

export default Tableelement