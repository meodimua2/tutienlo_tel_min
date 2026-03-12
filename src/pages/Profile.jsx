import { useTelegramAuth } from "../hooks/useTelegram";

export default function App() {

    const { user, loading } = useTelegramAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Auth failed</div>;
    }

    return (
        <div>

            <h1>Xin chào {user.first_name}</h1>

            <img src={user.photo_url} width={80} />

        </div>
    );
}