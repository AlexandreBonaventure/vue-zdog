import Zdog from "zdog";

const props = {
  svg: { type: Boolean },
  resize: { type: [Boolean, String] },
  dragRotate: { type: Boolean },
  zoom: { type: Number },
  centered: { type: Boolean, default: true },
  translate: { type: Object }, // TODO add custom validators
  rotate: { type: Object },
  scale: { type: Object }
};
export default {
  name: "ZIllustration",
  props: {
    ...props,
    autoRendering: { default: true, type: Boolean }
  },
  provide() {
    const vm = this;
    return {
      zdog: {
        get parent() {
          return vm.__zIllustration;
        },
        notifyUpdate: () => {
          this.$nextTick(() => {
            this.$emit("zdog:update");
          });
        },
        onReady: async () => {
          return this.__readyPromise;
        }
      }
    };
  },
  async created() {
    this.__readyPromise = new Promise(resolve => {
      this.$once("zdog:ready", resolve);
    });
    await this.__readyPromise;
    this.animate();
    this.$watch("autoRendering", this.animate);
  },
  mounted() {
    this.__zIllustration = new Zdog.Illustration({
      element: this.$el,
      ...this.zDogsProps
    });
    this.$emit("zdog:ready", this.__zIllustration);
    // this.$on('zdog:update', () => {
    //   this.__zIllustration.updateRenderGraph()
    // })
  },
  computed: {
    zDogsProps() {
      return Object.keys(props).reduce(
        (obj, key) => ({ ...obj, [key]: this.$props[key] }),
        {}
      );
    }
  },
  methods: {
    animate() {
      this.__zIllustration.updateRenderGraph();
      this.$emit("tick");
      if (this.autoRendering) requestAnimationFrame(this.animate);
    }
  },
  render(h) {
    const tag = this.svg ? "svg" : "canvas";
    return h(tag, { props: this.$attrs }, this.$slots.default);
  }
};
