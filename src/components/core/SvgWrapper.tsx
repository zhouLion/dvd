import { createComponent, reactive } from "@vue/composition-api";

const theme = {
  background: "#000"
};

const SvgWrapper = createComponent({
  name: "SvgWrapper",
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    margin: {
      type: Object,
      default() {
        return {
          left: 0,
          top: 0
        };
      }
    },
    defs: {
      type: Array
    },
    children: {
      type: Function
    }
  },
  setup(props) {
    const { width, height, children, margin } = props;
    return {
      width,
      height,
      children,
      margin
    };
  }
});

export default SvgWrapper;
