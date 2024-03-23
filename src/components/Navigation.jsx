import { Link } from "react-router-dom"

export default function Navigation({ links }) {
  return(
    <div className="absolute top-0 left-0 z-10 w-full flex items-center justify-between p-5 pt-10">
      <button className="flex items-center justify-center w-10 h-10">
        <img src="/images/menu-icon.svg" alt="menu button icon" />
      </button>
      <Link to="/" className="">
        <img src="/images/logo.svg" alt="brand logo" className="block w-full" />
      </Link>
      <nav className="hidden desktop:block">
        <ul className="flex ml-10 space-x-10">
          {links.map(link => {
            return(
              <Link key={link.id} to={link.to} className="block pb-5 font-bold text-white leading-none">
                {link.name}
              </Link>
            )
          })}
        </ul>
      </nav>
      <span className="block w-10 h-10"></span>
    </div>
  ) // component return end
}
