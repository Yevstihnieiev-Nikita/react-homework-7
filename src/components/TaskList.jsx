import { Component } from "react";
import styled from "./TaskList.module.css";
import can from "../img/Flat_tick_icon.svg";

export class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Do homework" },
    { id: 3, text: "Wash dishes" },
    { id: 4, text: "Study for exams" },
    { id: 5, text: "Stay alive" },
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div className={styled.holder}>
        <h1>Task List</h1>

        <ul className={styled.list}>
          {TaskList.tasks.map((task) => (
            <li className={styled.item} key={task.id}>
              {task.text}
              <button
                className={styled.button}
                onClick={() => this.deleteTask(task.id)}
              >
                <img width="30" src={can} alt="Delete Task" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
