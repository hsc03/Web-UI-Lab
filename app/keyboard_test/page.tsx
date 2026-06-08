import KeyboardTester from "@/components/keyboard/keyboard-tester";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-y-10">
      <h1 className="w-full text-8xl font-bold text-start">
        Keyboard Test
      </h1>
      <KeyboardTester />
    </main>
  )
}
