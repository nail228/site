import createUploader from "@/components/User/EvadePage/hooks/fileSubmit";
export async function useReview(url){
    try{
        let file={}
        const {uploadFile}= await createUploader(url)
        const response=uploadFile(file,url)
        console.log(response)
        return response

    }catch (e) {
        console.log(e)

    }



}