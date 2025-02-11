import logo from '../../assets/WhatsApp_Image_2025-02-11_at_1.14.32_AM-removebg-preview.png'
export function Navbar(){
    return(
        <>
        <nav className="bg-white sticky w-full top-0 left-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <a href="https://withpalm.ai/" target="_blank">
        <img src={logo} alt="Logo" className="h-12 w-auto cursor-pointer" />
        </a>
        </div>
        </nav>
        </>
    )
}