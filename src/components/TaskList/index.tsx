import { Task } from "../Task";
import Clipboard from "../../assets/Clipboard.svg";
import { TypeTask } from "../Tasks";
import styles from "./TaskList.module.css";


type Props = {
    tasks: TypeTask[],
    handleRemoveTask: (id: string) => void,
    handleCompleteTask: (id: string) => void,
}

export function TaskList({tasks,handleCompleteTask,handleRemoveTask}:Props) {
    return (
        <section className={styles.tasks__list}>

            {tasks.length > 0 ? (
                tasks.map(task => (
                    <Task key={task.id} content={task} onDelete={handleRemoveTask} onComplete={handleCompleteTask} />
                ))
            ) :
                (
                    <div className={styles.tasks__list__empty}>
                        <img src={Clipboard} alt="" />

                        <p>Você ainda não tem tarefas cadastradas </p>
                        <p>Crie tarefas e organize seus itens a fazer</p>

                    </div>
                )
            }

        </section>
    )
}