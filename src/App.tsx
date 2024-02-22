import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/sign-in" element={<Auth type={"signIn"} />} />
      <Route path="/sign-up" element={<Auth type={"signUp"} />} />
    </Routes>
  );
}

export default App;
