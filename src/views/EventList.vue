<template>
  <div class="page-event">
    <h2 class="heading-primary">
      Danh sách Sự Kiện
    </h2>
    <div class="clearfix">
      <EventList></EventList>
    </div>
  </div>
</template>

<script>
import EventList from "@/components/event/EventList.vue";
export default {
  name: "Home",
  components: {
    EventList
  },
  data() {
    return {};
  }
};
</script>
