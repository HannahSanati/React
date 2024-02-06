import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div 
    className={`task ${task.reminder ? 'reminder' : ''}`}
    //  ${} a condition
    onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        {/* <FaEdit
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onEdit(task.id)}
        /> */}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
