import * as functions from "firebase-functions";

// set this up to be called from Google Calendar
// pull all mentess from Notion db
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send(`Hello from ${request.query.name}`);
});
