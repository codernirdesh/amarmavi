<template>
  <div class="home">
    <div class="flex">
      <Card
        v-for="(card, i) in cards"
        :key="i"
        :mediaAlt="`Test Image ${i}`"
        :tag="`${i + 1} Dec 2020`"
        :mediaImg="`https://picsum.photos/300/157?random=${i}`"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  data: () => ({
    cards: ["card", "card", "card", "card", "card", "card", "card", "card"]
  })
};
</script>
<style lang="scss" scoped>
img {
  padding: 10px;
  &:hover {
    padding: 20px;
  }
}
.flex {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
