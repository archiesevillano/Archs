import { Toolbar } from "@mui/material";
import "./AppHeader.css";
import HeaderNavigationBar from "../HeaderNavigationBar/HeaderNavigationBar";

const AppHeader = () => {
    return (<header className={"app-header"}>
        <HeaderNavigationBar />
    </header>);
}

export default AppHeader;