<template>
  <ul class="list-events row">
    <li
      class="col-sm-6 col-md-6 col-lg-4"
      v-for="(event, index) in events"
      :key="index"
    >
      <EventItem
        :keyid="event['.key']"
        :category="event.category"
        :date="event.date"
        :description="event.description"
        :location="event.location"
        :organizer="event.organizer"
        :time="event.time"
        :title="event.title"
      ></EventItem>
    </li>
  </ul>
</template>

<script>
import { db } from "@/db.js";
import EventItem from "./EventItem.vue";
export default {
  name: "EventList",
  components: {
    EventItem
  },
  data() {
    return {
      events: []
    };
  },
  firebase: {
    events: db.ref("events")
  }
};
</script>

<style lang="sass" scoped>
.list-events
  > li
    margin-bottom: 30px
</style>
