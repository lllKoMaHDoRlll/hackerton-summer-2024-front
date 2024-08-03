import { useEffect } from "react";
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonList, IonListHeader, IonLabel, IonItem, IonText, IonChip, IonButton } from "@ionic/react"
import styled from "styled-components";

const StyledCard = styled(IonCard)`
    width: 100%;
`

export default function ProfileCard(props: any) {
    useEffect(() => {
        console.log(props.isAssigned);
    });

    return (
        <StyledCard className="ion-padding">
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
                    {props.isOwnedByConsumer && 
                        <IonItem>
                            <IonButton id={"modal-id-" + props.data.id} expand="block" fill="outline">Просмотреть рабочих</IonButton>
                        </IonItem>
                    }
                </IonList>
            </IonCardContent>
            <IonButton expand="block">{(props.isAssigned || props.isOwnedByConsumer) ? 'Отменить' : 'Откликнуться'}</IonButton>
            
        </StyledCard>
    )
}