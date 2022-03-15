import { Route, Routes } from "react-router-dom";
import {NextLaunch} from "./components/Launches/NextLaunch"
import { UpcomingLaunches } from "./components/Launches/UpcomingLaunches";
import {LastLaunch} from "./components/Launches/LastLaunch"
import { PastLaunches } from "./components/Launches/PastLaunches";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";

export function App(){
  return(
    <>      
      <Header />
      <Routes>
        <Route path="/" element={<NextLaunch/>}/>
        <Route path="/ultimosLancamentos" element={<PastLaunches/>}/>
        <Route path="/ultimoLancamento" element={<LastLaunch/>}/>
        <Route path="/proximoLancamento" element={<NextLaunch/>}/>
        <Route path="/proximosLancamentos" element={<UpcomingLaunches/>}/>
      </Routes>    
      <GlobalStyle />
    </>
  )
}