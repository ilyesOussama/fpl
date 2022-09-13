import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';
import { Team } from '../teams/teams.model';/* 
import { Fixture } from '../fixtures/fixtures.model' */

export const Player = z.object({
  name: z.string(),
  team : Team,
  goals: z.number(),
  assists: z.number(),
  xg: z.number(),
  xa: z.number(),
  minutePlayed: z.number(),
  form: z.number(), /* 
  fixtures: Fixture[] */
});

export type Player = z.infer<typeof Player>;
export type PlayerWithId = WithId<Player>;
export const Players = db.collection<Player>('players');
