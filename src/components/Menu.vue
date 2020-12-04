<template>
  <div class="nav-wrapper">
    <ul class="list">
      <li>
        <router-link tag="a" class="link" to="/">
          Danh sách
        </router-link>
      </li>
      <li>
        <router-link tag="a" class="link" to="/create">
          Create New
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="sass" scoped></style>
