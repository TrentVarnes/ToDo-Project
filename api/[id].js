/**
 * API that makes HTTP calls that are specific to the task id
 */

import sequelize from "../../database/config/config";
import Tasks from "../../database/models/task";

export default async function handler(req, res) {
    const { method } = req;
    const {id} = req.query;
    await sequelize.authenticate();

    // Update
    //update task status using task id 
    if(method === "PUT") {
        try {
            //const data = JSON.parse(req.body);
            const {query: {id}} = req;
            const findTask = await Tasks.findOne({where: {id: id}});
            const result = await findTask.update({status: req.body});
            res.status(200).json(result);
            return result;
        } catch (error) {
            res.status(500).json({message:"task not updated"});
            console.error;
        }
    }

    //Delete
    //delete task by id 
    if(method === "DELETE") {
        try {
            const {query: {id}} = req;
            //const data = JSON.parse(req.body);
            const deleteTask = await Tasks.destroy({where: {id: id}});
            res.status(200).json({message:"task deleted"});
        } catch (error) {
            res.status(500).json({message:"unable to delete tasks"});
            console.error;
        }
    }
  }