import React, { useState } from "react";
import { IonLabel, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonCard, IonCardTitle, IonAvatar, IonCardContent, IonList, IonItem, IonIcon, IonChip, useIonRouter, IonMenuToggle } from "@ionic/react"
import { map, build, home, personAdd, star } from "ionicons/icons"

import styled from "styled-components";

import ProfileCard from "./../../components/ProfileCard";
import VacancyCard from "./../../components/VacancyCard";
import LevelCard from "../../components/LevelCard";

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
    firstName: "Иван",
    LastName: "Иванов",
    email: "example@examle.com",
    level: 2
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
    const nav = useIonRouter();

    const goToMap = ()=>{
        nav.push('/worker/map_of_partners');
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
                        <IonMenuToggle>
                            <IonItem onClick={goToMap}>
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
                        </IonMenuToggle>
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
                    {vacancy && 
                        <>
                            <IonTitle>Текущая задача:</IonTitle>
                            <VacancyCard data={vacancy} isAssigned={true}></VacancyCard>
                        </>
                    }
                    <IonCard className="ion-padding">
                        <IonCardTitle>Ваши профессии</IonCardTitle>
                        <IonCardContent>
                            {professions.map((profession) => (
                                <IonChip onClick={handleProffesionSwitch} color={profession.selected ? 'dark' : 'default'}>{profession.name}</IonChip>
                            ))}
                        </IonCardContent>
                    </IonCard>
                    <LevelCard level={user.level}></LevelCard>
                </IonContent>
            </IonPage>
        </>
    )
}