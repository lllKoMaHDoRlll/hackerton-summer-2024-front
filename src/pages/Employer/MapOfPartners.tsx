import React from "react";
import { IonBackButton, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonCardContent, IonCard, IonList, IonItem, IonListHeader, IonLabel } from "@ionic/react";

import styled from "styled-components";
import PartnerMap from "../../components/PartnersMap";

const MapFrame = styled.iframe`
    width: 100%;
`

export default function MapOfPartners() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Карта партнеров</IonTitle>
                </IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
            </IonHeader>
            <IonContent>
                <PartnerMap></PartnerMap>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Партнеры</IonLabel>
                    </IonListHeader>
                    <IonItem></IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}