/**
 * This is the todo component of the task tracker app
 * it displays each task in a list 
 */

import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useRouter } from "next/router";
import ListGroup from "react-bootstrap/ListGroup";


/**
 * returns list of all tasks 
 * @param tasks this represents the get API call which return all tasks 
 * @returns a ListGroup of all tasks as ListGroupItems 
 */
export default function Todo({tasks = []}) {

    const {push} = useRouter();

    // This updates the status of the current task on click using PUT call  
    // to the opposite of whatever the current status is.. ie from true to false 
    const handleChange = async ({id, status}) => {
        try {
            await fetch(`http://localhost:3000/api/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(!status)
            });
            await push("/")
        } catch (error) {
            console.log(error);
        }
    };


    // This will delete the current task when clicked using API DELETE call 
     const handleDelete = async ({id}) => {
        try {
            await fetch(`http://localhost:3000/api/${id}`, {
                method: "DELETE",
            })
            await push("/")
        } catch (error) {
            console.log(error);
        }
    };

    return(
          <ListGroup className="mt-4">
          {tasks && tasks.length > 0 ? tasks.map((task) => (
              <ListGroupItem className="d-flex" key={task.id}>
                <strong className={`${task.status ? "complete" : ""}`}>{task.name}</strong>
                <div className="ms-auto">
                    <Button variant="warning" size="sm" active onClick={() => handleChange(task)}>Mark Complete</Button>{' '}
                    <Button variant="danger" size="sm"  active onClick={() => handleDelete(task)}>Delete task</Button>
                </div>
              </ListGroupItem>
          )): <h4 className="text-center">No Tasks</h4>}
          </ListGroup>
    )
  
  };
  
