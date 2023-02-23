import { act, render, renderHook, screen, waitFor } from "@testing-library/react"
import { TodoList } from "./components/index";
import userEvent from "@testing-library/user-event"
import { useContainer } from "./components/container";

describe("testing functionality", () => {

    afterEach(() => {
        const { result } = renderHook(() => useContainer())
        act(() => {
            result.current.todo_list = [];
        })
    })

    it("add", async () => {

        const { result } = renderHook(() => useContainer())

        act(() => {
            result.current.action_add({ title: "test", done: false })
        })

        expect(result.current.todo_list).toEqual([{ title: "test", done: false }])

    })

    it("remove all", async () => {

        const { result } = renderHook(() => useContainer())

        act(() => {
            result.current.todo_list.push({ title: "test 1", done: false }, { title: "test 2", done: false })

            result.current.handler_remove_all()
        })

        expect(result.current.todo_list).toEqual([])

    })

    it("remove an item", async () => {

        const { result } = renderHook(() => useContainer())

        act(() => {
            result.current.todo_list.push({ title: "test 1", done: false }, { title: "test 2", done: false })

            result.current.handler_remove_item(1);
            console.log(result.current.todo_list)
        })

        expect(result.current.todo_list).not.toContain({ title: "test 2", done: false })

    })

    it("set to done", async () => {

        const { result } = renderHook(() => useContainer())

        act(() => {
            // result.current.todo_list =[];
            result.current.todo_list.push({ title: "test 1", done: false }, { title: "test 2", done: false })

            result.current.handler_item_done(0);
        })
        console.log(result.current.todo_list)
        expect(result.current.todo_list).toEqual([{ title: "test 1", done: true }, { title: "test 2", done: false }])

    })

})