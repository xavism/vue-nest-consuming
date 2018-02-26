<template>
  <div class="home">
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="../assets/nest.svg" alt="nest image" width="300px">
          </div>
          <div class="col">
            <img src="../assets/logo.png">
          </div>
        </div>
        <Integration/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Integration from '@/components/Integration.vue'; // @ is an alias to /src

@Component({
  components: {
    Integration,
  },
})
export default class Home extends Vue {}
</script>

<style lang="postcss" scoped>
.wrapper {
  margin-top: 100px;
}
</style>
