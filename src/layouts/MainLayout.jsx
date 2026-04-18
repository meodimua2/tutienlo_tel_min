import Background from "./Background";
import AppContainer from "./AppContainer";
import BottomNav from "./BottomNav";
import bgImage from "../assets/images/img_bg.jpg";
import useTelegram from "../hooks/useTelegram";

export default function MainLayout() {
    useTelegram();

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden text-slate-900">
            <Background bgImage={bgImage} />
            <AppContainer />
            <BottomNav />
        </div>
    );
}