const express = require("express");

const Company = require("../model/company.model")
const Job = require("../model/job.model")
const router = express.Router();



router.post("", async (req, res) => {
    try {
      const company = await Company.create(req.body);
  
      return res.status(201).send(company);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("", async (req, res) => {
    try {
      const companies = await Company.find()
        .lean()
        .exec();
      
      return res.send(companies);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

//   router.get("/most/posting", async (req, res) => {
//     try {
//       const job = await Job.find()
//         .lean()
//         .exec();
      
        
//       return res.send(companies);
//     } catch (e) {
//       return res.status(500).json({ message: e.message, status: "Failed" });
//     }
//   });


  

  
  router.get("/:id", async (req, res) => {
    try {
      const company = await Company.findById(req.params.id).lean().exec();
  
      return res.send(company);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(company);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(company);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;