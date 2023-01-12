import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
