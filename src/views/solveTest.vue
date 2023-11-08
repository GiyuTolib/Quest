<template>
  <div class="quest-page">
    <div class="quest-card">
      <div class="top">
        <p>{{ ntest }} - savol </p> 
        <p>{{ ntest }}/{{ Object.keys(quests.testPerson.math01).length }}</p>
      </div>
      <div class="quest">
        <h2>{{ ntest }}. {{quests.testPerson.math01[ntest].savol}}</h2>
      </div>
      <div class="keys">
        <h3 v-for="(i, n) in quests.testPerson.math01[ntest].javoblar.length" :key="n" @click="checktest(randomTest[i-1], $event)">
          {{ alfbe[i-1] }})  {{ randomTest[i-1] }}
        </h3>
      </div>
      <div class="bottom">
        <button class="btn-seccsess" @click="nexttest">{{ testbtn }}</button>
      </div>
    </div>
    <div class="end dn">
      <h1>Tugadi</h1>
      <p>{{ natija }}</p>
      <button class="btn-carl"><router-link to="/">Qaytish</router-link></button>
    </div>
  </div>
</template>

<script>

export default {
    data(){
      return{
        ntest: 1,
        selecteditem: null,
        alfbe: 'ABCDEFG',
        checks: [],
        check: null,
        quests: {
          testPerson: {
            math01: {
            1:  {
              savol: '4+3 nechchi?',
              javob: '7',
              javoblar: ['7','8','9','6']
            },
            2:  {
              savol: '8*9 nechchi?',
              javob: '72',
              javoblar: ['72','81','96','68']
            },
            3:  {
              savol: '4*3 nechchi?',
              javob: '12',
              javoblar: ['12','18','9','16']
            },
            4:  {
              savol: '(4/3)-(7/3) nechchi?',
              javob: '-1',
              javoblar: ['-1','1','0','4']
            },
            5:  {
              savol: '43 - 34 nechchi?',
              javob: '9',
              javoblar: ['9','11','7','6']
            }
          }
          },
          tolib: {

          }
        }
      }
    },

    computed:{
      randomTest(){
        let sm = []
        if (this.quests.testPerson.math01[this.ntest].javoblar) {
          sm = this.quests.testPerson.math01[this.ntest].javoblar.sort((a, b) => 0.5 - Math.random())
        return sm;
        }
      },
      testbtn(){
        if (Object.keys(this.quests.testPerson.math01).length == this.ntest) {
          return 'Tugatish'
        } else {
          return 'Next'
        }
      },
      natija(){
        if (this.checks.length == Object.keys(this.quests.testPerson.math01).length) {
          let solves = 0
          for (let i = 0; i < this.checks.length; i++) {
            if (this.checks[i] == true) {
              solves += 1
            }
          }
          return `${this.checks.length} tadan ${solves} to'g'ri  -  ${100 * solves/this.checks.length}%`
        }
      }
    },

    methods:{
      checktest(a, e){
        if (this.quests.testPerson.math01[this.ntest].javob == a) {
          this.check = true
        } else {
          this.check = false
        }
        for (let i = 0; i < this.randomTest.length; i++) {
          document.querySelectorAll('.keys h3')[i].classList.remove('bg-red')
        }
        e.target.classList.add('bg-red')
      },
      async nexttest(){
        if (this.check != null) {
          await this.checks.push(this.check)
          this.check = await null
          if (this.ntest < Object.keys(this.quests.testPerson.math01).length) {
            this.ntest += 1
          }
          else{
            this.ntest = 1
            document.querySelectorAll('.quest-card')[0].classList.add('dn')
            document.querySelectorAll('.end')[0].classList.remove('dn')
          }
        }
        for (let i = 0; i < this.randomTest.length; i++) {
          document.querySelectorAll('.keys h3')[i].classList.remove('bg-red')
        }
      }
    },

    mounted(){
        
    }
}
</script>

<style>

</style>