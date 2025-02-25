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
import { PlusIcon } from "../../icons/PlusIcon";

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

    const handleCompleteTask = (taskContent: string) => {
        setTasks(tasks.map(task =>
            task.content === taskContent ? { ...task, completed: !task.completed } : task
        ));
    };

    const completedTasks = tasks.filter(task => task.completed).length;

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
                    onClick={() => handleIncludeNewTask({ content: typedTask, completed: false })}
                >
                    Criar
                    <PlusIcon />
                </SubmitButton>
            </TextFieldContainer>
            <InfoContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BlueParagraph>Tarefas criadas</BlueParagraph>
                    <Badge>{tasks.length}</Badge>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PurpleParagraph>Concluídas</PurpleParagraph>
                    <Badge>{completedTasks} de {tasks.length}</Badge>
                </div>
            </InfoContainer>
            <TaskViewContainer>
                {tasks.length > 0 && tasks.map((t: ITaskContent) => {
                    return (
                        <TaskView key={t.content} task={t} onDeletTask={handleDeleteTask} onCheckTask={handleCompleteTask} />
                    )
                })}
            </TaskViewContainer>
        </GeneralContainer>
    )
}
