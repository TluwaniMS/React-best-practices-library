import React from 'react';
import { SuperUserView, AdminView, UserView } from './Views';

interface UserRole {
  role: 'Admin' | 'User' | 'Super User';
}

export const RoleViewRenderer = (user: UserRole) => {
  return (
    <div>
      {user.role === 'Super User' && <SuperUserView />}
      {user.role === 'Admin' && <AdminView />}
      {user.role === 'User' && <UserView />}
    </div>
  );
};
