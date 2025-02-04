import React, {lazy, Suspense} from "react";
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

const ItemList = () => {
    return (
        <div className="todo-list-container">
            <Suspense fallback={null}>
            <TodoApp />
            </Suspense>
        </div>
    )
}
export default ItemList;
