<template>
  <div class="card">
    <div class="media-image">
      <img :src="mediaImg" :alt="mediaAlt" style="object-fit: cover;" />
    </div>
    <div class="card-content">
      <div class="tag">
        {{ tag }}
      </div>
      <div class="wrapper">
        <div class="card-title">
          {{ title }}
        </div>
        <div class="card-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum
          accusantium ab ex.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tag: String,
    mediaImg: String,
    mediaAlt: String,
    title: String,
    image: String
  }
};
</script>
<style lang="scss" scoped>
.card {
  margin: 12px 10px;
  border-radius: 15px 15px 20px 20px;
  box-shadow: 1px 3px 12px -6px rgba(0, 0, 0, 0.74);
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 1px 3px 12px -2px rgb(107, 236, 81);
    transform: scale(1.01);
    transition: all 200ms ease-in-out;
    border-radius: 15px 15px 24px 24px;
  }
  .media-image {
    border-radius: 15px;
    width: 100%;
    height: 150px;
    img {
      border-radius: 13px 13px 0 0;
      width: 100%;
      height: 100%;
    }
  }
  .card-content {
    display: grid;
    grid-template-columns: 1fr 11fr;
    grid-template-areas: tag wrapper;
    padding: 0px 12px 0px 0px;
    .tag {
      border-radius: 0 19px 0 0;
      font-weight: normal;
      font-size: 11px;
      color: #ffffff;
      background-color: rgb(236, 81, 81);
      grid-area: "tag";
      margin: 0px 8px 0 0;
      padding: 0;
      writing-mode: vertical-lr;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(180deg);
    }
    .wrapper {
      grid-area: "wrapper";
      .card-title {
        line-height: 1.3;
        padding: 20px 0 8px 0;
        font-weight: 800;
        font-size: 14px;
      }
      .card-detail {
        line-height: 1.3;
        font-size: 13px;
        padding-bottom: 20px;
        font-weight: normal;
        color: #4e4e4e;
      }
    }
  }
}
</style>
