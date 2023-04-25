const axios = require('axios');
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const { OPENAI_AUTH, GPT_MODEL: MODEL_ID } = require('../../config.json');

module.exports = async function askGPT(messages) {
  const requestBody = {
    model: MODEL_ID,
    messages,
    temperature: 0.9,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_AUTH}`,
  };

  try {
    const response = await axios.post(API_ENDPOINT, requestBody, { headers });
    const assistantReply = response.data.choices[0].message.content;
    return assistantReply;
  } catch (error) {
    console.error('Error while calling GPT-4:', error);
    return 'An error occurred. Make sure the spreadsheet isn\'t larger than the OpenAI API token limit. Consider using the <code>gpt-4<code> model instead.';
  }
};
