<template>
  <div class="page-event">
    <h2 class="heading-primary">Chỉnh sửa Event</h2>
    <div class="alert is-success margin-b20" v-if="edit">
      <p>
        Cập nhật thành công,
        <router-link tag="a" class="strong" :to="'/detail/' + id">
          Xem page
        </router-link>
      </p>
    </div>
    <div class="form-wrapper">
      <form class="form" id="form" v-on:submit.prevent="updateEvent">
        <div class="form-group">
          <label class="form-label">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tiêu đề"
            v-model="event.title"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label">Thể Loại</label>
          <select class="form-control" v-model="event.category">
            <option value="Sự kiện">Sự kiện</option>
            <option value="Văn nghệ">Văn nghệ</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Mô tả ngắn</label>
          <textarea
            class="form-control"
            cols="30"
            rows="3"
            placeholder="Nhập mô tả ngắn"
            v-model="event.description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Mô tả chi tiết</label>
          <ckeditor
            :editor="editor"
            v-model="event.content"
            :config="editorConfig"
          >
          </ckeditor>
          <!-- <textarea
            class="form-control"
            cols="30"
            rows="10"
            placeholder="Nhập mô tả ngắn"
            v-model="event.content"
            required
          ></textarea> -->
        </div>
        <div class="row margin form-group">
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label class="form-label">Địa điểm</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập địa điểm"
                v-model="event.location"
                required
              />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label class="form-label">Đơn vị tổ chức</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập đơn vị tổ chức"
                v-model="event.organizer"
                required
              />
            </div>
          </div>
        </div>
        <div class="row margin align-items-end form-group">
          <div class="col-12 col-sm-6">
            <div class="form-group">
              <label class="form-label">Ngày tổ chức</label>
              <input
                type="date"
                class="form-control"
                placeholder=""
                v-model="event.date"
                required
              />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="d-flex align-items-center form-group">
              <div class="col-auto">
                <label class="form-label">Thời gian</label>
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control w-150 text-center"
                  placeholder="8"
                  v-model="event.time"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <p class="text-center">
            <button type="submit" class="btn is-success is-md w-200">
              Chỉnh sửa
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { db } from "@/db.js";
const eventsDetail = db.ref("events");
export default {
  name: "EventCreat",
  created() {
    this.$rtdbBind("event", eventsDetail.child(this.id));
  },
  data() {
    return {
      id: this.$route.params.id,
      event: "",
      edit: false,
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {}
    };
  },
  methods: {
    updateEvent() {
      const event = { ...this.event };
      db.ref("events/" + this.id)
        .set(event)
        .then(() => {
          this.edit = true;
          window.scrollTo(0, 0);
        });
      // this.$firebaseRefs.event.update({ lastName: newLastName });
    }
  }
};
</script>

<style lang="sass" scoped>
.ck.ck-editor__editable_inline
  min-height: 300px
</style>
