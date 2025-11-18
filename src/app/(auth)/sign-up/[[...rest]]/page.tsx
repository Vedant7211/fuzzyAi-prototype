import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp 
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: 
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          },
        }}
      />
    </div>
  )
}  