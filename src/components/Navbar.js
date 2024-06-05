import 'rsuite/dist/rsuite-no-reset.min.css';
import './Navbar.css';
import { Sidenav, Navbar, Nav, Button, Dropdown } from 'rsuite/';
import * as Icons from 'react-icons/fa';
import { useEffect, useState } from 'react';

const NavBar = ({ active, onSelect, ...props }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1130) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1130) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar {...props} className="navbar" appearance="subtle">
        {mobile && (
          <Nav className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </Nav>
        )}

        <Navbar.Brand href="#" className="navbar-logo">
          Dribble
        </Navbar.Brand>
        {!mobile && (
          <>
            {' '}
            <Nav
              onSelect={onSelect}
              activeKey={active}
              className="nav-item noHover"
            >
              <Nav.Menu title="Find Designers">
                <Nav.Item className="nav-title-item">Designer Search</Nav.Item>
                <Nav.Item className="nav-title-item">Post a job</Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav onSelect={onSelect} activeKey={active} className="nav-item">
              <Nav.Item>Insipiration</Nav.Item>
            </Nav>
            <Nav onSelect={onSelect} activeKey={active} className="nav-title">
              <Nav.Menu title="Courses">
                <Nav.Item className="nav-title-item">UX Diploma</Nav.Item>
                <Nav.Item className="nav-title-item">UI Certificate</Nav.Item>
                <li>-------------------------------</li>
                <Nav.Item className="nav-title-item">
                  Live Interaction{' '}
                </Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav onSelect={onSelect} activeKey={active}>
              <Nav.Item className="nav-item">Jobs</Nav.Item>
              <Nav.Item className="nav-item">Go Pro</Nav.Item>
            </Nav>
          </>
        )}
        <Nav pullRight>
          {!mobile && <Nav.Item className="nav-item">logIn </Nav.Item>}

          <Nav.Item>
            <Button className="button" appearance="default">
              Sign In
            </Button>{' '}
          </Nav.Item>
        </Nav>
      </Navbar>

      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <Sidenav className="sidenav" appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <Dropdown title="find Designers" className="sidenav-item">
                <Dropdown.Item className="sidenav-item">
                  Designer Search
                </Dropdown.Item>
                <Dropdown.Item className="sidenav-item">
                  Post a job
                </Dropdown.Item>
              </Dropdown>
            </Nav>

            <Nav>
              <Nav.Item className="sidenav-item">Insipiration</Nav.Item>
            </Nav>

            <Nav>
              <Dropdown title="Courses" className="sidenav-item">
                <Dropdown.Item className="sidenav-item">
                  UX Diploma
                </Dropdown.Item>
                <Dropdown.Item className="sidenav-item">
                  UI Certificate
                </Dropdown.Item>
                <Dropdown.Item className="sidenav-item">
                  Live Interactive workshops
                </Dropdown.Item>
              </Dropdown>
            </Nav>

            <Nav>
              <Nav.Item className="sidenav-item">Jobs</Nav.Item>
              <Nav.Item className="sidenav-item">Go Pro</Nav.Item>

              <Nav.Item className="sidenav-item">Log in</Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
};
export default NavBar;
