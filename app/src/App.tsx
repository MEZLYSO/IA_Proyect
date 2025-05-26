
function App() {

  return (
    <div className="flex items-center w-full h-dvh mt-15">
      <div className=" fixed top-0 w-full h-15 bg-green-700">
        <h1>Bicho</h1>
      </div>
      {/* Div */}
      <div className="w-full flex">
        <div className="bg-blue-400 w-full h-dvh">
          <div className="bg-black w-full flex justify-center items-center">
            <img
              className="object-contain h-auto max-h-60 min-h-180 w-auto"
              src="../assets/test.jpeg" alt="" />
          </div>
          <div className="h-1/2 w-full">
            <form className="flex flex-col">
              <input type="file" />
              <input type="submit" value="Evaluar" />
            </form>
          </div>
        </div>
        <div className="bg-red-400 w-full h-dvh">2</div>
      </div>
    </div >
  )
}

export default App
