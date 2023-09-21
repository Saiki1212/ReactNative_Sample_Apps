import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name : string
}>

const Icons = ({name} : IconProps) => {
  switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={40} color={'#fac748'}/>
        break;
    case 'cross': 
        return <Icon name='times' size={40} color={'#dd2d4a'}/>
        break;
    default:
        return <Icon name='pencil' size={40} color={'#000'}/>
  }
}

export default Icons