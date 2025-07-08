import React from 'react';

function ProfileCard({ name, role, image }) {
  return (
    <><div className="card">
          <img src={image} alt={name} className="avatar" />
          <h3>{name}</h3>
          <p>{role}</p>
      </div><br /><hr /></>
  );
}

export default ProfileCard;
