import express from "express"
import dotenv from "dotenv"
import { testTagGenerate } from "./services/tagService.js";
import posRouter, { init } from "./routes/posts.js";
import { connectDB } from "./database/db.js";
import cors from "cors";

//환경변수 로드 
// 전역으로 로드해서 모든 node.js 모듈 내에서 접근 가능 
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

//라우터 미들웨어 등록

//json파싱 설정 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/posts", posRouter );


app.listen(PORT, async() => {
    console.log("Server running at..", PORT);
    //console.log(OPENAI_API_KEY);
    //testTagGenerate();
    const db = await connectDB();
    init(db);
})






