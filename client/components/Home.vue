<template>
  <div>
    <div id="myBtnContainer">
      <button class="btn active" v-on:click="filterSelection('all')"> Show all</button>
      <button class="btn" v-on:click="filterSelection('trousers')"> Trousers</button>
      <button class="btn" v-on:click="filterSelection('tops')"> Tops</button>
      <button class="btn" v-on:click="filterSelection('shoes')"> Shoes</button>
      <button class="btn" v-on:click="filterSelection('accessories')"> Accessories</button>
    </div>

    <article v-for="article in getArticles()" :key="article.id">

      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content" v-if="editingArticle.id !== article.id">
        <div class="article-title">
          <h2>{{ article.name }} - {{ article.price }}€</h2>
          <div>
            <!-- allow someone to delete an article or edit the description of an article -->
          <button class="btnArticles" @click="deleteArticle(article.id)">Supprimer</button>
          <button class="btnArticles" @click="editArticle(article)">Modifier</button>
          <button class="btnArticles" @click="addToPanier(article.id)" v-if="!isInPanier(article.id)">Add to basket</button>
          <button class="btnArticles" @click="removeFromPanier(article.id)" v-else>Remove from basket</button>
          </div>
        </div>
        <p>{{ article.description }}</p>
      </div>
      <div class="article-content" v-else>
        <div class="article-title">
          <h2><input type="text" v-model="editingArticle.name"> - <input type="number" v-model="editingArticle.price"></h2>
          <div>
            <button @click="sendEditArticle()">Validate</button>
            <button @click="abortEditArticle()">Cancel</button>
          </div>
        </div>
        <p><textarea v-model="editingArticle.description"></textarea></p>
        <input type="text" v-model="editingArticle.image" placeholder="Lien vers l'image">
      </div>
    </article>

    <!-- allows someone to add an article to the list of clothing to buy -->
    <form class="form-add" @submit.prevent="addArticle">
      <h2>Add a new product</h2>
      <input type="text" v-model="newArticle.name" placeholder="Product's name" required class="nom-du-produit">
      <input type="number" v-model="newArticle.price" placeholder="Price" required class="prix">
      <textarea type="text" v-model="newArticle.description" placeholder="Article's description" required class="new-description"></textarea>
      <input type="text" v-model="newArticle.image" placeholder="Link to the image" class="link-img">
      <button class="btnArticles add-article" type="submit">Add</button>
    </form>
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
      newArticle: {
        name: '',
        description: '',
        image: '',
        price: 0
      },
      editingArticle: {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      },
      select : "all"
    }
  },
  methods: {
    
    getArticles(){
      let listArticles = [];
      if(this.select != "all"){
        for(i in this.articles){
          console.log(this.articles[i]);
          if( this.articles[i].category == this.select){
            listArticles.push(this.articles[i]);
          }
        }
      }
      else{
        listArticles = this.articles;
      }
      return listArticles;
    },
    filterSelection(c) {
      this.select = c;
    },
    addArticle () {
      this.$emit('add-article', this.newArticle)
    },
    deleteArticle (articleId) {
      this.$emit('delete-article', articleId)
    },
    addToPanier(articleId){
      this.$emit('add-to-panier', articleId)
    },
    removeFromPanier (articleId) {
      this.$emit('remove-from-panier', articleId)
    },
    editArticle (article) {
      this.editingArticle.id = article.id
      this.editingArticle.name = article.name
      this.editingArticle.description = article.description
      this.editingArticle.image = article.image
      this.editingArticle.price = article.price
    },
    sendEditArticle () {
      this.$emit('update-article', this.editingArticle)
      this.abortEditArticle()
    },
    abortEditArticle () {
      this.editingArticle = {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    },
    isInPanier (articleId) {
      for (var i = 0; i < this.panier.articles.length; i++) {
        if (this.panier.articles[i].id == articleId){
          return true
        }
      }
      return false
    }
  },
}
</script>

<style scoped>
article {
  display: flex;
}

.article-img {
  flex: 1;
}

.article-img div {
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
</style>
