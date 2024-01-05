<template>
  <div class="wrapper">
    <div
        class="dropzone-container"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
    >
      <input
          type="file"
          multiple
          name="file"
          id="fileInput"
          class="hidden-input"
          @change="onChange"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-else>Drop files here or <u>click here</u> to upload.</div>
      </label>

      <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <img class="preview-img" :src="generateThumbnail(file)" />
            <p :title="file.name">
              {{ makeName(file.name) }}
            </p>
          </div>
          <div>
            <button
                class="ml-2"
                type="button"
                @click="remove(files.indexOf(file))"
                title="Remove file"
            >
              <b>&times;</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="upload-button" @click="uploadServer">Analize</button>
  </div>

  <section v-if="isReady">
    <review-evade :result="review" />
  </section>
</template>

<script>
import ReviewEvade from "@/components/User/EvadePage/reviewEvade.vue";
import axios from "axios";
export default {
  components:{ReviewEvade},
  data() {
    return {
      isDragging: false,
      files: [],
      isReady:false,
      review:[]
    };
  },
  methods: {
    onChange() {
      this.files = [...this.$refs.file.files];
    },
    generateThumbnail(file) {
      let fileSrc = URL.createObjectURL(file);
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
      }, 1000);
      return fileSrc;
    },
    makeName(name) {
      return (
          name.split(".")[0].substring(0, 3) +
          "..." +
          name.split(".")[name.split(".").length - 1]
      );
    },
    remove(i) {
      this.files.splice(i, 1);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    async uploadServer(){
      const files=this.files
      const formdata=new FormData
      files.forEach(file=>{formdata.append("file",file)})
      const response=await axios.post('http://127.0.0.1:8000/api/file/evade',formdata,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })

      this.isReady=true
      this.review=response['data']
      console.log(this.review)
      return response
    }
  },
};

</script>



<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropzone-container {

  padding: 4rem;
  background: #FFFFFF;
  border: 5px dashed #000000;;
  border-radius: 15px;
  margin: 30px 100px;
}
.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}
.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}
.preview-container {
  display: flex;
  margin-top: 2rem;
}
.preview-card {
  display: flex;
  border: 1px solid #a2a2a2;
  padding: 5px;
  margin-left: 5px;
}
.preview-img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}
.upload-button{
  align-self: center;
  padding:10px 20px;
  background: #FAFF00;
  border-radius: 15px;

}
</style>