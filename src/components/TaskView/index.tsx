import React from "react";
import { TaskViewCard, TaskViewContent } from "./style";
import { ITaskContent } from "../../interfaces/task-content";

interface ITaskViewProps {
    task: ITaskContent;
    onDeletTask: (c: ITaskContent) => void;
}

export function TaskView({task, onDeletTask} : ITaskViewProps) {
    function handleDeleteComment() {
        onDeletTask(task)
    }
    return (
        <>
            <TaskViewCard>
            <TaskViewContent>
                {task.content}
                <button onClick={() => handleDeleteComment()}>excluir</button>
            </TaskViewContent>
            </TaskViewCard>
        </>
    )
}
