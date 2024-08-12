export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete item: ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  return (
    <div className="w-[500px] text-black text-[20px] m-auto">
      <ul key={item} className="font-bold p-[20px] w-full">
        <li>
          <span
            onClick={() => handleClick(item.name)}
            className={item.done ? "line-through" : ""}
          >
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className="float-right mr-[5%] mt-[-5px] py-[5px] px-[25px] mb-2 bg-[#f7ca18] border-none text-white rounded"
            >
              x
            </button>
          </span>
        </li>
        <hr className="border-[1px] w-[95%]" />
      </ul>
    </div>
  );
}
