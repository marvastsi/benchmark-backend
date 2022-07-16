import User from "./User";

interface Message {
    id: number;
    text: string;
    user: User;
}

export default Message;