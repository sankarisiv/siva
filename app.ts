import csvtojson from "csvtojson"
import mongoose from "mongoose"
import fs from "fs"
import { datamodel } from './model'

const csvfilepath = "simple.csv"
csvtojson()
    .fromFile(csvfilepath)
    .then((jsonobj) => {

        console.log(jsonobj)
        const info = fs.writeFileSync('output.json', JSON.stringify(jsonobj))
        mongoose.connect("mongodb://0.0.0.0:27017/csv", async () => {
            console.log("database connected")
            const response = JSON.parse(JSON.stringify(jsonobj))
            //     const data={
            //     name:response[0].name,
            //     address:response[0].address,
            //     phno:response[0].phno,
            //     qualification:response[0].qualification
            // }
            const jsondata = datamodel.create(response)

            //     console.log("response",response)
            // const savedData=await datamodel.create(response)
            // console.log({savedData})
            console.log("inserted...")
        })
        
    })









