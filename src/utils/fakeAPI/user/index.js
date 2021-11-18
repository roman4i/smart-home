export default function userData() {
    const data = {
        usr1: {
            username: "Guest",
            avatar: "gray",
        },
        usr2: {
            username: "Roman",
            avatar: "red",
        },
    }

    return JSON.stringify(data);
}