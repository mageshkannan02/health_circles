const {
  doctors,
  drug_catagory_master,
  drugs,
  hospital_master,
  language_master,
  medical_field__master,
  medicine_dose_master,
  medicine_frequency_master,
  medicine_prandial__master,
  medicine_timing_master,
  prescriptions,
  rx_group_associations,
  rx_groups,
  status_master,
  rx_group_drugs,
} = require('../models');

const gethospitals = async (req, res) => {
  try {
    const response = await hospital_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_drug_catagory = async (req, res) => {
  try {
    const response = await drug_catagory_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};

const get_languages = async (req, res) => {
  try {
    const responses = await language_master.findAll();
    res.send(responses);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_medical_fields = async (req, res) => {
  try {
    const response = await medical_field__master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_dose = async (req, res) => {
  try {
    const response = await medicine_dose_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_medicine_frequency = async (req, res) => {
  try {
    const response = await medicine_frequency_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_medicine_prandial = async (req, res) => {
  try {
    const response = await medicine_prandial__master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_medicine_timing = async (req, res) => {
  try {
    const response = await medicine_timing_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const get_status = async (req, res) => {
  try {
    const response = await status_master.findAll();
    res.send(response);
  } catch (error) {
    res.send('An error occurred:', error);
  }
};
const post_rx_groups = async (req, res) => {
  const { drug_id, doctor_id, name } = req.body;
  console.log(req.body);
  
  
    try {
      const data = await rx_groups.bulkCreate(req.body);
      const rx_groups_drugs= await data.map((rxgroup)=>{
           rx_group_drugs.create({
            "rx_group_id":rxgroup.id,
            "drug_id":rxgroup.drug_id
           })
      })
      
     
      
      res.send(data);
      console.log(data);
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({ error: error });
    }
  
 
};
const get_doctors = async (req, res) => {
  const data = await doctors.findAll({
    include: [
      {
        model: hospital_master,
        as: 'hospitals',
      },
      {
        model: medical_field__master,
        as: 'speciality',
      },
      {
        model: language_master,
        as: 'languages',
      },
    ],
  });
  res.send(data);
};

const get_rx_groups=async(req,res)=>{
     const response=await rx_groups.findAll({
            include:[
              {
                model:drugs,
                as:'drugs'
              }
            ]
     })
     res.send(response)
}

const get_associations=async(req,res)=>{
  const response=await rx_group_associations.findAll({
      include:[
        {
          model:rx_groups,
          as:'rx_groups'
        }
      ]
  })
  res.send(response)
}

const get_prescription=async(req,res)=>{
  const response=await prescriptions.findAll({
    include:[
      {
        model:drugs,
        as:'drugs'
      },
       {
         model:rx_groups,
         as:'rx_groups'
       },
       {
         model:rx_group_associations,
         as:'rx_group_associations' 
       }
    ]
  })
  res.send(response)
}

module.exports = {
  gethospitals,
  get_drug_catagory,
  get_languages,
  get_medical_fields,
  get_dose,
  get_medicine_frequency,
  get_medicine_prandial,
  get_medicine_timing,
  get_status,
  post_rx_groups,
  get_doctors,get_rx_groups,get_associations,get_prescription
};
