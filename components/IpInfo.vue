<template>
  <div class="user-info">
    <div class="user-info_data px-4 py-1">
      <div class="d-flex align-center justify-space-between">
        <h2>{{ ip }}</h2>
        <v-btn
          variant="tonal"
          aria-label="Copy IP"
          icon="mdi-content-copy"
          @click="copyIp"
        />
      </div>
      <div class="user-info_data-details">
        <p title={country}>
          Country: <span>{{ flag }} {{ country }}</span>
        </p>
        <p :title="city">City: <span>{{ city }}</span></p>
        <p :title="loc">Location: <span>{{ loc }}</span></p>
        <p :title="timezone">Time zone: <span>{{ timezone }}</span></p>
        <p :title="org">Org: <span>{{ org }}</span></p>
        <p :title="hostname">Hostname: <span>{{ hostname }}</span></p>
      </div>
    </div>
    <Map v-if="center" class="user-info_map" :center="center" />
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
    >
      <v-icon
        class="mr-2"
        icon="mdi-check"
      />
      IP: {{ ip }} copied
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
          icon="mdi-close"
        />
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, ref } from "vue";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default defineComponent({
  name: "IpInfo",
  props: {
    ip: {
      type: String,
      required: true,
    },
    hostname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    org: {
      type: String,
      required: true,
    },
    loc: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { country, loc } = toRefs(props);

    const snackbar = ref(false);

    function copyIp() {
      navigator.clipboard.writeText(props.ip);
      snackbar.value = true;
    }

    const flag = computed(() => {
      return country.value ? getUnicodeFlagIcon(country.value) : "🌎";
    });

    const center = computed(() => loc.value?.split(",")?.map(Number));

    return { flag, center, copyIp, snackbar };
  }
});
</script>

<style lang="scss" scoped>
  .user-info {
    display: flex;
    justify-content: space-between;
    position: relative;
    border: 1px solid rgba(var(--accent-light), 25%);
    background: linear-gradient(
      rgba(var(--accent-dark), 66%),
      rgba(var(--accent-dark), 33%)
    );
    border-radius: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      overflow: hidden;

      @media (max-width: 992px) {
        font-size: 2rem;
      }
    }

    .v-btn {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }

    &_map {
      max-width: 200px;
      height: 280px;

      @media (max-width: 992px) {
        height: 230px;
      }
      
      @media (max-width: 768px) {
        margin-top: 10px;
        max-width: 100%;
        height: 150px;
      }
    }

    &_data {
      width: 100%;

      &-details {
        width: 100%;
        padding-top: 10px;
        border-top: 1px solid rgba(var(--accent-light), 25%);

        p {
          font-size: 1.2rem;
          margin: 0;
          padding: 0;
          font-weight: normal;
          display: flex;

          @media (max-width: 992px) {
            font-size: 1rem;
          }

          @media (max-width: 568px) {
            font-size: 0.8rem;
          }

          span {
            margin-left: auto;
            font-weight: bold;
            max-width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            padding-left: 15px;
          }
        }
      }
    }
  }
</style>
