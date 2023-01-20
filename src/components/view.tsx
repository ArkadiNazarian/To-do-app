import { IProps } from "./model";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

export const View = (props: IProps) => (
    <div className="tw-w-screen tw-flex tw-justify-center tw-items-center tw-h-screen">
        <div>
            <div className="tw-flex tw-flex-row tw-items-center">
                <GiCheckMark className="tw-text-custom_green tw-text-xl"/>
                <p className="tw-ml-2 tw-text-2xl tw-text-white">TODO LIST</p>
            </div>
            <form onSubmit={props.action_add}>
                <input type="text" name="title" value={props.form_data.title} onChange={props.handleChange} />
                <button type="submit" className="tw-bg-custom_blue tw-border-none tw-rounded-3xl"><AiOutlinePlus/></button>
                <button type="button" onClick={props.handler_discard}>Discard</button>
            </form>
            {
                props.todo_list.map((value, index) => (
                    <div key={index}>
                        <p >{index + 1}. {value}<br /></p>
                        <button onClick={() => props.handler_remove_item(index)}>Remove</button>
                        <button onClick={() => props.handler_item_done(index)}>Done</button>
                    </div>
                ))
            }
        </div>
    </div>
)