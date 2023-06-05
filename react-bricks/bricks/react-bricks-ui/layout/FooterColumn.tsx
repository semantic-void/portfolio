import React from 'react'
import {
  Text,
  RichText,
  Image,
  File,
  Repeater,
  types,
} from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { textColors } from '../colors'

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = (props) => {
  return (
    <div className="w-1/2 sm:w-auto sm:mr-8 mb-8">
          abc
    </div>
  )
}

FooterColumn.schema = {
  name: blockNames.FooterColumn,
  label: 'Column',
  category: 'layout',
  hideFromAddMenu: true,
  // tags: [],
  repeaterItems: [
    {
      name: 'links',
      itemType: blockNames.FooterLink,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Features',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default FooterColumn
