import { Card } from "react-bootstrap";

export default function displayUsers(props) {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            {props.user.firstname} {props.user.lastname}
          </Card.Title>
          <Card.Text>
            Username: {props.user.username}
            Admin Status: {props.user.admin.status}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
