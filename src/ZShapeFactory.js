import Zdog from "zdog";

export default (shapeName, extendedProps) => {
  const props = {
    // ZDOG API
    translate: { type: Object }, // TODO add custom validators
    rotate: { type: Object },
    scale: { type: Object },
    ...extendedProps
    // PLUGIN API
  };
  return {
    name: `Z${shapeName}`,
    inject: ["zdog"],
    provide() {
      const vm = this;
      const zdog = Object.assign({}, vm.zdog);
      Object.defineProperty(zdog, "parent", {
        get() {
          return vm.__zEl;
        }
      });
      return {
        zdog
      };
    },
    props,
    async created() {
      this.__zEl = new Zdog[shapeName]();
      this.setupPropWatcher();
      await this.zdog.onReady();
      this.zdog.parent.addChild(this.__zEl);
      this.zdog.notifyUpdate();
    },
    destroyed() {
      this.zdog.parent.removeChild(this.__zEl);
      this.zdog.notifyUpdate();
    },
    methods: {
      setupPropWatcher() {
        const createHandler = name => newVal => {
          this.__zEl[name] = newVal;
          this.__zEl.updatePath && this.__zEl.updatePath(); // no setters yet in the API we need to explicitly refresh the shape
          this.zdog.notifyUpdate();
        };
        for (const key of Object.keys(props)) {
          this.$watch(() => this.$props[key], createHandler(key), {
            immediate: true,
            deep: true
          });
        }
      }
    },
    render(h) {
      return h("div", this.$slots.default);
    }
  };
};
