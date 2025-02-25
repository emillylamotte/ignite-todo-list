import { CheckboxContainer, CustomCheckbox, DeleteButton, HiddenCheckbox, TaskText, TaskViewCard, TaskViewContent } from "./style";
import { ITaskContent } from "../../interfaces/task-content";
import { TrashIcon } from "../../icons/TrashIcons";

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
                    <DeleteButton  onClick={() => handleDeleteComment()}><TrashIcon /></DeleteButton>
                </TaskViewContent>
            </TaskViewCard>
        </>
    )
}
