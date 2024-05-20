import Button from "../components/ui/Button";

export default function LoginPage() {
    return (
        <div className="h-screen overflow-hidden grid lg:grid-cols-2">
            <div className="flex items-center justify-center">
                <div className="w-4/5">
                    <h1 className="text-3xl font-bold mb-16">Login Page</h1>

                    <div className="flex flex-col gap-4">
                        <Button variant="primary" full_width>Login with Google</Button>
                        <Button variant="secondary" full_width>Login with Github</Button>
                        <Button variant="secondary" full_width>Login with Discord</Button>
                    </div>
                </div>
            </div>
            <div className="h-full bg-gradient-to-b from-neutral-600 to-neutral-800"></div>
        </div>
    )
}