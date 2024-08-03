import React, { useRef } from "react";
import { IonBackButton, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonCardContent, IonCard, IonList, IonItem, IonListHeader, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonModal, IonIcon } from "@ionic/react";

import styled from "styled-components";
import PartnerMap from "../../components/PartnersMap";
import EducationalCourseCard from "../../components/EducationalCourseCard";
import VacancyCard from "../../components/VacancyCard";

import { person } from "ionicons/icons";


const objects = [
    {
        id: 2,
        workName: "Стройка",
        workDescription: "Очень крутая стройка",
        price: "4 000",
        availableVacancies: 5,
        professions: [
            {
                id: 0,
                name: "Разнорабочий"
            },
            {
                id: 0,
                name: "Монтажник"
            }
        ],
        workers: [
            {
                id: 0,
                firstName: "Иван",
                LastName: "Иванов"
            },
            {
                id: 2,
                firstName: "Сергей",
                LastName: "Иванов"
            }
        ]
    },
    {
        id: 0,
        workName: "Установка окон",
        workDescription: "Иди сюда и установи мне окна",
        price: "3 000",
        availableVacancies: 3,
        professions: [
            {
                id: 0,
                name: "Разнорабочий"
            }
        ],
        workers: [
            {
                id: 0,
                firstName: "Петр",
                LastName: "Сергеев"
            },
            {
                id: 2,
                firstName: "Марат",
                LastName: "Баширов"
            },
            {
                id: 2,
                firstName: "Игнат",
                LastName: "Баширов"
            }
        ]
    },
];

export default function BuilderObjects() {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Активные Объекты</IonTitle>
                </IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
            </IonHeader>
            <IonContent>
                <IonList>
                    {objects.map((object) => (
                        <IonItem>
                            <VacancyCard data={object} isOwnedByConsumer={true}></VacancyCard>
                        </IonItem>
                    ))} 
                </IonList>
                {objects.map((object) => (
                    <IonModal ref={modal} trigger={"modal-id-" + object.id} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonList>
                                {object.workers.map((worker) => (
                                    <IonItem>
                                        <IonIcon icon={person} />
                                        <IonLabel>
                                            {worker.firstName} {worker.LastName}
                                        </IonLabel>
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonContent>
                    </IonModal>
                ))}
            </IonContent>
        </IonPage>
    )
}