import React from 'react';
import { Button } from '@mantine/core';
import { NavLink, NavLinkProps } from 'remix';

const NavLinkButton = (props: NavLinkProps) => {
  const { children, ...other } = props;
  return (
    <NavLink {...other}>
      {({ isActive }) => (
        <Button variant={isActive ? 'filled' : 'default'} fullWidth>
          {children}
        </Button>
      )}
    </NavLink>
  );
};

export default NavLinkButton;
