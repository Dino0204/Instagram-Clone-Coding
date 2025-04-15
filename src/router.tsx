import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main, Error } from "./views"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

