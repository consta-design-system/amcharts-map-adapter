import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
  {
    title: 'Адаптеры',
    id: 'adapters',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta amcharts-map-adapter',
  id: 'amcharts-map-adapter',
  groups,
  group: 'Библиотеки компонентов',
  image,
  description:
    '[тут описание что это такое] Ультра топчик библиотеки с пацанскими кнопками и графиками, качай.',
});
