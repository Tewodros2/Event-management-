import * as config from "../config.js";
import jwt from "jsonwebtoken";
import { emailTemplate } from "../helpers/email.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import SalesPerson from "../models/salesPersonModel.js";

import { nanoid } from "nanoid";
import validator from "email-validator";




// const pool = require("../models/salesPersonModel");

// const getSalespersons = async (req, res) => {
//   try {
//     const allSalespersons = await pool.query("SELECT * FROM salespersons");
//     res.json(allSalespersons.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const getSalesperson = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const salesperson = await pool.query(
//       "SELECT * FROM salespersons WHERE salesperson_id = $1 ",
//       [id]
//     );
//     res.json(salesperson.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

const createSalesperson = async (req, res) => {
  try {
    const { name, last_name, phone, email} = req.body;
   
   
    res.json(newSalesperson.rows);
  } catch (err) {
    console.error(err.message);
  }
};
export const preRegister = async (req, res) => {
  // create jwt with email and password then email as clickable link
  // only when salesPerson click on that email link, registeration completes
  try {
    // console.log(req.body);
    const { name, last_name, password, phone, email} = req.body;

    // validataion
    if (!validator.validate(email)) {
      return res.json({ error: "A valid email is required" });
    }
    if (!password) {
      return res.json({ error: "Password is required" });
    }
    if (password && password?.length < 6) {
      return res.json({ error: "Password should be at least 6 characters" });
    }

    const salesPerson = await SalesPerson.findOne({ email });
    if (salesPerson) {
      return res.json({ error: "Email is taken" });
    }

    const token = jwt.sign({ email, password }, config.JWT_SECRET, {
      expiresIn: "16h",
    });

    config.AWSSES.sendEmail(
      emailTemplate(
        email,
        `
      <p>Please click the link below to activate your account.</p>
      <a href="${config.CLIENT_URL}/auth/account-activate/${token}">Activate my account</a>
      `,
        config.REPLY_TO,
        "Activate your acount"
      ),
      (err, data) => {
        if (err) {
          console.log(err);
          return res.json({ ok: false });
        } else {
          console.log(data);
          return res.json({ ok: true });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong. Try again." });
  }
};

export const registerSP = async (req, res) => {
  console.log("test 101")
  try {
    // console.log(req.body);
    const { email, password } = jwt.verify(req.body.token, config.JWT_SECRET);

    const salesPersonExist = await SalesPerson.findOne({ email });
    if (salesPersonExist) {
      return res.json({ error: "Email is taken" });
    }

    const hashedPassword = await hashPassword(password);

    const salesPerson = await new SalesPerson({
      salesPersonname: nanoid(6),
      email,
      password: hashedPassword,
    }).save();

    tokenAndSalesPersonResponse(req, res, salesPerson);
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something went wrong. Try again." });
  }
};
// const deleteSalesperson = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteSalesperson = await pool.query(
//       "DELETE FROM salespersons WHERE salesperson_id =$1",
//       [id]
//     );
//     res.json("Salesperson was deleted successfully!");
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const updateSalesperson = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, last_name, phone, email, sale_url } = req.body;
//     const updateSalesperson = await pool.query(
//       "UPDATE salespersons SET name = $1, last_name = $2, phone = $3, email = $4, sale_url = $5 WHERE salesperson_id = $6",
//       [name, last_name, phone, email, sale_url, id]
//     );
//     res.json("Salesperson was updated successfully");
//   } catch (err) {
//     console.error(err.message);
//   }
// };

