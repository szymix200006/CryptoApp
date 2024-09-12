import { createContext, useContext, useState } from "react"
import { User } from "../lib/types";

type UserContext = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}

type UserContextProps = {
    children: React.ReactNode;
}

const UserContext = createContext<UserContext | null>(null);

export default function UserContextProvider({children}: UserContextProps) {
    const [user, setUser] = useState<User>({
        username: "",
        profilePicture: "",
        email: ""
    });

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error("Context must be used within its provider");
    }
    return context;
}