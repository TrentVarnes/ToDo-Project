/**
 * Home page that displays the create task from and the list of tasks 
 */

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from '../components/Form';
import Todo from '../components/Todo';
import { Card, ListGroupItem } from 'react-bootstrap';

export default function Home({tasks = []}) {
  return(
    <Card className="mx-auto" style={{ width: '40rem' }}>
      <Card.Title className="text-center"><h1 className="text-center">Task Tracker</h1></Card.Title>
      <ListGroup>
        <ListGroupItem>
        <Form tasks={tasks}/>
        <Todo tasks={tasks}/>
        </ListGroupItem>
      </ListGroup>
      </Card>
  )

};

  // fetch all tasks using API GET call
  export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/task");
    const tasks = await response.json();
    return {
      props: {
        tasks
      }
    }
};
