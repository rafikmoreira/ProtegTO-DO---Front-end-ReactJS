import { createContext, useState } from "react"

type UserType = {
  profile: {
    nome: string
    email: string
    id?: number
  }
  token: string
}

type PropsAuthContext = {
  profile: {
    nome: string
    email: string
    id?: number
  }
  token: string
  setUser: any
}

const AuthContext = createContext<PropsAuthContext>({
  profile: {
    nome: "",
    email: "",
  },
  token: "",
  setUser: () => {},
})

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType>({
    token: "",
    profile: { nome: "", email: "" },
  })

  return (
    <AuthContext.Provider
      value={{ profile: user.profile, token: user.token, setUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
