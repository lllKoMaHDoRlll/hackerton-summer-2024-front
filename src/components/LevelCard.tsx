import React from "react";
import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonText } from "@ionic/react";
import { usePhotoGallery } from '../hooks/usePhotoGallery';

import styled from "styled-components";


export default function LevelCard(props: any) {
    const { takePhoto } = usePhotoGallery();

    return (
        <IonCard className="ion-padding">
            <IonCardHeader>
                <IonCardTitle>Текущий уровень: {props.level}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonText>Для повышения уровня Вы можете пройти повышение квалификации, чаще выходить на смены, а также получать хорошие отзывы.</IonText>
            </IonCardContent>
            <IonButton expand="block" onClick={() => takePhoto()}>Загрузить фото диплома</IonButton>
        </IonCard>
    )
}