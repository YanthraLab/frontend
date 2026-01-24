import { SignInForm } from "@/components/organisms/Auth/SignInForm"

export default function SignInPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-white dark:bg-slate-950 p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 w-full flex justify-center">
        <SignInForm />
      </div>
    </div>
  )
}
