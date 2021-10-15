<template>
  <div>
    <div id="myBtnContainer">
      <button class="btn active" onclick="filterSelection('all')"> Show all</button>
      <button class="btn" onclick="filterSelection('trousers')"> Trousers</button>
      <button class="btn" onclick="filterSelection('tops')"> Tops</button>
      <button class="btn" onclick="filterSelection('shoes')"> Shoes</button>
      <button class="btn" onclick="filterSelection('accessories')"> Accessories</button>
    </div>

    <div class="container">
      <div class="filterDiv trousers">Trackpants</div>
      <div class="filterDiv trousers">Short</div>
      <div class="filterDiv trousers">Pants</div>
      <div class="filterDiv tops">T-shirt</div>
      <div class="filterDiv tops">Dress shirt</div>
      <div class="filterDiv shoes">Baskets</div>
      <div class="filterDiv shoes">Boots</div>
      <div class="filterDiv accessories">Necklace</div>
      <div class="filterDiv accessories">Bracelet</div>
      <div class="filterDiv tops">Sweater</div>
    </div>

    <article v-for="article in articles" :key="article.id">

      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content" v-if="editingArticle.id !== article.id">
        <div class="article-title">
          <h2>{{ article.name }} - {{ article.price }}€</h2>
          <div>
            <!-- allow someone to delete an article or edit the description of an article -->
          <!--<button @click="deleteArticle(article.id)">Supprimer</button>
          <button @click="editArticle(article)">Modifier</button>-->
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
    <!--
    <form class="form-add" @submit.prevent="addArticle">
      <h2>Nouveau produit à ajouter</h2>
      <input type="text" v-model="newArticle.name" placeholder="Nom du produit" required class="nom-du-produit">
      <input type="number" v-model="newArticle.price" placeholder="Prix" required class="prix">
      <textarea type="text" v-model="newArticle.description" placeholder="Description de l'article" required class="new-description"></textarea>
      <input type="text" v-model="newArticle.image" placeholder="Lien vers l'image" class="link-img">
      <button type="submit" class="add-article">Ajouter</button>
    </form>
    -->
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
      }
    }
  },
  methods: {
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
</style>
