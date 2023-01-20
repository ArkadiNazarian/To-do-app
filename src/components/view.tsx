import { IProps } from "./model";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

export const View = (props: IProps) => (
    <div className="tw-flex tw-pt-10 tw-pl-10">
        <div>
            <div className="tw-flex tw-flex-row tw-items-center">
                <GiCheckMark className="tw-text-custom_green tw-text-xl" />
                <p className="tw-ml-2 tw-text-2xl tw-text-white">TODO LIST</p>
            </div>
            <form onSubmit={props.action_add}>
                <div className="tw-flex tw-flex-row tw-items-center">
                    <textarea name="title" value={props.form_data.title} onChange={props.handleChange} className="tw-bg-custom_blue tw-w-52 tw-h-6 focus:tw-outline-none tw-border-none tw-rounded-md tw-text-white tw-p-1" />
                    <button type="submit" className="tw-bg-custom_blue tw-border-none tw-text-white tw-text-lg tw-pl-3 tw-pr-2 tw-pt-1 tw-rounded-md tw-ml-4"><AiOutlinePlus /></button>
                    <button type="button" onClick={props.handler_discard}>Discard</button>
                </div>
            </form>
            {
                props.todo_list.map((value, index) => (
                    <div key={index} className="tw-flex tw-flex-row tw-items-center">
                        <p className="tw-text-xl tw-text-white tw-p-2 tw-bg-custom_blue tw-rounded-md tw-w-80">{value}</p>
                        <button onClick={() => props.handler_remove_item(index)}>Remove</button>
                        <button onClick={() => props.handler_item_done(index)}>Done</button>
                    </div>
                ))
            }
        </div>
    </div>
)