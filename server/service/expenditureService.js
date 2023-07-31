const { Expenditure } = require("../models");

exports.getexpenditure = async (req, res) => {
  try {
    await Expenditure.findAll().then((expenditure) =>
      res.status(200).json({ message: "true", data: expenditure })
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getIdExpenditure = async (req, res) => {
  try {
    const id = req.params.id;
    const checkID = await Expenditure.findOne({
      where: { id_expenditure: id },
    });
    console.log(id);
    if (checkID) {
      res.status(200).json({
        status: true,
        expenditure: checkID,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Id Income yang anda cari tidak ada",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postExpenditure = async (req, res) => {
  try {
    const expenditure = {
      expenditure_statement: req.body.expenditure_statement,
      source_expenditure: req.body.source_expenditure,
      out_date: req.body.out_date,
      expenditure_amount: req.body.expenditure_amount,
    };
    console.log(expenditure);

    const CreateExpenditure = await Expenditure.create(expenditure);
    res.status(200).json({
      status: "true",
      data: CreateExpenditure,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: "data error users",
    });
  }
};

exports.deleteExpenditure = async (req, res) => {
  try {
    const id = req.params.id;
    await Expenditure.destroy({
      where: { id_expenditure: id },
    });
    res
      .status(200)
      .json({ status: 200, message: "success delete data, " + id });
  } catch (error) {
    console.log(error);
  }
};

exports.updateExpenditure = async (req, res) => {
  try {
    const id = req.params.id;
    const expenditure = {
      expenditure_statement: req.body.expenditure_statement,
      source_expenditure: req.body.source_expenditure,
      out_date: req.body.out_date,
      expenditure_amount: req.body.expenditure_amount,
    };
    await Expenditure.update(expenditure, {
      where: { id_expenditure: id },
    });
    res
      .status(200)
      .json({ status: 200, message: "Expenture was updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

exports.getTotalExpenditure = async (req, res) => {
  try {
    const ExpenditureTotal = await Expenditure.findAll({
      attributes: [
        [
          Expenditure.sequelize.fn(
            "sum",
            Expenditure.sequelize.col("expenditure_amount")
          ),
          "TotalExpenditure",
        ],
      ],
      raw: true,
    });
    res.status(200).json({ message: "true", data: ExpenditureTotal });
  } catch (error) {
    console.log(error);
  }
};
