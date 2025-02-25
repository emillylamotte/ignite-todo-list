import React from "react";
import { CheckboxContainer, CustomCheckbox, HiddenCheckbox, TaskText, TaskViewCard, TaskViewContent } from "./style";
import { ITaskContent } from "../../interfaces/task-content";

interface ITaskViewProps {
    task: ITaskContent;
    onDeletTask: (c: ITaskContent) => void;
    onCheckTask: (content: string) => void;
}

export function TaskView({ task, onDeletTask, onCheckTask }: ITaskViewProps) {
    function handleDeleteComment() {
        onDeletTask(task)
    }
    return (
        <>
            <TaskViewCard>
                <TaskViewContent>
                    <div style={{ display: "flex"}}>
                        <CheckboxContainer onClick={() => onCheckTask(task.content)}>
                            <HiddenCheckbox
                                checked={task.completed}
                                onChange={() => onCheckTask(task.content)}
                            />
                            <CustomCheckbox checked={task.completed} />
                        </CheckboxContainer>
                        <TaskText checked={task.completed}>
                            {task.content}
                        </TaskText>
                    </div>
                    <button onClick={() => handleDeleteComment()}>excluir</button>
                </TaskViewContent>
            </TaskViewCard>
        </>
    )
}
