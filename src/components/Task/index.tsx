import { CheckCircle, Circle, Trash } from "phosphor-react";
import React from "react";
import styles from "./Task.module.css";
import { TypeTask } from "../Tasks";

type Props = {
    content: TypeTask;
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
}

export function Task({ content, onDelete, onComplete }: Props) {


    const handleSelectTask = (e: React.MouseEvent) => {
        e.preventDefault()
        onComplete(content.id)
    }

    const handleRemove = (e: React.MouseEvent) => {
        e.preventDefault()
        onDelete(content.id);
    }


    return (
        <div className={styles.task}>

            <button onClick={handleSelectTask} className={content.isCompleted ? styles.task__selected : styles.task__notSelected}>
                {content.isCompleted ? < CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
            </button>


            <p className={content.isCompleted ? styles.task__text__selected : styles.task__text__notSelected} >
                {content.title}
            </p>

            <button className={styles.task__remove} onClick={handleRemove}>
                <Trash size={24} />
            </button>

        </div>
    );
}