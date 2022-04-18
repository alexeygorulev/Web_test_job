<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <a class="navbar-logo" to="/">{{ title }}</a>
          <ul class="navbar-list">
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {app} from "@/_config";
export default {
  data() {
    return {
      title: app.title,
    };
  },
};
</script>
