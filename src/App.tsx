import { ChangeEvent, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { getDatabase, ref, set, onValue } from "firebase/database";

function App() {
  return <RecoilRoot>dsd</RecoilRoot>;
}


// function TodoList() {
//   const todoList = useRecoilValue(filteredTodoListState);
//   return (
//     <>
//       <TodoListStats />
//       <TodoListFilters />
//       <TodoItemCreator />

//       {todoList.map((todoItem: Todo) => (
//         <TodoItem key={todoItem.id} item={todoItem} />
//       ))}
//     </>
//   );
// }
// const todoListState = atom<Todo[]>({
//   key: "todoListState",
//   default: [],
// });
// interface Todo {
//   id: number;
//   text: string;
//   isComplete: boolean;
// }
// function TodoItemCreator() {
//   const [inputValue, setInputValue] = useState("");
//   const setTodoList = useSetRecoilState<Todo[]>(todoListState);

//   const addItem = () => {
//     setTodoList((oldTodoList) => [
//       ...oldTodoList,
//       {
//         id: getId(),
//         text: inputValue,
//         isComplete: false,
//       },
//     ]);
//     setInputValue("");
//   };

//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={onChange} />
//       <button onClick={addItem}>Add</button>
//     </div>
//   );
// }

// // 고유한 Id 생성을 위한 유틸리티
// let id = 0;
// function getId() {
//   return id++;
// }
// interface TodoItemProps {
//   item: Todo;
// }
// function TodoItem({ item }: TodoItemProps) {
//   const [todoList, setTodoList] = useRecoilState(todoListState);
//   const index = todoList.findIndex((listItem) => listItem === item);
//   const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newList = replaceItemAtIndex(todoList, index, {
//       ...item,
//       text: event.target.value,
//     });
//     setTodoList(newList);
//   };
//   const toggleItemCompletion = () => {
//     const newList = replaceItemAtIndex(todoList, index, {
//       ...item,
//       isComplete: !item.isComplete,
//     });
//     setTodoList(newList);
//   };
//   const deleteItem = () => {
//     const newList = removeItemAtIndex(todoList, index);
//     setTodoList(newList);
//   };
//   return (
//     <div>
//       <input type="text" value={item.text} onChange={editItemText} />
//       <input
//         type="checkbox"
//         checked={item.isComplete}
//         onChange={toggleItemCompletion}
//       />
//       <button onClick={deleteItem}>X</button>
//     </div>
//   );
// }

// function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
//   return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// }
// function removeItemAtIndex(arr: Todo[], index: number) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }
// const todoListFilterState = atom({
//   key: "todoListFilterState",
//   default: "Show All",
// });
// const filteredTodoListState = selector({
//   key: "filteredTodoListState",
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);
//     const list = get(todoListState);
//     switch (filter) {
//       case "Show Completed":
//         return list.filter((item) => item.isComplete);
//       case "Show Uncompleted":
//         return list.filter((item) => !item.isComplete);
//       default:
//         return list;
//     }
//   },
// });

// function TodoListFilters() {
//   const [filter, setFilter] = useRecoilState(todoListFilterState);
//   const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
//     setFilter(event.target.value);
//   };
//   return (
//     <>
//       Filter:
//       <select value={filter} onChange={updateFilter}>
//         <option value="Show All">All</option>
//         <option value="Show Completed">Completed</option>
//         <option value="Show Uncompleted">Uncompleted</option>
//       </select>
//     </>
//   );
// }
// const todoListStatsState = selector({
//   key: "todoListStatsState",
//   get: ({ get }) => {
//     const todoList = get(todoListState);
//     const totalNum = todoList.length;
//     const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
//     const totalUncompletedNum = totalNum - totalCompletedNum;
//     const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
//     return {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//     };
//   },
// });
// function TodoListStats() {
//   const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
//     useRecoilValue(todoListStatsState);

//   const formattedPercentCompleted = Math.round(percentCompleted * 100);

//   return (
//     <>
//       <ul>
//         <li>Total items: {totalNum}</li>
//         <li>Items completed: {totalCompletedNum}</li>
//         <li>Items not completed: {totalUncompletedNum}</li>
//         <li>Percent completed: {formattedPercentCompleted}</li>
//       </ul>
//     </>
//   );
// }
export default App;
