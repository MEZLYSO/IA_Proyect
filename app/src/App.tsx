import useFiles from "./hooks/useFiles"

function App() {

  const { handleChange, file } = useFiles()

  return (
    <div className="flex items-center w-full h-dvh pt-15">
      <div className=" fixed top-0 w-full h-15 bg-green-700 flex justify-between items-center">
        <div
          className="flex gap-3 items-center"
        >
          <img
            className="w-15 p-2 rounded-4xl"
            src="../assets/Verde Bendito (Stickers (circulares)).jpg" />
          <h1
            className="font-bold text-2xl text-white"
          >Fuera Bicho
          </h1>
        </div>
        <div
          className="mr-5 font-bold text-white text-2xl"
        >
          Tesji Pionners
        </div>
      </div>
      {/* Div */}
      <div className="w-full flex">
        <div className="w-full h-dvh">
          <div className="bg-black w-full flex justify-center items-center">
            <img
              className="object-contain h-200 max-h-200 w-auto"
              src={file} alt="" />
          </div>
          <div className="h-auto w-full flex justify-center p-10">
            <form
              className="flex flex-col gap-4 w-1/2">
              <input
                onChange={handleChange}
                className="bg-white p-3 rounded-4xl"
                type="file" />
              <input
                className="bg-green-600 font-bold text-white rounded-4xl text-2xl"
                type="submit" value="Evaluar" />
            </form>
          </div>
        </div>
        <div className="bg-black w-full h-dvh p-10 pt-20 flex max-w-100">
          <div className="bg-white rounded-4xl p-10 w-full">
            <p>Probabilidad: 0.00%</p>
            <p>Probabilidad: 0.00%</p>
            <p>Probabilidad: 0.00%</p>
            <p>Probabilidad: 0.00%</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
