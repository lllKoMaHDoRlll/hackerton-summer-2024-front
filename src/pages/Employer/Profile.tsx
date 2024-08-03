import React from "react";
import { IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton } from "@ionic/react"

export default function Profile() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Меню</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    123
                </IonContent>
            </IonMenu>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Профиль</IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent id="main-content">
                    123
                </IonContent>
            </IonPage>
        </>
    )
}