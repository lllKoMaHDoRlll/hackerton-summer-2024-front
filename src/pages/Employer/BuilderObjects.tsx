import React, { useRef } from "react";
import { IonBackButton, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonCardContent, IonCard, IonList, IonItem, IonListHeader, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonModal, IonIcon, IonFab, IonFabButton, IonInput, IonSelect, IonSelectOption } from "@ionic/react";

import VacancyCard from "../../components/VacancyCard";

import { person, add } from "ionicons/icons";

const professions = [
    {
        id: 0,
        name: "Сварщик"
    },
    {
        id: 1,
        name: "Бетонщик"
    },
    {
        id: 2,
        name: "Стекольщик"
    },
    {
        id: 3,
        name: "Монтажник"
    },
]

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
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton id="create-object-modal">
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
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
                <IonModal ref={modal} trigger="create-object-modal" initialBreakpoint={0.75} breakpoints={[0, 0.25, 0.5, 0.75, 1.0]}>
                    <IonContent className="ion-padding">
                        <IonList>
                            <IonHeader>
                                <IonTitle className="ion-text-center ion-padding">
                                    Создать Объект
                                </IonTitle>
                            </IonHeader>
                            <IonItem>
                                <IonInput label="Название Объекта" labelPlacement="floating" type="text" />
                            </IonItem>
                            <IonItem>
                                <IonInput label="Описание" labelPlacement="floating" type="text" />
                            </IonItem>
                            <IonItem>
                                <IonInput label="Число Рабочих" labelPlacement="floating" type="number" />
                            </IonItem>
                            <IonItem>
                                <IonInput label="Оклад" labelPlacement="floating" type="number" />
                            </IonItem>
                            <IonItem>
                                <IonInput label="Число Рабочих" labelPlacement="floating" type="number" />
                            </IonItem>
                            <IonItem>
                                <IonSelect label="Необходимые специалисты" labelPlacement="floating" multiple={true}>
                                    {professions.map((profession) => (
                                        <IonSelectOption value={profession.id}>{profession.name}</IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                        </IonList>
                        <IonButton expand="block" onClick={() => modal.current?.dismiss()}>Создать</IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    )
}