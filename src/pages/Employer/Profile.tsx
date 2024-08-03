import React from "react";
import { IonLabel, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonCard, IonCardTitle, IonAvatar, IonCardContent, IonList, IonItem, IonIcon } from "@ionic/react"
import { map, build, home, personAdd } from "ionicons/icons"

import styled from "styled-components";

const ProfileCardTitle = styled(IonCardTitle)`
    display: flex;
`

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
                    <IonList>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={map} slot="start" />
                            <IonLabel>Карта Партнеров</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={build} slot="start" />
                            <IonLabel>Рабочиe</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={home} slot="start" />
                            <IonLabel>Объекты</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={personAdd} slot="start" />
                            <IonLabel>Вакансии</IonLabel>
                        </IonItem>
                    </IonList>
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
                <IonContent id="main-content" fullscreen>
                    <IonCard className="ion-padding-start ion-padding-top">
                        <ProfileCardTitle className="ion-align-items-center">
                            <IonAvatar className="ion-margin-end">
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                            </IonAvatar>
                            Иван Иванов
                        </ProfileCardTitle>
                        <IonCardContent>email: example@example.com</IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    )
}