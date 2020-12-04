<template>
  <div class="page-event event-wrapper">
    <div class="event-detail">
      <div class="row justify-content-between align-items-center margin-b20">
        <div class="col-auto">
          <div class="d-flex align-items-center">
            <p>
              <span class="badge">{{ event.category }}</span>
            </p>
            <p>
              <span class="icon icon-clock"></span>
              {{ event.time }}
              -
              <span class="icon icon-date"></span>
              {{ event.date }}
            </p>
          </div>
        </div>
        <div class="col-auto">
          <div class="d-flex align-items-center">
            <p>
              <span class="icon icon-location"></span>
              {{ event.location }}
            </p>
            <p>
              <span class="icon icon-user"></span>
              {{ event.organizer }}
            </p>
            <p>
              <router-link
                tag="a"
                class="badge is-danger trans"
                :to="'/edit/' + id"
              >
                Chỉnh sửa
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <h2 class="event-heading">
        {{ event.title }}
      </h2>
      <div class="event-content" v-html="event.content"></div>
      <p class="event-image">
        <img src="@/assets/event-default.jpg" :alt="event.title" />
      </p>
    </div>
    <p class="text-center">
      <router-link tag="a" class="btn is-success is-md w-200" to="/">
        Trở về
      </router-link>
    </p>
  </div>
</template>

<script>
import { db } from "@/db.js";
const events = db.ref("events");

export default {
  name: "EventDetail",
  data() {
    return {
      id: this.$route.params.id,
      event: ""
    };
  },
  created() {
    this.$rtdbBind("event", events.child(this.id)).then(event => {
      console.log(event);
    });
  }
};
</script>

<style lang="sass" scoped>
.event

  &-image
    position: relative
    text-align: center
    margin-bottom: 30px
    img
      width: 600px
      max-width: 100%
</style>
