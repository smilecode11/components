<template>
    <div class="template-search-tree">
        <h3>SearchTree 演示</h3>
        <h4 style="margin-bottom:20px">
            <el-button size="small" @click="handleChangeSelectTree">初始化当前选择值</el-button> 
            当前值： {{currentNodeKey}}
        </h4>
        <div class="container">
            <search-tree @select="handleSelect" :currentNodeKey="currentNodeKey" :treeData="treeData" clearable></search-tree>
        </div>
    </div>
</template>

<script>
import SearchTree from '../../components/SearchTreeV2/SearchTree.vue'

export default {
    data(){
        return {
            treeData:[],
            currentNodeKey:undefined
        }
    },
    methods:{
        handleSelect(data){
            console.log('handleSelect',data)
            this.currentNodeKey = data.id
        },
        handleChangeSelectTree(){
            this.currentNodeKey = "101"
        }
    },
    components:{
        [SearchTree.name]: SearchTree
    },
    created(){
        this.treeData = [{
                id:1,
                label:'表单模板 1',
                children:[{
                    id:"101",
                    label:"表单模板 11",
                    code:"101"
                }]
            },{
                id:2,
                label:'表单模板 2',
                children:[{
                    id:"201",
                    label:"表单模板 21",
                    code:"201"
                },{
                    id:"202",
                    label:"表单模板 22",
                    code:"202"
                }]
            }]
    }
}
</script>

<style>
    .template-search-tree{
        width: 100%;
        height: 100%;
    }
</style>