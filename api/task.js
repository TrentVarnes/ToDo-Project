/**
 * API that makes HTTP calls using the GET and POST methods 
 */

import sequelize from "../../database/config/config";
import Tasks from "../../database/models/task";

export default async function handler(req, res) {
    await sequelize.authenticate();

    // Create
    // Create task
    if(req.method === "POST") {
        try {
            //const data = JSON.parse(req.body)
            const newTask = await Tasks.create({name: req.body, status: false});
            res.status(201).json(newTask.toJSON())
        } catch (error) {
            res.status(500).json({message:"task not added"})
            console.error;
        }
    }

    // Read
    //Get all tasks
    if(req.method === "GET") {
        try {
            const findTasks = await Tasks.findAll();
            res.status(200).json(findTasks)
        } catch (error) {
            res.status(500).json({message:"unable to get tasks"})
            console.error;
        }
    }
  }