import mongoose from "mongoose"

export const databaseConnect= async()=>{
    const url = process.env.Database_url as string
    try {
        await mongoose.connect(url,{
            maxPoolSize :process.env.MaxPoolSize as unknown as number // بتاخد عدد العمليات اللي تعملها في وقت واحد            
        })
        console.log("✅ Databse connection sucessfully" )
       
    } catch (connectionFalid) {
        console.log("❎ Error in connection" , connectionFalid)
    }
}