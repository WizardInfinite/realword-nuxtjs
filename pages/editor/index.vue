<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagValue"
                  @keyup.enter="generateTage"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, tagIndex) in article.tagList"
                    :key="tagIndex"
                  >
                    <i class="ion-close-round" @click="removeTag(tagIndex)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publishArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { publishArticle, publishArticleEdit } from "@/api/article";
export default {
  middleware: "authenticated", //在路由匹配组件渲染之前会先执行中间件进行处理
  name: "EditorIndex",
  data() {
    return {
      article: {
        body: "",
        description: "",
        tagList: [],
        title: "",
      },
      tagValue: "",
    };
  },
  methods: {
    // 发布文章事件
    async publishArticle() {
      const { data } = await publishArticle(this.article);
      console.log(data);
      this.$router.push({
        name: "article",
        params: {
          slug: data.article.slug,
        },
      });
    },
    // 按回车生成标签
    generateTage(e) {
      if (e.keyCode === 13) {
        this.article.tagList.push(this.tagValue);
        this.tagValue = "";
      }
    },
    // 删除标签
    removeTag(index) {
      this.article.tagList.splice(index, 1);
    },
  },
  async mounted() {
    // 编辑文章回显
    if (this.$route.query.slug) {
      const { data } = await publishArticleEdit(this.$route.query.slug);
      this.article.body = data.article.body
      this.article.description = data.article.description
      this.article.tagList = data.article.tagList
      this.article.title = data.article.title
    }
  },
};
</script>

<style lang="scss" scoped>
</style>