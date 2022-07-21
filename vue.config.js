module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/scid-landing-vue/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "@/styles/_vars/colors.scss"; @import "@/styles/_vars/vars.scss";'
        },
      }
    }
}