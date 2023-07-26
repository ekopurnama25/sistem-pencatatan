const { Income } = require("../models");

exports.getIncome = async (req, res) => {
  try {
    await Income.findAll().then((income) =>
      res.status(200).json({ message: "true", data: income })
    );
  } catch (error) {
    console.log(error);
  }
};

exports.getIdIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const checkID = await Income.findOne({
      where: { id_income: id },
    });
    console.log(id);
    if (checkID) {
      res.status(200).json({
        status: true,
        income: checkID,
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

exports.postIncome = async (req, res) => {
  try {
    const income = {
      income_statement: req.body.income_statement,
      source_of_income: req.body.source_of_income,
      date_of_entry: req.body.date_of_entry,
      income_amount: req.body.income_amount,
    };
    console.log(income);

    const CreateIncome = await Income.create(income);
    res.status(200).json({
      status: "true",
      data: CreateIncome,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: "data error users",
    });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;
    await Income.destroy({
      where: { id_income: id },
    });
    res
      .status(200)
      .json({ status: 200, message: "success delete data, " + id });
  } catch (error) {
    console.log(error);
  }
};

// exports.updateIncome = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const users = {
//       username: req.body.username,
//       email: req.body.email,
//       password: await argon2.hash(req.body.password),
//     };
//     await User.update(users, {
//       where: { id_users: id },
//     });
//     console.log(users);
//     res
//       .status(200)
//       .json({ status: 200, message: "Users was updated successfully" });
//   } catch (error) {
//     console.log(error);
//   }
// };
