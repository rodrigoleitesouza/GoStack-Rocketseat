import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "~/assets/logo-purple.svg";

import Notifications from "../Notifications";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber!" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={profile.avatar.url || "https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg"}  alt="https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
