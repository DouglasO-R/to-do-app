import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import styles from "./InputForm.module.css"

type Props = {
    onSubmit: (task: any) => void
}


export function InputForm({ onSubmit }: Props) {

    const [task, setTask] = useState({
        id: '',
        title: "",
        isCompleted: false,
    });

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [event.target.name]: event.target.value, ["id"]: uuidV4() })
        

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ ...task, ["title"]: ""})
    }

    return (
        <form className={styles.task__form} onSubmit={handleSubmit}>
            <input
                className={styles.form__text}
                type="text"
                placeholder="Adicionar Uma nova Tarefa"
                name="title"
                onChange={handleTextChange}
                value={task.title}
                required

            />

            <button className={styles.form__button} type="submit">
                Criar <span> <PlusCircle size={16} /> </span>
            </button>

        </form>
    );
}