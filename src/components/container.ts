import { useFormik } from "formik";
import { useEffect, useState } from "react"
import *as yup from "yup";
import { IFormValues, IProps } from "./model";

export const useContainer = (): IProps => {

    const [todo_list, set_todo_list] = useState<Array<IFormValues>>([]);

    const validation_schema = yup.object().shape({
        title: yup.string().required(),
    });

    const initial_value: IFormValues = {
        title: "",
        done: false
    };

    const action_add = (values: IFormValues) => {
        let new_list = [...todo_list];
        const modified_object = {
            title: values.title,
            done: false
        }
        new_list.push(modified_object);
        set_todo_list(new_list);
        localStorage.setItem("list", JSON.stringify(new_list));
        formik.values.title = "";
    }

    const action_submit = (values: IFormValues) => {
        action_add(values)
    }

    const handler_remove_all = () => {
        set_todo_list([]);
        localStorage.setItem("list", JSON.stringify([]));
    }

    const handler_remove_item = (id: number) => {
        const modified_list = todo_list.filter((value, index) => (
            index !== id
        ))
        set_todo_list(modified_list);
        localStorage.setItem("list", JSON.stringify(modified_list));
    }

    const handler_item_done = (id: number) => {
        const modified_done_list = [...todo_list];

        const set_done = modified_done_list.find((value, index) => index === id);

        const delete_modified_object = modified_done_list.filter((value, index) => index !== id);

        if (!set_done?.title) return
        const my_list = {
            title: set_done.title,
            done: true
        };

        delete_modified_object.unshift(my_list);
        console.log(delete_modified_object)
        set_todo_list(delete_modified_object);

        localStorage.setItem("list", JSON.stringify(delete_modified_object));

    }

    const handler_onEdit_item = (id: number) => {
        const my_list = [...todo_list];

        const set_edit = my_list.find((value, index) => index === id);
        
        formik.setFieldValue("title",set_edit?.title);

        const filtered_object = my_list.filter((value, index) => index !== id);

        set_todo_list(filtered_object);
    }

    useEffect(() => {
        if (localStorage.getItem("list")) {
            const saved_todo_list = JSON.parse(localStorage.getItem("list")!);
            set_todo_list(saved_todo_list);
        }
    }, [])

    const formik = useFormik({
        initialValues: initial_value,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    return {
        action_add,
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        handleChange: formik.handleChange,
        handler_remove_all,
        todo_list,
        handler_remove_item,
        handler_item_done,
        handler_onEdit_item
    }
}