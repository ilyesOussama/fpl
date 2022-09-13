import { Router } from 'express';
import { ParamsWithId } from '../../interfaces/ParamsWithId';

import { validateRequest } from '../../middlewares';
import * as TeamHandlers from './teams.handlers';
import { Team } from './teams.model';

const router = Router();

router.get('/', TeamHandlers.findAll);
router.get(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  TeamHandlers.findOne,
);
router.post(
  '/',
  validateRequest({
    body: Team,
  }),
  TeamHandlers.createOne,
);
router.put(
  '/:id',
  validateRequest({
    params: ParamsWithId,
    body: Team,
  }),
  TeamHandlers.updateOne,
);
router.delete(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  TeamHandlers.deleteOne,
);

export default router;
