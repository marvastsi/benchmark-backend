import Address from "./Address";
import Phone from "./Phone";
import User from "./User";

interface Account {
    id: number;
    user: User;
    address: Address;
    phone: Phone;
    email: string;
    notification: boolean;
    active: boolean;
}

export default Account;
