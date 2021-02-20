<template>
  <tab-bar>
    <tab-bar-item link="/quote" active-color="#78d354">
      <img slot="item-icon" src="~assets/img/tabbar/quote.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/quote_active.png" alt="">
      <div slot="item-text">报价</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" active-color="#78d354">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
