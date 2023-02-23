export interface IFormValues {
    title: string;
    done: boolean;
}

export interface IProps {
    todo_list: Array<IFormValues>;
    action_submit: () => void;
    action_add:(values: IFormValues) => void;
    form_data: IFormValues;
    handleChange: (e: any) => void;
    handler_remove_all: () => void;
    handler_remove_item: (id: number) => void;
    handler_item_done: (id: number) => void;
    handler_onEdit_item: (id: number) => void;
}