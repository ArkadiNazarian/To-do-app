import { IProps } from "./model";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";

export const View = (props: IProps) => (
    <div className="md:tw-grid md:tw-grid-cols-2 tw-p-10 tw-h-[89vh]">
        <div className="tw-col-start-1">
            <div className="tw-flex tw-flex-row tw-items-center">
                <FaListUl className="tw-text-custom_green tw-text-2xl" />
                <p className="tw-ml-2 tw-text-2xl tw-text-white">TODO LIST</p>
            </div>
            <form onSubmit={props.action_submit}>
                <div className="tw-flex tw-flex-row tw-items-center">
                    <textarea name="title" value={props.form_data.title} onChange={props.handleChange} className="tw-bg-custom_blue tw-w-52 tw-h-6 focus:tw-outline-none tw-border-none tw-rounded-md tw-text-white tw-p-1" />
                    <button type="submit" className="tw-cursor-pointer tw-bg-custom_blue tw-border-none tw-text-white tw-text-lg tw-pl-3 tw-pr-2 tw-pt-1 tw-rounded-md tw-ml-4"><AiOutlinePlus /></button>
                    <button type="button" onClick={() => props.handler_remove_all()} className="tw-cursor-pointer tw-mt-4 tw-bg-custom_red tw-border-none tw-text-white tw-text-sm tw-rounded-lg tw-p-1 tw-ml-2 tw-mb-2">Clear All</button>
                </div>
            </form>
            {
                props.todo_list.map((value, index) => (
                    <div key={index}>
                        {
                            value.done === false && (
                                <div className="tw-flex tw-flex-row tw-items-center">
                                    <p className="tw-text-xl tw-text-white tw-p-2 tw-bg-custom_blue tw-rounded-md tw-w-80">{value.title}</p>
                                    <button onClick={() => props.handler_item_done(index)} className="tw-cursor-pointer tw-ml-2 tw-bg-background_color tw-text-custom_green tw-border-none tw-text-xl"><GiCheckMark /></button>
                                    <button onClick={() => props.handler_remove_item(index)} className="tw-cursor-pointer tw-ml-2 tw-bg-background_color tw-text-custom_red tw-border-none tw-text-3xl"><IoClose /></button>
                                    <button onClick={() => props.handler_onEdit_item(index)} className="tw-cursor-pointer tw-ml-2 tw-bg-background_color tw-text-custom_blue tw-border-none tw-text-3xl"><AiTwotoneEdit /></button>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
        <div className="tw-col-start-2">
            <div className={props.todo_list.length !== 0 ? "tw-flex tw-flex-row tw-items-center tw-mb-12" : "tw-hidden"}>
                <GoChecklist className="tw-text-custom_green tw-text-2xl" />
                <p className="tw-ml-2 tw-text-2xl tw-text-white">DONE LIST</p>
            </div>
            {
                props.todo_list.map((value, index) => (
                    <div key={index}>
                        {
                            value.done && (
                                <div className="tw-flex tw-flex-row tw-items-center">
                                    <p className="tw-text-xl tw-text-white tw-p-2 tw-bg-custom_blue tw-rounded-md tw-w-80">{value.title}</p>
                                    <button onClick={() => props.handler_remove_item(index)} className="tw-cursor-pointer tw-ml-2 tw-bg-background_color tw-text-custom_red tw-border-none tw-text-3xl"><IoClose /></button>
                                    <button onClick={() => props.handler_onEdit_item(index)} className="tw-cursor-pointer tw-ml-2 tw-bg-background_color tw-text-custom_blue tw-border-none tw-text-3xl"><AiTwotoneEdit /></button>
                                </div>
                            )
                        }

                    </div>
                ))
            }
        </div>
    </div>
)