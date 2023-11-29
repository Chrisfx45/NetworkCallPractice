import { TableContainer,Table,Thead,Tr,Tbody,Th, Center } from "@chakra-ui/react"

export default function Personal(props){
    return(
        <>
        <button　onClick={()=>{console.log(props)}}>Test get request button</button>
   
        {/* <div style={{ display:"flex"}}>
        {props.datas.map((item, index) => {
            return (<div className='card' key={index} style={{ color: item.color}}>
                <b>{item.name} </b>
                <p>{item.power}</p>
            </div>)
        })}
        </div> */}
        <Center w={"100%"}>
        <TableContainer p={"15px"} >
            <Table variant='simple' colorScheme="orange">
                <Thead>
                <Tr>
                    <Th w="10%"> No</Th>
                    <Th w="30%" >Name</Th>
                    <Th w="30%">Email</Th>
                    <Th w="30%">Password</Th>
                </Tr>
                </Thead>
                <Tbody>
                {props.datas.map((item, index) => {
                    return (
                    <Tr key={index }>
                        <Th>{item.id}</Th>
                        <Th>{item.username} </Th>
                        <Th>{item.email}</Th>
                        <Th>{item.password}</Th>
                    </Tr>)
                })}
  
                </Tbody>

            </Table>
        </TableContainer>
        </Center>
        </>
    )
}