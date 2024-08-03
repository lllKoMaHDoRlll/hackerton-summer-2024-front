import { IonLabel, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonIcon, useIonRouter, IonMenuToggle } from "@ionic/react"
import { build, home, personAdd } from "ionicons/icons"


import ProfileCard from "./../../components/ProfileCard";

const user = {
    id: 0,
    firstName: "Иван",
    LastName: "Иванов",
    email: "example@example.com"
}

export default function Profile() {
    const nav = useIonRouter();

    const goToObjects = () => {
        nav.push("/employer/builder_projects");
    };

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
                            <IonItem style={{"cursor": "pointer"}}>
                                <IonIcon aria-hidden="true" icon={build} slot="start" />
                                <IonLabel>Рабочиe</IonLabel>
                            </IonItem>
                            <IonItem style={{"cursor": "pointer"}} onClick={goToObjects}>
                                <IonIcon aria-hidden="true" icon={home} slot="start" />
                                <IonLabel>Объекты</IonLabel>
                            </IonItem>
                            <IonItem style={{"cursor": "pointer"}}>
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
                </IonContent>
            </IonPage>
        </>
    )
}