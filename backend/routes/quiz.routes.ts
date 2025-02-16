import express, { Request, Response } from "express";
import pool from "../config/db";
import {z} from "zod"

const router = express.Router();

router.post('/all-quizzes', async (req: Request, res: Response) : Promise<void> => {
    try {
        const {username} = req.body

        const [userRow]: any[] = await pool.query(`
            SELECT ID FROM users WHERE username = ?
        `, [username])

        if (!userRow.length) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        const userId = userRow[0].ID;

        const [quizzes]: any[] = await pool.query(`
            SELECT * FROM quizzes WHERE teacher_id = ?
        `, [userId])

        if (quizzes.length == 0){
            res.status(200).json({
                message: "No quizzes created."
            })
        } else {
            res.status(200).json({
                quizzes: quizzes,
                message: "Fetched"
            })
        }
    } catch (error){
        res.json({error: error})
    }
})

router.post('/add', async (req: Request, res: Response) : Promise<void>  => {
    try {
        const {username, title, description} = req.body;

        const [userRow]: any[] = await pool.query(`
            SELECT ID FROM users WHERE username = ?
        `, [username])

        if (!userRow.length) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        const userId = userRow[0].IDx;

        console.log(userId)
        
        const result = await pool.query(`
            INSERT INTO quizzes (title, description, teacher_id) VALUES (?, ?, ?)
        `, [title, description, userId])
        
        console.log("Quiz inserted successfully!")

        res.status(200).json({
            result:result
        })
    } catch (error) {
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
})

router.post('/delete', async (req: Request, res: Response) : Promise<void> => {
    try {
        const {question_id} = req.body
        
        const [deleteRow]: any[] = await pool.query(`
            DELETE FROM quizzes WHERE ID = ?;
        `, [question_id])

        res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error){
        res.json({error: error})
    }
})

router.get('/fetch-one/:id', async (req: Request, res: Response) : Promise<void> => {
    try {
        const {id} = req.params;
    
        const [quizzes]: any[] = await pool.query(
            `SELECT * FROM quizzes WHERE ID = ?`,
            [id]
        );
        
        if (quizzes.length === 0) {
            res.status(404).json({ error: "Quiz not found" });
            return;
        }
        
        res.status(200).json({
            quiz: quizzes[0],
            message: "Fetched successfully"
        });
    } catch (error) {
        res.json({error: error})
    }
})

router.post('/update/:id', async (req: Request, res: Response) : Promise<void> => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;
    
        const [update]: any[] = await pool.query(
            `UPDATE quizzes
            SET title = ?, description = ?
            WHERE ID = ?`,
            [title, description, id]
        );
        
        res.status(200).json({
            message: "Updated successfully"
        });
    } catch (error) {
        res.status(500).json({error: error})
    }
})

export default router;