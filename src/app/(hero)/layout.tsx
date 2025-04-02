export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex justify-center items-center w-full">
      {children}
    </main>
  );
}