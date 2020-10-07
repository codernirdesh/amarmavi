<template>
  <div class="home">
    <div class="buttons">
      <button class="remove" @click="removeCardData">Delete Cards</button>
      <button class="add" @click="getFromFirebase">Get from Firebase.</button>
    </div>
    <div class="loading" v-if="loading">
      <div class="loadingio-spinner-ripple-k2w3uwziw3">
        <div class="ldio-llxcpkggpbk">
          <div></div>
          <div></div>
        </div>
      </div>
      Loading...
    </div>
    <div class="flex" v-show="!loading">
      <Card
        v-for="(card, i) in cards"
        :key="i"
        :title="card.title"
        :description="card.description"
        :mediaAlt="card.title"
        :tag="card.year"
        :mediaImg="card.imageURL"
        :to="card.downloadLink"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import axios from "axios";
import db from "../services/firebase";
export default {
  components: {
    Card
  },
  data: () => ({
    cards: [],
    loading: true
  }),
  methods: {
    getCardData() {
      axios
        .get("https://picsum.photos/v2/list?page=2&limit=10")
        .then(response => {
          // this.cards = response.data;
          response.data.forEach(card => this.cards.push(card));
          this.loading = false;
        });
    },
    removeCardData() {
      this.loading = true;
      this.cards = [];
    },
    getFromFirebase() {
      db.collection("Movies").onSnapshot(response => {
        const changes = response.docChanges();

        changes.forEach(change => {
          console.log(change.type);
          if (change.type === "added") {
            console.log(change.doc.data());
            this.cards.push(change.doc.data());
            this.loading = false;
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes ldio-llxcpkggpbk {
  0% {
    top: 113.19px;
    left: 113.19px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 15.015px;
    left: 15.015px;
    width: 196.35px;
    height: 196.35px;
    opacity: 0;
  }
}

.ldio-llxcpkggpbk div {
  position: absolute;
  border-width: 2.31px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ldio-llxcpkggpbk 0.9345794392523364s cubic-bezier(0, 0.2, 0.8, 1)
    infinite;
}

.ldio-llxcpkggpbk div:nth-child(1) {
  border-color: rgba(18, 167, 45, 0.862741935483871);
}

.ldio-llxcpkggpbk div:nth-child(2) {
  border-color: rgba(255, 0, 0, 0.8962903225806451);
  animation-delay: -0.4672897196261682s;
}

.loadingio-spinner-ripple-k2w3uwziw3 {
  width: 231px;
  height: 231px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-llxcpkggpbk {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-llxcpkggpbk div {
  box-sizing: content-box;
}
img {
  padding: 10px;
  &:hover {
    padding: 20px;
  }
}
.flex {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.loading {
  z-index: 2;
  background-color: rgb(236, 236, 236);
  height: 93vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.buttons {
  z-index: 1;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // position: sticky;
  // top: 0;
  // left: 0;
  .add {
    margin: 5px 10px;
    padding: 5px 20px;
    color: #ffffff;
    background-color: rgb(36, 160, 63);
    transition: all 250ms ease-in-out;
    &:hover {
      box-shadow: 1px 3px 12px -6px rgba(0, 0, 0, 0.74);
      transition: all 250ms ease-in-out;
    }
  }
  .remove {
    margin: 5px 10px;
    padding: 5px 20px;
    color: #ffffff;
    background-color: rgb(248, 49, 35);
    transition: all 250ms ease-in-out;
    &:hover {
      box-shadow: 1px 3px 12px -6px rgba(0, 0, 0, 0.74);
      transition: all 250ms ease-in-out;
    }
  }
  .check {
    margin: 5px 10px;
    padding: 5px 20px;
    color: #ffffff;
    background-color: rgb(33, 114, 236);
    transition: all 250ms ease-in-out;
    &:hover {
      box-shadow: 1px 3px 12px -6px rgba(0, 0, 0, 0.74);
      transition: all 250ms ease-in-out;
    }
  }
}
</style>
