import * as sdk from "node-appwrite";

export const {
PROJECT_ID,API_KEY, STUDENT_COLLECTION_ID,DATABASE_ID, TEACHER_COLLECTION_ID, HOSTEL_COLLECTION_ID, DISPENSARY_COLLECTION_ID,APPOINTMENT_COLLECTION_ID,
NITR_BUCKET_ID : BUCKET_ID,
NEXT_PUBLIC_ENDPOINT : ENDPOINT

} = process.env;

const client = new sdk.Client();



export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
export const teams = new sdk.Teams(client);