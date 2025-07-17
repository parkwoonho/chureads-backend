import express from "express"
const router = express.Router();  //게시물 관련된  모든 API 엔드포인트를 관리하는 라우터 

// 모든 게시물 조회
router.get("/", async (req, res)=> {
    try {

        // DB에서 데이터 불러오기
        


        res.status(200).json({
            message : "GET요청 성공했습니다."
        });
        console.log("GET 요청 try"  )    
    } catch (error) {
        console.log(`GET 요청 에러 ${error}`  )
    }    
});


//GET / posts/:Iid --특정 게시물을 조회
router.get("/", async(req, res) => {


    
})


//POST / posts/:Iid --특정 게시물을 조회
router.post("/", async(req, res) => {


    
})

//PUT / posts/:Iid --특정 게시물을 수정
router.post("/", async(req, res) => {


    
})

//delete / posts/:Iid --특정 게시물을 삭제
router.post("/", async(req, res) => {


    
})

export default router;









