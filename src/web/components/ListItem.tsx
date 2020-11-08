import React from 'react';
import { routeMeta } from '../router/RouteMeta';

import Tag from './ListItem/Tag';
import Level from './ListItem/Level';
import Name from './ListItem/Name';
import Index from './ListItem/Index';

const Tags = ({ tagList }: { tagList: string[] }) => {
  return (<>
    {tagList.map((tag) => 
      <Tag key={tag} text={tag} />
    )}
  </>);
}

const ListItem = ({ meta } : { meta: routeMeta}) => {
  return (<>
    <Index text    = {meta.index}    level = {meta.level}  />
    <Tags  tagList = {meta.tag} />
    <Level text    = {meta.level} />
    <Name  text    = {meta.name} />
  </>);
};

export default ListItem;