import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Header = () => {
    const [show , setShow] = useState(false)
    console.log(show)
  return (
    <header>
    <nav>

<span>

    <MdOutlineArrowForwardIos size={30} />
</span>

      <h2>Bitcoin Wallet</h2>
      <span onClick={()=>setShow((prev)=>!prev)}>
        <BsThreeDotsVertical size={30}/>
      </span>
    </nav>
    <ul className="modal">

    {
        show
        && 
        <>
            <li>Edit</li>
            <li>Courier Info</li>
            <li>Share</li>
            <li>Remove</li>
        </>
      }
    </ul>
     
    </header>
  )
}

export default Header
