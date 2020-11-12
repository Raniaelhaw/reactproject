import React from 'react';
import { VisibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';
const Foote =()=>
(
<>
<span>show :</span>

<FilterLink filter={VisibilityFilters.SHOW_ALL}>
   ALL
</FilterLink>

<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
    Active
</FilterLink>

<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
Completed
</FilterLink>
</>
);
export default Foote;
