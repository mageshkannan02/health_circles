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
      ],
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error });

    console.log(error);
  }
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
    const data = await rx_groups.bulkCreate(req.body, { transaction: t });

    await Promise.all(
      data.map((rxgroup) => {
        return rx_group_drugs.create(
          {
            rx_group_id: rxgroup.id,
            drug_id: rxgroup.drug_id,
          },
          { transaction: t }
        );
      })
    );

    await t.commit();
    res.send(data);
  } catch (error) {
    console.log(error);
    await t.rollback();
    return res.status(500).json({ error: error });
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
};
