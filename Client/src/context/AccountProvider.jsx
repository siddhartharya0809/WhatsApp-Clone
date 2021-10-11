import { createContext, useState } from "react";

// it takes some default value
export const AccountContext = createContext(null)

const AccountProvider = ({ children }) => {

  // useState takes 2 value as mention below. 'account' is read only and it's a variable whose value 
  // is used here so to change that we will use setAccount whose value can be changed.
  const [account, setAccount] = useState();
  console.log(account);
  return (
    // Providers take a value objects under them they are value objects which contain all the values which we want to pass in the project
    <AccountContext.Provider value={{
      account,
      setAccount
    }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;