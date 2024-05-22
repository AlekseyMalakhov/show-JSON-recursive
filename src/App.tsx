import Item from "./components/Item";

const json = [
    { name: "file1.txt", value: "hello 1" },
    {
        name: "dir1",
        value: [
            { name: "file2.txt", value: "hello 2" },
            { name: "file3.txt", value: "hello 3" },
            { name: "dir2", value: [{ name: "file4.txt", value: "hello 4" }] },
        ],
    },
    {
        name: "dir3",
        value: [{ name: "file5.txt", value: "hello 5" }],
    },
];

function App() {
    return (
        <div>
            <Item value={json} name="root" />
        </div>
    );
}

export default App;
