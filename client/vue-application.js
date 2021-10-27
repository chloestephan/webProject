const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const buyPanier = window.httpVueLoader('./components/buyPanier.vue')
const thankYou = window.httpVueLoader('./components/thankYou.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/panier', component: Panier },
  { path: '/buyPanier', component: buyPanier },
  { path: '/thankYou', component: thankYou },

]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    articles: [],
    panier: {
      createdAt: null,
      updatedAt: null,
      articles: []
    }
  },
  async mounted () {
    const res = await axios.get('/api/articles')
    this.articles = res.data
    const res2 = await axios.get('/api/panier')
    this.panier = res2.data
  },
  methods: {
    async addArticle (article) {
      const res = await axios.post('/api/article', article)
      this.articles.push(res.data)
    },
    async updateArticle (newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.articles.find(a => a.id === newArticle.id)
      article.name = newArticle.name
      article.description = newArticle.description
      article.image = newArticle.image
      article.price = newArticle.price
    },
    async deleteArticle (articleId) {
      await axios.delete('/api/article/' + articleId)
      const index = this.articles.findIndex(a => a.id === articleId)
      this.articles.splice(index, 1)
    },
    async addToPanier (articleId) {
      var newArticle = {
        id: articleId,
        quantity: 1,
      }
      const res = await axios.post('/api/panier', newArticle)
      this.panier = res.data
    },
    async removeFromPanier (articleId){
      const res = await axios.delete('/api/panier/' + articleId)
      this.panier = res.data
    },
    async emptyBasket(){
      data.articles = [];
    }
    ,
    async changeQuantity (newQuantity) {
      const res = await axios.put('/api/panier/' + newQuantity.articleId, newQuantity)
      this.panier = res.data
    }
  }
})

//compute shipping
function buy() {
  alert("The basket was bought ! Thank you :)");
  emptyBasket();
}


