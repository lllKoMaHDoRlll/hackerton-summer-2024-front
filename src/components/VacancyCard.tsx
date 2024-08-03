import React from "react";
import { IonCard, IonCardTitle, IonAvatar, IonCardContent, IonCardHeader, IonCardSubtitle, IonList, IonListHeader, IonLabel, IonItem, IonText, IonChip, IonButton } from "@ionic/react"


import styled from "styled-components";


export default function ProfileCard(props: any) {
    return (
        <IonCard className="ion-padding-start ion-padding-top">
            <IonCardHeader>
                <IonCardSubtitle>Оплата: {props.data.price} руб.</IonCardSubtitle>
                <IonCardTitle>{props.data.workName}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>
                        <IonText>Описание: {props.data.workDescription}</IonText>
                    </IonItem>
                    <IonItem>
                        <IonText> Доступных мест: {props.data.availableVacancies}</IonText>
                    </IonItem>
                    <IonListHeader>
                        <IonLabel>
                            Требуемые профессии:
                        </IonLabel>
                    </IonListHeader>
                    <IonItem>
                        {props.data.professions.map((profession: any) => (
                            <IonChip>{profession.name}</IonChip>
                        ))}
                    </IonItem>
                </IonList>
            </IonCardContent>
            <IonButton expand="block">Откликнуться</IonButton>
        </IonCard>
    )
}