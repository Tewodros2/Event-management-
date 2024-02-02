import { model, Schema, ObjectId } from "mongoose";
const schema = new Schema(
  {
    name: String,
    sale_start_date: String,
    sale_end_date: String,
    party_date: String,
    banner_url: String,
    client: {
      name: String,
      last_name: String,
      phone: String,
      ci: String,
      payment_url: String,
      party_id: String,
      // salesperson_id: { type: ObjectId, ref: "SalesPerson" },
    },
  },
  { timestamps: true }
);

export default model("Event", schema);
