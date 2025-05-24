const translate = require("../schema/Translate");
exports.boshSahifa = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // Har sahifada nechta karta ko‘rsatiladi
    const skip = (page - 1) * limit;

    const postlar = await translate.find().skip(skip).limit(limit);
    const jami = await translate.countDocuments();
    const jamiSahifa = Math.ceil(jami / limit);

    res.render("index", {
      title: "Bosh sahifa",
      postlar,
      joriySahifa: page,
      jamiSahifa,
    });
  } catch (err) {
    res.status(500).send("Xatolik: " + err.message);
  }
};
