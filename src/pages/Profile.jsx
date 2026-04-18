import { useUser } from "../hooks/useUser";
import PageLayout from "../components/ui/PageLayout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMenu from "../components/profile/ProfileMenu";

export default function Profile() {
    const { user, loading, error } = useUser();

    if (loading) {
        return (
            <div className="grid h-[50vh] place-items-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
        );
    }

    if (!user) {
        return (
            <PageLayout className="p-6 text-center">
                <p className="text-sm text-white/50">{error || "Chưa đăng nhập"}</p>
            </PageLayout>
        );
    }

    const name = user.displayName ?? user.first_name ?? "Người chơi";
    const avatar =
        user.photoURL ??
        user.photo_url ??
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`;
    const userId = (user.$id ?? "-").toString().slice(-8);

    return (
        <PageLayout className="p-4">
            <ProfileHeader name={name} avatar={avatar} userId={userId} />
            <ProfileMenu />
            <div className="text-center text-[11px] text-white/30">
                v1.0 • Galaxy Game
            </div>
        </PageLayout>
    );
}
