import { Outlet } from "react-router-dom";

export default function AppContainer() {
    return (
        <div className="relative z-10 flex min-h-screen flex-col w-full overflow-hidden">
            <div
                style={{ height: "calc(var(--tg-safe-area-inset-top, 0px) + env(safe-area-inset-top, 0px) + 20px)" }}
                className="w-full shrink-0 pointer-events-none"
            />

            <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 md:px-8">
                <div className="pb-32">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}