<template>
  <div class="toast" :class="{ 'toast--show': show }">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IpInfo",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
  },
});
</script>

<style lang="scss" scoped>
.toast {
  min-width: 300px;
  position: fixed;
  bottom: 30px;
  right: 50%;
  transform: translateX(50%);
  visibility: hidden;
  color: white;
  background: linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.08));
  background-color: #223140;
  padding: 8px 20px;
  border-radius: 24px;
  z-index: 10;

  &--show {
    visibility: visible;
    /* Add animation: Take 0.5 seconds to fade in and out the TOAST.
    However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the TOAST in and out */
  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }

  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }

  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }

  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
}
</style>
