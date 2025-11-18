import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn 
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
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