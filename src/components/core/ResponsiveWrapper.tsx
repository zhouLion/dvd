import { createComponent } from "@vue/composition-api";
import useResize from '@/compositions/useResize';

export default createComponent({
  setup() {
    const {
      width,
      height,
    } = useResize();
    return () => (
      <div>
        width: {width.value};height: {height.value}
      </div>
    )
  },
});
