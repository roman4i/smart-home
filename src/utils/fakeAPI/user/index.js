export default function userData() {
    const data = {
        usr1: {
            username: "Guest",
            avatar: "type1",
        },
        usr2: {
            username: "Roman",
            avatar: "type2",
        },
    }

    return JSON.stringify(data);
}