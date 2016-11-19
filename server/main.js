import { Meteor } from 'meteor/meteor';
import '../imports/api/notes.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Cloudinary.config({
 cloud_name: 'dmj06cuclc',
 api_key: '728764939216316',
 api_secret: 'EsmrpJPYo5GTQceqbKTOYNFGrNQ'
});
