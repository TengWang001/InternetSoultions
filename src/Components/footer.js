import { Card, Container, Navbar } from "react-bootstrap";

const Appfooter = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container className="justify-content-center">
        <div>© 2022 Copyright: CS615 Project</div>
      </Container>
    </Navbar>
  );
};

export default Appfooter;
