import React, { useRef, useState } from "react";
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

    const [values, setValues] = useState({
        email: useRef<HTMLIonInputElement>(null), 
        password: useRef<HTMLIonInputElement>(null)
    });

    const registerButton = useRef<HTMLIonButtonElement>(null);

    const onChangeCheck = (ev: any) => {
        console.log(registerButton);
        if (!!values.email.current?.value && !!values.password.current?.value) {
            registerButton.current!.disabled = false;
            return;
        }
        registerButton.current!.disabled = true;
        return;
    }

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
                                    <IonInput ref={values.email} placeholder="Почта" type="email" onInput={onChangeCheck}></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonInput ref={values.password} placeholder="Пароль" type="password" onInput={onChangeCheck}></IonInput>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <IonButton fill="clear" expand="block" onClick={goToReg}>Зарегистрироваться</IonButton>
                    <IonButton ref={registerButton} expand="block" disabled>Войти</IonButton>
                    </Wrapper>
            </IonContent>
        </IonPage>
    )
}