import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import DetailBox from './DetailBox'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const NavBar = () => {
  const [hoveredDetail, setHoveredDetail] = useState(null);

  const handleMouseEnter = (title, description) => {
    setHoveredDetail({ title, description });
  };

  const handleMouseLeave = () => {
    setHoveredDetail(null);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Lizmotors Mobility</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Research" id="basic-nav-dropdown-1">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('External', 'Description for External')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                </NavDropdown.Item>
                <NavDropdown title="External" id="basic-nav-dropdown-2">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('External B2B', 'Description for External B2B')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  B2B
                </NavDropdown.Item>
                <NavDropdown title="B2C" id="basic-nav-dropdown-2">
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Online', 'Description for Online')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Online
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Interview', 'Description for Interview')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Interview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Public Data', 'Description for Public Data')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Public Data
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Health', 'Description for Health')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Health
                  </NavDropdown.Item>
                </NavDropdown>
                </NavDropdown>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Internal', 'Description for Internal')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Internal
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Planning" id="basic-nav-dropdown-2">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('PRD', 'Description for PRD')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  PRD
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Specs', 'Description for Specs')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Specs
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Designing" id="basic-nav-dropdown-3">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Hardware', 'Description for Hardware')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Hardware
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Software', 'Description for Software')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Software
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Manufacturing" id="basic-nav-dropdown-4">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Material', 'Description for Material')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Material
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Production', 'Description for Production')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Production
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Sales/Marketing" id="basic-nav-dropdown-5">
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Online', 'Description for Online')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Online
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Dealership', 'Description for Dealership')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Dealership
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {hoveredDetail && <DetailBox title={hoveredDetail.title} description={hoveredDetail.description} />}
    </div>
  );
};

export default NavBar;
