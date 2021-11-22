import { Card } from "react-bootstrap";

export default function DisplayUsers(props) {
  return (
    <>
      <Card className="text-center" style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title>
            {props.user.firstname} {props.user.lastname}
          </Card.Title>
          <Card.Text>
            Username: {props.user.username}
            <br></br>
            Admin Status: {props.user.admin.status}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
