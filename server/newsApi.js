const { Router } = require('express');
var CryptoNewsAPI = require('crypto-news-api').default;

const router = Router();
const Api = new CryptoNewsAPI(process.env.API_KEY);

router.get('/news/:lang/:coin', async (req, res) => {
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
});

module.exports = router;
