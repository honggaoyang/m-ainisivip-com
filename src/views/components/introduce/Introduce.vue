<template>
  <div class="home_int_box pubPad">
    <slot></slot>
  </div>
</template>

<style>
.home_int_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home_int_box p {
  width: 32%;
  text-align: center;
  font-size: 0.9rem;
  background: #ededed;
  color: #676767;
  padding: 10px 0;
  margin-bottom: 8px;
}

.home_int_box a img {
  width: 100%;
}
</style>
