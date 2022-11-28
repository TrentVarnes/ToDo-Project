/**
 * This is the Analytics page that shows how many tasks
 * were created and completed between query param time periods 
 */

import { useRouter } from "next/router";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function Analytics({tasks = {}}) {
  const { query } = useRouter();
  
  // this is used to add all tasks that match the if statement 
  const createdTasks = [];

  // this is used to add all tasks that match the if statemen
  const completedTasks = [];

  // create a date using the older query param date
  const thenD = new Date(query.then);

  // create a date using the newer query param date 
  const nowD = new Date(query.now);

  // This loops through the Tasks gathered from the GET API call and gets data from each task 
  tasks.forEach(element => {
    const taskD = new Date(element.createdAt)
    const taskD2 = new Date(element.updatedAt)
    // if statement to see if the task was created within the two query param dates 
    if (thenD.getTime() <= taskD.getTime() && nowD.getTime() >= taskD.getTime()){
      createdTasks.push(element);
    };

    // if statement to see if the task was completed within the two query param dates 
    if (thenD.getTime() <= taskD2.getTime() && nowD.getTime() >= taskD2.getTime() && element.status == true)
      completedTasks.push(element);
    });

  // returns the analysis date inside of an accordion
  return (
    <Card className="mx-auto" style={{ width: '40rem' }}>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How many tasks were created?</Accordion.Header>
        <Accordion.Body>
          <p>You created this many tasks from {query.then} to {query.now}: </p>
          <h1>{createdTasks.length}</h1>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How many tasks were completed?</Accordion.Header>
        <Accordion.Body>
          <p>You completed this many tasks from {query.then} to {query.now}: </p>
          <h1>{completedTasks.length}</h1>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  );
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
