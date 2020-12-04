<template>
  <div class="page-event">
    <h2 class="heading-primary">Tạo mới Event</h2>
    <div class="alert is-success margin-b20" v-if="edit">
      <p>
        Thêm mới thành công
      </p>
    </div>
    <div class="form-wrapper">
      <form class="form" id="form" v-on:submit.prevent="addEvent">
        <div class="form-group">
          <label class="form-label">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tiêu đề"
            v-model="title"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label">Thể Loại</label>
          <select class="form-control" v-model="category">
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
            v-model="description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Mô tả chi tiết</label>
          <ckeditor :editor="editor" v-model="content" :config="editorConfig">
          </ckeditor>
          <!-- <textarea
            class="form-control"
            cols="30"
            rows="10"
            placeholder="Nhập mô tả ngắn"
            v-model="content"
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
                v-model="location"
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
                v-model="organizer"
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
                v-model="date"
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
                  class="form-control w-50 text-center"
                  placeholder="8"
                  v-model="timeh"
                  required
                />
              </div>
              <div class="col-auto">:</div>
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control w-60 text-center"
                  placeholder="00"
                  v-model="timem"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <p class="text-center">
            <button type="submit" class="btn is-success is-md w-200">
              Thêm mới
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
export default {
  name: "EventCreat",
  data() {
    return {
      edit: false,
      category: "Sự kiện",
      content: "",
      date: "",
      description: "",
      location: "",
      organizer: "",
      timeh: "",
      timem: "",
      title: "",
      editor: ClassicEditor,
      editorConfig: {}
    };
  },
  methods: {
    addEvent() {
      if (this.title != "") {
        db.ref("events")
          .push({
            category: this.category,
            content: this.content,
            date: this.date,
            description: this.description,
            location: this.location,
            organizer: this.organizer,
            time: this.timeh + ":" + this.timem,
            title: this.title
          })
          .then(() => {
            this.category = "Sự kiện";
            this.content = "";
            this.date = "";
            this.description = "";
            this.location = "";
            this.organizer = "";
            this.timeh = "";
            this.timem = "";
            this.title = "";
            this.edit = true;
            window.scrollTo(0, 0);
          });
      }
    }
  }
};
</script>
