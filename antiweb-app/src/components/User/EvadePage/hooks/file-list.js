import {ref} from 'vue'

export default function useFile(){

    const files=ref([])

    function fileExist(Id){
        return files.value.some(({id})=>id===Id)
    }
    function addFiles(newFiles){
        let newUploadedFiles=[...newFiles]
            .map((file)=>new uploadedFiles(file))
            .filter((file)=>!fileExist(file.id))
        files.value=files.value.concat(newUploadedFiles)
    }

    function removeFiles(file) {
        const index = files.value.indexOf(file)

        if (index > -1) {
            files.value.splice(index, 1)
        }

    }
    return {files,addFiles,removeFiles}
}
class uploadedFiles{
    constructor(file) {
        this.file=file
        this.id=`${file.name}-${file.size}-${file.lastModifed}-${file.type}`
        this.url=URL.createObjectURL(file)
        this.status=null
    }
}