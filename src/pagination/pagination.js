import Pagination from 'v-pagination-3'

export default{
    data(){
        return{
            page:this.$route.query.page || 1,
            pageSize:10,
            pageCount:0,
            allItems:[],
            items:[]

        }
    },
    methods:{
        pageChangeHandler(page){

        }
    }
}