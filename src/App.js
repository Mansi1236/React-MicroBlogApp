import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

import {Box} from "@material-ui/core";


const App = () =>  {

return(
<>
<Box >
    
<Sidebar/>
<Feed/>
<Rightbar/>







</Box>

</>
);


}
export default App;