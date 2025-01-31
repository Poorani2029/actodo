import Header from "../components/Header"
import Card from "../components/card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
{

    const data = useLocation()

    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
  
          {/* Header */}
  
          <Header username={data.state.user}/>
  
          <div className="flex justify-between gap-7 my-6 flex-wrap">
            
          {/* Card0 */}
  
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"October"} subtitle={"01:31"}/>
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
          </div>
  
          {/* Todo Container */}
  
          <TodoContainer/>
        </div>
      </div>
    )
}
export default Landing