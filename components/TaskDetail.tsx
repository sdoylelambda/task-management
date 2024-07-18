import * as React from "react";

import { TaskInterface } from "../interfaces";

type ListDetailProps = {
  item: TaskInterface;
};

const TaskDetail = ({ item: task }: ListDetailProps) => (
  <div>
    <h1>Detail for {task.name}</h1>
    <p>ID: {task.id}</p>
    <p>Description: {task.description}</p>
  </div>
);

export default TaskDetail;
