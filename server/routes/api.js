const express = require('express')
const router = express.Router()
const articles = require('../data/articles.js')

class Panier {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.articles = []
  }
}


router.use((req, res, next) => {
  if (typeof req.session.panier === 'undefined') {
    req.session.panier = new Panier()
  }
  next()
})


router.get('/panier', (req, res) => {
  res.json(req.session.panier)
})


router.post('/panier', (req, res) => {
  const id = parseInt(req.body.id)
  const quantity = parseInt(req.body.quantity)

  if (isNaN(id) || id > articles.length ||
      isNaN(quantity) || quantity <= 0) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  for (var i = 0; i < req.session.panier.articles.length; i++){
    if (req.session.panier.articles[i].id == id){
      res.status(400).json({ message: 'bad request' })
      return
    }
  }

  const article = {
    id: id,
    quantity: quantity
  }

  req.session.panier.articles.push(article)
  res.json(req.session.panier)
})


router.post('/panier/pay', (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  if (typeof firstName !== 'string' || firstName === '' ||
      typeof lastName !== 'string' || lastName === '') {
    res.status(400).json({ message: 'bad request' })
    return
  }

  req.session.destroy()

  res.json({ message: 'Thanks for your purchase ' + firstName + " " + lastName })
})


router.put('/panier/:articleId', (req, res) => {
  const id = parseInt(req.params.articleId)
  const quantity = parseInt(req.body.quantity)

  if (isNaN(id) || id > articles.length ||
      isNaN(quantity) || quantity <= 0) {
    res.status(400).json({ message: 'bad request'})
    return
  }

  var i = 0
  while (i < req.session.panier.articles.length && req.session.panier.articles[i].id != id){
    i++;
  }
  if (req.session.panier.articles[i].id != id){
    res.status(400).json({ message: 'bad request' })
    return
  }
  req.session.panier.articles[i].quantity = quantity
  
  res.json(req.session.panier)
})


router.delete('/panier/:articleId', (req, res) => {
  const id = parseInt(req.params.articleId)

  if (isNaN(id) || id > articles.length) {
    res.status(400).json({ message: 'bad request'})
    return
  }

  var i = 0
  while (i < req.session.panier.articles.length && req.session.panier.articles[i].id != id){
    i++;
  }

  if (req.session.panier.articles[i].id != id){
    res.status(400).json({ message: 'bad request' })
    return
  }

  req.session.panier.articles.splice(i, 1)
  
  res.json(req.session.panier)
})


router.get('/articles', (req, res) => {
  res.json(articles)
})


router.post('/article', (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const image = req.body.image
  const price = parseInt(req.body.price)

  if (typeof name !== 'string' || name === '' ||
      typeof description !== 'string' || description === '' ||
      typeof image !== 'string' || image === '' ||
      isNaN(price) || price <= 0) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  const article = {
    id: articles.length + 1,
    name: name,
    description: description,
    image: image,
    price: price
  }

  articles.push(article)
  res.json(article)
})


function parseArticle (req, res, next) {
  const articleId = parseInt(req.params.articleId)

  if (isNaN(articleId)) {
    res.status(400).json({ message: 'articleId should be a number' })
    return
  }
  req.articleId = articleId

  const article = articles.find(a => a.id === req.articleId)
  if (!article) {
    res.status(404).json({ message: 'article ' + articleId + ' does not exist' })
    return
  }
  req.article = article
  next()
}

router.route('/article/:articleId')

  .get(parseArticle, (req, res) => {
    res.json(req.article)
  })

  .put(parseArticle, (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const image = req.body.image
    const price = parseInt(req.body.price)

    req.article.name = name
    req.article.description = description
    req.article.image = image
    req.article.price = price
    res.send()
  })

  .delete(parseArticle, (req, res) => {
    const index = articles.findIndex(a => a.id === req.articleId)

    articles.splice(index, 1)
    res.send()
  })

module.exports = router
