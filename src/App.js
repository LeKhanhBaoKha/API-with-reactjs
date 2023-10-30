import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountList from "./pages/AccountList";
import AccountDetail from "./pages/AccountDetail";
import AccountAdd from "./pages/AccountAdd";
import {Link} from "react-router-dom";
const App = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<AccountList />} />
                        <Route path="details/:id" element={<AccountDetail />} />
                        <Route path="create" element={<AccountAdd />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;