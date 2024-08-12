export default function Footer({ completedTodos, totalTodos, remainingTodos }) {
  return (
    <div className="text-[50px] font-bold text-center flex justify-center p-[10px] bg-[#f7ca18] mt-10 ">
      <span className="m-[20px]">Completed Todos: {completedTodos} </span>
      <span className="m-[20px]">Total Todos: {totalTodos} </span>
      <span className="m-[20px]">Remaining Todos: {remainingTodos} </span>
    </div>
  );
}
