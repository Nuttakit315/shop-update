<template>
  <div id="app">
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <p class="h3 my-0 me-md-auto fw-normal">Nusyet-SHOP</p>
    <a class="btn btn-outline-primary" >จำนวน {{$store.state.sum+$store.state.product1.amount+$store.state.product2.amount+$store.state.product3.amount+$store.state.product4.amount+$store.state.product5.amount+$store.state.product6.amount}} กล่อง </a>
  </header>
  <main class="container">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product1.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/had/h89/8837643337758/3004803%20-%20Durex-Condom-Kingtex-Pack03-Packshot-Front-DU855HBASH2NANTH-1276493.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">30 บาท</ul>
        <div id="example-1">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product1.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product1.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product2.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hbe/h8c/8837643403294/3004807%20-%20Durex-Condom-Love-Pack03-Packshot-Front-DU855HBASH2PANTH-1276495.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">40 บาท</ul>
        <div id="example-2">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product2.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product2.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product3.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h3c/h94/8837643665438/3004809%20-%20Durex-Condom-M11-Pack03-Packshot-Front-DU855HBASH2OANTH-1276494.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">50 บาท</ul>
        <div id="example-3">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product3.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product3.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
  </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product4.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/ha2/h9a/8837643829278/3004796%20-%20Durex-Condom-Comfort-Pack03-Packshot-Front-DU855HBASH2QANTH-1276496.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">60 บาท</ul>
        <div id="example-4">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product4.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product4.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product5.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h4c/h33/8837662703646/3004801%20-%20Durex-Condom-Fetherlite-Pack03-Packshot-Front-DU855HBASH2RANTH-1276497.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">70 บาท</ul>
        <div id="example-5">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product5.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product5.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{$store.state.product6.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hee/hef/8837644222494/3004816%20-%20Durex-Condom-Ultima-Pack03-Packshot-Front-DU855HBASH2SANTH-1276498.jpg?width=260&height=260">
        <ul class="list-unstyled text-small">80 บาท</ul>
        <div id="example-6">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "$store.state.product6.amount += 1" >เพิ่มสินค้า</button>
          <p>จำนวน {{$store.state.product6.amount}} กล่อง </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <p class="h4 my-0 me-md-auto fw-normal">รายการสินค้า</p>
  <header class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
  <div v-if="$store.state.product1.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/had/h89/8837643337758/3004803%20-%20Durex-Condom-Kingtex-Pack03-Packshot-Front-DU855HBASH2NANTH-1276493.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product1.amount}} </p1>
  </div>
  <div v-if="$store.state.product2.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hbe/h8c/8837643403294/3004807%20-%20Durex-Condom-Love-Pack03-Packshot-Front-DU855HBASH2PANTH-1276495.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product2.amount}}</p1>
  </div>
  <div v-if="$store.state.product3.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h3c/h94/8837643665438/3004809%20-%20Durex-Condom-M11-Pack03-Packshot-Front-DU855HBASH2OANTH-1276494.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product3.amount}}</p1>
  </div>
  <div v-if="$store.state.product4.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/ha2/h9a/8837643829278/3004796%20-%20Durex-Condom-Comfort-Pack03-Packshot-Front-DU855HBASH2QANTH-1276496.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product4.amount}}</p1>
  </div>
  <div v-if="$store.state.product5.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h4c/h33/8837662703646/3004801%20-%20Durex-Condom-Fetherlite-Pack03-Packshot-Front-DU855HBASH2RANTH-1276497.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product5.amount}}</p1>
  </div>
  <div v-if="$store.state.product6.amount >= 1">
    <img src="https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hee/hef/8837644222494/3004816%20-%20Durex-Condom-Ultima-Pack03-Packshot-Front-DU855HBASH2SANTH-1276498.jpg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{$store.state.product6.amount}}</p1>
  </div>
  </header>
  <h4>ราคารวม {{$store.state.sum+$store.state.product1.amount*$store.state.product1.price+$store.state.product2.amount*$store.state.product2.price+$store.state.product3.amount*$store.state.product3.price+$store.state.product4.amount*$store.state.product4.price+$store.state.product5.amount*$store.state.product5.price+$store.state.product6.amount*$store.state.product6.price}} บาท</h4>
  <button type="button" class="w-50 btn btn-lg btn-outline-primary" v-on:click="$store.state.say('สั่งซื้อเสร็จสิ้น')" >สั่งซื้อ</button>
  <input type="button" value="Reset" onClick="javascript:location.reload();">
  </div>
  </main>
  </div>
</template> 
<script>
export default {
}
</script>