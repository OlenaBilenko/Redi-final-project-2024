import { NavBar } from "@/components/navbar/navbar";
import React from "react";
import { Outlet } from "react-router";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <header className="header">
          <h1>My healthy Life</h1>
        </header>
        <NavBar />
        <Outlet />
      </div>
      <footer>Bilenko Olena - 2024</footer>
    </>
  );
};
