"use strict";
const express =require ("express");
const app =express();

//index.js의 라우터 받아오기
//use->미들 웨어를 등록해주는 메소드
//routes의 home파일에 있는 걸 받아올 거야 home을 명시해줌
const home = require("./src/routes/home");

const PORT=3000;
//앱세팅
app.set("views","./src/views");
app.set("view engine", "ejs");


app.use("/",home); //여기선 home으로 이동->index.js로 이동

module.exports=app;