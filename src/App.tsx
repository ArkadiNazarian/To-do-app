import { useContainer } from "./container"
import { View } from "./view"

export function App() {
  let get_props = useContainer()
    return <View {...get_props}/>
}

