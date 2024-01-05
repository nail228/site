<template>
  <div class="dowload-container">
    <p>Анализ на обход заимствований</p>
    <p>Загрузка файла</p>
    <div class="download" >
      <div class="file-uploader__wrapper--drag" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <input type="file" multiple name="fields[assetsFieldHandle][]" id="file-uploader__input"
               class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />

        <label for="file-uploader__input" class="block cursor-pointer">
          <div>
           Перетащите файлы сюда
            или <span class="underline">нажмите сюда</span> чтобы загрузить файлы
          </div>
        </label>
        <ul class="mt-4" v-if="this.filelist.length" v-cloak>
          <li class="text-sm p-1" v-for="file in filelist" :key="file.id">
            ${ file.name }<button class="ml-2" type="button" @click="remove(filelist.indexOf(file))" title="Remove file">remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"DownloadPage",
  data(){
    return{
      filelist: []
    }
  },
  methods:{
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  }
}

</script>

<style scoped>
.dowload-container{
  position: relative;
  display: flex;
  flex-direction: column;
}
.download{
  padding: 15px 10px;
  position: relative;
  box-sizing: border-box;
  border: 5px dashed #000000;
  border-radius: 16px;
  width: 636px;
  height: 249px;
  align-self: center;
}
.file-uploader__wrapper--drag{
  color: #FFFFFF;
  border-color: #777;
}
#file-uploader__input{
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
}
p{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 80px;
}
.download>p{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 80px;
}
.download>.file-label{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
  color: #FAFF00;
  border-radius: 20px;
  background-clip: padding-box;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 35px;
  text-align: center;
  color: #000000;

}
.file-uploader__icon{
  height: 25px;
  width: 25px;
}

.file-input{
  color: #FAFF00;
  background: #FAFF00;

}





</style>