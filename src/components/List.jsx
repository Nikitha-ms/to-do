import Listitem from "./Listitem";

const List = ({ taskList, setTaskList }) => {
  const deleteTask = (selectedTask) => {
    setTaskList(taskList.filter((task,index) => index !== selectedTask));
  };
  return (
    <ul className="list">
      {taskList.map((task, index) => (
        <Listitem task={task} key={index} deleteTask={deleteTask} index={index} />
      ))}
    </ul>
  );
};

export default List;
