<template>
  <div class="wrapper">
    <div class="loader-widget">
      <h1>CHECK INTERNET SPEED</h1>
      <div class="loader-content">
        <div class="content">{{ downloadSpeed }}<small>Mbps</small></div>
        <span v-if="checking" class="loader"></span>
        <button v-else @click="checkSpeed">CHECK</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const checking = ref(false);
  const downloadSpeed = ref(0);

  const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg';
  const downloadSize = 10200000;
  let speeds = [];

  const loadSpeedTest = () => {
    return new Promise(resolve => {
      let timeStart, timeEnd;
      const downloadSrc = new Image();
      timeStart = new Date().getTime();
      const cacheImg = `?nn=${timeStart}`;
      downloadSrc.src = `${imageLink}${cacheImg}`;

      downloadSrc.onload = () => {
        timeEnd = new Date().getTime();
        const timeDuration = (timeEnd - timeStart) / 1000;
        const loadedBytes = downloadSize * 8;
        const speed = (loadedBytes / timeDuration) / 1024 / 1024;
        resolve(speed);
      };
    });
  };
  
  async function checkSpeed() {
    downloadSpeed.value = 0;
    checking.value = true;

    for (let i = 0; i < 3; i++) {
      speeds.push(await loadSpeedTest());
    }

    const results = await Promise.all(speeds);
    const middle = results[Math.floor((results.length - 1) / 2)];
    const totalSpeed = middle.toFixed(1);
    downloadSpeed.value = totalSpeed;
    checking.value = false;
  };
</script>

<style lang="scss" scoped>
  *.hide {
    display: none !important;
  }

  .wrapper {
    width: 100%;
    max-width: 360px;
    position: absolute;
    display: inline-block;
    padding: 32px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.08));
    background-color: #223140;
    border-radius: 24px;
    box-shadow: -16px 16px 16px 8px rgba(0, 0, 0, 0.2);
  }

  .loader-widget {
    width: 100%;
    max-width: 360px;
    height: 420px;
  }

  .loader {
    position: relative;
    display: inline-block;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    background: conic-gradient(transparent 30%, rgba(1, 182, 190, 0.3) 100%);
    animation: radarRotate 2s linear infinite;
  }

  @keyframes radarRotate {
    100% {
      transform: rotate(360deg);
    }
  }

  .loader:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    left: calc(50% - 8px);
    border: 6px solid transparent;
    border-top: 90px solid #81ecec;
    filter: drop-shadow(0 0 12px #01b6be);
  }

  .loader-widget h1 {
    line-height: 1.3;
    margin-bottom: 32px;
    color: #aaffff;
  }

  .loader-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .loader-content button {
    position: relative;
    cursor: pointer;
    height: 180px;
    width: 180px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    border-radius: 50%;
    background-color: #223140;
    color: #eaeaea;
    border: 0;
    box-shadow: 0 0 12px #81ecec;
  }

  .loader-content.result button {
    height: 180px;
    width: 180px;
    margin-top: 16px;
  }

  .loader-content button:hover {
    background-color: #1f3c4e;
  }

  // .loader-content button:before {
  //   content: '';
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   top: -2px;
  //   left: -2px;
  //   border: 2px solid #7ed6d4;
  //   border-radius: 50%;
  //   animation: btnRing 2s linear infinite;
  // }

  @keyframes btnRing {
    60%,
    100% {
      height: calc(100% + 60px);
      width: calc(100% + 60px);
      top: -28px;
      left: -28px;
      opacity: 0;
    }
  }

  .loader-content button:after {
    content: '';
    position: absolute;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    top: -2px;
    left: -2px;
    background: linear-gradient(45deg, #25476e, #c7ecee);
    z-index: -1;
    border-radius: 50%;
  }

  .content {
    width: 100%;
    font-size: 54px;
    line-height: normal;
    margin: 12px 0 32px 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  h1 {
    font-size: 30px;
    margin: 15px 0;
  }
</style>