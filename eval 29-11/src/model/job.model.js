const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
      job_title: { type: String, require: true},
      job_description: { type: String, required: true },
      company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: true,
      },
      skills: [
        {type: String, required: true}
      ],
      location: { type: String, required: true},
      job_type: {type: String, required: true},
      notice_period: {type: String, required: true},
      rating: {type: Number, required: true}

      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("job", jobSchema); // book collection
  