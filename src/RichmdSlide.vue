<script lang="ts">
import { richmd } from '@richmd/js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "RichmdSlide",
  props: {
    text: {
      type: String,
      default: "",
      require: true,
    },
    isController: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    const { slide } = richmd(this.text, true);

    return {
      slide,
      index: 0,
      max: slide.length - 1,
    }
  },
  computed: {
    currentSlide () {
      return this.slide[this.index]
    },
  },
  methods: {
    nextSlide () {
      return this.index < this.max ? this.index += 1 : this.index;
    },
    prevSlide () {
      return this.index > 0 ? this.index -= 1 : this.index;
    },
    onKeyDown (e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        this.nextSlide();
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        this.prevSlide();
      }
      if (e.key === "Escape") {
        this.index = 0;
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown);
  },
})
</script>

<template>
  <div class="richmd-slide" v-html="currentSlide" />
  <div v-if="isController" class="slide-control-wrap">
    <div class="slide-control">
      <button @click="prevSlide">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 291 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="slide-button"
        >
          <path d="M0 169L291 0.991089V337.009L0 169Z" fill="#71a3e3" />
        </svg>
      </button>
      <button @click="nextSlide">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 291 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="slide-button"
        >
          <path d="M291 169L0 337.009V0.991074L291 169Z" fill="#71a3e3" />
        </svg>
      </button>
    </div>
  </div>
</template>


