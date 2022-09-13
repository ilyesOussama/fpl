import { Response, Request, NextFunction } from 'express';
import { ObjectId } from 'mongodb';

import { ParamsWithId } from '../../interfaces/ParamsWithId';
import { TeamWithId, Teams, Team } from './teams.model';

export async function findAll(req: Request, res: Response<TeamWithId[]>, next: NextFunction) {
  try {
    const teams = await Teams.find().toArray();
    res.json(teams);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, TeamWithId, Team>, res: Response<TeamWithId>, next: NextFunction) {
  try {
    const insertResult = await Teams.insertOne(req.body);
    if (!insertResult.acknowledged) throw new Error('Error inserting Team.');
    res.status(201);
    res.json({
      _id: insertResult.insertedId,
      ...req.body,
    });
  } catch (error) {
    next(error);    
  }
}

export async function findOne(req: Request<ParamsWithId, TeamWithId, {}>, res: Response<TeamWithId>, next: NextFunction) {
  try {
    const result = await Teams.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!result) {
      res.status(404);
      throw new Error(`Team with id "${req.params.id}" not found.`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateOne(req: Request<ParamsWithId, TeamWithId, Team>, res: Response<TeamWithId>, next: NextFunction) {
  try {
    const result = await Teams.findOneAndUpdate({
      _id: new ObjectId(req.params.id),
    }, {
      $set: req.body,
    }, {
      returnDocument: 'after',
    });
    if (!result.value) {
      res.status(404);
      throw new Error(`Team with id "${req.params.id}" not found.`);
    }
    res.json(result.value);
  } catch (error) {
    next(error);
  }
}

export async function deleteOne(req: Request<ParamsWithId, {}, {}>, res: Response<{}>, next: NextFunction) {
  try {
    const result = await Teams.findOneAndDelete({
      _id: new ObjectId(req.params.id),
    });
    if (!result.value) {
      res.status(404);
      throw new Error(`Team with id "${req.params.id}" not found.`);
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  } 
}