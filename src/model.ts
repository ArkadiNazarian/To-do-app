export interface IFormValues {
    title: "";
}

export interface IProps {
    list: Array<string>;
    action_add: () => void;
    form_data: IFormValues;
    handleChange: (e: any) => void;
    handler_discard: () => void;
    handler_remove_item:(id:number)=>void;
    handler_item_done:(id:number)=>void;
}