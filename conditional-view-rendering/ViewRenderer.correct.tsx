import React from 'react';
import { SuperUserView, AdminView, UserView } from './Views';

const views = {
  SuperUser: SuperUserView,
  Admin: AdminView,
  User: UserView,
};

interface UserRole {
  role: 'Admin' | 'User' | 'SuperUser';
}

export const RoleViewRenderer = (user: UserRole) => {
  const UserView = views[user.role];
  
  return (
    <div>
      <UserView />
    </div>
  );
};
