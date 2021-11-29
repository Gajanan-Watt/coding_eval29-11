const express = require("express");

const Company = require("../model/company.model")
const Job = require("../model/job.model")
const router = express.Router();


// ------------ POSTS CRUD -----------------
router.post("", async (req, res) => {
    try {
      const job = await Job.create(req.body);
  
      return res.status(201).send(job);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("", async (req, res) => {
    try {
      const job = await Job.find()
        .lean()
        .exec();
      
      return res.send(job);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  router.get("/:place/:skill", async (req, res) => {
    try {
      const job = await Job.find()
      .populate({path: "company_id"})  
      .lean()
        .exec();
       
        // console.log(job[0].skills);
        // console.log(req.params.place, req.params.skill)
        let jobsarray = [];
        for(let i = 0; i < job.length; i++){
            for(let j = 0; j < job[i].skills.length; j++){
                if(req.params.place == job[i].location && req.params.skill == job[i].skills[j]){
                    //console.log(job[i].skills[j]);
                    jobsarray.push(job[i]);
                }
            }
        }
        //console.log(jobsarray);
        return res.send(jobsarray);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  router.get("/:job_type", async (req, res) => {
    try {
      const job = await Job.find().lean().exec();
        
      let jobType = [];
        for(let i = 0; i < job.length; i++){
            if(job[i].job_type == "Work From Home"){
                jobType.push(job[i]);
            }
        }

      return res.send({jobType});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  


  router.get("/:notice/:mon/:number", async (req, res) => {
    try {
      const job = await Job.find().lean().exec();
        
      let jobType = [];
        for(let i = 0; i < job.length; i++){
            if(job[i].notice_period == "2 months"){
                jobType.push(job[i]);
            }
        }

      return res.send({jobType});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  
  router.patch("/:id", async (req, res) => {
    try {
      const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(job);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const job = await Job.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(job);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;