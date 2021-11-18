<template>
  <div class="footer_bar">
    <a href="tel://400-9699-180">
      <img src="../../assets/images/31.png" alt="" />
      <span>电话咨询</span>
    </a>
    <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT55299052&lng=cn">
      <img src="../../assets/images/32.png" alt="" />
      <span>预约试学</span>
    </a>
    <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT55299052&lng=cn">
      <img src="../../assets/images/33.png" alt="" />
      <span>微信咨询</span>
    </a>
    <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT55299052&lng=cn">
      <img src="../../assets/images/34.png" alt="" />
      <span>在线客服</span>
    </a>
  </div>
</template>

<script>
 
export default {
  name: "FooteBar",

  mounted() {
    // const oScript = document.createElement('script');
    // oScript.type = 'text/javascript';
    // oScript.src = 'http://awt.zoosnet.net/JS/LsJS.aspx?siteid=AWT55299052&float=1&lng=cn';
    // document.body.appendChild(oScript);
  },
   
};
</script>

<style scoped>
.footer_bar {
  position: fixed;
  width: 100%;
  max-width: 512px;
  bottom: 0;
  height: 69px;
  z-index: 999;
  background: #0e0e0e;
  display: flex;
  align-items: center;
}
.footer_bar a {
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer_bar a img {
  /* margin: 3px auto; */
  height: 30px;
  display: block;
}
</style>
