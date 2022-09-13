import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import teams from './teams/teams.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/teams', teams);

export default router;
