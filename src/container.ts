import { useFormik } from "formik";
import { useEffect, useState } from "react"
import *as yup from "yup";
import { IFormValues, IProps } from "./model";

export const useContainer = (): IProps => {

    const [list, set_list] = useState<Array<string>>([]);
    const [done_list, set_done_list] = useState<Array<string>>([]);

    const validation_schema = yup.object().shape({
        title: yup.string().required(),
    });

    const initial_value: IFormValues = {
        title: ""
    }

    const action_add = (values: IFormValues) => {
        let newList = [...list];
        newList.push(values.title);
        set_list(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }

    const formik = useFormik({
        initialValues: initial_value,
        validationSchema: validation_schema,
        onSubmit: action_add
    });

    const handler_discard = () => {
        set_list([]);
        localStorage.setItem("list", JSON.stringify([]));
    }

    const handler_remove_item = (id: number) => {
        const modified_list = list.filter((value, index) => (
            index !== id
        ))
        set_list(modified_list);
        localStorage.setItem("list", JSON.stringify(modified_list));
    }

    const handler_item_done=(id: number)=>{
        const modified_done_list=[...done_list]
        const my_done = list.filter((value, index) => (
            index === id
        ))
        modified_done_list.push(...my_done)
        set_done_list(modified_done_list);
        localStorage.setItem("done list", JSON.stringify(modified_done_list));


        const modified_list = list.filter((value, index) => (
            index !== id
        ))
        set_list(modified_list);
        localStorage.setItem("list", JSON.stringify(modified_list));
        
    }

    useEffect(() => {
        const modified_list = JSON.parse(localStorage.getItem("list")!)
        set_list(modified_list)
    }, [])

    return {
        action_add: formik.handleSubmit,
        form_data: formik.values,
        handleChange: formik.handleChange,
        handler_discard: handler_discard,
        list: list,
        handler_remove_item,
        handler_item_done
    }
}