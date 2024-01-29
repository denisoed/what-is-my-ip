<template>
  <div class="user-info">
    <div class="user-info_data px-4 py-1">
      <div class="d-flex align-center justify-space-between">
        <h2>{{ ip }}</h2>
        <v-btn
          variant="tonal"
          aria-label="Copy IP"
          icon="mdi-content-copy"
          @click="copyValue('ip')"
        />
      </div>
      <div class="user-info_data-details">
        <p @click="copyValue('country')" :title="country">
          Country: <span>{{ flag }} {{ country || 'N/A' }}</span>
        </p>
        <p @click="copyValue('city')" :title="city">City: <span>{{ city || 'N/A' }}</span></p>
        <p @click="copyValue('loc')" :title="loc">Location: <span>{{ loc?.join(', ') || 'N/A' }}</span></p>
        <p @click="copyValue('timezone')" :title="timezone">Time zone: <span>{{ timezone || 'N/A' }}</span></p>
        <p @click="copyValue('hostname')" :title="hostname">Hostname: <span>{{ hostname || 'N/A' }}</span></p>
      </div>
    </div>
    <div class="user-info_map">
      <Map v-if="loc" :center="loc" />
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
    >
      <v-icon
        class="mr-2"
        icon="mdi-check"
      />
      {{ copyField.type }}: {{ copyField.value }} - copied
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
import { defineComponent, computed, toRefs, ref, reactive } from "vue";
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
    loc: {
      type: Array,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { country } = toRefs(props);

    const snackbar = ref(false);
    const copyField = reactive({
      type: '',
      value: '',
    });

    function copyValue(type: string) {
      copyField.type = type.toUpperCase();
      copyField.value = props[type];
      navigator.clipboard.writeText(props[type]);
      snackbar.value = true;
    }

    const flag = computed(() => {
      return country.value ? getUnicodeFlagIcon(country.value) : "🌎";
    });

    return { flag, copyValue, snackbar, copyField };
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
    overflow: hidden;

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
      margin: 12px 0;
    }

    &_map {
      width: 200px;
      height: 280px;
      
      @media (max-width: 768px) {
        margin-top: 10px;
        width: 100% !important;
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
            margin: 6px 0;
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
