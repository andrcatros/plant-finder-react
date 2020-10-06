import React from 'react';

const Profile = ({
  firstName,
  lastName,
  imageURL
}) => (
  <div>
    <div>
      <img src={ imageURL } className='avatar-image' />
    </div>
    Name: { firstName } { lastName }
  </div>
)

export default Profile;