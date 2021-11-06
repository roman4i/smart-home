export default function sensData() {
    const data = {
        dev1: {
            name: "Bathroom",
            data: {
                Temperature: "20C",
                Humidity: "50%",
            },
        },
        dev2: {
            name: "Kitchen",
            data: {
                Temperature: "25C",
                Humidity: "60%",
                Gas: "No",
            }
        },
    }

    return JSON.stringify(data);
}