require('dotenv').config();

const {OpenAI} = require('openai');

const openai = new OpenAIKey({
    apiKey: process.env.OPENAI_API_KEY,
})