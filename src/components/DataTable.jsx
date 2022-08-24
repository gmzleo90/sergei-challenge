import { Table, Container } from "react-bootstrap";
import fakeData from "../utils/fakeData";

export default function DataTable() {
  return (
    <Container fluid>
      <h2 className="text-center">Data table component.</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {Object.keys(fakeData[0]).map((e) => {
              return <th key={e}>{e.toUpperCase()}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {fakeData.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.nombre}</td>
                <td>{person.edad}</td>
                <td>{person.carrera}</td>
                <td>{person.hobbie}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
