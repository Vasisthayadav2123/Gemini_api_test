import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: "AIzaSyBKn_1I9FFAGwm3M2S-Y-OFayN0GV9nhsE" });

document.getElementById('btn').addEventListener('click', async () => {
  const text = document.getElementById('prompt').value;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: [{ role: 'user', parts: [{ text }] }],
    });
    console.log(response);
    document.getElementById('para').innerHTML = response.text;
  } catch (error) {
    console.error(error);
    document.getElementById('para').innerHTML = 'Error: ' + error.message;
    document.getElementById('input').value = " ";
  }
});