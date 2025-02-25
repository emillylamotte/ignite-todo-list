import React, { useEffect, useState } from "react";
import {
    BlueParagraph,
    GeneralContainer,
    InfoContainer,
    SubmitButton,
    TextField,
    TextFieldContainer,
    Badge,
    PurpleParagraph
}
    from "./style";
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
        const newTasksList = tasks.filter((t: ITaskContent) => t.content !== deletedTask.content)
        setTasks(newTasksList)
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return (
        <GeneralContainer>
            <TextFieldContainer>
                <TextField
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event: any) => setTypedTask(event.target.value)}
                    value={typedTask}
                />
                <SubmitButton
                    name="Criar"
                    onClick={() => handleIncludeNewTask({ content: typedTask })}
                >
                    Criar
                </SubmitButton>
            </TextFieldContainer>
            <InfoContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <BlueParagraph>Tarefas criadas</BlueParagraph>
                        <Badge>{tasks.length}</Badge>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PurpleParagraph>Concluídas</PurpleParagraph>
                        <Badge>2 de 5</Badge>
                    </div>
                </InfoContainer>
            <TaskViewContainer>
                {tasks.length > 0 && tasks.map((t: ITaskContent) => {
                    return (
                        <TaskView task={t} onDeletTask={handleDeleteTask} />
                    )
                })}
            </TaskViewContainer>
        </GeneralContainer>
    )
}
