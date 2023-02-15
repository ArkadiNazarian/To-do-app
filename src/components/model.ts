export interface IFormValues {
    title: "";
    done: boolean;
}

export interface IProps {
    todo_list: Array<IFormValues>;
    action_add: () => void;
    form_data: IFormValues;
    handleChange: (e: any) => void;
    handler_discard: () => void;
    handler_remove_item: (id: number) => void;
    handler_item_done: (id: number) => void;
    handler_onEdit_item: (id: number) => void;
}