import React from "react";
import { IonBackButton, IonPage, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonCardContent, IonCard, IonList, IonItem, IonListHeader, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from "@ionic/react";

import styled from "styled-components";
import PartnerMap from "../../components/PartnersMap";
import EducationalCourseCard from "../../components/EducationalCourseCard";

const MapFrame = styled.iframe`
    width: 100%;
`

const courses = [
    {
        name: "Курс \"Электромонтер\"",
        address: "г. Краснодар, ул. Красная, д. 23",
        organisation: "Учебный центр НЦПО",
        duration: "от 1 месяца",
        price: "6 500"
    },
    {
        name: "Курс \"Капитальные работы\"",
        address: "г. Краснодар, ул. Садовая, д. 117",
        organisation: "Институт профессионального образования",
        duration: "9 месяцев",
        price: "29 900"
    },
    {
        name: "Курс \"Сварщик\"",
        address: "г. Краснодар, ул. Петра Метальникова, д. 2",
        organisation: "Учебный центр НЦПО",
        duration: "от 1 месяца",
        price: "6 500"
    },
    {
        name: "Курс \"Сметное дело\"",
        address: "г. Краснодар, ул. Ставропольская, д. 88",
        organisation: "Академия непрерывного образования",
        duration: "1 месяц",
        price: "9 800"
    },
    {
        name: "Курс \"Повышение квалификации строителей\"",
        address: "г. Краснодар, ул. Октябрьская, д. 247",
        organisation: "Межрегиональный центр дополнительного профессионального образования",
        duration: "от 9 дней",
        price: "4 000"
    },
]

export default function MapOfPartners() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Карта партнеров</IonTitle>
                </IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
            </IonHeader>
            <IonContent>
                <PartnerMap></PartnerMap>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Партнеры</IonLabel>
                    </IonListHeader>
                    {courses.map((course) => (
                        <IonItem>
                            <EducationalCourseCard 
                                name={course.name}
                                address={course.address}
                                organisation={course.organisation}
                                duration={course.duration}
                                price={course.price}
                            ></EducationalCourseCard>
                        </IonItem>
                    ))} 
                </IonList>
            </IonContent>
        </IonPage>
    )
}