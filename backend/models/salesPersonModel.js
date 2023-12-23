// const {Pool} = require("pg");
// require("dotenv").config();

// const devConfig = {
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   port: process.env.PGPORT,
//   ssl: {
//     rejectUnauthorized: false
//   }
// }

// const proConfig = {
//   connectionString: process.env.DATABASE_URL
// }

// const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

// module.exports = {
//     query: (text, params, callback) => {
//       return pool.query(text, params, callback)
//     },
// }

import { model, Schema, ObjectId } from "mongoose";

const schema = new Schema(
  {
    name: String,
    last_name: String,
    phone: String,
    email: String,
    password : String,
    // location: {
    //   type: {
    //     type: String,
    //     enum: ["Point"],
    //     default: "Point",
    //   },
    //   coordinates: {
    //     type: [Number],
    //     default: [151.20929, -33.86882],
    //   },
    // },
  },
  { timestamps: true }
);

// schema.index({ location: "2dsphere" });
export default model("SalesPerson", schema);
