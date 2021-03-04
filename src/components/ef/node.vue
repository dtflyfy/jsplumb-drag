<template>
    <div
            ref="node"
            :style="nodeContainerStyle"
            @click="clickNode"
            @mouseup="changeNodeSite"
            :class="nodeContainerClass"
    >
        <!-- 最左侧的那条竖线
        <div class="ef-node-left"></div> -->
        <!-- 节点类型的图标 -->
        <!-- <div class="ef-node-left-ico flow-node-drag">
            <i :class="nodeIcoClass"></i>
        </div> -->
        <!-- 节点名称 -->
        <!-- <div class="ef-node-text" :show-overflow-tooltip="true">
            {{node.name}}
        </div> -->
        <!-- 节点状态图标 -->
        <!-- <div class="ef-node-right-ico">
            <i class="el-icon-circle-check el-node-state-success" v-show="node.state === 'success'"></i>
            <i class="el-icon-circle-close el-node-state-error" v-show="node.state === 'error'"></i>
            <i class="el-icon-warning-outline el-node-state-warning" v-show="node.state === 'warning'"></i>
            <i class="el-icon-loading el-node-state-running" v-show="node.state === 'running'"></i>
        </div> -->
        <div class="entrance" flow-node-drag>
            <i :class="entranceClass"></i>
            <!-- <el-input class="input" v-model="node.serviceName" placeholder="请输入节点名称"></el-input>
            <el-input class="input" v-model="node.name2" placeholder="请输入灵犀页面id"></el-input>
            <el-input class="input" v-model="node.name3" placeholder="请输入最高qps"></el-input>  -->
            
        <el-card class="box-card" ref="card">
        <div slot="header" class="clearfix">
          <span>业务入口</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="deleteSingleNode">删除</el-button>
        </div>
        <el-form ref="form" :model="form" label-width="70px">
          <el-form-item label="*名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="PageId">
            <el-input v-model="form.name" placeholder="灵犀页面id"></el-input>
          </el-form-item>
          <el-form-item label="预估流量">
            <el-input v-model="form.name" placeholder="最高qps"></el-input>
          </el-form-item>
        </el-form>
       </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            node: Object,
            activeElement: Object
        },
        data(){
        return {
            form:{
                name:''
            },
        }
        },
    
        computed: {
            nodeContainerClass() {
                return {
                    'ef-node-container': true,
                    'ef-node-active': this.activeElement.type == 'node' ? this.activeElement.nodeId === this.node.id : false
                }
            },
            // 节点容器样式
            nodeContainerStyle() {
                return {
                    top: this.node.top,
                    left: this.node.left
                }
            },
            entranceClass() {
                // var nodeIcoClass = {}
                // nodeIcoClass[this.node.ico] = true
                // // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
                // nodeIcoClass['flow-node-drag'] = this.node.viewOnly ? false : true
                // return nodeIcoClass

                var entranceClass = {}
                 entranceClass[this.node.entrance] = true
                 // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
                 entranceClass['flow-node-drag'] = this.node.viewOnly ? false : true
                 return entranceClass
            }
        },
        methods: {
            // 点击节点
            clickNode() {
                this.$emit('clickNode', this.node.id)
            },

            // 删除节点
            deleteSingleNode(){
                this.$emit('deleteNode',this.node.id)
            },
            // 鼠标移动后抬起
            changeNodeSite() {
                // 避免抖动
                if (this.node.left == this.$refs.node.style.left && this.node.top == this.$refs.node.style.top) {
                    return;
                }
                this.$emit('changeNodeSite', {
                    nodeId: this.node.id,
                    left: this.$refs.node.style.left,
                    top: this.$refs.node.style.top,
                })
            }
        }
    }
</script>

<style lang="less">
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .entrance {
      overflow: auto;
      background-color : rgb(156, 155, 155) ;
    //   height: 150px;
      width: 500px;
  }
  .input{
      width:260px;
  }
  .el-card__body{
      padding: 10px;
  }
</style>
