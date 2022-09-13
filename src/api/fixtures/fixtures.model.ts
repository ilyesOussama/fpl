import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';

export const Fixture = z.object({
  a:z.string(),
});

export type Fixture = z.infer<typeof Fixture>;
export type FixtureWithId = WithId<Fixture>;
export const Players = db.collection<Fixture>('fixtures');
