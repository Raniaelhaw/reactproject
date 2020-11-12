import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Foote from './Foote';

const App = () =>
(
    <div>

    <AddTodo />
    <VisibleTodoList/>
    <Foote/>
    </div>
);
export default App;