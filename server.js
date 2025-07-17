import express from "express"
import dotenv from "dotenv"
import { testTagGenerate } from "./services/tagService.js";

//환경변수 로드 
// 전역으로 로드해서 모든 node.js 모듈 내에서 접근 가능 
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.listen(PORT,() => {
    console.log("Server running at..", PORT);
    console.log(OPENAI_API_KEY);
    testTagGenerate();
})






