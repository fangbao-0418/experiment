/*
 * @Date: 2020-05-28 18:46:44
 * @LastEditors: fangbao
 * @LastEditTime: 2020-05-28 20:44:49
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/fangbao/experiment/vue/js/Card.js
 */ 

const imgs = [
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590654993999.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590654948433.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590654877225.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590654829251.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590654815488.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590649788460.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590458609647.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551590163280756.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589262883904.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589262871907.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589262860543.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589125350017.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589125344727.png',
  'https://assets.hzxituan.com/crm/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551589125327332.png'
]

const s = Vue.component('card', {
  props: ['mounted', 'index'],
  data () {
    return {
      height: '10px'
    }
  },
  created() {
    // const hs = [ 30, 22, 18, 44, 20 ]
    const i = Math.floor(Math.random() * 13)
    this.img = imgs[i]
  },
  mounted () { 
    // this.imgloaded()
  },
  methods: {
    imgloaded () {
      console.log(this.mounted, 'xxxx')
      if (this.mounted) {
        const el = this.$el
        const offsetTop = el.offsetTop
        const clientHeight = el.clientHeight
        // setTimeout(() => {
        //   this.mounted(offsetTop + clientHeight)
        // }, 0)
        this.mounted(offsetTop + clientHeight)
      }
    }
  },
  template: `
    <div v-bind:style="{ marginBottom: '10px', width: '100%' }">
      <img
        width="100%"
        :src="img"
        @load="imgloaded"
      />
    </div>
  `
})

console.log(s, 's')