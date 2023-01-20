import { IProps } from "./model";

export const View = (props: IProps) => (
    <div>
        <form onSubmit={props.action_add}>
            <input type="text" name="title" value={props.form_data.title} onChange={props.handleChange} />
            <button type="submit">Add</button>
            <button type="button" onClick={props.handler_discard}>Discard</button>
        </form>
        {
            props.list.map((value, index) => (
                <div key={index}>
                    <p >{index + 1}. {value}<br /></p>
                    <button onClick={() => props.handler_remove_item(index)}>Remove</button>
                    <button onClick={() => props.handler_item_done(index)}>Done</button>
                </div>
            ))
        }
    </div>
)