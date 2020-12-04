<template>
  <div class="card card-event">
    <div class="edit-control">
      <router-link tag="a" class="badge is-danger trans" :to="'/edit/' + keyid">
        Chỉnh sửa
      </router-link>
    </div>
    <router-link tag="a" class="card-link trans" :to="'/detail/' + keyid">
      <figure class="card-image">
        <img src="@/assets/event-default.jpg" alt="event" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-desc" v-html="description"></p>
        <ul class="card-info">
          <li>Người tổ chức: {{ organizer }}</li>
          <li>
            Thời gian: {{ time }}
            -
            <span class="icon icon-date"></span>
            {{ date }}
          </li>
          <li>Thể loại: {{ category }}</li>
          <li>
            <div class="d-flex">
              <p class="nowrap">
                Địa điểm:
              </p>
              <p>
                {{ location }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    keyid: String,
    category: {
      type: String,
      default: "Category"
    },
    date: {
      type: String,
      default: "Date"
    },
    description: {
      type: String,
      default: `Some quick example text to build on the card title and make up the bulk of the card's content.`
    },
    location: {
      type: String,
      default: "Location"
    },
    organizer: {
      type: String,
      default: "Organizer"
    },
    time: {
      type: String,
      default: "Organizer"
    },
    title: {
      type: String,
      default: "Organizer"
    }
  }
};
</script>
