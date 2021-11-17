import { withIronSession } from "next-iron-session";
import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
export default function home({ user }) {
  if (user.admin === true) {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Hotel App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Manage" id="basic-nav-dropdown">
                  <Link href="/manageUsers" passHref>
                    <NavDropdown.Item>Manage Users</NavDropdown.Item>
                  </Link>
                  <Link href="/manageHotels" passHref>
                    <NavDropdown.Item>Manage Hotels</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar.Text>Signed in as: admin</Navbar.Text>
              <Navbar.Text>Logout</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Hotel App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Link href="/manageReservations" passHref>
                  <Nav.Link>Manage Reservations</Nav.Link>
                </Link>
              </Nav>
              <Navbar.Text>Signed in as: user</Navbar.Text>
              <Navbar.Text>Logout</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");
    console.log(user);
    if (!user) {
      return {
        redirect: {
          destination: "/something",
          permanent: false,
        },
      };
    }

    return {
      props: { user: req.session.get("user") },
    };
  },
  {
    password: process.env.APPLICATION_SECRET,
    cookieName: "hotel-cookie",
    cookieOptions: {
      secure: false,
    },
  }
);
