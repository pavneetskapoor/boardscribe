import { Mongo } from 'meteor/mongo';

export const Notes = new Mongo.Collection('notes');
export const Comments = new Mongo.Collection('comments');
