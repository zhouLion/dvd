import ResponsiveWrapper from '@/components/core/ResponsiveWrapper';
import { CreateElement } from 'vue';

export default {
  title: 'Wrapper',
};

export const responsiveWrapper = () => ({
  components: { ResponsiveWrapper },
  render(h: CreateElement) {
    return (
      <ResponsiveWrapper></ResponsiveWrapper>
    )
  },
});