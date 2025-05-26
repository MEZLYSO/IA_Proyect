import { useState } from "react"

const useFiles = () => {

  const [file, setFile] = useState()

  const handleChange = (e: any) => {
    const img = e.target.files[0]
    if (img) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setFile(reader.result)
      }
      reader.readAsDataURL(img)
    }
  }

  return { handleChange, file }
}

export default useFiles
