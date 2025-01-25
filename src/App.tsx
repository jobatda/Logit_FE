import PWABadge from './PWABadge.tsx'
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";
import {GlobalStyled} from "./styles/GlobalStyled.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled/>
            <RouterProvider router={router}/>
            <PWABadge/>
        </ThemeProvider>
    )
}

export default App
