import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/model/topic";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    // console.log({id})
    const {newTitle:title, newDescription:description} = await req.json()
    // console.log({newTitle, newDescription})
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({
        status: 200,
        message: "success"
    })
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB()
    const topic = await Topic.findOne({_id:id})
    return NextResponse.json({
        status: 200,
        topic
    })
}