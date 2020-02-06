import React from 'react'

const ExtendInfo = ({currentUser}) => {
   return (
      <div>
         <p>You'd choosen user <b>{currentUser.firstName} {currentUser.lastName}</b></p>
         <p>Description: {currentUser.description}</p>
         <p>Address: <b>{currentUser.address.streetAddress}</b></p>
         <p>City: <b>{currentUser.address.city}</b></p>
         <p>Province/state: <b>{currentUser.address.state}</b></p>
         <p>Postcode: <b>{currentUser.address.zip}</b></p>
      </div>
   )
}

export default ExtendInfo