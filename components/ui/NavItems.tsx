"use client";
import Link from 'next/link';
export default function NavItems(props:{navItems: {name: string; href: string}[],pathName:string }) {
    
     return(   <>
        {props.navItems.map((item:{name:string,href:string})=>{
        const isActive=props.pathName==item.href;
        return(
            <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-semibold transition-colors hover:text-red-800 ${isActive ? 'text-red-800' : 'text-slate-900'
                    }`}
            >
                {item.name}
            </Link>
        );
    })} 
    </>
    ) 
}   