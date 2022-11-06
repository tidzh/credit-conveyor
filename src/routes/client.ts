import express, { Request, Response } from 'express';

import { client } from '../models/dbInstance';

const router = express.Router();

const query = `SELECT * FROM client`;

router.get('/', (_: Request, response: Response) => {
  client.query(query, (error, results) => {
    if (error) {
      response.status(500);
    }
    response.status(200).json(results.rows);
  });
});

export default router;
