import { types } from 'react-bricks/frontend'
import SkillsSection from "./custom/SkillsSection";
import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],
  },
]

export default bricks
