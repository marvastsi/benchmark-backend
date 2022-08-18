import { LocalDate } from "@js-joda/core";

interface User {
    id: number;
    name: string;
    birthdate: LocalDate;
    username: string;
    password: string;
}

export default User;
