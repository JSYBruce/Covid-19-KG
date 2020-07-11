//在这里写新的panel的样式。
Vue.component("hot-spot", {
    template: `
<el-card class="box-card hot-spot" id = "hot-spot">
  <div slot="header" class="clearfix">
    <span>热搜榜</span>
<!--    <el-button style="float: right; padding: 3px 0" type="text">换一批</el-button>-->
  </div>
  <div v-for="(o,index) in hotspot" :key="o" class="text item">
    <a>{{index+1+ "  " + o }}</a>
  </div>
</el-card>
`,

    data: function () {
        return {
            hotspot:[],
        }

    },


    methods: {
        getdata: function () {
            var keyword = this.keyword;
            console.log(keyword);
            axios.get('/searchHotSpot').then(response => {
                console.log(response.data);
                this.hotspot = response.data; //数据获得成功 vue双向绑定

            })
        },
    },

    created: function () {
        this.getdata();
    },

});
