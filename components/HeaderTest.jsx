import Link from "next/link";

export default function HeaderTest() {
    return (
        <header className="bg-gray-800 text-white p-4 gap-3 flex w-full justify-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contacts">Contacts</Link>
        </header>
    )
}