import React from "react";
import { IonBackButton, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonCardContent, IonCard, IonList, IonItem, IonListHeader, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from "@ionic/react";

import styled from "styled-components";
import PartnerMap from "../../components/PartnersMap";
import EducationalCourseCard from "../../components/EducationalCourseCard";
import VacancyCard from "../../components/VacancyCard";

const vacancies = [
    {
        id: 0,
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
        ]
    },
];

export default function WorkerTasks() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Доступные вакансии</IonTitle>
                </IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
            </IonHeader>
            <IonContent>
                <IonList>
                    {vacancies.map((vacancy) => (
                        <IonItem>
                            <VacancyCard data={vacancy}></VacancyCard>
                        </IonItem>
                    ))} 
                </IonList>
            </IonContent>
        </IonPage>
    )
}