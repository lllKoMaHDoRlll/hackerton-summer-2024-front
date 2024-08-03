import React from "react";
import { IonLabel, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonCard, IonCardTitle, IonAvatar, IonCardContent, IonList, IonItem, IonIcon, IonChip } from "@ionic/react"
import { map, build, home, personAdd, star } from "ionicons/icons"

import styled from "styled-components";

import ProfileCard from "./../../components/ProfileCard";
import VacancyCard from "./../../components/VacancyCard";

const professions = [
    { id: 0, name: "Сварщик", selected: true},
    { name: "Каменщик", selected: false},
    { name: "Плиточник", selected: false},
    { name: "Электромонтер", selected: true},
    { name: "Монтажник", selected: true},
    { name: "Разнорабочий", selected: true}
];

const user = {
    id: 0,
    firstName: "",
    LastName: "",
    email: ""
}

const vacancy = {
    id: 0,
    workName: "Изготовление металлической фермы",
    price: "5 000",
    workDescription: "Изготволение фермы из металлических балок путим полуавтоматической сварки",
    availableVacancies: 3,
    professions: [
        {
            id: 0,
            name: "Сварщик"
        }
    ]
}

export default function Profile() {
    const handleProffesionSwitch = function (ev: any) {
        ev.target.color = ev.target.color === 'dark' ? 'default' : 'dark';
    }

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
                            <IonLabel>Текущий Объект</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={star} slot="start" />
                            <IonLabel>Бонусы</IonLabel>
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
                    <ProfileCard user={user}></ProfileCard>
                    <IonCard className="ion-padding">
                        <IonCardTitle>Ваши профессии</IonCardTitle>
                        <IonCardContent>
                            {professions.map((profession) => (
                                <IonChip onClick={handleProffesionSwitch} color={profession.selected ? 'dark' : 'default'}>{profession.name}</IonChip>
                            ))}
                        </IonCardContent>
                    </IonCard>
                    {vacancy && 
                        <>
                            <IonTitle>Текущая задача:</IonTitle>
                            <VacancyCard data={vacancy} isAssigned={true}></VacancyCard>
                        </>
                        }
                </IonContent>
            </IonPage>
        </>
    )
}