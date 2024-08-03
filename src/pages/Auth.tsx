import React from "react";
import styled from "styled-components";
import { IonButton, IonContent, IonInput, IonList, IonPage,IonHeader, IonToolbar, IonTitle, IonCard, IonItem, IonCardHeader, IonCardContent, useIonRouter } from "@ionic/react";


const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (width > 500px) {
        max-width: 500px;
    }
`

export default function Auth() {
    const nav = useIonRouter();
    const goToReg = ()=>nav.push('/reg');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Вход</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Wrapper>
                    <IonCard>
                        <IonCardHeader>Войти</IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonInput placeholder="Почта" type="email"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonInput placeholder="Пароль" type="password"></IonInput>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <IonButton fill="clear" expand="block" onClick={goToReg}>Зарегистрироваться</IonButton>
                    <IonButton expand="block">Войти</IonButton>
                    </Wrapper>
            </IonContent>
        </IonPage>
    )
}