import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';
import ActiveLink from '../ActiveLink';

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </ActiveLink>

    // <Link href={route}>
    //   <a className="nav-link port-navbar-link">{title}</a>
    // </Link>
  );
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectColour() {
    const { page } = this.props;

    switch (page) {
      case 'home':
        return 'home';
      case 'web':
        return 'web';
      case 'app':
        return 'app';
      case 'ecommerce':
        return 'ecommerce';
      case 'graphic':
        return 'graphic';
      default:
        return 'default';
    }
  }

  render() {
    const { className } = this.props;

    return (
      <div>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className} menu-open port-navbar-${this.selectColour()}`}
          light //was light - refers to burger
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            <img
              src="/static/images/Dux_logo2.svg"
              style={{ height: '75px', paddingBottom: '10px' }}
            />
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggle}
            style={{ borderColor: 'rgba(0,0,0,0)' }}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret className="port-navbar-drop">
                  Our Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <BsNavLink route="/webdev" title="Web Development" />
                  </DropdownItem>
                  <DropdownItem>
                    <BsNavLink route="/appdev" title="iOS Apps" />
                  </DropdownItem>
                  <DropdownItem>
                    <BsNavLink route="/ecommerce" title="E-Commerce" />
                  </DropdownItem>
                  <DropdownItem>
                    <BsNavLink route="/graphic" title="Graphic Design" />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/contact" title="Contact Us" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
