import { Header } from "@/components"
import "./globals.css"
import { Provider } from "react-redux"
import store from "@/common/stores/stores"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html>
        <head />
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  )
}
