const fs = require('fs');
const { MAX_TOKENS } = require('../config.json');
const chatApi = require('./api/chatApi');
// const chatApi = require('./api/chatApi')(
//   { token: OPENAI_AUTH },
//   { model: 'gpt-4' }
// );

module.exports = async function analyzeCSV(filePath, question) {
  try {
    // Read the file content synchronously
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const aiProperties = {
      temperature: 0.9,
      MAX_TOKENS,
    };

    console.log(`Generating response to spreadsheet query: ${question}`);
    const messages = [
      {
        role: 'system',
        content: `You are a spreadsheet analyzer. The user has provided you with a CSV spreadsheet and you will answer questions about the data. The spreadsheet data is:${fileContent}`,
      },
      {
        role: 'assistant',
        content: 'What is your question about this dataset?',
      },
      {
        role: 'user',
        content: question,
      },
    ];

    const requestBody = {
      messages,
      ...aiProperties,
    };

    const result = await chatApi(messages);

    // Optionally, delete the uploaded file after reading its content
    fs.unlinkSync(filePath);

    // Return the analysis results
    return result;
  } catch (err) {
    console.error('Error:', err);
    return 'Error processing the file';
  }
};
