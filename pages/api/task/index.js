/* eslint-disable import/no-anonymous-default-export */
import Task from "../../../model/Task";
import { dbConnect, runDB } from "../../../db/index";
//import Morgan from "morgan";

dbConnect();

/**export default async function handler(req, res) {
    const { method, body } = req;
    const morgan = Morgan("dev");

    switch(method) {
        case "GET":
            try {
                const task = await Task.find();
                await runDB(req, res, morgan);
                return res.status(200).json(task);
            } catch (error) {
                return res.status(400).json({msg: error.message });
            }
        case "POST":
            try {
                const newTask = new Task(body);
                const savedTask = await newTask.save();
                await runDB(req, res, morgan);
                return res.status(200).json(savedTask);
            } catch (error) {
                return res.status(400).json({msg: error.message });

            }
    } 
};
*/

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(Task)
    } else if (req.method === 'POST') {
      const newTask = new Task(req.body);
      Task.save(newTask);
      res.status(201).json(newTask)
    }
  }