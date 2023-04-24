const validaciones = (req, res, next) => {
  const { name, summary, healthScore, steps } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!summary) return res.status(400).json({ error: "Missing summary" });
  if (!healthScore)
    return res.status(400).json({ error: "Missing healthScore" });
  if (!steps) return res.status(400).json({ error: "Missing steps" });

  next();
};

module.exports = { validaciones };
