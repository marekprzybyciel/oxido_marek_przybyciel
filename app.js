require('dotenv').config();

const {OpenAI} = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

async function fetchOpenAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{role: 'user', content: prompt}],
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error('Problem połączenia z OpenAI:', err);
    }

}

const testMessage = "Ta winda jedzie w dół?, dokończ cytat";
fetchOpenAIResponse(testMessage).then(response => {
console.log('OpenAI odpisało:', response)
});