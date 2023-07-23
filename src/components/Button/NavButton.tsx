import React from 'react'

const NavButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">{children}</div>
    )
}

export default NavButton