const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      body:{ type: String, required: true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("company", companySchema); // posts collection
  