const Listitem = ({ task, deleteTask, index }) => {
  const handleDelete = (e) => {
    deleteTask(index);
  };
  return (
    <li className="list-item">
      <span className="task">{task}</span>
      <div className="flex-row">
        <button className="btn btn-list">edit</button>
        <button className="btn btn-list" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
};

export default Listitem;
