<!--
 * @Author: 一品网络技术有限公司
 * @Date: 2022-08-06 14:05:19
 * @LastEditTime: 2022-10-26 20:36:07
 * @FilePath: \vue3\src\components\global\ypupload\ypupload.vue
 * @Description:
 * 联系QQ:58055648
 * Copyright (c) 2022 by 东海县一品网络技术有限公司, All Rights Reserved.
-->
<template>
  <div id="plupload">
    <slot></slot>
  </div>

</template>
  <script setup>
import { getData, postData, alter,isJSON } from '@/api/data'
import store from '@/store'
import { inject, onMounted } from 'vue'
import plupload from 'plupload'

const emits=defineEmits(['getlist'])
const uploadHandle = inject('uploadHandle')
const uploader = new plupload.Uploader({
  url: import.meta.env.VITE_UPLOADURL,
  headers: {
    Authorization: store.state.User.token,
    //ajax方式传送
    'x-requested-with': 'XMLHttpRequest'
  }
})


const onupload = () => {
  uploader.start()
}
const removeFile = (id) => {
  uploader.removeFile(id)
  uploadHandle.removeFile(id)
}
defineExpose({ onupload, removeFile })
//文件上传
onMounted(() => {
  uploader.setOption('browse_button', 'ypupload')
  uploader.setOption('filters', {
    mime_types: [
      //只允许上传图片和zip文件
      { title: 'Files', extensions: store.state.Sys.sysinfo.filetype }
    ],
    max_file_size: store.state.Sys.sysinfo.uploadsize + 'mb', //最大只能上传
    prevent_duplicates: true //不允许选取重复文件
  })
  uploader.init()
  uploader.bind('FilesAdded', (uploader, files) => {
    files.map((val, ind) => {
      let src = ''
      if (val.type.indexOf('application') < 0) {
        src = URL.createObjectURL(val.getNative())
      }
      let obj = {}
      obj.id = val.id
      obj.name = val.name
      obj.type = val.type
      obj.size = parseInt((val.origSize / 1024 / 1024) * 100) / 100
      obj.progress = 0
      obj.status = 0
      obj.src = src
      uploadHandle.addFile(obj)
    })
  })

  uploader.bind('BeforeUpload', (uploader, file) => {
    uploadHandle.readyList = uploadHandle.readyList.map((val, index) => {
      if (val.id == file.id) {
        val.status = 1
      }
      return val
    })
  })
  uploader.bind('UploadProgress', (uploader, file) => {
    uploadHandle.readyList = uploadHandle.readyList.map((val, index) => {
      if (val.id == file.id) {
        val.progress = file.percent
      }
      return val
    })
  })
  uploader.bind('FileUploaded', (uploader, file, res) => {
    let r = JSON.parse(res.response)

    uploadHandle.readyList = uploadHandle.readyList.map((val, index) => {
      if (val.id == file.id) {
        if (r.code == 1) {
          val.status = 2
          val.src = r.data.url
        } else {
          val.status = 3
        }
      }
      return val
    })
  })

  uploader.bind('UploadComplete', (uploader, files) => {
    alter({ type: 'alter-success', text: '上传完毕' })
    uploader.splice()
    uploadHandle.reload()
  })

  uploader.bind('FilesAdded', (uploader, files) => {
    //uploader.start()
  })
  uploader.bind('Error',(up,arg)=>{


    
  })
})
</script>
