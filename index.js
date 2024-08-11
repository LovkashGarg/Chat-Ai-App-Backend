require('dotenv').config(); // Ensure this is at the top of your file
const express = require('express');
const axios = require('axios');
const cors=require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.post('/api/generate', async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.VITE_GEMINI_KEY_ID}`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the answer' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
