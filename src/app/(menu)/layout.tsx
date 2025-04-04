export default function MenuLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-1 w-full scroll-smooth">
            {children}
        </main>
    );
}