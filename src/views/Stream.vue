<template>
  <div class="stream">
    <div class="navbar">
      <h1 class="logo">Chokiyo.</h1>
    </div>
    <div class="ipl">
      <vplayer :playerOptions="vOption" @onplay="play" />
      <h2>
        <div class="live"></div>
        IPL - Mi vs RR
      </h2>
      <div class="subtitle">
        <p>Live <span class="date">2020 OCT 07</span></p>
      </div>
    </div>
    <div class="content">
      <h3>Donate Us</h3>
      <hr class="seperator" />
      <div class="donate">
        <span class="esewaid"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9844604648</span
        >
        <img src="../assets/esewa.png" alt="esewa Donate Icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { vplayer } from "vue-hls-player";
export default {
  components: { vplayer },
  data: () => ({
    vOption: {
      type: "application/x-mpegURL",
      src:
        "https://webtv-stream.nettv.com.np/ottlive/netSELECTHD11500.stream/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8xNi8yMDIwIDI6MTg6NDAgUE0maGFzaF92YWx1ZT1YRy9DZ2wvdXBvWUl5MHV5TzNoOHpBPT0mdmFsaWRtaW51dGVzPTg2NDAwJmlkPTI0NzkxMg==",
      preload: true,
      autoplay: true,
      isLoop: false,
      playsinline: false,
      poster:
        "https://dream11indian.com/wp-content/uploads/2020/10/MI-vs-RR-dream11-team-prediction-800x445.jpg",
      controls: "progress,current,durration,volume",
      crossOrigin: false
    }
  }),
  methods: {
    play(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.stream {
  margin: 0;
  padding: 5px 20px;
  background-color: rgb(30, 30, 30);
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "navbar navbar"
    "videoLive content";
  .navbar {
    background-color: rgb(29, 29, 29);
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin: 0;
    grid-area: navbar;
    color: #04cf59;
  }
  .ipl {
    grid-area: videoLive;
    display: flex;
    flex-direction: column;
    color: #dbdbdb;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #dbdbdb;
      padding: 0;
      .live {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: red;
        display: inline-block;
      }
    }
    /*
        <div class="subtitle">
        <div class="live"></div>
        <p>Live <span class="date">2020 OCT 07</span></p>
      </div>
    */
    .subtitle {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      opacity: 0.7;
      p {
        font-weight: bold;
        span.date {
          font-weight: normal;
          font-size: 14px;
        }
      }
    }
  }
  .content {
    margin: 0 0 0 20px;
    padding: 0px 0px 10px 0px;
    background-color: rgb(30, 30, 30);
    grid-area: content;
    color: #dbdbdb;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #dbdbdb;
    }
    .seperator {
      margin-top: 2px;
      margin-bottom: 8px;
      opacity: 0.2;
      color: #dbdbdb;
    }
    .donate {
      background-color: rgb(76, 189, 61);
      padding: 10px;
      .esewaid {
        color: #ffffff;
        text-align: center;
        font-size: 50px;
        font-weight: bold;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
