import express, { Request, Response } from "express";
import pool from "../config/db";
import bcrypt from "bcryptjs"
import {z} from "zod"

const router = express.Router();

// Defining the user schema
const userSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
  });

// Defining the validate user middleware
const validateUser = (req: Request, res: Response, next: Function):void => {
    const result = userSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }
    next();
  };

router.get('/check', (req: Request, res: Response): void => {
    const sessionToken = req.cookies.session;

    if (!sessionToken) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    res.status(200).json({ loggedIn: "true" });

})

router.post('/signup', validateUser, async (req: Request, res: Response) : Promise<void>  => {
    try {
        const {username, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10)

        const [exists]: any[] = await pool.query(`
            SELECT * FROM users WHERE username = ?
        `, [username])

        if (exists.length > 0){
            res.status(200).json({
                error: "User already exists!"
            })
            return;
        }
        
        const result = await pool.query(`
            INSERT INTO users (username, password) VALUES (?, ?)
        `, [username, hashPassword])
        
        console.log("User inserted successfully!")

        res.status(200).json({
            result:result
        })
    } catch (error) {
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
})

router.post('/login', async (req: Request, res: Response) : Promise<void>  => {
    try {
        const {username, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10)

        const [users]: any[] = await pool.query(
            `SELECT * FROM users WHERE username = ?`,
            [username]
        );

        // If no user found
        if (users.length === 0) {
            res.status(400).json({ error: "Invalid username or password" });
            return;
        }

        const user = users[0];

        // Compare input password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            res.status(400).json({ error: "Invalid username or password" });
            return;
        }
        
        // Successful login
        res.status(200).json({ 
            message: "Login Successful",
            username: username,
            
        });

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})

export default router;