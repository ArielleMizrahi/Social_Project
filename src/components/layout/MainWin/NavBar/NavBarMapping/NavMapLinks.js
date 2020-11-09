import React, { Fragment } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavMapLinks = (props) => {
  return (
    <Fragment>
      <li>
        {console.log(props.link.item)}
        <NavDropdown.Item className="text-right">
          {/* NavLink */}
          <NavLink
            to={{
              pathname: `${props.link.path}/:${props.link.item}`,
              state: { item: props.link.item },
            }}
          >
            {props.link.name}
          </NavLink>
        </NavDropdown.Item>
      </li>
    </Fragment>
  );
};

export default NavMapLinks;
