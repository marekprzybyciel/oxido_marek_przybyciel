require('dotenv').config();
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function fetchOpenAIResponse(prompt) {
    try
    {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error('Problem połączenia z OpenAI:', err);
    }
}

function readArticle(filePath) {
    try
    {
        const articleText = fs.readFileSync(filePath, 'utf-8');
        return articleText;
    } catch (err)
    {
        console.log('Nie udało się odczytać zawartości pliku', err);
        return null;
    }
}

function saveToFile(articleText, filePath) {
    const htmlContent = `
    <body>
    ${articleText}
    </body>
    `;
    fs.writeFileSync(filePath, htmlContent, "utf-8");
}

async function articleProcess() {
    const articleFilePath = path.join(__dirname, 'article.txt');
    const articleText = readArticle(articleFilePath);

    if (!articleText) return;
    const promptText = `Ustal gdzie warto wstawić grafiki – oznacz je z użyciem\n tagu img z atrybutem src="image_placeholder.jpg". Dodaj atrybut alt do\n każdego obrazka z dokładnym promptem, który możemy użyć do wygenerowania grafiki.\n Umieść podpisy pod grafikami używając odpowiedniego tagu HTML\n\n${articleText}`;
    const articleProcess = await fetchOpenAIResponse(promptText);

    if (articleProcess) {
        const outputPath = path.join(__dirname, 'article.html');
        saveToFile(articleProcess, outputPath);
        console.log('Artykuł zapisany jako artykul.html');
    } else
    {
        console.error('Bład podczas przetwarzania artykułu');
    }
}
articleProcess();