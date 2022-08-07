import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { InputForm } from "../InputForm";
import { Task } from "../Task";
import styles from "./Tasks.module.css";
import Clipboard from "../../assets/Clipboard.svg";
import { TaskList } from "../TaskList";

const tasksDb = [
    {
        id: uuidV4(),
        title: "terminar desafio",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        title: "estudar node",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        title: "trabalhar typescript",
        isCompleted: false,
    }
]

export type TypeTask = typeof tasksDb[0];

export function Tasks() {
    const [tasks, setTasks] = useState(tasksDb)
    const tasksCount = tasks.length;
    const tasksDoneCount = tasks.filter(item => item.isCompleted === true).length;

    const handleAddTask = (task: TypeTask) => {
        setTasks((prev) => [...prev, task]);
    }

    const handleRemoveTask = (id: string) => {
        const filterTask = tasks.filter((item) => item.id != id);
        setTasks(() => [...filterTask]);
    }

    const handleCompleteTask = (id: string) => {
        const arr = tasks.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return {
                ...item
            }
        });
        setTasks(() => [...arr]);
    }


    return (
        <div className={styles.wrapper}>

            <InputForm onSubmit={handleAddTask} />

            <div className={styles.tasks}>
                
                <header className={styles.tasks__header}>

                    <div className={styles.tasks__header__task}>
                        <span>Tarefas criadas</span>
                        <span className={styles.tasks__count}>{tasksCount}</span>
                    </div>

                    <div className={styles.tasks__header__finished__tasks}>
                        <span>Concluídas</span>
                        <span className={styles.tasks__done}>{tasksDoneCount} de {tasksCount}</span>
                    </div>
                </header>

                <TaskList tasks={tasks} handleCompleteTask={handleCompleteTask} handleRemoveTask={handleRemoveTask} />

            </div>
        </div>
    );
}