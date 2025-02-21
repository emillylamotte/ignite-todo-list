import React, { useEffect, useState } from "react";
import { SubmitButton, TextField, TextFieldContainer } from "./style";
import { TaskView } from "../TaskView";
import { TaskViewContainer } from "../TaskView/style";
import { ITaskContent } from "../../interfaces/task-content";

export function InputTask() {
    const [tasks, setTasks] = useState<ITaskContent[]>([]);
    const [typedTask, setTypedTask] = useState<string>('');

    const handleIncludeNewTask = (newTask: ITaskContent) => {
        if (newTask.content !== '') setTasks([...tasks, newTask])
        setTypedTask('');
    }

    const handleDeleteTask = (deletedTask: ITaskContent) => {
        const newTasksList = tasks.filter((t: ITaskContent) => t.content !== deletedTask.content  )
        setTasks(newTasksList)
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return (
        <>
            <TextFieldContainer>
                <TextField 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={(event: any) => setTypedTask(event.target.value)}
                    value={typedTask}
                />
                <SubmitButton 
                    name="Criar"
                    onClick={() => handleIncludeNewTask({content: typedTask})}
                >
                    Criar
                </SubmitButton>
            </TextFieldContainer>
            <TaskViewContainer>
            {tasks.length > 0 && tasks.map((t: ITaskContent) => {
                return(
                    <TaskView task={t} onDeletTask={handleDeleteTask} />
                )
            })}
            </TaskViewContainer>
        </>
    )
}
