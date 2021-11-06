import sensData from "./sensors";
import userData from "./user";

export default class fakeAPI {
    getSensorsData() {
        console.log(sensData());
        return JSON.parse(sensData());
    }
    getAuthData() {
        console.log(userData());
        return JSON.parse(userData());
    }
}