
import { ArrowUpRight } from "lucide-react";

function TaskCard({ title, value, description, icon: Icon }) {
  return (
    <div className="task-card">
      <div className="task-card-top">
        <div className="task-icon">
          <Icon size={23} />
        </div>

        <ArrowUpRight size={20} />
      </div>

      <h2>{value}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
