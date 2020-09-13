const { Router } = require('express');
const axios = require('axios');

const router = Router();

router.get('/news/:lang/:coin', async (req, res) => {
  try {
    const lang = req.params.lang;
    const coin = req.params.coin;

    const request = await axios.get(
      `https://cryptocontrol.io/api/v1/public/news/coin/${coin}?language=${lang}`,
      { headers: { 'x-api-key': process.env.API_KEY } }
    );

    if (request.data.status == '404') {
      res.status('404');
      res.end();
    } else {
      res.status('200').send({ data: request.data });
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.end();
  }
});

module.exports = router;
