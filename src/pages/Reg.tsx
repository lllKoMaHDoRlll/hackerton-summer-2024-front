import React, { useState } from "react";
import { IonButton, IonContent, IonInput, IonList, IonPage,IonHeader, IonToolbar, IonTitle, IonCard, IonItem, IonSelect, IonSelectOption, useIonRouter, useIonViewDidEnter} from "@ionic/react";
import styled from "styled-components";
import {AuthController,  ClientController } from "../API/Endpoint";
import { useRef } from "react";

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (width > 500px) {
        max-width: 500px;
    }
`

export default function Reg() {
    const nav = useIonRouter();
    const goToAuth = ()=>nav.push('/auth');

    const first_name = useRef<any>();
    const surname = useRef<any>();
    const second_name = useRef<any>();
    const email = useRef<any>();
    const password = useRef<any>();
    const role = useRef<HTMLIonSelectElement>(null);

    const registerButtonHandler = async () => {
        try {
            await AuthController.Reg(
                first_name.current.value, surname.current.value, second_name.current.value, email.current.value ,password.current.value, role.current!.value == "client" ? true : false 
            );
        } catch (ex) {
            console.log(ex);
            return;
        }
        if (role.current!.value == "client") {
            
            nav.push("/worker/profile");
        }
        
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Регистрация</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Wrapper>
                    <IonCard>
                        <IonList>
                            <IonItem>
                                <IonInput placeholder="Фамилия" type="text" ref={surname}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Имя" type="text" ref={first_name}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Отчество" type="text" ref={second_name}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Почта" type="email" ref={email}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Пароль" type="password" ref={password}></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Повторите пароль" type="password"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonSelect ref={role} label="Ваша роль" labelPlacement="floating">
                                    <IonSelectOption value="client">Рабочий</IonSelectOption>
                                    <IonSelectOption value="consumer">Работодатель</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonList>
                    </IonCard>
                    <IonButton fill="outline" expand="block" onClick={goToAuth}>У меня есть аккант</IonButton>
                    <IonButton expand="block" onClick={registerButtonHandler}>Зарегистрироваться</IonButton>
                    </Wrapper>
            </IonContent>
        </IonPage>
    )
}