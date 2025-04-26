import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-screen mt-5">
      <SignIn />
    </div>
  );
}
