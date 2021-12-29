<template>
  <div>
    <div v-intersect="onIntersect">
        <transition name="reveal" class="revealWrapper">
            <div v-show="$vuetify.breakpoint.mobile? true : isIntersecting">
                <slot></slot>
            </div>
        </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isIntersecting: false,
  }),

  methods: {
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
    },
  },
  props: {
    threshold: {
      type: String,
      default: "0",
      required: false
    },
  }
};
</script>

<style>
.reveal-enter-active,
.reveal-leave-active {
  transition: all 1.5s ease;
  opacity: 1;
}
.reveal-enter-active{
    transition-delay: 0.1s;
}
.reveal-enter-from,
.reveal-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
.revealWrapper{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>