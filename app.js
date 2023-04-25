const express = require('express');
const multer = require('multer');
const fs = require('fs');
const analyzeCSV = require('./components/analyzeCSV'); // Assuming you've exported the analyzeCSV function
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.fields([{ name: 'csvfile', maxCount: 1 }, { name: 'question', maxCount: 1 }]), async (req, res) => {
  // Get the question value from the form
  const question = req.body.question;

  // Analyze the CSV file and return the results
  const analysisResults = await analyzeCSV(req.files.csvfile[0].path, question);
  res.render('results', { analysis: analysisResults });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
