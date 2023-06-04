import React from 'react';
import { Container } from './styles';
import { 
    UserCircle, 
    CaretRight, 
    Key, 
    Bell, 
    PersonArmsSpread, 
    Devices, 
    UserSwitch,
    SignOut,
    Question,
    X
} from "@phosphor-icons/react";

import Avatar from '../../images/Avatar.png'

export default function ProfileSettings({ setMenu }) {
  return(
    <Container className='flex'>
        <main>
            <section className="profile flex">
                <img src={Avatar} alt="Avatar" />
                <div>
                    <strong>Matheus Pelucio</strong>
                    <p>mts.rangel@hotmail.com</p>
                </div>
                <X onClick={() => setMenu(true)} size={20} color="var(--gray-100)" />
            </section>

            <section className="account">
                <p>CONTA</p>
                <div>
                    <div className="personal-data flex">
                        <p className='flex'>
                            <UserCircle size={20} color="var(--gray-100)" />
                            Dados pessoais
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                    <div className="login-info flex">
                        <p className='flex'>
                            <Key size={20} color="var(--gray-100)" />
                            Informações de login
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                </div>
            </section>

            <section className="preferences">
            <p>PREFERÊNCIAS</p>
                <div>
                    <div className="notifications flex">
                        <p className='flex'>
                            <Bell size={20} color="var(--gray-100)" />
                            Notificação
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                    <div className="accessibility flex">
                        <p className='flex'>
                            <PersonArmsSpread size={20} color="var(--gray-100)" />
                            Acessibilidade
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                </div>            
            </section>

            <section className="privacity">
            <p>PRIVACIDADE</p>
                <div>
                    <div className="lincked-devices flex">
                        <p className='flex'>
                            <Devices size={20} color="var(--gray-100)" />
                            Aparelhos conectados
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                    <div className="linked-accounts flex">
                        <p className='flex'>
                            <UserSwitch size={20} color="var(--gray-100)" />
                            Contas vinculadas
                        </p>
                        <CaretRight size={20} color="var(--gray-100)" />
                    </div>
                </div>  
            </section>

            <section className="others">
                <div>
                    <div className="help flex">
                        <p className='flex'>
                            <Question size={20} color="var(--gray-100)" />
                            Central de Ajuda
                        </p>
                    </div>
                    <div className="exit flex">
                        <p className='flex' onClick={() => setMenu(true)}>
                            <SignOut size={20} color="var(--red)" />
                            Sair
                        </p>
                    </div>
                </div>  
            </section>
        </main>
    </Container>
  );
}