import React from "react";
import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from "@ionic/react";

import styled from "styled-components";

const MapFrame = styled.iframe`
    width: 100%;
`

export default function EducationalCourseCard(props: any) {
    return (
        <IonCard className="ion-padding">
            <IonCardHeader>
                <IonCardTitle>{props.name}</IonCardTitle>
                <IonCardSubtitle>{props.address}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <div>
                    <p>Организация: {props.organisation}</p>
                    <p>Длительность: {props.duration}</p>
                    <p>Стоимость: {props.price} руб.</p>
                </div>
            </IonCardContent>
            <IonButton expand="block">Связаться</IonButton>
        </IonCard>
    )
}