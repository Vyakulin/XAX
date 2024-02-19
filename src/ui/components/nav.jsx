'use client'

import { usePathname } from "next/navigation"
import { Text } from "./elements"
import Link from "next/link"
import clsx from "clsx"

function Page(name, href) {
    return {
        name,
        href
    }
}
const pages = [
    new Page('Главная', '/'),
    new Page('Проекты', '/projects'),
    new Page('Сервер', '/server')
]

export function Nav() {
    const pathname = usePathname();

    return (<>
        {pages.map((page) => {
            return (
                <li key={page.name}
                className={clsx(
                    'nav-item',
                    {
                        'nav-item-active' : pathname === page.href,
                    }
                )}>
                    <Link href={page.href}>
                        <Text style='p'>{page.name}</Text>
                    </Link>
                </li>
            )
        })}
    </>)
}