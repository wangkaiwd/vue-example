<template>
  <div class="login">

  </div>
</template>

<script>
  /**
   * 登录逻辑：
   *  1. 输入用户名、密码  2. 点击登录按钮发送请求  3. 请求成功得到token存到localStorage中
   * 路由拦截：
   *  1. 当前页面是登录页面，如果有token,发请求进行token验证
   *      a. 如果token没有失效效，后端重置token过期时间，直接跳转到首页
   *      b. 如果token失效，前端清空localStorage中的token,后端会返回token error，页面没有变化，继续登录
   *  2. 当前页面不是登录页面，如果有token，发请求进行token验证
   *      a. 如果token没有失效，后端重置token过期时间，页面不发生变化
   *      b. 如果token失效，前端清空localStorage中的token,后端会返回 token error, 页面跳转到登录页面
   */
  export default {
    name: 'LoginDemo'
  };
</script>

<style scoped>

</style>
