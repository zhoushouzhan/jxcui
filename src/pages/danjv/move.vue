<template>
    <yplayout v-if="isLoad">
        <template #header>
            <i class="ri-2x text-gray-500 ml-2 ri-arrow-left-right-fill"></i>
            <div class="text-xl px-3">调拔单</div>
            <div class="flex-1 flex flex-row-reverse space-x-reverse space-x-2"></div>
            <button class="btn btn-chen" @click="goback">返回</button>
        </template>
        <template #list>
            <div class=" bg-white text-sm">
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div>
                            出仓：
                        </div>
                        <div>
                            <yplist controller="godown" v-model="formData.out_godown_id" colkey="title" defaultTitle="--选择仓库--"></yplist>
                        </div>
                    </div>
                    <div class="flex items-center" v-if="formData.out_godown_id">
                        <div>
                            入仓：
                        </div>
                        <div>
                            <yplist controller="godown" v-model="formData.godown_id" colkey="title" defaultTitle="--选择仓库--"></yplist>
                        </div>
                    </div>
                </div>
                <div class="space-y-3 mt-5" v-if="formData.godown_id">
                    <div>
                        <ypinput v-model="barcode" placeholder="录入条码" @keyup.enter="get_goods" maxlength="15"></ypinput>
                        <table class="yp-table">
                            <thead>
                                <tr>
                                    <th class="text-center">序号</th>
                                    <th class="w-40">图片</th>
                                    <th>标题</th>
                                    <th>条码</th>
                                    <th>零售价</th>
                                    <th>数量</th>
                                    <th>库存</th>
                                    <th>备注</th>
                                    <th class="text-center">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item,index) in formData.bill">
                                    <tr>
                                        <td class="text-center">{{ index+1 }}</td>
                                        <td class="w-40">
                                            <img :src="item.thumbFile" class="w-28 h-28 object-cover" v-viewer>
                                        </td>
                                        <td>{{ item.title }}</td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ item.storeprice }}</td>
                                        <td><ypinput type="number" v-model="item.numbers" placeholder="请输入数量" :max="item.stock" maxlength="9"></ypinput></td>
                                        <td class="text-center">{{ item.stock }}</td>
                                        <td><ypinput v-model="item.intro" placeholder="请输入备注" maxlength="30"></ypinput></td>
                                        <td>
                                            <div class="flex items-center justify-center" @click="removeitem(index)">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-gray-600 hover:fill-red-500"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="flex justify-center py-2 space-x-2 mt-3">
                    <button class="btn btn-hong" type="button" v-if="formData.bill.length" @click="save">
                        <i class="ri-save-line ri-lg pr-1"></i>
                        提交
                    </button>
                    <button class="btn" type="button" @click="goback">
                        <i class="ri-arrow-go-back-fill ri-lg pr-1"></i>
                        返回
                    </button>
                </div>
            </div>
        </template>
    </yplayout>




</template>
<script setup>
    import {postData,getData,alter} from "@/api/data"
    import {ref,reactive,onMounted,computed,watch} from "vue"
    const props=defineProps({
        id:{
            default:0
        },
        t:{
            default:0
        },
        page:{
            default:null
        }
    })
    const emits=defineEmits(['jumpCom'])

    const barcode=ref('')
    const godownList=reactive([])
    const isLoad=ref(false)
    const formData=reactive({
        godown_id:0,
        out_godown_id:0,
        enabled:0,
        type:3,
        member_id:null,
        bill:[]
    })

    const goback=()=>{
        emits('jumpCom',{to:'list'})
    }
    const get_goods=async()=>{
        if(barcode.value==''){
            return
        }
        const resp= await getData('goods/details',{code:barcode.value,godown_id:formData.out_godown_id})
        if(resp.code==1){

            if(resp.data.stock==0){
                alter({ type: 'alter-error', text: '库存不足'})
                return
            }

            let item={
                goods_id:resp.data.id,
                title:resp.data.title,
                godown_id:formData.godown_id,
                category_id:resp.data.category.id,
                thumbFile:resp.data.thumbFile,
                storeprice:resp.data.storeprice.toString().replace(/,/g,''),
                labelprice:resp.data.labelprice.toString().replace(/,/g,''),
                stock:resp.data.stock,
                intro:'',
                status:0,
                sellprice:resp.data.labelprice.toString().replace(/,/g,''),
                numbers:1,
                code:resp.data.code
            }
            formData.bill.unshift(item)
            barcode.value=''
        }
    }

    const removeitem=(index)=>{
        formData.bill.splice(index,1)
    }
    const get_godown=async()=>{
        const resp= await getData('godown/index')
        if(resp.code==1){
            
            for(let key in resp.data.data){
                godownList.push(resp.data.data[key])
            }
        }
    }
    const save=async()=>{
        const resp= await postData('kucundan/save',formData)
        if(resp.code==1){
            formData.bill.splice(0)
            alter({ type: 'alter-success', text: resp.msg })

        }
    }
    const read=async(id)=>{
        const resp = await getData('kucundan/read',{id:id})
        if(resp.code==1){
            formData.id=id
            formData.godown_id=resp.data.godown_id
            formData.out_godown_id=resp.data.out_godown_id
            formData.type=resp.data.type
            formData.bill=resp.data.bill
        }
    }

    onMounted(async() => {
        if(props.id){
            await read(props.id)
        }else{
            await get_godown()
        }
        isLoad.value=true
    })
</script>