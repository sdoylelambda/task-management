import * as React from "react";
import TaskItem from "./TaskItem";
import { TaskInterface } from "../interfaces";

type Props = {
  items: TaskInterface[];
};

const Task = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <TaskItem data={item} />
      </li>
    ))}
  </ul>
);

export default Task;