const json = {
  file: "file1.txt",
  dir1: [
    { file: "file2.txt" },
    { file: "file3.txt" },
    { dir2: [{ file: "file4.txt" }] },
  ],
  dir3: [{ dir4: [{ file: "file5.txt" }] }],
};

function App() {
  return <div>Hi all</div>;
}

export default App;
