<template>
  <div class="text-sm">
    <div class="flex border-b">
      <template v-for="(item,index) in group" :key="index">
        <div class="p-3 hover:border-b border-blue-600 cursor-pointer hover:text-blue-600" :class="{'border-b border-blue-600 text-blue-600':index==tabIndex}" @click="tabIndex=index">
          {{item}}
        </div>
      </template>
    </div>
    <template v-for="(item,index) in group" :key="index">
      <div v-show="tabIndex==index" class="py-4">
        <template v-for="(col,k) in mod.modcolumn" :key="k">
          <cols 
          :col="col" v-model="postParams[col.name]" 
          :row="postParams" 
          v-if="col.groupindex==index&&['none','hidden'].indexOf(col.formitem)<0&&col_display(col.extends)"
          />
        </template>
      </div>
    </template>
    <div class="text-center">
      <button class="btn btn-hong" @click="submit()">提交</button>
    </div>
  </div>
</template>
<script setup>
import { alter } from '@/api/data'
import { ref, reactive, inject } from 'vue'

const props = defineProps({
  group: {
    type: Array
  },
  mod: Object,
  formData: {
    type: Object,
    required: true
  },
  isPreview: {
    default: 0
  }
})
const emits = defineEmits(['save'])
const postParams = reactive(props.formData)
const tabIndex = ref(0)

//扩展字段控制字段显示
const col_display=(str)=>{
  try{
    let obj=JSON.parse(str)
    let d=obj.display
    if(postParams[d]==obj.value) return true
    return false
  }catch(e){
    return true;
  }
}
//提交
const submit = async () => {
  if (props.isPreview) {
    alter({ type: 'alter-error', text: '预览不可以真实提交数据' })
    return
  }
  emits('save', postParams)
}
</script>