import React, { useEffect, useState } from "react";
import { IonLabel, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonCard, IonCardTitle, IonAvatar, IonCardContent, IonList, IonItem, IonIcon, IonChip, useIonRouter, IonMenuToggle, IonCardHeader, IonCardSubtitle } from "@ionic/react"
import { map, build, home, personAdd, star } from "ionicons/icons"
import { ClientController, ProfessionController } from "../../API/Endpoint";

import styled from "styled-components";

import ProfileCard from "./../../components/ProfileCard";
import VacancyCard from "./../../components/VacancyCard";
import LevelCard from "../../components/LevelCard";
import { User } from "../../API/types/payload/User";
import { Preferences } from "@capacitor/preferences";

export default function Profile() {

    const [user, setUser] = useState<any>({id: -1, firstName: "", lastName: "", email: "", level: 0, activeObject: {id: -1, workName: "", price: 0, workDescription: "", availableVacancies: 0, professions: []}, professions: []});
    const [allProfessions, setAllProfessions] = useState<any[]>([]);

    const loadData = async() => {
        const clientData = await ClientController.getMe();
        const allProfessionsData = await ProfessionController.getAll();
        
        setUser({
            id: clientData!.id, 
            firstName: clientData!.first_name, 
            lastName: clientData!.surname, 
            email: clientData!.email, 
            level: clientData!.grade_up, 
            activeObject: clientData.object_construction === null ? null : {
                id: clientData!.object_construction!.id, 
                workName: clientData!.object_construction!.work_name, 
                price: clientData!.object_construction!.price, 
                workDescription: clientData!.object_construction!.work_description, 
                availableVacancies: clientData!.object_construction!.available_vacancies, 
                professions: clientData!.object_construction!.professions.map((profession: any) => {
                    return {
                        id: profession.id,
                        professionName: profession.profession_name
                    };
                })
            }, 
            professions: clientData!.professions.map((profession: any) => {
                return {
                    id: profession.id,
                    professionName: profession.profession_name
                }
            })
        });
        console.log(user);
        setAllProfessions(allProfessionsData.professions.map((professionData: any) => {
            return {id: professionData.id, professionName: professionData.profession_name};
        }));
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleProffesionSwitch = function (ev: any, professionId: number) {
        if (ev.target.color === 'dark') {
            ev.target.color = 'default';
            ClientController.deleteProfession(professionId);
        } else {
            ev.target.color = 'dark';
            ClientController.postProfession(professionId);
        }
        
    }
    const nav = useIonRouter();

    const goToMap = ()=>{
        nav.push('/worker/map_of_partners');
    }

    const goToVacancies = () => {
        nav.push('/worker/tasks');
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
                            <IonItem style={{"cursor": "pointer"}} onClick={goToMap}>
                                <IonIcon aria-hidden="true" icon={map} slot="start" />
                                <IonLabel>Карта Партнеров</IonLabel>
                            </IonItem>
                            <IonItem style={{"cursor": "pointer"}} onClick={goToVacancies}>
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
                    {user.activeObject && 
                        <>
                            <IonTitle>Текущая задача:</IonTitle>
                            <VacancyCard data={user.activeObject} isAssigned={true}></VacancyCard>
                        </>
                    }
                    <IonCard className="ion-padding">
                        <IonCardHeader>
                            <IonCardTitle>Ваши профессии</IonCardTitle>
                            <IonCardSubtitle>Для изменения нажмите на профессию</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {allProfessions.map((profession) => (
                                <IonChip onClick={(ev) => handleProffesionSwitch(ev, profession.id)} color={user.professions.map((profession: any) => profession.id).includes(profession.id) ? 'dark' : 'default'}>{profession.professionName}</IonChip>
                            ))}
                        </IonCardContent>
                    </IonCard>
                    <LevelCard level={user?.level}></LevelCard>
                </IonContent>
            </IonPage>
        </>
    )
}