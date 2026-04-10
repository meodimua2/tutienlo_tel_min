import Background from "../components/layout/Background";
import AppContainer from "../components/layout/AppContainer";
import BottomNav from "../components/layout/BottomNav";
import bgImage from "../assets/images/img_bg.jpg";
import useTelegram from "../hooks/useTelegram";

export default function MainLayout() {
    useTelegram();

    return (
        <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-black text-zinc-100">
            <Background bgImage={bgImage} />
            <AppContainer />
            <BottomNav />
        </div>
    );
}