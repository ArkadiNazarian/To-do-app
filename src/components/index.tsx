import { useContainer } from "./container"
import { View } from "./view"

export const TodoList=()=> {
  let get_props = useContainer()
    return <View {...get_props}/>
}