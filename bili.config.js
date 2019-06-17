export default {
  babel: { minimal: true },
  plugins: {
    vue: true
  },
  externals: ["zdog"],
  output: {
    moduleName: 'VueZDog'
  }
};
