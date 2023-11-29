import { useState , useEffect } from 'react'
import './App.css'
import  {BrowserRouter ,Routes,Route, Link} from "react-router-dom"
import { ChakraBaseProvider } from '@chakra-ui/react'
import axios from "axios"
import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react'
import Register from './screens/register'
import Personal from './screens/personal'

function App() {
  const [datas, setDatas] = useState([])
  useEffect(()=>{
    getDatas();
    console.log("Getting data")
  }, [])

  const getDatas = () => {
    axios.get("http://localhost:8080/users")
   .then((res) => {
     console.log(res.data)
     setDatas(res.data)
   })
   .catch((err) => {
     console.log(err)
   })
 }
  return (
    <><ChakraBaseProvider>    
      <Box backgroundColor={"#2D6079"} color={"white"} w={"100%"} >
      <UnorderedList styleType={"none"} display={"flex"}>
          <ListItem width={"50%"} flexDirection={"row"} ><a href='/'> Users</a></ListItem>
          <ListItem width={"50%"}flexDirection={"row"}><a href = "/register">Register</a></ListItem>
      </UnorderedList>
      </Box>
      </ChakraBaseProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register getDatas={getDatas}></Register>}> </Route>
        <Route path='/' element={<Personal datas={datas}></Personal>}></Route>
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
