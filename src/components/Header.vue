<template>
  <div class="header">
    <a class="title">Final Project Operating Systems</a>
    <div class="header-right">
      <router-link class="menu" to="/" exact>What is Segementation?</router-link>
      <router-link class="menu" to="/tryOut">Try Out!</router-link>
      <!-- <a class="menu" @click="home = true" :class="{ active: home }">What is Segmentation?</a>
      <a class="menu" @click="home = false" :class="{ active: !home }">Try out!</a>-->
    </div>
  </div>
</template>

<script>
var home = true;
export default {
  name: "Header",
  data: function() {
    return {
      home
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  overflow: hidden;
  background-color: rgba(68, 67, 67, 0.925);
  padding: 20px 10px;
}

/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the title link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.title {
  font-size: 25px;
  font-weight: bold;
  color: white;
}

/* Change the background color on mouse-over */
.header-right a:hover {
  color: #ddd;
}

/* Style the active/current link*/
.header a.router-link-exact-active {
  background-color: #ddd;
  color: black;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 800px wide or less, stack the links on top of each other */
@media screen and (max-width: 800px) {
  .header a {
    float: none;
    display: block;
  }
  .header-right a.menu {
    text-align: left;
  }
  .header a.title {
    text-align: center;
  }
  .header-right {
    float: none;
  }
}
@media screen and (max-width: 600px) {
  .header a.title {
    font-size: 20px;
  }
}
</style>
