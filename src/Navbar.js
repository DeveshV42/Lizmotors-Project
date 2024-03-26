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
                      handleMouseEnter('Online', 'Refers to activities, interactions, or services conducted over the internet, typically through websites, applications, or digital platforms.')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Online
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Interview', 'A structured conversation between two or more people, often conducted to gather information, assess qualifications, or explore opinions on a specific topic or for a particular purpose.')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Interview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Public Data', ' Information that is freely available and accessible to the general public. This data can include government records, research findings, statistical reports, and other openly shared information.')
                    }
                    onMouseLeave={handleMouseLeave}
                    href="#"
                  >
                    Public Data
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter('Health', ' The state of physical, mental, and social well-being, encompassing aspects such as disease prevention, treatment, lifestyle choices, and overall quality of life.')
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
                    handleMouseEnter('PRD', 'A product requirements document (PRD) is an artifact used in the product development process to communicate what capabilities must be included in a product release to the development and testing teams. This document is typically used more in waterfall environments where product definition, design, and delivery happen sequentially, but may be used in an agile setting as well.')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  PRD
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Specs', 'Specs, or specifications, are a set of requirements that outline what goes into the production of a product.')
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
                    handleMouseEnter('Hardware', 'Hardware is tangible, operates independently of software, and is the foundation for all computing tasks. Hardware can be susceptible to wear and tear, and may require replacement over time.')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Hardware
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Software', 'Software is a collection of instructions, data, or computer programs that run machines and perform activities. The operating system (OS) is a type of system software that manages a computers hardware, software, processes, and memory. It also allows users to communicate with the computer without knowing how to speak the computers language.')
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
                    handleMouseEnter('Material', 'Materials are the inputs or resources used in the production process to generate finished goods and services. They can be classified on the basis of their physical and chemical properties, or on their geological origin or biological function.')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Material
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Production', 'Production is the process of creating a good or service. It involves the use of materials, labor, and capital to transform raw materials into finished products. Production can be divided into two main categories: primary production and secondary production.')
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
                    handleMouseEnter('Online', 'You buy directly from the carmaker. Online car dealerships, or online car dealers, allow customers to browse vehicles, get financing, and complete their purchases online. They often offer a wide range of vehicles, new and used, at competitive prices.')
                  }
                  onMouseLeave={handleMouseLeave}
                  href="#"
                >
                  Online
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseEnter={() =>
                    handleMouseEnter('Dealership', 'You buy from a third party, like a dealership, which may have partnered with banks to help customers with financing. Dealerships usually sell one brand of vehicle, so if you are looking for a Nissan but only have a Ford dealer nearby, shopping online may be better.')
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
