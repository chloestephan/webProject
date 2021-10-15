<template>
  <div>
    <h2>Mon Panier</h2>
    <article v-for="article in atriclesInPanier" :key="article.id">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content">
        <div class="article-title">
          <h2>{{ article.name }} - {{ article.price }}€</h2>
          <div>
            <select @change="changeQuantity(article, $event)">
              <option v-for="index in 10" :key="index">
                {{index}}
              </option>
            </select>
          </div>
        </div>
        <p>{{ article.description }}</p>
      </div>
    </article>

    <!--<button  class="btn-top" @click="buyBasket()">Buy</button>-->
    
    <button class="hidden"><router-link to='/buyPanier'>Buy</router-link></button>
  </div>
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  data () {
    return {
    }
  },
  computed: {
    atriclesInPanier: function(){
      var articles = []
      for (var i = 0; i < this.articles.length; i++){
        for (var j = 0; j < this.panier.articles.length; j++){
          if (this.articles[i].id == this.panier.articles[j].id){
            articles.push(this.articles[i])
          }
        }
      }
      return articles
    }
  },

  async mounted () {
  },
  methods: {
    changeQuantity (article, event) {
      this.$emit('change-quantity', {articleId: article.id, quantity: event.target.value})
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  height: 250px;
  margin-bottom: 10px;
}

.article-img {
  flex: 1;
  height: 100%;
}

.article-img div {
  /*width: 100px;
  height: 100px;*/
  max-height: 100%;
  width: auto;
  background-size: cover;
  border-style: solid;
  border-width: 2px;
}

.article-content {
  flex: 3;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}

select {
  border-radius: 0;
  border: solid #990000 2px;
  color: #FF9200;
}

h2 {
  text-align: center;
}

.btn-top {
  margin-top: 50px;
}
</style>
