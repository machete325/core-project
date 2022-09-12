import React from 'react';
import s from './UserProfile.module.scss';

function UserProfile() {
  return (
    <div className={s.wrapper}>
      <div className={s.submenu}>
        <img alt="submenu" src="/images/icons/Submenu.svg" />
      </div>
      <div className={s.user_container}>
        <img alt="submenu" src="/images/icons/User.svg" />
      </div>
    </div>
  );
}

export default UserProfile;
