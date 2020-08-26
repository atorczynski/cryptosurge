const { Router } = require('express');
var CryptoNewsAPI = require('crypto-news-api').default;

const router = Router();
const Api = new CryptoNewsAPI(process.env.API_KEY);

const apiKeys = new Map();

apiKeys.set('12345', true);

router.get('/news/:lang/:coin', async (req, res) => {
  const apiKey = req.get('X-API-KEY');
  if (!apiKeys.has(apiKey)) {
    try {
      const lang = req.params.lang;
      const coin = req.params.coin;
      const articles = await Api.getTopNewsByCoin(coin, lang);
      res.status('200').send(articles);
      res.end();
      console.log('sent ' + lang + ' ' + coin);
    } catch (error) {
      console.log(error);
      res.end();
    }
  } else {
    res.status('401').send('Invalid API KEY');
    res.end();
  }
});

module.exports = router;
