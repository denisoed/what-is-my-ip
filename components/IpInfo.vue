<template>
  <div class="user-info">
    <div class="user-info_data">
      <div class="user-info_ip">
        <input
          v-model="selectedIP"
          placeholder="Enter IP"
          autofocus
          onclick="this.select()"
        />
        <button
          variant="tonal"
          aria-label="Copy IP"
          class="user-info_search"
          @click="onSearch"
        >
          <ClientOnly>
            <img src="~/assets/search.svg" alt="Copy IP" />
          </ClientOnly>
        </button>
        <button
          variant="tonal"
          aria-label="Copy IP"
          class="user-info_copy-ip"
          @click="copyValue('ip')"
        >
          <ClientOnly>
            <img src="~/assets/copy.svg" alt="Copy IP" />
          </ClientOnly>
        </button>
      </div>
      <div class="user-info_data-details">
        <p @click="copyValue('country')" :title="country">
          Country: <span>{{ flag }} {{ country || 'N/A' }}</span>
        </p>
        <p @click="copyValue('city')" :title="city">City: <span>{{ city || 'N/A' }}</span></p>
        <p @click="copyValue('loc')" :title="loc?.join(', ')">Location: <span>{{ loc?.join(', ') || 'N/A' }}</span></p>
        <p @click="copyValue('timezone')" :title="timezone">Time zone: <span>{{ timezone || 'N/A' }}</span></p>
        <p @click="copyValue('hostname')" :title="hostname">Hostname: <span>{{ hostname || 'N/A' }}</span></p>
      </div>
    </div>
    <div class="user-info_map">
      <Map v-if="loc" :center="loc" />
    </div>

    <Toast
      :show="copied"
      :message="`${copyField.type}: ${copyField.value || 'N/A'} - copied`"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  toRefs,
  ref,
  watch,
  reactive,
  type PropType
} from "vue";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default defineComponent({
  name: "IpInfo",
  props: {
    ip: {
      type: String as PropType<string | undefined>,
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
      type: Array as PropType<string[] | undefined>,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    }
  },
  emits: ['on-search'],
  setup(props, { emit }) {
    const { country, ip } = toRefs(props);
    const selectedIP = ref(ip.value);
    const copied = ref(false);
    const copyField = reactive({
      type: '',
      value: '',
    });

    function copyValue(type: string) {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 3000);
      copyField.type = type.toUpperCase();
      copyField.value = props[type];
      navigator.clipboard.writeText(props[type]);
    }
    const flag = computed(() => {
      return country.value ? getUnicodeFlagIcon(country.value) : '';
    });

    function onSearch() {
      emit('on-search', selectedIP.value);
    }

    watch(ip, (newIp) => {
      if (newIp) {
        selectedIP.value = newIp;
      }
    }, {
      immediate: true
    });

    return {
      flag,
      copyValue,
      copied,
      copyField,
      onSearch,
      selectedIP
    };
  },
});
</script>

<style lang="scss" scoped>
  .user-info {
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    background: linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.08));
    background-color: #223140;
    border-radius: 24px;
    box-shadow: -16px 16px 16px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      flex-direction: column;
    }

    input {
      font-size: 2.5rem;
      font-weight: bold;
      overflow: hidden;
      border: none;
      color: #fff;
      box-shadow: none;
      background: transparent;
      -moz-appearance: textfield;

      &:focus {
        outline: none;
      }

      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &_ip {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }

    &_search,
    &_copy-ip {
      width: 40px;
      min-width: 40px;
      height: 40px;
      font-size: 14px;
      margin: 12px 0;
      background: rgba($color: white, $alpha: 0.1);
      border: 0;
      box-shadow: none;
      cursor: pointer;
      border-radius: 100%;
      
      &:hover {
        background: rgba($color: white, $alpha: 0.2);
      }

      &:active {
        background: rgba($color: white, $alpha: 0.1);
      }
      
      img {
        width: 40%;
      }
    }

    &_search {
      img {
        width: 50%;
      }
    }

    &_map {
      width: 200px;
      height: 280px;
      background: rgba($color: white, $alpha: 0.1);
      
      @media (max-width: 768px) {
        margin-top: 10px;
        width: 100% !important;
        height: 150px;
      }
    }

    &_data {
      width: 100%;
      padding: 25px 35px;

      @media (max-width: 568px) {
        padding: 15px 25px;
      }

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
