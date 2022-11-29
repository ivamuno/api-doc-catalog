import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { apis } from './configuration';
import { Link } from 'react-router-dom';

class Aside extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: props.collapsed, toggled: props.toggled };
  }

  render() {
    const { collapsed, toggled } = this.state;

    return (
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
      >
        <SidebarHeader
          onClick={() => {
            this.setState({ collapsed: false });
          }}
        >
          <Link to='/'>
            <div id="logo">Core</div>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            {apis.map(item => (
              <SubMenu
                title={item.title}
                icon={item.icon}
                key={item.title}
              >
                {item.child.map(child => (
                  <MenuItem
                    onClick={() => {
                      this.setState({ collapsed: true });
                    }}
                    key={child.title}>
                    <Link to={`/docs/${item.key}/${child.key}`} />
                    {child.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <button id="collapse" onClick={() => this.setState((prevState) => ({ collapsed: !prevState.collapsed }))}>
            <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
            </svg>
            <span className="sr-only">Collapse</span>
          </button>
        </SidebarFooter>
      </ProSidebar>
    );
  }
};

export default Aside;
