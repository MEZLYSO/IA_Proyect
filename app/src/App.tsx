import useFiles from "./hooks/useFiles"

function App() {

  const { handleChange, file } = useFiles()

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="flex items-center w-full h-dvh pt-15">
      <div className=" fixed top-0 w-full h-15 bg-green-700">
        <h1>Bicho</h1>
      </div>
      {/* Div */}
      <div className="w-full flex">
        <div className="bg-blue-400 w-full h-dvh">
          <div className="bg-black w-full flex justify-center items-center">
            <img
              className="object-contain h-150 max-h-150 w-auto"
              src={file} alt="" />
          </div>
          <div className="h-1/2 w-full flex justify-center p-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-1/2">
              <input
                onChange={handleChange}
                className="bg-white p-3 rounded-4xl"
                type="file" />
              <input
                className="bg-green-600 font-bold text-white rounded-4xl"
                type="submit" value="Evaluar" />
            </form>
          </div>
        </div>
        <div className="bg-red-400 w-full h-dvh pt-15 flex justify-center items-center p-10">
          <div className="bg-white rounded-4xl">
            <p>Text</p>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
