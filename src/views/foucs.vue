<template lang="html">
  <!-- 根元素，一个页面必须要有一个根元素 -->
  <div>
    <van-cell-group v-for="(item, index) in list" :key="index">
      <van-cell :label="item.msg">

        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">{{ item.name }}</span>
            <van-image :src="item.sex ? 'static/sex_woman.png' : 'static/sex_man.png'" round width="1rem" height="1rem"/>
            <van-image :src="item.logo" round width="1rem" height="1rem"/>
        </template>

        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon @click="foucs(item)" size="40" name="search" style="line-height: inherit;" />
        </template>
        <template #icon>
          <van-image :src="item.logo" round width="3rem" height="3rem"/>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>

export default {
  data:() => ({
    list: []
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.list = [
        {
          id: 1,
          name: '张三',
          sex: 1,
          logo: 'static/man.png',
          target: 'biaoji',
          msg: '你好，美女，晚上能不能交流一下感情?',
          foucs: false
        },
        {
          id: 2,
          name: '小妹妹',
          sex: 0,
          logo: 'static/woman.png',
          target: 'biaoji',
          msg: '你好，小帅哥，晚上到你床上吃饭?',
          foucs: true
        },
        {
          id: 3,
          name: '张三',
          sex: 1,
          logo: 'static/man.png',
          target: 'biaoji',
          msg: '你好，美女，晚上能不能交流一下感情?',
          foucs: false
        },
        {
          id: 4,
          name: '小妹妹',
          sex: 0,
          logo: 'static/woman.png',
          target: 'biaoji',
          msg: '你好，小帅哥，晚上到你床上吃饭?',
          foucs: true
        },
        {
          id: 5,
          name: '张三',
          sex: 1,
          logo: 'static/man.png',
          target: 'biaoji',
          msg: '你好，美女，晚上能不能交流一下感情?',
          foucs: false
        },
        {
          id: 6,
          name: '小妹妹',
          sex: 0,
          logo: 'static/woman.png',
          target: 'biaoji',
          msg: '你好，小帅哥，晚上到你床上吃饭?',
          foucs: true
        },
        {
          id: 7,
          name: '张三',
          sex: 1,
          logo: 'static/man.png',
          target: 'biaoji',
          msg: '你好，美女，晚上能不能交流一下感情?',
          foucs: false
        },
        {
          id: 8,
          name: '小妹妹',
          sex: 0,
          logo: 'static/woman.png',
          target: 'biaoji',
          msg: '你好，小帅哥，晚上到你床上吃饭?',
          foucs: true
        }
      ]
    },
    foucs(item = {}) {
      alert(`我关注了:${ item.name },ID是：${ item.id }`)
    }
  }
}
</script>

<style scoped="">
</style>
