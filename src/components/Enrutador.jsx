import Home_page from "./Home Page";
import { Route, Routes } from "react-router-dom";
import Not_found from "./Not found";
import Register_form from "./Registro";

const Router_function = () => {
    return (
        <Routes>
            <Route path="/" element={<Home_page/>} />
            <Route path="/Register" element={<Register_form/>} />
            <Route path="*" element={<Not_found/>} />
        </Routes>
    )
}

export default Router_function