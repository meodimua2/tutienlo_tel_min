export default function Background({ bgImage }) {
    return (
        <>
            <div
                className="fixed inset-0 z-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="fixed inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/70 to-black" />
        </>
    );
}