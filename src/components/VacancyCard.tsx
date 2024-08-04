import { useEffect } from "react";
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonList, IonListHeader, IonLabel, IonItem, IonText, IonChip, IonButton, useIonRouter } from "@ionic/react"
import styled from "styled-components";
import { ClientController, CustomerController } from "../API/Endpoint";

const StyledCard = styled(IonCard)`
    width: 100%;
`

const StyledItem = styled.div`
    flex-wrap: wrap;
    display: flex;
`

export default function VacancyCard(props: any) {
    const nav = useIonRouter();
    const buttonHandler = (objectId: number) => {
        if (!props.isAssigned && !props.isOwnedByConsumer) {
            ClientController.postGetWork(objectId);
            nav.push("/worker/profile");
        } else if (props.isOwnedByConsumer) {
            CustomerController.deleteObject(objectId);
            nav.push("employer/profile");
        }
    };

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
                    <StyledItem className="ion-wrap">
                        {props.data.professions.map((profession: any) => (
                            <IonChip>{profession.professionName}</IonChip>
                        ))}
                    </StyledItem>
                    {props.isOwnedByConsumer && 
                        <IonItem>
                            <IonButton id={"modal-id-" + props.data.id} expand="block" fill="outline">Просмотреть рабочих</IonButton>
                        </IonItem>
                    }
                </IonList>
            </IonCardContent>
            <IonButton onClick={() => {buttonHandler(props.data.id)}} expand="block" disabled={props.doDisable}>{(props.isAssigned || props.isOwnedByConsumer) ? 'Отменить' : 'Откликнуться'}</IonButton>
            
        </StyledCard>
    )
}