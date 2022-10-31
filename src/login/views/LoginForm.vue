<template>
  <div>
    <AppBar></AppBar>
    <NavigationDrawer></NavigationDrawer>
  </div>
</template>
<script>
import AppBar from "@/common/views/AppBar";
import NavigationDrawer from "@/common/views/NavigationDrawer";
export default {
  components: { AppBar, NavigationDrawer },
  data: () => ({}),
};
</script>
