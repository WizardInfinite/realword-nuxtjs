<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
      }"
      ><img :src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        class="author"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date("MMM DD, YYYY") }}</span>
    </div>
    <template v-if="user.username !== article.author.username">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following,
        }"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited,
        }"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post <span class="counter">(29)</span>
      </button>
    </template>
    <template v-else>
      <span class="ng-scope">
        <nuxt-link
          class="btn btn-outline-secondary btn-sm"
          href="#/editor/111-vb03cl"
          :to="{
            name:'editor',
            query:{
              slug:article.slug
            }
          }"
        >
          <i class="ion-edit"></i> Edit Article
        </nuxt-link>

        <button
          class="btn btn-outline-danger btn-sm"
        >
          <i class="ion-trash-a"></i> Delete Article
        </button>
      </span>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ArticleMeta",
  computed: {
    ...mapState(["user"]),
  },
  props: {
    article: {
      type: Object,
      require: true,
      default: {},
    },
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>