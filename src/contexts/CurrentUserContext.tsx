// "use client";

// import { CurrentUser } from "@/interfaces/user.interface";
// import { createContext, useContext } from "react";

// const UserContext = createContext<{ user: CurrentUser } | null>(null);

// export function UserProvider({
//   user,
//   children,
// }: Readonly<{
//   user: CurrentUser;
//   children: React.ReactNode;
// }>) {
//   return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
// }

// export function userCurrentUser() {
//   const context = useContext(UserContext);

//   if (!context) {
//     throw new Error("userCurrentUser must be used within UserProvider");
//   }

//   return context;
// }
