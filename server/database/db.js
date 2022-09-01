import mongoose from "mongoose"

export const  Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@realmcluster-shard-00-00.ecbjk.mongodb.net:27017,PROJECT 0-shard-00-01.ecbjk.mongodb.net:27017,realmcluster-shard-00-02.ecbjk.mongodb.net:27017/?ssl=true&replicaSet=atlas-34l85m-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
     await mongoose.connect(URL,{ useunifiedTopology: true, useNewUrlParser: true })
     console.log(`Database connected successfully`)
    } catch(error){
        console.log(`Error while connecting `,error.message)
    }
}

export default Connection