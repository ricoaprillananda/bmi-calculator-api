exports.calculateBMI = (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height || isNaN(weight) || isNaN(height)) {
    return res.status(400).json({ error: 'Invalid input. Please enter numeric weight and height.' });
  }

  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  res.status(200).json({
    bmi: bmi.toFixed(2),
    category
  });
};
