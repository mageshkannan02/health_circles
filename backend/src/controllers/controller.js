const { where } = require('sequelize');

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
  sequelize,
  doctors_info,
  days_master,
} = require('../../models');

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
const get_drugs = async (req, res) => {
  try {
    const response = await drugs.findAll({
      include: [
        {
          model: medicine_dose_master,
          as: 'drug_dose',
        },
        {
          model: drug_catagory_master,
          as: 'drug_catagery',
        },
        {
          model: medicine_timing_master,
          as: 'drug_timing',
        },
        {
          model: medicine_frequency_master,
          as: 'drug_frequency',
        },
        {
          model: medicine_prandial__master,
          as: 'drug_prandial',
        },
      ],
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error });

    console.log(error);
  }
};
const post_doctors = async (req, res) => {
  console.log(req.body);
  const { workingAt, speciality, languages } = req.body;

  const result = sequelize.transaction(async (t) => {
    try {
      const data = await doctors.create(req.body, { transaction: t });
      res.status(200).send(data);

      await Promise.all(
        workingAt.map((working) => {
          return doctors_info.create(
            {
              doctor_id: data.id,
              working_at_id: working,
            },
            { transaction: t }
          );
        })
      );
      await Promise.all(
        languages.map((language) => {
          return doctors_info.create(
            {
              doctor_id: data.id,
              languages_id: language,
            },
            { transaction: t }
          );
        })
      );
      await Promise.all(
        speciality.map((special) => {
          return doctors_info.create(
            {
              doctor_id: data.id,
              speciality_id: special,
            },
            { transaction: t }
          );
        })
      );
    } catch (error) {
      res.status(500).send({ error: error });
      console.log(error);
    }
  });
};
const post_drugs = async (req, res) => {
  const { dose_id } = req.body;

  try {
    const result = await sequelize.transaction(async (t) => {
      const data = await drugs.create(req.body, { transaction: t });

      await Promise.all(
        dose_id.map((id) => {
          return rx_group_drugs.create(
            {
              drug_id: data.id,
              dose_id: id,
            },
            { transaction: t }
          );
        })
      );

      return data;
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

const post_rx_groups = async (req, res) => {
  const { drug_id, doctor_id, name } = req.body;
  const t = await sequelize.transaction();

  try {
    const data = await rx_groups.create(
      {
        name: req.body.name,
      },
      { transaction: t }
    );
    await rx_group_drugs.create(
      {
        rx_group_id: data.id,
      },
      { transaction: t }
    );

    // await Promise.all(
    //   data.map((rxgroup) => {
    //     return rx_group_drugs.create(
    //       {
    //         rx_group_id: rxgroup.id,
    //         drug_id: rxgroup.drug_id,
    //       },
    //       { transaction: t }
    //     );
    //   })
    // );

    await t.commit();
    res.send(data);
  } catch (error) {
    console.log(error);
    await t.rollback();
    return res.status(500).json({ error: error });
  }
};
const get_days = async (req, res) => {
  try {
    const response = await days_master.findAll();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ messege: error });
  }
};
const post_rxGroups_with_drugs = async (req, res) => {
  const { Alldrugs, rxgroupId } = req.body;  

  try {
    

     
    await Promise.all(Alldrugs.map(async (drug) => {
      const { id: drugId, doses = [], frequencies = [], prandials = [], timings = [] } = drug;

      
      if (!drugId) {
        console.error("Missing drugId for drug:", drug);
        return;
      }

       
      const existingEntry = await rx_group_drugs.findOne({
        where: { rx_group_id: rxgroupId, drug_id: drugId }
      });

       
      if (!existingEntry) {
        await rx_group_drugs.create({
          rx_group_id: rxgroupId,
          drug_id: drugId,
        });

         
        if (Array.isArray(doses) && doses.length > 0) {
          await Promise.all(doses.map(doseItem => 
            rx_group_drugs.create({  
              rx_group_id: rxgroupId,
              drug_id: drugId,
              dose_id: doseItem.id  
            })
          ));
        }

         
        if (Array.isArray(frequencies) && frequencies.length > 0) {
          await Promise.all(frequencies.map(freqItem => 
            drugs.create({  
              id: drugId,
              drug_frequency_id: freqItem.id  
            }, )
          ));
        }
 
        if (Array.isArray(prandials) && prandials.length > 0) {
          await Promise.all(prandials.map(pranItem => 
            drugs.create({  
              id: drugId,
              drug_prandial_id: pranItem.id  
            },)
          ));
        }

        
        if (Array.isArray(timings) && timings.length > 0) {
          await Promise.all(timings.map(timeItem => 
            drugs.create({  
              id: drugId,
              drug_timing_id: timeItem.id  
            }, )
          ));
        }
      } else {
        if (Array.isArray(prandials) && prandials.length > 0) {
          await Promise.all(prandials.map(pranItem => 
            drugs.update({  
              id: drugId,
              drug_prandial_id: pranItem.id  
            },)
          ));
        }
        if (Array.isArray(timings) && timings.length > 0) {
          await Promise.all(timings.map(timeItem => 
            drugs.update({  
              
              drug_timing_id: timeItem.id 
            },{where:{  id: drugId,}})
          ));
        }
        if (Array.isArray(frequencies) && frequencies.length > 0) {
          await Promise.all(frequencies.map(freqItem => 
            drugs.update({  
            
              drug_frequency_id: freqItem.id  
            },{where:{  id: drugId,}})
          ));
        }
      }
    }));

    res.send("Data processed successfully");
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).send("Error processing data");
  }
};




const getSpecific_rxGroups = async (req, res) => {
  const { rxgroupid } = req.query;

  try {
    const rxgroupdata = await rx_groups.findOne({
      where: {
        id: rxgroupid,
      },
      include: [
        {
          model: drugs,
          as: 'drugs',
        },
      ],
    });
    if (rxgroupdata) {
      return res.send(rxgroupdata);
    } else {
      return res.status(404).send({ message: 'No Rx Group Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const post_rx_associations = async (req, res) => {
  const { contents } = req.body;
  const result = await sequelize.transaction(async (t) => {
    try {
      const data = await rx_group_associations.bulkCreate(contents, {
        transaction: t,
      });

      res.status(200).send(data);
    } catch (error) {
      res.status(500).json({ error: error.messege });
    }
  });
};
const post_presription = async (req, res) => {
  const result = await sequelize.transaction(async (t) => {
    const { prescription } = req.body;
    try {
      const data = await prescriptions.bulkCreate(prescription, {
        transaction: t,
      });
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  });
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

const get_rx_groups = async (req, res) => {
  const response = await rx_groups.findAll({
    include: [
      {
        model: drugs,
        as: 'drugs',
      },
    ],
  });
  res.send(response);
};

const get_associations = async (req, res) => {
  const response = await rx_group_associations.findAll({
    include: [
      {
        model: rx_groups,
        as: 'rx_groups',
      },
    ],
  });
  res.send(response);
};

const get_prescription = async (req, res) => {
  const response = await prescriptions.findAll({
    include: [
      {
        model: drugs,
        as: 'drugs',
      },
      {
        model: rx_groups,
        as: 'rx_groups',
      },
      {
        model: rx_group_associations,
        as: 'rx_group_associations',
      },
    ],
  });
  res.send(response);
};

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
  get_drugs,
  post_rx_groups,
  get_doctors,
  get_rx_groups,
  get_associations,
  get_prescription,
  post_rx_associations,
  post_drugs,
  post_presription,
  post_doctors,
  post_rxGroups_with_drugs,
  getSpecific_rxGroups,
  get_days,
};
