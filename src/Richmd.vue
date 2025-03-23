<script lang="ts">
import { richmd } from '@richmd/js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Richmd",
  props: {
    text: {
      type: String,
      default: "",
      require: true,
    },
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      markdownText: this.text
    }
  },
  computed: {
    compiledMarkdown () {
      return richmd(this.markdownText)
    }
  },
})
</script>

<template>
  <div :id="id" :className="className" v-html="compiledMarkdown"></div>
</template>


