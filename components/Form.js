/**
 * This component uses react-hook-form to add new tasks to the task tracker app
 */

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";


/**
 * Form returns the react-hook-form
 * @param tasks this represents the get API call which return all tasks 
 * @returns a react-hook-form to accept new tasks
 */
export default function Form({tasks = []}) {
    const {register, handleSubmit, formState: { isValid, errors }} = useForm({
        mode: 'onChange',
    });

    const {push} = useRouter();

        const onSubmit = async (data) => {
            try {
                console.log(data);
                await fetch('http://localhost:3000/api/task', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data.name)
                })
                .then((response) => response.json())
                .then((data) => console.log(data));
                tasks.push(data)
                await push("/");
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className="App">
            <form width="field-width" onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name' , {required: true, maxLength: 42})} type="text" variant="outlined" placeholder="Enter a task" />
                {errors.name && errors.name.type === "required" && (
                <p class="text-center" role="alert">This is required</p>)}
                {errors.name && errors.name.type === "maxLength" && (
                <p class="text-center" role="alert">Task can be no longer than 42 characters</p>)}
                <div className="d-grid gap-2">
                    <Button variant="primary" size="sm" type="submit" disabled={!isValid}>Create Task</Button>
                </div>
            </form>
        </div>
    );
};
