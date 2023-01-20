import { useFormik } from "formik";
import { useEffect, useState } from "react"
import *as yup from "yup";
import { IFormValues, IProps } from "./model";

export const useContainer = (): IProps => {

    const [todo_list, set_todo_list] = useState<Array<string>>([]);
    const [done_list, set_done_list] = useState<Array<string>>([]);

    const validation_schema = yup.object().shape({
        title: yup.string().required(),
    });

    const initial_value: IFormValues = {
        title: ""
    };

    const action_add = (values: IFormValues) => {
        let new_list = [...todo_list];
        new_list.push(values.title);
        set_todo_list(new_list);
        localStorage.setItem("todo list", JSON.stringify(new_list));
        formik.values.title = "";
    }

    const handler_discard = () => {
        set_todo_list([]);
        set_done_list([]);
        localStorage.setItem("todo list", JSON.stringify([]));
        localStorage.setItem("done list", JSON.stringify([]));
    }

    const handler_remove_item = (id: number) => {
        const modified_list = todo_list.filter((value, index) => (
            index !== id
        ))
        set_todo_list(modified_list);
        localStorage.setItem("todo list", JSON.stringify(modified_list));
    }

    const handler_item_done = (id: number) => {
        const modified_done_list = [...done_list]
        const my_done_list = todo_list.filter((value, index) => (
            index === id
        ))
        modified_done_list.push(...my_done_list);
        set_done_list(modified_done_list);
        localStorage.setItem("done list", JSON.stringify(modified_done_list));


        const modified_list = todo_list.filter((value, index) => (
            index !== id
        ))
        set_todo_list(modified_list);
        localStorage.setItem("todo list", JSON.stringify(modified_list));

    }

    useEffect(() => {
        const saved_todo_list = JSON.parse(localStorage.getItem("todo list")!);
        set_todo_list(saved_todo_list);
        const saved_done_list = JSON.parse(localStorage.getItem("done list")!);
        set_done_list(saved_done_list);
    }, [])

    const formik = useFormik({
        initialValues: initial_value,
        validationSchema: validation_schema,
        onSubmit: action_add
    });

    return {
        action_add: formik.handleSubmit,
        form_data: formik.values,
        handleChange: formik.handleChange,
        handler_discard: handler_discard,
        todo_list,
        done_list,
        handler_remove_item,
        handler_item_done
    }
}