import Link from 'next/link'

const NavLink = ({ children, ...props }) => (
    <Link {...props}>
        <a className={`${props.classname}`}>{children}</a>
    </Link>
)

export default NavLink
