import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';/* 
import { Fixture } from '../fixtures/fixtures.model';
import { Player } from '../players/players.model'; */

export const Team = z.object({
  name: z.string(),
  standing: z.number().min(1).max(20),
  goals: z.number(),
  chanceCreated:z.number(),
  /* players: Player[],
  fixtures: fixture[] */
});

export type Team = z.infer<typeof Team>;
export type TeamWithId = WithId<Team>;
export const Teams = db.collection<Team>('teams');
