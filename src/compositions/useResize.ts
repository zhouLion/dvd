import { reactive, toRefs, onMounted, onBeforeUnmount } from '@vue/composition-api';
import { throttle } from 'lodash-es';

export default function () {
  const state = reactive({
    width: 0,
    height: 0,
  });
  function setState() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
  }
  const onResize = throttle(setState, 100);
  onMounted(() => {
    setState(),
      window.addEventListener('resize', onResize);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  });
  return {
    ...toRefs(state),
  };
};
