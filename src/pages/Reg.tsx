import React from "react";
import { IonButton, IonContent, IonInput, IonList, IonPage,IonHeader, IonToolbar, IonTitle, IonCard, IonItem } from "@ionic/react";
import styled from "styled-components";

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
                                <IonInput placeholder="Фамилия" type="text"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Имя" type="text"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Отчество" type="text"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Почта" type="email"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Пароль" type="password"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput placeholder="Повторите пароль" type="password"></IonInput>
                            </IonItem>
                        </IonList>
                    </IonCard>
                    <IonButton fill="outline" expand="block">У меня есть аккант</IonButton>
                    <IonButton expand="block">Зарегистрироваться</IonButton>
                    </Wrapper>
            </IonContent>
        </IonPage>
    )
}