import { useEffect, useState } from "react"
import "./scrolltoptopage.css"
import { FaArrowUp } from "react-icons/fa"

const ScrollTopToPage = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 500){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll" ,toggleVisibility)
        }
    },[])
  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  )
}

export default ScrollTopToPage;