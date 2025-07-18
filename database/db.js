import { MongoClient } from "mongodb";

let db = null;
export const connectDB = async() => {
    // db연결후 해당 db 반환    
    try {

        
        //연결되어있으면 연결안함.(재시도시)
        if(db){
            return db
        }

        const MONGODB_URI= (process.env.MONGO_URL_ENV === "development" ? process.env.MONGODB_URI_LOCAL : process.env.MONGODB_URI_ATLAS)
        console.log("~~ ");
        const client = new MongoClient(MONGODB_URI);        

        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("mongodb 연결 성공");

        return db

    } catch (error) {
        console.log("몽고디비연결실패", error)
        process.exit(1) // 프로그램 강제 종료 
    }





}