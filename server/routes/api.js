const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/data', async (req, res) => {
  try {
    const responseCoinGecko = await axios.get(
      'https://api.coingecko.com/api/v3/coins/'
    );
    const responseCoinCap = await axios.get(
      'https://api.coincap.io/v2/assets/'
    );

    const allData = { ...responseCoinGecko.data, ...responseCoinCap.data };
    res.json({ data: allData });
  } catch (error) {
    res.send(error);
    res.end();
  }
});

module.exports = router;
